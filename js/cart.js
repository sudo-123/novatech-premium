/* ============================================
   Cart Page Logic
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    window.addEventListener('cartUpdated', renderCart);
});

function renderCart() {
    const cart = CartManager.getCart();
    const itemsContainer = document.getElementById('cartItems');
    const summaryContainer = document.getElementById('cartSummary');

    if (!itemsContainer) return;

    if (cart.length === 0) {
        itemsContainer.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">🛒</div>
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added any items to your cart yet. Start exploring our premium tech collection!</p>
                <a href="products.html" class="btn btn-primary btn-lg">Browse Products</a>
            </div>
        `;
        if (summaryContainer) summaryContainer.style.display = 'none';
        return;
    }

    if (summaryContainer) summaryContainer.style.display = '';

    // Render cart items
    itemsContainer.innerHTML = cart.map(item => {
        const product = typeof ProductData !== 'undefined'
            ? ProductData.find(p => p.id === item.id)
            : null;

        return `
        <div class="cart-item fade-in" data-id="${item.id}">
            <div class="cart-item-image">
                <a href="product-detail.html?id=${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                </a>
            </div>
            <div class="cart-item-info">
                <h3><a href="product-detail.html?id=${item.id}">${item.name}</a></h3>
                <div class="cart-item-meta">
                    <span>Unit: $${item.price.toFixed(2)}</span>
                    ${product ? `<span>Category: ${product.category}</span>` : ''}
                </div>
                <div class="quantity-controls" style="margin-top:0.75rem;">
                    <button onclick="updateCartQty(${item.id}, ${item.qty - 1})" aria-label="Decrease quantity">−</button>
                    <span class="qty-value">${item.qty}</span>
                    <button onclick="updateCartQty(${item.id}, ${item.qty + 1})" aria-label="Increase quantity">+</button>
                </div>
            </div>
            <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
            <button class="cart-item-remove" onclick="removeCartItem(${item.id})" aria-label="Remove ${item.name} from cart">✕</button>
        </div>`;
    }).join('');

    // Trigger animations
    requestAnimationFrame(() => {
        itemsContainer.querySelectorAll('.fade-in').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 60);
        });
    });

    // Update summary
    updateCartSummary(cart);
}

function updateCartSummary(cart) {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const shipping = subtotal > 100 ? 0 : 9.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    const subtotalEl = document.getElementById('cartSubtotal');
    const shippingEl = document.getElementById('cartShipping');
    const taxEl = document.getElementById('cartTax');
    const totalEl = document.getElementById('cartTotal');
    const itemCountEl = document.getElementById('cartItemCount');

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
    if (itemCountEl) itemCountEl.textContent = CartManager.getCount();
}

function updateCartQty(productId, newQty) {
    if (newQty < 1) {
        removeCartItem(productId);
        return;
    }
    CartManager.updateQuantity(productId, newQty);
    renderCart();
}

function removeCartItem(productId) {
    const product = CartManager.getCart().find(item => item.id === productId);
    CartManager.removeItem(productId);
    if (product) showToast(`${product.name} removed from cart`, 'info');
    renderCart();
}

function applyPromo() {
    const input = document.getElementById('promoInput');
    if (!input) return;

    const code = input.value.trim().toUpperCase();
    if (code === 'NOVA20' || code === 'SAVE10') {
        showToast('Promo code applied successfully!', 'success');
    } else if (code === '') {
        showToast('Please enter a promo code', 'error');
    } else {
        showToast('Invalid promo code', 'error');
    }
}

function checkout() {
    showToast('Checkout coming soon! This is a demo.', 'info');
}
