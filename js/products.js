/* ============================================
   Product Data & Catalog Logic
   ============================================ */

// Product Database
const ProductData = [
    {
        id: 1,
        name: "AuraWave Pro Headphones",
        category: "Audio",
        price: 299.99,
        originalPrice: 399.99,
        discount: 25,
        rating: 4.8,
        reviews: 1247,
        badge: "hot",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&h=500&fit=crop"
        ],
        description: "Experience studio-quality sound with our AuraWave Pro wireless headphones. Featuring adaptive noise cancellation, 40-hour battery life, and premium memory foam cushions for all-day comfort.",
        features: ["Active Noise Cancellation", "40-Hour Battery", "Bluetooth 5.3", "Hi-Res Audio Certified", "Foldable Design", "Multi-Device Pairing"],
        colors: ["#1a1a2e", "#667eea", "#f5576c", "#e8e0d5"]
    },
    {
        id: 2,
        name: "NexGen Smart Watch Ultra",
        category: "Wearables",
        price: 449.99,
        originalPrice: 549.99,
        discount: 18,
        rating: 4.7,
        reviews: 892,
        badge: "new",
        image: "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=500&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&h=500&fit=crop"
        ],
        description: "The NexGen Smart Watch Ultra combines cutting-edge health monitoring with stunning design. Track your fitness, receive notifications, and navigate your day with style.",
        features: ["AMOLED Display", "SpO2 & Heart Rate", "GPS Navigation", "5ATM Water Resistant", "7-Day Battery", "Sleep Tracking"],
        colors: ["#1a1a2e", "#c0c0c0", "#38ef7d", "#f5af19"]
    },
    {
        id: 3,
        name: "PixelBook Pro 16\" Laptop",
        category: "Computers",
        price: 1899.99,
        originalPrice: 2199.99,
        discount: 14,
        rating: 4.9,
        reviews: 634,
        badge: "hot",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&h=500&fit=crop"
        ],
        description: "Unleash your creativity with the PixelBook Pro. Featuring a stunning 16-inch Retina display, blazing M3 chip, 32GB RAM, and an all-day battery that keeps up with your workflow.",
        features: ["16\" Retina Display", "M3 Pro Chip", "32GB Unified RAM", "1TB SSD", "22-Hour Battery", "Thunderbolt 4"],
        colors: ["#1a1a2e", "#c0c0c0", "#f5af19"]
    },
    {
        id: 4,
        name: "SonicBoom Portable Speaker",
        category: "Audio",
        price: 149.99,
        originalPrice: 199.99,
        discount: 25,
        rating: 4.6,
        reviews: 2103,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=500&fit=crop"
        ],
        description: "Take the party anywhere with the SonicBoom Portable Speaker. 360° immersive sound, waterproof design, and 24-hour battery life make it the ultimate outdoor companion.",
        features: ["360° Sound", "IP67 Waterproof", "24-Hour Battery", "Party Pairing", "Built-in Mic", "USB-C Charging"],
        colors: ["#1a1a2e", "#667eea", "#f5576c", "#38ef7d"]
    },
    {
        id: 5,
        name: "VisionPad Pro 12.9\" Tablet",
        category: "Computers",
        price: 999.99,
        originalPrice: 1099.99,
        discount: 9,
        rating: 4.8,
        reviews: 756,
        badge: "new",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=500&h=500&fit=crop"
        ],
        description: "The VisionPad Pro redefines what a tablet can do. With its stunning 12.9\" Liquid Retina XDR display and desktop-class performance, it's your portable creative studio.",
        features: ["12.9\" Liquid Retina XDR", "M2 Chip", "Pencil Support", "Face ID", "5G Capable", "Center Stage Camera"],
        colors: ["#1a1a2e", "#c0c0c0", "#667eea"]
    },
    {
        id: 6,
        name: "PhantomX Gaming Mouse",
        category: "Gaming",
        price: 89.99,
        originalPrice: 119.99,
        discount: 25,
        rating: 4.7,
        reviews: 3421,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&h=500&fit=crop"
        ],
        description: "Dominate the competition with the PhantomX Gaming Mouse. Featuring a 25K DPI sensor, ultra-lightweight 58g design, and customizable RGB lighting for the ultimate gaming experience.",
        features: ["25K DPI Sensor", "58g Ultralight", "RGB Lighting", "8 Programmable Buttons", "USB-C / Wireless", "70-Hour Battery"],
        colors: ["#1a1a2e", "#f5576c", "#667eea"]
    },
    {
        id: 7,
        name: "KeyForge MX Mechanical Keyboard",
        category: "Gaming",
        price: 179.99,
        originalPrice: 219.99,
        discount: 18,
        rating: 4.8,
        reviews: 1876,
        badge: "hot",
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop"
        ],
        description: "Type with precision and flair on the KeyForge MX. Hot-swappable switches, per-key RGB, aluminum frame, and gasket-mounted design deliver a premium typing experience.",
        features: ["Hot-Swap Switches", "Per-Key RGB", "Aluminum Frame", "Gasket Mount", "PBT Keycaps", "Wireless + Wired"],
        colors: ["#1a1a2e", "#c0c0c0", "#764ba2"]
    },
    {
        id: 8,
        name: "PulseBuds ANC Earbuds",
        category: "Audio",
        price: 199.99,
        originalPrice: 249.99,
        discount: 20,
        rating: 4.5,
        reviews: 2890,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=500&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&h=500&fit=crop"
        ],
        description: "Immerse yourself in pure sound with PulseBuds ANC. Featuring adaptive noise cancellation, spatial audio, and a compact case with wireless charging for music on the go.",
        features: ["Adaptive ANC", "Spatial Audio", "30-Hour Total Battery", "Wireless Charging", "IPX5 Sweatproof", "Transparency Mode"],
        colors: ["#1a1a2e", "#e8e0d5", "#667eea"]
    },
    {
        id: 9,
        name: "SkyLens 4K Drone",
        category: "Cameras",
        price: 799.99,
        originalPrice: 999.99,
        discount: 20,
        rating: 4.6,
        reviews: 543,
        badge: "new",
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=500&h=500&fit=crop"
        ],
        description: "Capture breathtaking aerial footage with the SkyLens 4K Drone. 4K/60fps camera, 3-axis gimbal, 45-min flight time, and intelligent flight modes for stunning cinematic shots.",
        features: ["4K/60fps Camera", "3-Axis Gimbal", "45-Min Flight Time", "Obstacle Avoidance", "ActiveTrack 5.0", "Foldable Design"],
        colors: ["#5a5a6e", "#c0c0c0"]
    },
    {
        id: 10,
        name: "LumiHome Smart Hub",
        category: "Smart Home",
        price: 129.99,
        originalPrice: 179.99,
        discount: 28,
        rating: 4.4,
        reviews: 1567,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=500&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=500&h=500&fit=crop"
        ],
        description: "Transform your home with the LumiHome Smart Hub. Control all your smart devices from one central hub with voice control, automation routines, and seamless integration.",
        features: ["Voice Control", "Matter Compatible", "Thread & WiFi 6", "7\" Touch Display", "Home Automation", "Energy Monitoring"],
        colors: ["#1a1a2e", "#e8e0d5"]
    },
    {
        id: 11,
        name: "FlexCharge PowerBank 20K",
        category: "Accessories",
        price: 59.99,
        originalPrice: 79.99,
        discount: 25,
        rating: 4.5,
        reviews: 4230,
        badge: null,
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop"
        ],
        description: "Never run out of power with the FlexCharge 20K. 20,000mAh capacity, 65W fast charging, and ultra-slim design that fits in your pocket for all-day portable power.",
        features: ["20,000mAh Capacity", "65W Fast Charging", "USB-C + USB-A", "LED Display", "Pass-Through Charging", "Flight Safe"],
        colors: ["#1a1a2e", "#c0c0c0", "#667eea"]
    },
    {
        id: 12,
        name: "ProShot Mirrorless Camera",
        category: "Cameras",
        price: 2499.99,
        originalPrice: 2799.99,
        discount: 11,
        rating: 4.9,
        reviews: 328,
        badge: "hot",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop"
        ],
        description: "Professional-grade imaging meets portability in the ProShot Mirrorless Camera. 45MP full-frame sensor, 8K video, in-body stabilization, and AI-powered autofocus.",
        features: ["45MP Full-Frame Sensor", "8K Video", "5-Axis IBIS", "AI Autofocus", "Dual Card Slots", "Weather Sealed"],
        colors: ["#1a1a2e"]
    }
];

