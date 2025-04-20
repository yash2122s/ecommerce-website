// DOM Elements
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeButtons = document.querySelectorAll('.close');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Sample Product Data (Replace with API call later)
if (typeof window.products === 'undefined') {
    window.products = [
        {
            id: 1,
            name: "Men's Casual Shirt",
            price: 29.99,
            image: "images/product1.jpg",
            category: "men"
        },
        {
            id: 2,
            name: "Women's Summer Dress",
            price: 39.99,
            image: "images/product2.jpg",
            category: "women"
        },
        {
            id: 3,
            name: "Kids' T-Shirt",
            price: 19.99,
            image: "images/product3.jpg",
            category: "kids"
        }
    ];
}

// Cart Management
let cart = [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// Update Cart Count
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    loadFeaturedProducts();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    // Modal Buttons
    loginBtn.addEventListener('click', () => loginModal.style.display = 'block');
    registerBtn.addEventListener('click', () => registerModal.style.display = 'block');

    // Close Buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
        });
    });

    // Close Modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) loginModal.style.display = 'none';
        if (e.target === registerModal) registerModal.style.display = 'none';
    });

    // Form Submissions
    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);
}

// Load Featured Products
function loadFeaturedProducts() {
    const productsGrid = document.getElementById('featuredProducts');
    if (!productsGrid) return;

    productsGrid.innerHTML = window.products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')" class="btn btn-primary">Add to Cart</button>
                <button onclick="addToWishlist(${product.id})" class="btn">Add to Wishlist</button>
            </div>
        </div>
    `).join('');
}

// Cart Functions
function addToCart(productId, name, price, image) {
    const item = {
        id: productId,
        name: name,
        price: price,
        image: image,
        quantity: 1
    };
    
    const existingItem = cart.find(cartItem => cartItem.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(item);
    }
    
    updateCartCount();
    updateCartDisplay();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartContainer = document.getElementById('cartItems');
    if (!cartContainer) return;

    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                <button onclick="removeFromCart(${item.id})" class="btn btn-danger">Remove</button>
            </div>
        </div>
    `).join('');

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalElement = document.getElementById('cartTotal');
    if (totalElement) {
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }
}

// Wishlist Functions
function addToWishlist(productId) {
    const product = window.products.find(p => p.id === productId);
    if (product && !wishlist.find(item => item.id === productId)) {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        showNotification('Product added to wishlist!');
    }
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(item => item.id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Authentication Functions
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you would typically make an API call to your backend
    console.log('Login attempt:', { email, password });
    loginModal.style.display = 'none';
    showNotification('Login successful!');
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    if (password !== confirmPassword) {
        showNotification('Passwords do not match!', 'error');
        return;
    }

    // Here you would typically make an API call to your backend
    console.log('Registration attempt:', { name, email, password });
    registerModal.style.display = 'none';
    showNotification('Registration successful!');
}

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add notification styles
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 4px;
        color: white;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    }
    .notification.success {
        background-color: var(--success-color);
    }
    .notification.error {
        background-color: var(--danger-color);
    }
    @keyframes slideIn {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }
`;
document.head.appendChild(style); 