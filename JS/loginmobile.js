document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.divlink');

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('show');
        this.style.transform = menu.classList.contains('show') ? 'rotate(90deg)' : 'rotate(0)';
    });
});