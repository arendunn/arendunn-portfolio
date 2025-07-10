document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2,  // 10% visible
        rootMargin: "0px 0px -50px 0px"  // trigger slightly before fully visible
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target); // animate once only
        }
    });
    }, appearOptions);

    faders.forEach(fader => {
    appearOnScroll.observe(fader);
    });
});