/* ============================================
   Scroll Animations & Micro-interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initParallax();
    initCounterAnimations();
});

// ===== Intersection Observer for Scroll Animations =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Don't unobserve to allow re-animation if needed
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all animated elements
    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in, .stagger-children').forEach(el => {
        observer.observe(el);
    });
}

// ===== Parallax Effect =====
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        parallaxElements.forEach(el => {
            const speed = parseFloat(el.dataset.parallax) || 0.3;
            el.style.transform = `translateY(${scrollY * speed}px)`;
        });
    }, { passive: true });
}

// ===== Counter Animation =====
function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-count]');
    if (counters.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.count);
                const suffix = entry.target.dataset.suffix || '';
                const prefix = entry.target.dataset.prefix || '';
                animateCounter(entry.target, target, prefix, suffix);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
}

function animateCounter(element, target, prefix, suffix) {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
    }, 20);
}

// ===== Smooth reveal for dynamically added elements =====
function observeNewElements(container) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    container.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in').forEach(el => {
        observer.observe(el);
    });
}

// ===== Tilt effect for cards =====
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        } else {
            card.style.transform = '';
        }
    });
});
