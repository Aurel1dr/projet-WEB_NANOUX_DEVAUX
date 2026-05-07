/* ============================================================
   calendrier.js  —  Calendrier hebdomadaire avec filtre promos
   ============================================================ */

/* ── État du filtre actif (null = toutes les promos affichées) ── */
let activePromo = null;

function formatDate(date, options = {}) {
    return new Intl.DateTimeFormat('fr-FR', options).format(date);
}

function getWeekStart(date) {
    const d = new Date(date);
    const day = d.getDay();
    const isoDay = day === 0 ? 7 : day;
    d.setDate(d.getDate() - (isoDay - 1));
    d.setHours(0, 0, 0, 0);
    return d;
}

function addDays(date, days) {
    const copy = new Date(date);
    copy.setDate(copy.getDate() + days);
    return copy;
}

function getWeekRangeLabel(startDate) {
    const endDate = addDays(startDate, 6);
    return `${formatDate(startDate, { day: '2-digit', month: 'long' })} – ${formatDate(endDate, { day: '2-digit', month: 'long' })}`;
}

function getMonthLabel(date) {
    return formatDate(date, { month: 'long', year: 'numeric' });
}

/* ── Résolution couleur d'un événement ── */
function resolveColor(event) {
    if (event.color && event.color !== '') return event.color;
    if (event.promo && window.promoColors && window.promoColors[event.promo]) {
        return window.promoColors[event.promo];
    }
    return '#4E6E8E';
}

/* ── Filtre : retourne les événements visibles selon la promo active ── */
function filteredEvents() {
    if (!activePromo) return window.calendarEvents;
    return window.calendarEvents.filter(e => e.promo === activePromo);
}

/* ── Construction des labels horaires ── */
function buildHourLabels() {
    const container = document.querySelector('.time-column');
    for (let hour = 8; hour <= 18; hour++) {
        const label = document.createElement('div');
        label.className = 'time-step';
        label.textContent = `${hour.toString().padStart(2, '0')}:00`;
        container.appendChild(label);
    }
}

/* ── Panneau latéral : liste des promotions avec filtres ── */
function renderPromoPanel() {
    const legendEl = document.getElementById('legend');
    legendEl.innerHTML = '';

    /* Bouton "Toutes" */
    const allBtn = document.createElement('div');
    allBtn.className = 'legend-item promo-filter-btn' + (activePromo === null ? ' promo-active' : '');
    allBtn.innerHTML = `
        <span class="legend-dot" style="background: linear-gradient(135deg,#43A047,#1E88E5,#FB8C00,#E53935)"></span>
        <span>Toutes les promos</span>
    `;
    allBtn.addEventListener('click', () => {
        activePromo = null;
        renderAll();
    });
    legendEl.appendChild(allBtn);

    /* Un bouton par promotion */
    const promos = Object.keys(window.promoColors || {});
    promos.forEach(promo => {
        const color = window.promoColors[promo];
        const btn = document.createElement('div');
        btn.className = 'legend-item promo-filter-btn' + (activePromo === promo ? ' promo-active' : '');
        btn.style.setProperty('--promo-color', color);
        btn.innerHTML = `
            <span class="legend-dot" style="background:${color}"></span>
            <span>${promo}</span>
        `;
        btn.addEventListener('click', () => {
            activePromo = (activePromo === promo) ? null : promo; /* toggle */
            renderAll();
        });
        legendEl.appendChild(btn);
    });
}



/* ── Création d'un bloc événement ── */
function createEventCard(event) {
    const start  = new Date(event.start);
    const end    = new Date(event.end);
    const color  = resolveColor(event);

    const topMinutes    = ((start.getHours() * 60 + start.getMinutes()) - 480);
    const heightMinutes = (end - start) / 60000;

    const eventEl = document.createElement('div');
    eventEl.className = 'event-card';
    eventEl.style.top             = `${topMinutes}px`;
    eventEl.style.height          = `${heightMinutes}px`;
    eventEl.style.backgroundColor = `${color}2E`;  /* fond très transparent */
    eventEl.style.borderColor     = color;

    const promoTag = event.promo
        ? `<span class="event-promo-tag" style="background:${color}">${event.promo}</span>`
        : '';

    eventEl.innerHTML = `
        <div class="event-title">${promoTag} ${event.title}</div>
        ${ event.location ? `<div class="event-meta">${event.location}</div>` : '' }
        <div class="event-time">
            ${start.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
            –
            ${end.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
        </div>
    `;
    return eventEl;
}

/* ── Vue hebdomadaire ── */
function renderWeekView(selectedDate, events) {
    const daysColumns = document.getElementById('daysColumns');
    daysColumns.innerHTML = '';
    const startOfWeek = getWeekStart(selectedDate);

    for (let i = 0; i < 7; i++) {
        const dayDate = addDays(startOfWeek, i);
        const dayEvents = events.filter(event => {
            const eventDate = new Date(event.start);
            return eventDate.toDateString() === dayDate.toDateString();
        });

        const column = document.createElement('div');
        column.className = 'day-column';
        if (dayDate.toDateString() === new Date().toDateString()) {
            column.classList.add('day-column-today');
        }

        const header = document.createElement('div');
        header.className = 'day-header';
        header.innerHTML = `
            <span>${formatDate(dayDate, { weekday: 'short' })}</span>
            <strong>${formatDate(dayDate, { day: '2-digit', month: '2-digit' })}</strong>
        `;
        column.appendChild(header);

        const grid = document.createElement('div');
        grid.className = 'day-grid';

        for (let hour = 8; hour <= 18; hour++) {
            const slot = document.createElement('div');
            slot.className = 'hour-line';
            grid.appendChild(slot);
        }

        dayEvents.forEach(event => grid.appendChild(createEventCard(event)));
        column.appendChild(grid);
        daysColumns.appendChild(column);
    }
}

/* ── Rendu global (appelé à chaque changement) ── */
function renderAll() {
    const selectedDate = _currentSelectedDate;
    const weekStart    = getWeekStart(selectedDate);

    // Met à jour le libellé de la semaine
    document.getElementById('weekRange').textContent = getWeekRangeLabel(weekStart);

    // Appeler le mini-calendrier seulement s'il existe (protection après suppression HTML)
    if (typeof renderMonthCalendar === 'function') {
        const currentMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
        try {
            renderMonthCalendar(selectedDate, currentMonth);
        } catch (err) {
            console.warn('Erreur renderMonthCalendar :', err);
        }
    }

    // Toujours rendre la vue hebdomadaire et le panneau promos
    renderWeekView(selectedDate, filteredEvents());
    renderPromoPanel();
}

/* ── Initialisation ── */
window.addEventListener('DOMContentLoaded', () => {
    buildHourLabels();

    _currentSelectedDate = new Date();
    renderAll();

    document.getElementById('todayBtn').onclick    = () => { _currentSelectedDate = new Date(); renderAll(); };
    document.getElementById('prevWeekBtn').onclick = () => { _currentSelectedDate = addDays(getWeekStart(_currentSelectedDate), -7); renderAll(); };
    document.getElementById('nextWeekBtn').onclick = () => { _currentSelectedDate = addDays(getWeekStart(_currentSelectedDate),  7); renderAll(); };
});
