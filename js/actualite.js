/* Compteurs animé */
function animerCompteurs() {
    const nombres = document.querySelectorAll('.chiffre-nombre');

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (!entry.isIntersecting) return;
            observer.unobserve(entry.target);
            compter(entry.target);
        });
    }, { threshold: 0.1 });
    /*  0.1 = déclenche dès que 10% visible */

    nombres.forEach(function(el) {
        observer.observe(el);
    });
}

function compter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const duree = 1800;
    const debut = performance.now();

    function step(maintenant) {
        const progres = Math.min((maintenant - debut) / duree, 1);
        const ease = 1 - Math.pow(1 - progres, 4);
        el.textContent = Math.round(ease * target);
        if (progres < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}


/* ── Tabs Campus ─ */
function initTabs() {
    const tabs = document.querySelectorAll('.campus-tab');

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            const campus = this.getAttribute('data-campus');

            /* Cache tous les panneaux */
            document.querySelectorAll('.campus-content').forEach(function(el) {
                el.classList.add('hidden');
            });
            /* Désactive tous les boutons */
            tabs.forEach(function(t) { t.classList.remove('active'); });

            /* Affiche le bon panneau et active le bon bouton */
            document.getElementById('campus-' + campus).classList.remove('hidden');
            this.classList.add('active');
        });
    });
}


/* ── Initialisation ── */
window.addEventListener('DOMContentLoaded', function() {
    animerCompteurs();
    initTabs();
});