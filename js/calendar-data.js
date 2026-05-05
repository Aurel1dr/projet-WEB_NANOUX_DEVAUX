/*
  Fichier de données du calendrier.
  =====================================================================
  COMMENT AJOUTER UN BLOC / UNE PERMANENCE :
  =====================================================================
  1. Copie un bloc existant dans window.calendarEvents (ci-dessous).
  2. Modifie les champs :
       - title    : nom affiché dans le bloc
       - promo    : promotion concernée (doit correspondre à une clé de window.promoColors)
       - type     : "Permanence", "Cours", "Examen" ou "Événement"
       - location : salle / lieu
       - start    : date + heure de début  →  format : 'AAAA-MM-JJTHH:mm'
       - end      : date + heure de fin    →  format : 'AAAA-MM-JJTHH:mm'
       - color    : laisse vide ("") pour prendre la couleur de la promo automatiquement,
                    ou mets un code hexadécimal (#RRGGBB) pour forcer une couleur.

  3. AJOUTER UNE PROMOTION :
       - Ajoute une entrée dans window.promoColors  →  ex : 'M3': '#E53935'
       - La promotion apparaîtra automatiquement dans le panneau de filtre.

  EXEMPLES DE DATES :
       '2026-05-04T08:00'  →  lundi 4 mai 2026 à 8h00
       '2026-05-04T10:00'  →  lundi 4 mai 2026 à 10h00
  =====================================================================
*/

/* ── Couleur par promotion ── */
window.promoColors = {
    'P1': '#43A047',   // vert
    'P2': '#1E88E5',   // bleu
    'B1': '#FB8C00',   // orange
    'B2': '#E53935',   // rouge
    'B3': '#8E24AA',   // violet
    'I1': '#00897B',   // teal
    'I2': '#F4511E',   // orange foncé
    'I3': '#6D4C41',   // marron
};

/* ── Types (garde pour compatibilité avec la légende) ── */
window.calendarTypes = {
    Permanence: '#888888',
    Cours:      '#888888',
    Examen:     '#888888',
    'Événement':'#888888',
};