// Categories
const Categories = [
    { name: "Audio", icon: "🎧", count: 3 },
    { name: "Computers", icon: "💻", count: 2 },
    { name: "Gaming", icon: "🎮", count: 2 },
    { name: "Cameras", icon: "📷", count: 2 },
    { name: "Wearables", icon: "⌚", count: 1 },
    { name: "Smart Home", icon: "🏠", count: 1 },
    { name: "Accessories", icon: "🔋", count: 1 }
];

// ===== Render Product Card =====
function renderProductCard(product) {
    const badgeHTML = product.badge ? `<span class="product-card-badge badge-${product.badge}">${product.badge}</span>` : '';
    const discountHTML = product.discount ? `<span class="price-discount">-${product.discount}%</span>` : '';
    const originalHTML = product.originalPrice ? `<span class="price-original">$${product.originalPrice.toFixed(2)}</span>` : '';

    return `
    <article class="product-card fade-in" itemscope itemtype="https://schema.org/Product">
        <div class="product-card-image">
            ${badgeHTML}
            <div class="product-card-actions">
                <button onclick="addToWishlist(${product.id})" title="Add to Wishlist" aria-label="Add ${product.name} to wishlist">♡</button>
                <button onclick="quickView(${product.id})" title="Quick View" aria-label="Quick view ${product.name}">👁</button>
            </div>
            <a href="product-detail.html?id=${product.id}">
                <img src="${product.image}" alt="${product.name} - ${product.category}" loading="lazy" itemprop="image">
            </a>
        </div>
        <div class="product-card-body">
            <span class="product-card-category" itemprop="category">${product.category}</span>
            <h3 class="product-card-title">
                <a href="product-detail.html?id=${product.id}" itemprop="name">${product.name}</a>
            </h3>
            <div class="product-card-rating" itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
                <div class="stars" aria-label="${product.rating} out of 5 stars">
                    ${renderStars(product.rating)}
                </div>
                <span class="rating-count">
                    <span itemprop="ratingValue">${product.rating}</span>
                    (<span itemprop="reviewCount">${product.reviews}</span>)
                </span>
            </div>
            <div class="product-card-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                <span class="price-current" itemprop="price" content="${product.price}">$${product.price.toFixed(2)}</span>
                <meta itemprop="priceCurrency" content="USD">
                <meta itemprop="availability" content="https://schema.org/InStock">
                ${originalHTML}
                ${discountHTML}
            </div>
        </div>
        <div class="product-card-footer">
            <button class="btn btn-primary btn-sm" onclick="CartManager.addItem({id:${product.id},name:'${product.name.replace(/'/g, "\\'")}',price:${product.price},image:'${product.image}'})" aria-label="Add ${product.name} to cart">
                🛒 Add to Cart
            </button>
        </div>
    </article>`;
}

