// login.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = loginForm.querySelector('button[type="button"]');

    loginButton.addEventListener('click', function(e) {
        e.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (validateCredentials(username, password)) {
            alert('Login successful!');
            // Redirect to dashboard or home page
            // window.location.href = 'dashboard.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });

    function validateCredentials(username, password) {
        // This is a simple example. In a real application, you would check against a database or API
        const validUsername = 'user123';
        const validPassword = 'pass123';

        return username === validUsername && password === validPassword;
    }
});


document.getElementById('loginLink').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Create overlay
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'black';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.5s ease';
    document.body.appendChild(overlay);

    // Fade in overlay
    setTimeout(function() {
        overlay.style.opacity = '1';
    }, 10);

    // Redirect after animation
    setTimeout(function() {
        window.location.href = e.target.href;
    }, 500);
});



