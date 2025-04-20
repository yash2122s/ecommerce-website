// User Authentication State
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Authentication Functions
function login(email, password) {
    // In a real application, this would be an API call
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = {
            id: user.id,
            name: user.name,
            email: user.email
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateAuthUI();
        return true;
    }
    return false;
}

function register(name, email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if user already exists
    if (users.some(u => u.email === email)) {
        return false;
    }

    const newUser = {
        id: Date.now(),
        name,
        email,
        password
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateAuthUI();
}

// Update UI based on authentication state
function updateAuthUI() {
    const userActions = document.querySelector('.user-actions');
    if (!userActions) return;

    if (currentUser) {
        userActions.innerHTML = `
            <span class="user-name">Welcome, ${currentUser.name}</span>
            <button onclick="logout()" class="btn">Logout</button>
        `;
    } else {
        userActions.innerHTML = `
            <button id="loginBtn" class="btn">Login</button>
            <button id="registerBtn" class="btn">Register</button>
        `;
        // Reattach event listeners
        document.getElementById('loginBtn').addEventListener('click', () => {
            document.getElementById('loginModal').style.display = 'block';
        });
        document.getElementById('registerBtn').addEventListener('click', () => {
            document.getElementById('registerModal').style.display = 'block';
        });
    }
}

// Protected Routes
function checkAuth() {
    if (!currentUser) {
        window.location.href = 'index.html';
        return false;
    }
    return true;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateAuthUI();
});

// Export functions for use in other files
window.login = login;
window.register = register;
window.logout = logout;
window.checkAuth = checkAuth;
window.currentUser = currentUser; 