// ===== Wishlist =====
function addToWishlist(id) {
    const product = ProductData.find(p => p.id === id);
    if (product) showToast(`${product.name} added to wishlist!`, 'info');
}

function quickView(id) {
    window.location.href = `product-detail.html?id=${id}`;
}

// ===== Render Products Grid =====
function renderProductsGrid(containerId, products, limit) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const items = limit ? products.slice(0, limit) : products;
    container.innerHTML = items.map(renderProductCard).join('');

    // Trigger animations
    requestAnimationFrame(() => {
        container.querySelectorAll('.fade-in').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 80);
        });
    });
}

// ===== Product Filtering (catalog page) =====
const ProductFilter = {
    activeFilters: {
        categories: [],
        priceRange: [0, 3000],
        sortBy: 'featured'
    },

    init() {
        this.bindEvents();
        this.render();
    },

    bindEvents() {
        // Category filters
        document.querySelectorAll('.filter-option[data-category]').forEach(option => {
            option.addEventListener('click', () => {
                const category = option.dataset.category;
                option.classList.toggle('active');

                if (this.activeFilters.categories.includes(category)) {
                    this.activeFilters.categories = this.activeFilters.categories.filter(c => c !== category);
                } else {
                    this.activeFilters.categories.push(category);
                }
                this.render();
            });
        });

        // Price range
        const priceSlider = document.getElementById('priceRange');
        if (priceSlider) {
            priceSlider.addEventListener('input', (e) => {
                this.activeFilters.priceRange[1] = parseInt(e.target.value);
                document.getElementById('priceMax').textContent = `$${e.target.value}`;
                this.render();
            });
        }

        // Sort
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.activeFilters.sortBy = e.target.value;
                this.render();
            });
        }

        // View toggle
        document.querySelectorAll('.view-toggle button').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.view-toggle button').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const grid = document.querySelector('.catalog-grid');
                if (grid) {
                    grid.classList.toggle('list-view', btn.dataset.view === 'list');
                }
            });
        });

        // Search on catalog
        const catalogSearch = document.getElementById('catalogSearch');
        if (catalogSearch) {
            catalogSearch.addEventListener('input', () => this.render());
        }
    },

    getFilteredProducts() {
        let products = [...ProductData];
        const searchInput = document.getElementById('catalogSearch');
        const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';

        // Search
        if (searchQuery) {
            products = products.filter(p =>
                p.name.toLowerCase().includes(searchQuery) ||
                p.category.toLowerCase().includes(searchQuery)
            );
        }

        // Category filter
        if (this.activeFilters.categories.length > 0) {
            products = products.filter(p => this.activeFilters.categories.includes(p.category));
        }

        // Price filter
        products = products.filter(p =>
            p.price >= this.activeFilters.priceRange[0] &&
            p.price <= this.activeFilters.priceRange[1]
        );

        // Sort
        switch (this.activeFilters.sortBy) {
            case 'price-low':
                products.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                products.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                products.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                products.sort((a, b) => b.id - a.id);
                break;
            case 'name':
                products.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }

        return products;
    },

    render() {
        const products = this.getFilteredProducts();
        const container = document.getElementById('catalogProducts');
        const countEl = document.getElementById('productCount');

        if (countEl) countEl.textContent = products.length;
        if (container) {
            container.innerHTML = products.length > 0
                ? products.map(renderProductCard).join('')
                : '<div class="text-center" style="grid-column:1/-1;padding:4rem;"><h3 style="color:var(--text-muted);">No products match your filters</h3><p style="color:var(--text-muted);margin-top:0.5rem;">Try adjusting your search or filter criteria.</p></div>';

            requestAnimationFrame(() => {
                container.querySelectorAll('.fade-in').forEach((el, i) => {
                    setTimeout(() => el.classList.add('visible'), i * 60);
                });
            });
        }
    }
};
