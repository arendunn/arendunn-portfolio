// Check if we are on GitHub Pages
const isGitHubPages = window.location.hostname === 'arendunn.github.io';

// Select all anchor tags in the page
const links = document.querySelectorAll('a');

// Loop through each link and adjust the href if on GitHub Pages
links.forEach(link => {
    const href = link.getAttribute('href');

    // If on GitHub Pages and the link is not a full URL (doesn't start with http:// or https://)
    if (isGitHubPages && !href.startsWith('http') && !href.startsWith('//')) {
        // If the link is a relative path (e.g., projects.html), add '/arendunn-portfolio/' to it
        if (!href.startsWith('/')) {
            link.href = '/arendunn-portfolio/' + href;
        }
    }
});
