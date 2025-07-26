// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
    
    // Toggle aria-expanded attribute for accessibility
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.remove('active');
        document.getElementById('mobile-menu-button').setAttribute('aria-expanded', 'false');
    });
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.cyber-nav');
    if (window.scrollY > 50) {
        nav.classList.add('cyber-nav-scrolled');
    } else {
        nav.classList.remove('cyber-nav-scrolled');
    }
});

// Terminal-like typing effect for section titles
const sectionTitles = document.querySelectorAll('.section-title');
sectionTitles.forEach(title => {
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typingEffect = setInterval(() => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect);
        }
    }, 50);
});

// Project filtering functionality
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            btn.classList.remove('bg-cyber-primary/10');
            btn.classList.remove('text-cyber-primary');
            btn.classList.add('bg-cyber-dark');
            btn.classList.add('text-cyber-muted');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        this.classList.add('bg-cyber-primary/10');
        this.classList.add('text-cyber-primary');
        this.classList.remove('bg-cyber-dark');
        this.classList.remove('text-cyber-muted');
        
        const filter = this.getAttribute('data-filter');
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add flicker effect to random elements for glitch effect
    const elements = document.querySelectorAll('.cyber-card, .cyber-button');
    elements.forEach(el => {
        if (Math.random() > 0.7) {
            el.classList.add('neon-flicker');
        }
    });
    
    // Set initial aria-expanded state for mobile menu button
    document.getElementById('mobile-menu-button').setAttribute('aria-expanded', 'false');
});