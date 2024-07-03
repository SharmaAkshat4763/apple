document.addEventListener("DOMContentLoaded", function() {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.transform = 'translateY(0)';
    heroContent.style.opacity = '1';

    const features = document.querySelectorAll('.feature-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            }
        });
    }, {
        threshold: 0.1
    });

    features.forEach(feature => {
        observer.observe(feature);
    });
});
