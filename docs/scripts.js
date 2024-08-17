function initializeScriptPage() {
    fetch('/scripts/scripts.json')
        .then(response => response.json())
        .then(data => {
            const sortedScripts = data.sort((a, b) => {
                const isPremiumA = a.perMinuteRate && a.perMinuteRate !== '0';
                const isPremiumB = b.perMinuteRate && b.perMinuteRate !== '0';
                return isPremiumB - isPremiumA;
            });
            renderScripts(sortedScripts);
        });

    function renderScripts(scripts) {
        const container = document.getElementById('scripts-container');

        container.innerHTML = '';

        const searchBar = document.createElement('input');
        searchBar.setAttribute('type', 'text');
        searchBar.setAttribute('placeholder', 'Search scripts...');
        searchBar.classList.add('search-bar');
        searchBar.addEventListener('input', () => filterScripts(scripts, searchBar.value));
        container.appendChild(searchBar);

        const listContainer = document.createElement('div');
        listContainer.classList.add('script-list');
        container.appendChild(listContainer);

        scripts.forEach(script => {
            const scriptElement = createScriptElement(script);
            listContainer.appendChild(scriptElement);
        });
    }

    function createScriptElement(script) {
        const scriptDiv = document.createElement('div');
        scriptDiv.classList.add('script-item');

        const title = document.createElement('h3');
        title.textContent = script.name;
        scriptDiv.appendChild(title);

        const description = document.createElement('p');
        description.textContent = script.description;
        description.classList.add('description');
        scriptDiv.appendChild(description);

        const footerDiv = document.createElement('div');
        footerDiv.classList.add('script-footer');

        const pricing = document.createElement('div');
        pricing.classList.add('pricing');
        if (script.perMinuteRate && script.perMinuteRate !== '0') {
            pricing.textContent = `${script.perMinuteRate} PT/min`;
            pricing.classList.add('paid');
        } else {
            pricing.textContent = 'Free';
        }
        footerDiv.appendChild(pricing);

        if (script.markdown) {
            const viewButton = document.createElement('a');
            viewButton.textContent = 'View Details';
            viewButton.classList.add('view-button');
            viewButton.href = `/scripts/scripts_md/${script.markdown}`;
            footerDiv.appendChild(viewButton);
        }

        scriptDiv.appendChild(footerDiv);

        return scriptDiv;
    }

    function filterScripts(scripts, query) {
        const filteredScripts = scripts.filter(script => script.name.toLowerCase().includes(query.toLowerCase()));
        const listContainer = document.querySelector('.script-list');
        listContainer.innerHTML = '';

        filteredScripts.forEach(script => {
            const scriptElement = createScriptElement(script);
            listContainer.appendChild(scriptElement);
        });
    }
}

document.addEventListener('DOMContentLoaded', initializeScriptPage);
if (typeof document$.subscribe === 'function') {
    document$.subscribe(initializeScriptPage);
}
