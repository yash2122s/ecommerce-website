// Product Management and Cart System
// Initialize cart in localStorage if it doesn't exist
if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
}

// Initialize wishlist in localStorage if it doesn't exist
if (!localStorage.getItem('wishlist')) {
    localStorage.setItem('wishlist', JSON.stringify([]));
}

// Sample products data
window.products = [
    // Men's Fashion
    {
        id: 1,
        name: "Premium Leather Boots",
        category: "Men's Boots",
        price: 4999,
        image: "images/men/boots1.jpg",
        rating: 5.0,
        reviews: 128,
        isNew: true,
        stock: 10
    },
    {
        id: 2,
        name: "Classic Denim Shirt",
        category: "Men's Clothing",
        price: 1999,
        image: "images/men/shirt1.jpg",
        rating: 4.7,
        reviews: 85,
        stock: 25
    },
    {
        id: 3,
        name: "Slim Fit Chinos",
        category: "Men's Clothing",
        price: 2499,
        image: "images/men/pants1.jpg",
        rating: 4.5,
        reviews: 64,
        stock: 20
    },
    {
        id: 4,
        name: "Formal Blazer",
        category: "Men's Clothing",
        price: 5999,
        image: "images/men/blazer1.jpg",
        rating: 4.8,
        reviews: 42,
        isTrending: true,
        stock: 15
    },
    {
        id: 5,
        name: "Sports Sneakers",
        category: "Men's Footwear",
        price: 3499,
        image: "images/men/sneakers1.jpg",
        rating: 4.6,
        reviews: 156,
        stock: 30
    },
    {
        id: 6,
        name: "Leather Wallet",
        category: "Men's Accessories",
        price: 999,
        image: "images/men/wallet1.jpg",
        rating: 4.4,
        reviews: 95,
        stock: 50
    },

    // Women's Fashion
    {
        id: 7,
        name: "Floral Maxi Dress",
        category: "Women's Clothing",
        price: 3999,
        image: "images/women/dress1.jpg",
        rating: 4.9,
        reviews: 178,
        isNew: true,
        stock: 18
    },
    {
        id: 8,
        name: "High-Waist Jeans",
        category: "Women's Clothing",
        price: 2799,
        image: "images/women/jeans1.jpg",
        rating: 4.7,
        reviews: 143,
        stock: 25
    },
    {
        id: 9,
        name: "Stylish Ankle Boots",
        category: "Women's Footwear",
        price: 3499,
        image: "images/women/boots1.jpg",
        rating: 4.5,
        reviews: 96,
        isTrending: true,
        stock: 15
    },
    {
        id: 10,
        name: "Designer Handbag",
        category: "Women's Accessories",
        price: 4499,
        image: "images/women/bag1.jpg",
        rating: 4.8,
        reviews: 112,
        stock: 10
    },
    {
        id: 11,
        name: "Silk Blouse",
        category: "Women's Clothing",
        price: 2999,
        image: "images/women/blouse1.jpg",
        rating: 4.6,
        reviews: 87,
        stock: 20
    },
    {
        id: 12,
        name: "Statement Necklace",
        category: "Women's Accessories",
        price: 1499,
        image: "images/women/necklace1.jpg",
        rating: 4.4,
        reviews: 65,
        isOnSale: true,
        stock: 30
    },

    // Kids' Fashion
    {
        id: 13,
        name: "Cartoon Print T-Shirt",
        category: "Kids' Clothing",
        price: 699,
        image: "images/kids/tshirt1.jpg",
        rating: 4.7,
        reviews: 89,
        isNew: true,
        stock: 35
    },
    {
        id: 14,
        name: "Comfortable Joggers",
        category: "Kids' Clothing",
        price: 899,
        image: "images/kids/joggers1.jpg",
        rating: 4.5,
        reviews: 76,
        stock: 28
    },
    {
        id: 15,
        name: "School Shoes",
        category: "Kids' Footwear",
        price: 1499,
        image: "images/kids/shoes1.jpg",
        rating: 4.8,
        reviews: 124,
        stock: 40
    },
    {
        id: 16,
        name: "Superhero Backpack",
        category: "Kids' Accessories",
        price: 999,
        image: "images/kids/backpack1.jpg",
        rating: 4.6,
        reviews: 93,
        isTrending: true,
        stock: 25
    },
    {
        id: 17,
        name: "Winter Jacket",
        category: "Kids' Clothing",
        price: 2499,
        image: "images/kids/jacket1.jpg",
        rating: 4.7,
        reviews: 67,
        stock: 20
    },
    {
        id: 18,
        name: "Party Dress",
        category: "Kids' Clothing",
        price: 1999,
        image: "images/kids/dress1.jpg",
        rating: 4.9,
        reviews: 108,
        stock: 15
    },

    // Seasonal Collections
    {
        id: 19,
        name: "Summer Beach Hat",
        category: "Accessories",
        price: 799,
        image: "images/accessories/hat1.jpg",
        rating: 4.4,
        reviews: 45,
        isNew: true,
        stock: 30
    },
    {
        id: 20,
        name: "Festive Kurta Set",
        category: "Traditional Wear",
        price: 4999,
        image: "images/traditional/kurta1.jpg",
        rating: 4.8,
        reviews: 156,
        isTrending: true,
        stock: 25
    },
    {
        id: 21,
        name: "Designer Saree",
        category: "Traditional Wear",
        price: 6999,
        image: "images/traditional/saree1.jpg",
        rating: 4.9,
        reviews: 178,
        stock: 12
    },
    {
        id: 22,
        name: "Sports Track Suit",
        category: "Sports Wear",
        price: 2999,
        image: "images/sports/tracksuit1.jpg",
        rating: 4.6,
        reviews: 89,
        stock: 20
    },
    {
        id: 23,
        name: "Yoga Pants",
        category: "Sports Wear",
        price: 1499,
        image: "images/sports/yogapants1.jpg",
        rating: 4.7,
        reviews: 134,
        isOnSale: true,
        stock: 30
    },
    {
        id: 24,
        name: "Smart Watch",
        category: "Accessories",
        price: 3999,
        image: "images/accessories/watch1.jpg",
        rating: 4.8,
        reviews: 245,
        stock: 15
    },
    
    // Luxury Watches Collection
    {
        id: 25,
        name: "Premium Chronograph Watch",
        category: "Watches",
        price: 12999,
        image: "images/products/1.jpg",
        rating: 4.9,
        reviews: 156,
        isNew: true,
        stock: 8
    },
    {
        id: 26,
        name: "Classic Leather Strap Watch",
        category: "Watches",
        price: 8999,
        image: "images/products/2.jpg",
        rating: 4.7,
        reviews: 98,
        isTrending: true,
        stock: 12
    },
    {
        id: 27,
        name: "Sports Digital Watch",
        category: "Watches",
        price: 5999,
        image: "images/products/3.jpg",
        rating: 4.6,
        reviews: 124,
        isOnSale: true,
        stock: 15
    }
];

