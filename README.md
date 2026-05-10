# Département Informatique - EFREI Paris
 
Projet Web TI402 · 2025-2026  
Aurélien DEVAUX-RIVIÈRE & Augustin NANOUX
 
Site vitrine du Département Informatique de l'EFREI Paris, développé en HTML, CSS et JavaScript, sans framework ni bibliothèque externe.
 
---

## 📸 Aperçu
 
<img width="1512" height="861" alt="Capture d’écran 2026-05-10 à 22 28 05" src="https://github.com/user-attachments/assets/a13faaf8-b4d0-4180-aea7-4aa6a265f778" />


## Lancer le site
 
Le site ne nécessite aucune installation. Il suffit d'ouvrir les fichiers HTML dans un navigateur, de préférence via un serveur local pour éviter les restrictions liées au protocole `file://` (notamment pour `sessionStorage` et le chargement des ressources).
 
**Méthode recommandée - Live Server (VS Code)**
 
1. Installer l'extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) dans VS Code
2. Ouvrir le dossier racine du projet (`PROJET-WEB/`) dans VS Code
3. Faire un clic droit sur `html/accueil.html` puis choisir "Open with Live Server"
4. Le site s'ouvre automatiquement sur `http://127.0.0.1:5500/html/accueil.html`
Tout changement dans un fichier HTML, CSS ou JS recharge la page automatiquement.


## Pages
 
| Page | Fichier | Description |
|------|---------|-------------|
| Accueil | `html/accueil.html` | Carrousel interactif, présentation du département |
| Agenda | `html/agendas.html` | Calendrier hebdomadaire des permanences par promotion |
| Formation | `html/formation.html` | Programmes en accordéons imbriqués + tableau des frais de scolarité |
| Equipe | `html/equipe.html` | Fiches des enseignants-chercheurs du département |
| Actualite | `html/actualite.html` | Chiffres clés animés, Journées Portes Ouvertes, présentation des campus |
| A propos | `html/apropos.html` | Membres du projet, timeline des étapes, technologies, formulaire de contact |
 
---
 
## Arborescence
 
```
PROJET-WEB/
├── css/
│   ├── styles.css          # styles globaux : reset, navbar, footer, carrousel, bannière
│   ├── agendas.css         # calendrier hebdomadaire, filtres promotions
│   ├── actualite.css       # compteurs, cartes JPO, onglets campus
│   ├── apropos.css         # cartes étudiants, timeline, jauges, formulaire
│   ├── equipe.css          # cartes professeurs
│   ├── formation.css       # accordéons, tableau des prix
│   └── darkmode.css        # toggle thème clair / sombre
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
│   ├── carrousel.js        # logique carrousel + animation bannière inter-pages
│   ├── calendrier.js       # rendu vue hebdomadaire, filtres par promotion
│   ├── calendar-data.js    # données des permanences (événements, couleurs promos)
│   ├── formation.js        # accordéons principaux et sous-accordéons
│   ├── actualite.js        # compteurs animés (IntersectionObserver), onglets campus
│   ├── apropos.js          # jauges de compétences animées, validation formulaire
│   └── darkmode.js         # bascule thème clair / sombre
└── README.md
```
 
---
 
## Fonctionnalités JavaScript
 
**Carrousel (carrousel.js)**  
Défilement automatique toutes les 6 secondes avec navigation par flèches et points indicateurs. Lors d'un clic sur un lien de navigation, le carrousel se réduit en bannière avec une transition CSS, et l'image active est mémorisée en `sessionStorage` pour être réaffichée sur les autres pages.
 
**Calendrier des permanences (calendrier.js + calendar-data.js)**  
Vue hebdomadaire générée dynamiquement à partir d'un tableau d'événements. Navigation semaine précédente / suivante. Filtre par promotion (P1, P2, I1, I2, I3) avec toggle : cliquer sur une promotion affiche uniquement ses événements, recliquer revient à tout afficher. Chaque événement est positionné au pixel via `top` et `height` calculés depuis les horaires.
 
**Accordéons Formation (formation.js)**  
Deux niveaux d'accordéons imbriqués. L'ouverture d'un sous-accordéon recalcule la hauteur maximale du parent pour éviter tout débordement ou troncature du contenu.
 
**Compteurs animés (actualite.js)**  
Animation easing de type `1 - (1-t)^4` sur les chiffres clés, déclenchée au scroll via `IntersectionObserver` (seuil à 10% de visibilité). Une fois animé, l'élément n'est plus observé.
 
**Jauges de compétences (apropos.js)**  
Largeur animée en CSS (`transition: width 1.2s ease`) déclenchée à l'entrée dans le viewport via `IntersectionObserver` (seuil à 30%).
 
**Dark mode (darkmode.js)**  
Toggle de la classe `dark-mode` sur `body`, avec échange de l'icône lune/soleil.
 
---
 
## Design
 
- Couleur principale : `#1b57fb`
- Typographie : `system-ui, -apple-system, sans-serif`
- Charte inspirée du site officiel [efrei.fr](https://www.efrei.fr)
- Aucun framework CSS ni bibliothèque JavaScript externe
---
 
## Répartition du travail
 
| Membre | Responsabilités |
|--------|----------------|
| Aurélien DEVAUX-RIVIÈRE | Pages Formation et Agenda, calendrier JS, données des permanences |
| Augustin NANOUX | Pages Equipe, Actualité et A propos, carrousel interactif |
 
---
 
## Etapes du projet
 
| Semaine | Etape |
|---------|-------|
| 1 | Réflexion et maquette (wireframe) |
| 2 | Structure HTML, navigation, header et footer sur toutes les pages |
| 3 | Pages A propos, Agenda et Equipe |
| 4 | Carrousel et fonctionnalités JavaScript |
| 5 | Page Actualité et accordéons Formation |
 
---
 
*Projet TI402 - EFREI Paris, Département Informatique - 2025-2026*
