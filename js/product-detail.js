/* ============================================
   Product Detail Page Logic
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;
    const product = ProductData.find(p => p.id === productId);

    if (!product) {
        document.querySelector('.product-detail-layout').innerHTML = `
            <div class="text-center" style="grid-column:1/-1;padding:4rem;">
                <h2>Product not found</h2>
                <p style="color:var(--text-secondary);margin:1rem 0;">The product you're looking for doesn't exist.</p>
                <a href="products.html" class="btn btn-primary">Browse Products</a>
            </div>`;
        return;
    }

    renderProductDetail(product);
    renderRelatedProducts(product);
    injectProductSchema(product);
});

function renderProductDetail(product) {
    // Update page title & meta
    document.title = `${product.name} — NovaTech | Premium Tech`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = product.description;

    // Breadcrumbs
    const breadcrumbs = document.getElementById('breadcrumbs');
    if (breadcrumbs) {
        breadcrumbs.innerHTML = `
            <a href="index.html">Home</a>
            <span class="separator">›</span>
            <a href="products.html">Products</a>
            <span class="separator">›</span>
            <a href="products.html?category=${product.category}">${product.category}</a>
            <span class="separator">›</span>
            <span class="current">${product.name}</span>
        `;
    }

    // Gallery
    const mainImage = document.getElementById('mainProductImage');
    const thumbnails = document.getElementById('productThumbnails');
    if (mainImage) {
        mainImage.innerHTML = `<img src="${product.images[0]}" alt="${product.name}" id="mainImg">`;
    }
    if (thumbnails) {
        thumbnails.innerHTML = product.images.map((img, i) => `
            <div class="product-thumbnail ${i === 0 ? 'active' : ''}" onclick="changeImage('${img}', this)">
                <img src="${img}" alt="${product.name} view ${i + 1}">
            </div>
        `).join('');
    }

    // Product Info
    const infoContainer = document.getElementById('productInfo');
    if (infoContainer) {
        const saveAmount = product.originalPrice ? (product.originalPrice - product.price).toFixed(2) : 0;
        infoContainer.innerHTML = `
            <span class="product-info-badge">● In Stock</span>
            <h1>${product.name}</h1>
            <div class="product-info-rating">
                <div class="stars" aria-label="${product.rating} out of 5 stars">${renderStars(product.rating)}</div>
                <span class="review-count">${product.rating} (${product.reviews} reviews)</span>
            </div>
            <div class="product-price-block">
                <span class="product-price-current">$${product.price.toFixed(2)}</span>
                ${product.originalPrice ? `<span class="product-price-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                ${saveAmount > 0 ? `<span class="product-price-save">Save $${saveAmount}</span>` : ''}
            </div>
            <p class="product-description">${product.description}</p>

            <div class="product-options">
                ${product.colors && product.colors.length > 1 ? `
                <div class="option-group">
                    <label>Color</label>
                    <div class="color-options">
                        ${product.colors.map((c, i) => `
                            <div class="color-swatch ${i === 0 ? 'active' : ''}"
                                 style="background:${c}"
                                 onclick="selectColor(this)"
                                 title="Color option ${i + 1}"
                                 aria-label="Select color ${i + 1}"></div>
                        `).join('')}
                    </div>
                </div>` : ''}
            </div>

            <div class="quantity-selector">
                <label style="font-size:0.875rem;font-weight:600;">Quantity</label>
                <div class="quantity-controls">
                    <button onclick="changeQty(-1)" aria-label="Decrease quantity">−</button>
                    <span class="qty-value" id="qtyValue">1</span>
                    <button onclick="changeQty(1)" aria-label="Increase quantity">+</button>
                </div>
            </div>

            <div class="product-actions">
                <button class="btn btn-primary btn-lg" onclick="addProductToCart()" id="addToCartBtn">
                    🛒 Add to Cart
                </button>
                <button class="btn btn-secondary btn-lg" onclick="addToWishlist(${product.id})">
                    ♡ Wishlist
                </button>
            </div>

            <div class="product-features">
                ${product.features.map(f => `<span class="product-feature-item">${f}</span>`).join('')}
            </div>
        `;
    }
}

// Image gallery
function changeImage(src, thumb) {
    document.getElementById('mainImg').src = src;
    document.querySelectorAll('.product-thumbnail').forEach(t => t.classList.remove('active'));
    if (thumb) thumb.classList.add('active');
}

// Color selection
function selectColor(swatch) {
    document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
    swatch.classList.add('active');
}

// Quantity
let currentQty = 1;
function changeQty(delta) {
    currentQty = Math.max(1, currentQty + delta);
    const el = document.getElementById('qtyValue');
    if (el) el.textContent = currentQty;
}

// Add to cart from detail page
function addProductToCart() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;
    const product = ProductData.find(p => p.id === productId);
    if (product) {
        CartManager.addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        }, currentQty);
    }
}

// Related products
function renderRelatedProducts(product) {
    const related = ProductData
        .filter(p => p.id !== product.id && (p.category === product.category))
        .slice(0, 4);

    // Fill with other products if not enough
    if (related.length < 4) {
        const more = ProductData
            .filter(p => p.id !== product.id && !related.find(r => r.id === p.id))
            .slice(0, 4 - related.length);
        related.push(...more);
    }

    renderProductsGrid('relatedProducts', related, 4);
}

// Inject JSON-LD
function injectProductSchema(product) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "image": product.images,
        "description": product.description,
        "category": product.category,
        "brand": {
            "@type": "Brand",
            "name": "NovaTech"
        },
        "offers": {
            "@type": "Offer",
            "price": product.price,
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": window.location.href
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": product.rating,
            "reviewCount": product.reviews,
            "bestRating": 5,
            "worstRating": 1
        }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
}
