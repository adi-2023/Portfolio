document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');

    // Set initial aria-expanded
    menuButton.setAttribute('aria-expanded', 'false');

    // Mobile menu toggle
    menuButton.addEventListener('click', () => {
        menu.classList.toggle('active');
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
    });

    // Close mobile menu when clicking a link
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            menuButton.setAttribute('aria-expanded', 'false');
        });
    });

    // Smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Navbar scroll effect
    const nav = document.querySelector('.cyber-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('cyber-nav-scrolled');
        } else {
            nav.classList.remove('cyber-nav-scrolled');
        }
    });

    // Terminal-like typing effect
    document.querySelectorAll('.section-title').forEach(title => {
        const text = title.textContent;
        title.textContent = '';
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                title.textContent += text.charAt(i++);
            } else {
                clearInterval(interval);
            }
        }, 50);
    });

    // Project filtering
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active', 'bg-cyber-primary/10', 'text-cyber-primary');
                btn.classList.add('bg-cyber-dark', 'text-cyber-muted');
            });
            this.classList.add('active', 'bg-cyber-primary/10', 'text-cyber-primary');
            this.classList.remove('bg-cyber-dark', 'text-cyber-muted');

            document.querySelectorAll('.project-card').forEach(card => {
                card.style.display = (filter === 'all' || card.getAttribute('data-category') === filter) ? 'block' : 'none';
            });
        });
    });

    // Random neon flicker effect
    document.querySelectorAll('.cyber-card, .cyber-button').forEach(el => {
        if (Math.random() > 0.7) el.classList.add('neon-flicker');
    });
});
