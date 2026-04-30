/* ============================================================
   darkmode.js  —  à placer dans js/  et linker sur toutes les pages
   ============================================================ */

(function () {
    // ── Applique le thème sauvegardé immédiatement (avant le rendu) ──
    // Mis dans une IIFE pour s'exécuter avant le paint et éviter le flash
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
    }
})();

function toggleDark() {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

window.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('dark-toggle-input');
    if (!input) return;
    input.checked = document.documentElement.classList.contains('dark');
});