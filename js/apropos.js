// Formulaire
function envoyerMessage(e) {
    e.preventDefault();
    document.getElementById('form-confirm').style.display = 'block';
    e.target.reset();
}

// Jauges : animation au moment où elles deviennent visibles
window.addEventListener('DOMContentLoaded', function() {
    const fills = document.querySelectorAll('.skill-fill');

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const percent = fill.getAttribute('data-percent');
                const color = fill.getAttribute('data-color');
                if (color) fill.style.backgroundColor = color;
                setTimeout(function() {
                    fill.style.width = percent + '%';
                }, 200);
                observer.unobserve(fill); // on arrête d'observer une fois animé
            }
        });
    }, { threshold: 0.3 });

    fills.forEach(function(fill) {
        observer.observe(fill);
    });
});

