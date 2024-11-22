document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');

    const animateSkills = () => {
        skillItems.forEach(item => {
            const level = item.getAttribute('data-level');
            const skillLevel = item.querySelector('.skill-level');
            skillLevel.style.width = `${level}%`;
        });
    };

    // Animate skills when the page loads
    animateSkills();

    // Optionally, you can animate skills when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillItems.forEach(item => observer.observe(item));
});
