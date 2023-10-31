document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate');
    const domainDisplay = document.getElementById('domain-display');

    generateButton.addEventListener('click', () => {
        domainDisplay.textContent = generateDomainName();
    });
});

function generateDomainName() {
    const prefixes = ['My', 'The', 'Top', 'Best', 'Super', 'Ultra', 'All'];
    const nouns = ['Garden', 'Market', 'Hub', 'Site', 'Place', 'Portal', 'World'];
    const suffixes = ['.com', '.net', '.org', '.io', '.tech', '.info', '.biz'];

    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    return randomPrefix + randomNoun + randomSuffix;
}