/* ── Événements ──
   Semaine de référence : 4 mai 2026 (lundi) → 10 mai 2026 (dimanche)
   Les événements se répètent chaque semaine : seule la semaine affichée
   sera rendue, le reste sera ignoré automatiquement par le calendrier.
   Pour des événements récurrents, duplique le bloc en changeant la date.
*/
window.calendarEvents = [

    /* ══════════════ LUNDI 4 mai ══════════════ */
    {
        title: 'Permanence - P1',
        promo: 'P1',
        type: 'Permanence',
        location: 'Salle 101',
        start: '2026-05-04T08:00',
        end:   '2026-05-04T10:00',
        color: ''
    },
    {
        title: 'Permanence - I1',
        promo: 'I1',
        type: 'Permanence',
        location: 'Salle 205',
        start: '2026-05-04T10:00',
        end:   '2026-05-04T12:00',
        color: ''
    },
    {
        title: 'Permanence - B2',
        promo: 'B2',
        type: 'Permanence',
        location: 'Salle 302',
        start: '2026-05-04T14:00',
        end:   '2026-05-04T16:00',
        color: ''
    },
    {
        title: 'Examen - I3',
        promo: 'I3',
        type: 'Examen',
        location: 'Amphi A',
        start: '2026-05-04T16:00',
        end:   '2026-05-04T18:00',
        color: ''
    },

    /* ══════════════ MARDI 5 mai ══════════════ */
    {
        title: 'Permanence - P2',
        promo: 'P2',
        type: 'Permanence',
        location: 'Salle 102',
        start: '2026-05-05T08:00',
        end:   '2026-05-05T10:00',
        color: ''
    },
    {
        title: 'Permanence - B1',
        promo: 'B1',
        type: 'Permanence',
        location: 'Salle 201',
        start: '2026-05-05T10:00',
        end:   '2026-05-05T12:00',
        color: ''
    },
    {
        title: 'Permanence - I2',
        promo: 'I2',
        type: 'Permanence',
        location: 'Salle 304',
        start: '2026-05-05T14:00',
        end:   '2026-05-05T16:00',
        color: ''
    },
    {
        title: 'Cours - B3',
        promo: 'B3',
        type: 'Cours',
        location: 'Amphi B',
        start: '2026-05-05T16:00',
        end:   '2026-05-05T18:00',
        color: ''
    },

    /* ══════════════ MERCREDI 6 mai ══════════════ */
    {
        title: 'Permanence - I1',
        promo: 'I1',
        type: 'Permanence',
        location: 'Salle 205',
        start: '2026-05-06T08:00',
        end:   '2026-05-06T10:00',
        color: ''
    },
    {
        title: 'Permanence - P1',
        promo: 'P1',
        type: 'Permanence',
        location: 'Salle 101',
        start: '2026-05-06T10:00',
        end:   '2026-05-06T12:00',
        color: ''
    },
    {
        title: 'Examen - B1',
        promo: 'B1',
        type: 'Examen',
        location: 'Amphi A',
        start: '2026-05-06T14:00',
        end:   '2026-05-06T16:30',
        color: ''
    },
    {
        title: 'Permanence - I3',
        promo: 'I3',
        type: 'Permanence',
        location: 'Salle 310',
        start: '2026-05-06T16:30',
        end:   '2026-05-06T18:00',
        color: ''
    },

    /* ══════════════ JEUDI 7 mai ══════════════ */
    {
        title: 'Permanence - B2',
        promo: 'B2',
        type: 'Permanence',
        location: 'Salle 302',
        start: '2026-05-07T08:00',
        end:   '2026-05-07T10:00',
        color: ''
    },
    {
        title: 'Permanence - P2',
        promo: 'P2',
        type: 'Permanence',
        location: 'Salle 102',
        start: '2026-05-07T10:00',
        end:   '2026-05-07T12:00',
        color: ''
    },
    {
        title: 'Cours - I2',
        promo: 'I2',
        type: 'Cours',
        location: 'Amphi C',
        start: '2026-05-07T13:00',
        end:   '2026-05-07T15:00',
        color: ''
    },
    {
        title: 'Permanence - B3',
        promo: 'B3',
        type: 'Permanence',
        location: 'Salle 201',
        start: '2026-05-07T15:00',
        end:   '2026-05-07T17:00',
        color: ''
    },

    /* ══════════════ VENDREDI 8 mai ══════════════ */
    {
        title: 'Permanence - I3',
        promo: 'I3',
        type: 'Permanence',
        location: 'Salle 310',
        start: '2026-05-08T08:00',
        end:   '2026-05-08T10:00',
        color: ''
    },
    {
        title: 'Permanence - B1',
        promo: 'B1',
        type: 'Permanence',
        location: 'Salle 201',
        start: '2026-05-08T10:00',
        end:   '2026-05-08T12:00',
        color: ''
    },
    {
        title: 'Permanence - P1',
        promo: 'P1',
        type: 'Permanence',
        location: 'Salle 101',
        start: '2026-05-08T14:00',
        end:   '2026-05-08T16:00',
        color: ''
    },

    /* ══════════════ SEMAINE SUIVANTE (11 mai) ══════════════ */
    {
        title: 'Permanence - P1',
        promo: 'P1',
        type: 'Permanence',
        location: 'Salle 101',
        start: '2026-05-11T08:00',
        end:   '2026-05-11T10:00',
        color: ''
    },
    {
        title: 'Permanence - I1',
        promo: 'I1',
        type: 'Permanence',
        location: 'Salle 205',
        start: '2026-05-11T10:00',
        end:   '2026-05-11T12:00',
        color: ''
    },
    {
        title: 'Permanence - B2',
        promo: 'B2',
        type: 'Permanence',
        location: 'Salle 302',
        start: '2026-05-11T14:00',
        end:   '2026-05-11T16:00',
        color: ''
    },
    {
        title: 'Permanence - P2',
        promo: 'P2',
        type: 'Permanence',
        location: 'Salle 102',
        start: '2026-05-12T08:00',
        end:   '2026-05-12T10:00',
        color: ''
    },
    {
        title: 'Examen - I2',
        promo: 'I2',
        type: 'Examen',
        location: 'Amphi A',
        start: '2026-05-12T14:00',
        end:   '2026-05-12T16:00',
        color: ''
    },
    {
        title: 'Permanence - B3',
        promo: 'B3',
        type: 'Permanence',
        location: 'Salle 201',
        start: '2026-05-13T10:00',
        end:   '2026-05-13T12:00',
        color: ''
    },
    {
        title: 'Permanence - I3',
        promo: 'I3',
        type: 'Permanence',
        location: 'Salle 310',
        start: '2026-05-14T08:00',
        end:   '2026-05-14T10:00',
        color: ''
    },
    {
        title: 'Permanence - B1',
        promo: 'B1',
        type: 'Permanence',
        location: 'Salle 201',
        start: '2026-05-15T10:00',
        end:   '2026-05-15T12:00',
        color: ''
    },
];
