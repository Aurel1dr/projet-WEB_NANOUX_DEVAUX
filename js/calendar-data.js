/*
  Fichier de données du calendrier.
  Pour ajouter un évenement:
  - title : nom du cours
  - type : Cours / Examen / Événement
  - location : lieu
  - start : date et heure de début au format ISO (YYYY-MM-DDTHH:mm)
  - end : date et heure de fin au format ISO
  - color : couleur du bloc (hexadecimal)
*/

window.calendarTypes = {
    Cours: '#E07A3F',
    Examen: '#D35D92',
    'Événement': '#8A71E9'
};

window.calendarEvents = [
    {
        id: 'cours-lxp-lun-20',
        title: 'Semaine LXP - Algorithmique',
        type: 'Cours',
        location: 'Salles multi',
        start: '2026-04-20T10:00',
        end: '2026-04-20T12:00',
        color: '#E07A3F'
    },
    {
        id: 'cours-lxp-mar-21',
        title: 'Semaine LXP - Réseaux',
        type: 'Cours',
        location: 'Salles multi',
        start: '2026-04-21T10:00',
        end: '2026-04-21T12:00',
        color: '#E07A3F'
    },
    {
        id: 'cours-lxp-mer-22',
        title: 'Semaine LXP - Base de données',
        type: 'Cours',
        location: 'Salles multi',
        start: '2026-04-22T10:00',
        end: '2026-04-22T12:00',
        color: '#E07A3F'
    },
    {
        id: 'cours-efrei-jeu-23',
        title: 'Efrei Tech & Réalité augmentée',
        type: 'Cours',
        location: 'Salles multi',
        start: '2026-04-23T10:00',
        end: '2026-04-23T16:00',
        color: '#E07A3F'
    },
    {
        id: 'cours-efrei-ven-24',
        title: 'Efrei Tech & Réalité augmentée',
        type: 'Cours',
        location: 'Salles multi',
        start: '2026-04-24T10:00',
        end: '2026-04-24T15:00',
        color: '#E07A3F'
    }
];
