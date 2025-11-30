// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Animate progress bars when they come into view
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress');
            progressBars.forEach(bar => {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = progress + '%';
            });
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// CTA Button interaction
const ctaBtn = document.getElementById('ctaBtn');
ctaBtn.addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! (This is a demo - form not actually submitted)');
    contactForm.reset();
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = '#1a252f';
    } else {
        navbar.style.background = '#2c3e50';
    }
});

// Project button clicks
const projectBtns = document.querySelectorAll('.project-btn');
projectBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        alert(`Project ${index + 1} clicked! You can link this to actual project pages.`);
    });
});

console.log('Website loaded successfully! 🚀');