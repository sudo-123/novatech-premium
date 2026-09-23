/* ============================================
   NOVATECH — Core Application Logic
   ============================================ */

// ===== Cart State Management =====
const CartManager = {
    STORAGE_KEY: 'luxe_cart',

    getCart() {
        try {
            return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
        } catch {
            return [];
        }
    },

    saveCart(cart) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cart));
        this.updateCartUI();
        window.dispatchEvent(new CustomEvent('cartUpdated', { detail: cart }));
    },

    addItem(product, qty = 1) {
        const cart = this.getCart();
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            existing.qty += qty;
        } else {
            cart.push({ ...product, qty });
        }
        this.saveCart(cart);
        showToast(`${product.name} added to cart!`, 'success');
    },

    removeItem(productId) {
        const cart = this.getCart().filter(item => item.id !== productId);
        this.saveCart(cart);
    },

    updateQuantity(productId, qty) {
        const cart = this.getCart();
        const item = cart.find(i => i.id === productId);
        if (item) {
            item.qty = Math.max(1, qty);
            this.saveCart(cart);
        }
    },

    getTotal() {
        return this.getCart().reduce((sum, item) => sum + item.price * item.qty, 0);
    },

    getCount() {
        return this.getCart().reduce((sum, item) => sum + item.qty, 0);
    },

    clear() {
        localStorage.removeItem(this.STORAGE_KEY);
        this.updateCartUI();
    },

    updateCartUI() {
        const countElements = document.querySelectorAll('.cart-count');
        const count = this.getCount();
        countElements.forEach(el => {
            el.textContent = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    }
};

// ===== Toast Notifications =====
function showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const icons = {
        success: '✓',
        error: '✕',
        info: 'ℹ'
    };

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || icons.info}</span>
        <span class="toast-message">${message}</span>
        <span class="toast-close">&times;</span>
    `;

    container.appendChild(toast);

    toast.querySelector('.toast-close').addEventListener('click', () => {
        toast.classList.add('toast-exit');
        setTimeout(() => toast.remove(), 300);
    });

    setTimeout(() => {
        if (toast.parentNode) {
            toast.classList.add('toast-exit');
            setTimeout(() => toast.remove(), 300);
        }
    }, 3000);
}

// ===== Navigation =====
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.nav-hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Scroll effect
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Mobile menu toggle
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Active link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Search modal
    const searchBtn = document.querySelector('.nav-search-btn');
    const searchModal = document.querySelector('.search-modal');
    if (searchBtn && searchModal) {
        searchBtn.addEventListener('click', () => {
            searchModal.classList.toggle('active');
            if (searchModal.classList.contains('active')) {
                searchModal.querySelector('input')?.focus();
            }
        });
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                searchModal.classList.remove('active');
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchModal.classList.contains('active')) {
                searchModal.classList.remove('active');
            }
        });
    }
}

// ===== Search functionality =====
function initSearch() {
    const searchInput = document.querySelector('.search-modal-input');
    const resultsContainer = document.querySelector('.search-results');
    if (!searchInput || !resultsContainer) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length < 2) {
            resultsContainer.innerHTML = '';
            return;
        }

        const results = ProductData.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        ).slice(0, 6);

        resultsContainer.innerHTML = results.map(p => `
            <a href="product-detail.html?id=${p.id}" class="search-result-item">
                <img src="${p.image}" alt="${p.name}">
                <div>
                    <div style="font-weight:600;font-size:0.95rem;">${p.name}</div>
                    <div style="color:var(--text-muted);font-size:0.8rem;">${p.category} — $${p.price}</div>
                </div>
            </a>
        `).join('');
    });
}

// ===== Page Loader =====
function initPageLoader() {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('hidden');
                setTimeout(() => loader.remove(), 500);
            }, 400);
        });
    }
}

// ===== Generate Star Rating HTML =====
function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '★';
        } else if (i - 0.5 <= rating) {
            stars += '★';
        } else {
            stars += '☆';
        }
    }
    return stars;
}

// ===== Format Currency =====
function formatCurrency(amount) {
    return '$' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
    initPageLoader();
    initNavigation();
    CartManager.updateCartUI();

    // Init search if available
    if (typeof ProductData !== 'undefined') {
        initSearch();
    }
});
