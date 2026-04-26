// On attend que la page soit chargée
window.addEventListener('DOMContentLoaded', function() {

    // On récupère toutes les barres de remplissage
    const fills = document.querySelectorAll('.skill-fill');

    fills.forEach(function(fill) {
        // On lit le pourcentage écrit dans data-percent
        const percent = fill.getAttribute('data-percent');

        // Petit délai pour que l'animation soit visible au chargement
        setTimeout(function() {
            fill.style.width = percent + '%'; // déclenche la transition CSS
        }, 300);
    });

});