// Cart Management Functions
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
}

function addToCart(productId) {
    const cart = getCart();
    const product = window.products.find(p => p.id === productId);
    
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity += 1;
            showNotification('Item quantity updated in cart');
        } else {
            showNotification('Maximum stock limit reached', 'error');
            return;
        }
    } else {
        if (product.stock > 0) {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
            showNotification('Item added to cart');
        } else {
            showNotification('Item out of stock', 'error');
            return;
        }
    }
    
    saveCart(cart);
    updateCartCount();
}

function removeFromCart(productId) {
    const cart = getCart();
    const updatedCart = cart.filter(item => item.id !== productId);
    saveCart(updatedCart);
    showNotification('Item removed from cart');
    updateCartDisplay();
}

function updateCartDisplay() {
    const cart = getCart();
    const cartContainer = document.getElementById('cartItems');
    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartContainer.innerHTML = `
        ${cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>${formatPrice(item.price)}</p>
                    <div class="quantity-controls">
                        <button onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button onclick="removeFromCart(${item.id})" class="remove-btn">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('')}
        <div class="cart-total">
            <h3>Total: ${formatPrice(total)}</h3>
            <button onclick="checkout()" class="btn btn-primary">Checkout</button>
        </div>
    `;
}

function updateQuantity(productId, change) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    const product = window.products.find(p => p.id === productId);
    
    if (!item || !product) return;
    
    const newQuantity = item.quantity + change;
    
    if (newQuantity > 0 && newQuantity <= product.stock) {
        item.quantity = newQuantity;
        saveCart(cart);
        updateCartDisplay();
        showNotification('Cart updated');
    } else if (newQuantity > product.stock) {
        showNotification('Maximum stock limit reached', 'error');
    }
}

// Wishlist Management Functions
function getWishlist() {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
}

