const currentPage = window.location.pathname.split('/').pop();
// Highlight active link in header nav
document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (currentPage !== '' && href.includes(currentPage)) {
        link.classList.add('active');
    }
});

// Contact form handling (progressive, client-side only)
window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.querySelector('#name');
            const email = form.querySelector('#email');
            const message = form.querySelector('#message');
            let ok = true;
            [name, email, message].forEach(f => {
                if (!f.checkValidity()) { ok = false; f.classList.add('invalid'); }
                else { f.classList.remove('invalid'); }
            });
            const result = document.getElementById('contactResult');
            if (!ok) {
                if (result) result.textContent = 'Merci de compléter correctement le formulaire.';
                return;
            }
            // simulate send (no backend). store in localStorage
            const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
            submissions.push({ name: name.value, email: email.value, message: message.value, date: new Date().toISOString() });
            localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
            if (result) result.textContent = 'Message envoyé (simulé). Merci !';
            form.reset();
        });
    }
});

// Simple agenda loader: fetch JSON and render into container
window.loadAgenda = async function(selector, jsonPath) {
    try {
        const container = document.querySelector(selector);
        if (!container) return;
        const resp = await fetch(jsonPath);
        if (!resp.ok) throw new Error('Impossible de charger les données');
        const events = await resp.json();
        if (!events.length) { container.innerHTML = '<p>Aucun événement trouvé.</p>'; return; }
        const list = document.createElement('div');
        list.className = 'events-grid';
        events.forEach(ev => {
            const card = document.createElement('article');
            card.className = 'event-card';
            card.innerHTML = `
                <h3>${ev.title}</h3>
                <p class="muted">${ev.date} • ${ev.time} — ${ev.location}</p>
                <p>${ev.description}</p>
            `;
            list.appendChild(card);
        });
        container.innerHTML = '';
        container.appendChild(list);
    } catch (err) {
        console.error(err);
        const container = document.querySelector(selector);
        if (container) container.innerHTML = '<p>Erreur lors du chargement de l\'agenda.</p>';
    }
}