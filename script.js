// Adds repo to url if running on GitHub Pages
const isGitHubPages = window.location.hostname === 'arendunn.github.io';

const links = document.querySelectorAll('a');
links.forEach(link => {
    if (isGitHubPages && !link.href.startsWith('http')) {
        link.href = '/arendunn-portfolio/' + link.getAttribute('href');
    }
});