function saveWishlist(wishlist) {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function toggleWishlist(productId) {
    const wishlist = getWishlist();
    const index = wishlist.indexOf(productId);
    
    if (index === -1) {
        wishlist.push(productId);
        showNotification('Added to wishlist');
    } else {
        wishlist.splice(index, 1);
        showNotification('Removed from wishlist');
    }
    
    saveWishlist(wishlist);
    updateProductCards();
}

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Product Card Creation
function createProductCard(product) {
    const wishlist = getWishlist();
    const isWishlisted = wishlist.includes(product.id);
    
    return `
        <div class="product-card">
            ${product.isNew ? '<div class="product-badge">New</div>' : 
              product.isTrending ? '<div class="product-badge">Trending</div>' :
              product.isOnSale ? '<div class="product-badge">Sale</div>' : ''}
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-actions">
                    <button onclick="toggleWishlist(${product.id})" class="action-btn wishlist-btn ${isWishlisted ? 'active' : ''}">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button onclick="addToCart(${product.id})" class="action-btn cart-btn">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                    <button onclick="showProductDetails(${product.id})" class="action-btn view-btn">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-rating">
                    ${getRatingStars(product.rating)}
                    <span>(${product.rating})</span>
                </div>
                <div class="stock-info">${product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</div>
            </div>
        </div>
    `;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    if (window.location.pathname.includes('products.html')) {
        displayProducts();
    }
    if (window.location.pathname.includes('cart.html')) {
        updateCartDisplay();
    }
});

// Load Products by Category
function loadProductsByCategory(category) {
    const filteredProducts = category === 'all' 
        ? window.products 
        : window.products.filter(product => product.category === category);
    
    return filteredProducts;
}

// Display Products
function displayProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Product Details Page
function displayProductDetails(productId) {
    const product = window.products.find(p => p.id === productId);
    if (!product) return;

    const container = document.getElementById('productDetails');
    if (!container) return;

    container.innerHTML = `
        <div class="product-details">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-detail-image">
            </div>
            <div class="product-info">
                <h1 class="product-title">${product.name}</h1>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <p class="product-description">${product.description}</p>
                
                <div class="product-options">
                    <div class="size-options">
                        <label>Size:</label>
                        <select id="productSize">
                            ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                        </select>
                    </div>
                    
                    <div class="color-options">
                        <label>Color:</label>
                        <select id="productColor">
                            ${product.colors.map(color => `<option value="${color}">${color}</option>`).join('')}
                        </select>
                    </div>
                </div>

                <div class="product-actions">
                    <button onclick="addToCart(${product.id})" class="btn btn-primary">Add to Cart</button>
                    <button onclick="addToWishlist(${product.id})" class="btn">Add to Wishlist</button>
                </div>
            </div>
        </div>
    `;
}

// Filter Products
function filterProducts(category, priceRange, sortBy) {
    let filteredProducts = loadProductsByCategory(category);

    // Filter by price range
    if (priceRange) {
        const [min, max] = priceRange.split('-').map(Number);
        filteredProducts = filteredProducts.filter(product => 
            product.price >= min && product.price <= max
        );
    }

    // Sort products
    if (sortBy) {
        switch (sortBy) {
            case 'price-low':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }
    }

    return filteredProducts;
}

// Search Products
function searchProducts(query) {
    query = query.toLowerCase();
    return window.products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
}

// Initialize Product Page
function initProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category') || 'all';
    const productId = urlParams.get('id');

    if (productId) {
        displayProductDetails(Number(productId));
    } else {
        const products = loadProductsByCategory(category);
        displayProducts(products, 'productsGrid');
    }
}

// Export functions
window.loadProductsByCategory = loadProductsByCategory;
window.displayProducts = displayProducts;
window.displayProductDetails = displayProductDetails;
window.filterProducts = filterProducts;
window.searchProducts = searchProducts;
window.initProductPage = initProductPage;

// Currency formatter for INR
const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
};

// Function to generate rating stars
function getRatingStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Function to display products
function displayProducts(filteredProducts = window.products) {
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
        
        // Update product count
        const productCount = document.getElementById('productCount');
        if (productCount) {
            productCount.textContent = filteredProducts.length;
        }
    }
}

// Search products function
function searchProducts(query) {
    return window.products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );
}

// Filter products function
function filterProducts(category, priceRange, sortBy) {
    let filtered = [...window.products];

    // Category filter
    if (category && category !== 'all') {
        filtered = filtered.filter(product => 
            product.category.toLowerCase().includes(category.toLowerCase())
        );
    }

    // Price range filter
    if (priceRange) {
        const [min, max] = priceRange.split('-').map(Number);
        filtered = filtered.filter(product => 
            product.price >= min && (max ? product.price <= max : true)
        );
    }

    // Sort
    if (sortBy) {
        switch(sortBy) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }
    }

    return filtered;
}

// Initialize product page
function initProductPage() {
    displayProducts();
} 