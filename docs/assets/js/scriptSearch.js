document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://protoscripts.xyz/api/products';

    const searchInput = document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');
    const typeFilter = document.getElementById('type-filter');
    const ScriptList = document.getElementById('script-list');

    let Scripts = [];

    async function fetchScripts() {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            Scripts = await response.json();
            displayScripts();
        } catch (error) {
            console.error('Error fetching Scripts:', error);
        }
    }

    function sortScripts(Scripts, criteria) {
        return Scripts.sort((a, b) => {
            if (a.premium && !b.premium) return -1;
            if (!a.premium && b.premium) return 1;

            if (criteria === 'alphabetical') {
                return a.name.localeCompare(b.name);
            } else if (criteria === 'updated') {
                return new Date(b.updated) - new Date(a.updated);
            } else if (criteria === 'cost') {
                return b.perMinuteRate - a.perMinuteRate;
            }
            return 0;
        });
    }

    function displayScripts() {
        ScriptList.innerHTML = '';

        let filteredScripts = Scripts.filter(Script =>
            Script.name.toLowerCase().includes(searchInput.value.toLowerCase())
        );

        if (typeFilter.value !== 'all') {
            filteredScripts = filteredScripts.filter(Script =>
                typeFilter.value === 'premium' ? Script.premium : !Script.premium
            );
        }

        let sortedScripts = sortScripts(filteredScripts, sortSelect.value || 'cost');

        sortedScripts.forEach(Script => {
            const ScriptElement = document.createElement('div');
            ScriptElement.classList.add('script');
            ScriptElement.innerHTML = `
                <div class="script-header">
                    <h3>${Script.name}</h3>
                    <span class="script-version">v${Script.version}</span>
                    <p class="script-author">by ${Script.author}</p>
                </div>
                <p class="script-description">${truncateText(Script.description, 2)}</p>
                <div class="script-details">
                    <span class="script-category">${Script.category}</span>
                    <span class="script-cost">${Script.premium ? `${Script.perMinuteRate}pt/min` : 'Free'}</span>
                </div>
            `;
            ScriptList.appendChild(ScriptElement);
        });
    }

    function truncateText(text, maxLines) {
        const div = document.createElement('div');
        div.className = 'Script-description';
        div.style.webkitLineClamp = maxLines;
        div.textContent = text;
        return div.textContent.length > text.length ? div.textContent + '...' : text;
    }

    searchInput.addEventListener('input', displayScripts);
    sortSelect.addEventListener('change', displayScripts);
    typeFilter.addEventListener('change', displayScripts);

    fetchScripts();
});
