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
