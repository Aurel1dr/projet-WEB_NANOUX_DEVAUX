# 🖥️ Département Informatique — EFREI Paris
 
> Projet Web TI402 · 2025-2026 · Aurélien DEVAUX-RIVIÈRE & Augustin NANOUX
 
Site vitrine du Département Informatique de l'EFREI Paris, développé en HTML5, CSS3 et JavaScript vanilla, sans framework ni bibliothèque externe.
 
---

## 📸 Aperçu
 
<img width="1918" height="917" alt="image" src="<img width="1917" height="912" alt="image" src="https://github.com/user-attachments/assets/ebf20530-e7ae-4141-a773-d0888f191605" />
" />

 
## 📄 Pages
 
| Page | Fichier | Description |
|------|---------|-------------|
| Accueil | `html/accueil.html` | Carrousel interactif, présentation du département |
| Agenda | `html/agendas.html` | Calendrier hebdomadaire des permanences par promotion |
| Formation | `html/formation.html` | Programmes accordéon (Prépa, Bachelor, Master, Mastères spécialisés) + tableau des prix |
| Équipe | `html/equipe.html` | Fiches des enseignants-chercheurs du département |
| Actualité | `html/actualite.html` | Chiffres clés, Journées Portes Ouvertes, campus |
| À propos | `html/apropos.html` | Membres du projet, timeline, technologies, formulaire de contact |
 
---
 
## 🗂️ Arborescence
 
```
PROJET-WEB/
├── css/
│   ├── styles.css          # styles globaux, navbar, footer, carrousel
│   ├── agendas.css
│   ├── actualite.css
│   ├── apropos.css
│   ├── equipe.css
│   ├── formation.css
│   └── darkmode.css
├── html/
│   ├── accueil.html
│   ├── agendas.html
│   ├── actualite.html
│   ├── apropos.html
│   ├── equipe.html
│   └── formation.html
├── img/
│   ├── img_campus/
│   ├── img_carrousel/
│   ├── img_JPO/
│   ├── img_logo/
│   ├── img_perso/
│   ├── img_professeur/
│   └── img-maquette.png
├── js/
│   ├── carrousel.js        # logique carrousel + animation bannière
│   ├── calendrier.js       # vue hebdomadaire, filtres promos
│   ├── calendar-data.js    # données des permanences
│   ├── formation.js        # accordéons
│   ├── actualite.js        # compteurs animés, onglets campus
│   ├── apropos.js          # jauges de compétences, formulaire
│   └── darkmode.js         # bascule thème clair/sombre
└── README.md
```
 
---
 
## ✨ Fonctionnalités
 
- **Carrousel** automatique (6 s) avec navigation par flèches et points, et animation de réduction vers une bannière lors de la navigation entre pages
- **Calendrier hebdomadaire** des permanences avec filtre par promotion (P1, P2, I1, I2, I3) et navigation semaine précédente / suivante
- **Accordéons** imbriqués sur la page Formation (programmes → années → cours)
- **Compteurs animés** (IntersectionObserver) sur la page Actualité
- **Jauges de compétences** animées à l'entrée dans le viewport
- **Onglets campus** (Villejuif / Bordeaux) avec transition CSS
- **Formulaire de contact** avec validation native HTML5 et confirmation JS
- **Dark mode** persistant via toggle dans la navbar
- **Design responsive** avec media queries
---
 
## 🛠️ Technologies
 
| Technologie | Usage |
|-------------|-------|
| HTML5 | Structure sémantique des 6 pages |
| CSS3 | Mise en page, animations, responsive (media queries) |
| JavaScript ES6 | Interactions, calendrier, carrousel, compteurs |
 
Aucun framework ni bibliothèque externe — conformément aux consignes TI402.
 
---
 
## 👥 Équipe
 
| Membre | Responsabilités |
|--------|----------------|
| **Aurélien DEVAUX-RIVIÈRE** | Pages Formation & Agenda, calendrier JS, données des permanences |
| **Augustin NANOUX** | Pages Équipe, Actualité & À propos, carrousel interactif |
 
---
 
## 🎨 Charte graphique
 
- **Couleur principale :** `#1b57fb` (bleu EFREI)
- **Couleur secondaire :** `#ffffff`
- **Typographie :** `system-ui, -apple-system, sans-serif`
- Inspirée du design officiel [efrei.fr](https://www.efrei.fr)
---
 
*© 2026 EFREI Paris — Département Informatique*
 
Projet étudiant — EFREI Paris 2025. Tous droits réservés.
 
```
 
