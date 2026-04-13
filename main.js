// ===== BURGER MENU =====
const menuToggle = document.getElementById('menuToggle');
const mainNav    = document.getElementById('mainNav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('open');
    });
}

// ===== HIGHLIGHT ACTIVE NAV LINK =====
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href').includes(currentPage) && currentPage !== '') {
        link.classList.add('active');
    }
});