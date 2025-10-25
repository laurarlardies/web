document.addEventListener('DOMContentLoaded', () => {
    // Fade in sections on scroll
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.5s ease-out';
        observer.observe(section);
    });

    // Header animation
    const header = document.querySelector('.header');
    header.style.opacity = '0';
    header.style.transform = 'translateY(-20px)';
    header.style.transition = 'all 0.8s ease-out';
    
    setTimeout(() => {
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 200);

    // Skill bars animation
    const skills = document.querySelectorAll('.skill-bar');
    skills.forEach(skill => {
        const percentage = skill.getAttribute('data-percentage');
        skill.style.width = '0%';
        skill.style.transition = 'width 1s ease-out';
        
        observer.observe(skill);
    });
});