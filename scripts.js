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
        })
        .catch(error => {
            const container = document.getElementById('scripts-container');
            if (container) {
                container.innerHTML = 'Failed to load scripts. Please try again later.';
            }
        });
}

function renderScripts(scripts) {
    const container = document.getElementById('scripts-container');
    if (!container) {
        return;
    }

    container.innerHTML = '';

    const searchBar = document.createElement('input');
    searchBar.type = 'text';
    searchBar.placeholder = 'Search scripts...';
    searchBar.classList.add('search-bar');
    searchBar.addEventListener('input', () => filterScripts(scripts, searchBar.value));
    container.appendChild(searchBar);

    const listContainer = document.createElement('div');
    listContainer.classList.add('script-list');
    container.appendChild(listContainer);

    updateScriptList(listContainer, scripts);
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
    if (listContainer) {
        updateScriptList(listContainer, filteredScripts);
    }
}

function updateScriptList(container, scripts) {
    container.innerHTML = '';
    scripts.forEach(script => {
        const scriptElement = createScriptElement(script);
        container.appendChild(scriptElement);
    });
}

if (typeof document$ !== 'undefined' && typeof document$.subscribe === 'function') {
    document$.subscribe(() => {
        initializeScriptPage();
    });
} else {
    window.onload = () => {
        initializeScriptPage();
    };
}
