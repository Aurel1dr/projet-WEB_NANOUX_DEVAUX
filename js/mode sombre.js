document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('dark-mode-toggle');
    const icon = document.getElementById('theme-icon');
    const body = document.body;

    // Appliquer l'icône correcte au démarrage
    if (body.classList.contains('dark-theme')) {
        icon.textContent = '☀️';
    }

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            icon.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            icon.textContent = '🌙';
        }
    });
});