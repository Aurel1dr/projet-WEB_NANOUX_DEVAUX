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

function buildHourLabels() {
    const container = document.querySelector('.time-column');
    for (let hour = 8; hour <= 18; hour++) {
        const label = document.createElement('div');
        label.className = 'time-step';
        label.textContent = `${hour.toString().padStart(2, '0')}:00`;
        container.appendChild(label);
    }
}

function renderLegend(events) {
    const legendEl = document.getElementById('legend');
    const types = {};
    events.forEach(event => {
        const color = event.color || window.calendarTypes[event.type] || '#4E6E8E';
        types[event.type] = color;
    });
    legendEl.innerHTML = '';
    Object.entries(types).forEach(([type, color]) => {
        const item = document.createElement('div');
        item.className = 'legend-item';
        item.innerHTML = `<span class="legend-dot" style="background:${color}"></span><span>${type}</span>`;
        legendEl.appendChild(item);
    });
}

function renderMonthCalendar(selectedDate, currentDate) {
    const monthLabel = document.getElementById('monthLabel');
    const monthGrid = document.getElementById('monthGrid');
    monthLabel.textContent = getMonthLabel(currentDate);
    monthGrid.innerHTML = '';

    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const startIsoDay = firstDay.getDay() === 0 ? 7 : firstDay.getDay();
    const startOffset = startIsoDay - 1;

    for (let i = 0; i < startOffset; i++) {
        const empty = document.createElement('div');
        empty.className = 'month-cell month-cell-empty';
        monthGrid.appendChild(empty);
    }

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
        const cellDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        const cell = document.createElement('button');
        cell.type = 'button';
        cell.className = 'month-cell';
        if (cellDate.toDateString() === selectedDate.toDateString()) {
            cell.classList.add('month-cell-active');
        }
        cell.textContent = day;
        cell.addEventListener('click', () => {
            selectedDate = cellDate;
            renderPage(selectedDate);
        });
        monthGrid.appendChild(cell);
    }
}

function createEventCard(event) {
    const start = new Date(event.start);
    const end = new Date(event.end);
    const color = event.color || window.calendarTypes[event.type] || '#4E6E8E';
    const topMinutes = ((start.getHours() * 60 + start.getMinutes()) - 480);
    const heightMinutes = (end - start) / 60000;
    const eventEl = document.createElement('div');
    eventEl.className = 'event-card';
    eventEl.style.top = `${topMinutes}px`;
    eventEl.style.height = `${heightMinutes}px`;
    eventEl.style.backgroundColor = `${color}33`;
    eventEl.style.borderColor = color;
    eventEl.innerHTML = `
        <div class="event-title">${event.title}</div>
        <div class="event-meta">${event.type} · ${event.location}</div>
        <div class="event-time">${start.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })} - ${end.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</div>
    `;
    return eventEl;
}

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
        header.innerHTML = `<span>${formatDate(dayDate, { weekday: 'short' })}</span><strong>${formatDate(dayDate, { day: '2-digit', month: '2-digit' })}</strong>`;
        column.appendChild(header);

        const grid = document.createElement('div');
        grid.className = 'day-grid';

        for (let hour = 8; hour <= 18; hour++) {
            const slot = document.createElement('div');
            slot.className = 'hour-line';
            grid.appendChild(slot);
        }

        dayEvents.forEach(event => {
            const eventCard = createEventCard(event);
            grid.appendChild(eventCard);
        });

        column.appendChild(grid);
        daysColumns.appendChild(column);
    }
}

function renderPage(initialDate = new Date()) {
    const selectedDate = new Date(initialDate);
    const weekStart = getWeekStart(selectedDate);
    const todayButton = document.getElementById('todayBtn');
    const weekRange = document.getElementById('weekRange');
    const currentMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);

    document.querySelectorAll('.calendar-btn[data-direction]').forEach(btn => {
        btn.disabled = false;
    });

    weekRange.textContent = getWeekRangeLabel(weekStart);
    renderMonthCalendar(selectedDate, currentMonth);
    renderWeekView(selectedDate, window.calendarEvents);
    renderLegend(window.calendarEvents);

    todayButton.onclick = () => renderPage(new Date());
    document.getElementById('prevWeekBtn').onclick = () => renderPage(addDays(weekStart, -7));
    document.getElementById('nextWeekBtn').onclick = () => renderPage(addDays(weekStart, 7));
}

window.addEventListener('DOMContentLoaded', () => {
    buildHourLabels();
    renderPage(new Date());
});
