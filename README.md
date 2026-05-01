# 🎓 Département Informatique - EFREI Paris
 
> Site web du département informatique de l'EFREI Paris, réalisé dans le cadre d'un projet étudiant.
 
**Aurélien DEVAUX-RIVIÈRE & Augustin NANOUX** - 2025
 
---
 
## 📸 Aperçu
 
<img width="1918" height="917" alt="image" src="https://github.com/user-attachments/assets/c8f9b844-d710-4dbd-a250-7d849d12577e" />

 
---
 
## 📁 Structure du projet
 
```
projet/
├── html/
│   ├── accueil.html        # Page d'accueil avec carrousel
│   ├── formation.html      # Formations avec accordéons
│   ├── equipe.html         # Équipe enseignante avec cartes 3D
│   ├── agendas.html        # Planning des cours
│   └── apropos.html        # À propos + chatbot IA + contacts
│
├── css/
│   ├── styles.css          # Styles globaux (nav, footer, body)
│   ├── formation.css       # Styles page Formation
│   ├── equipe.css          # Styles page Équipe
│   ├── agendas.css         # Styles page Agenda
    ├── darkmode.css        # Bouton darkmode (thème)
│   └── apropos.css         # Styles page À propos
│
├── js/
│   ├── formation.js        # Logique accordéons
│   ├── calendrier.js       # Logique calendrier hebdomadaire
    ├── apropos.js
    ├── carrousel.js
    ├── darkmode.js
│   └── calendar-data.js    # Données des cours (à modifier)
│
└── img/
    ├── banière1.png
    ├── banière2.png
    ├── banière3.png
    ├── Efrei-logo-couleur.svg
    └── logo_MyEfrei.svg

---
 
## 🚀 Pages
 
### 🏠 Accueil
- Carrousel d'images plein écran avec texte superposé
- Navigation sticky transparente avec backdrop blur
### 📚 Formation
- Accordéons à deux niveaux : **Prépa / Bachelor / Master** → années et majors
- Ressources pédagogiques avec badges **Corrigé** et **Annale**
### 👨‍🏫 Équipe
- Grille de cartes enseignants avec **effet de retournement 3D**
- Recto : photo + nom en bas à gauche
- Verso : formation, cours dispensés, thèmes de recherche, tags
- Bouton ↻ pour tourner la carte
### 📅 Agenda
- Calendrier hebdomadaire interactif
- Mini calendrier mensuel en sidebar
- Données des cours configurables dans `js/calendar-data.js`
### ℹ️ À propos
- **Chatbot IA** propulsé par l'API Claude (Anthropic)
- Liens vers les réseaux sociaux : LinkedIn, Instagram, Snapchat
- Adresse et contact du département
---
 
## ⚙️ Installation
 
Aucune dépendance, aucun framework. Ouvrez simplement `html/accueil.html` dans un navigateur.
 
```bash
git clone https://github.com/votre-repo/dept-info-efrei.git
cd dept-info-efrei
# Ouvrir html/accueil.html dans votre navigateur
```
 
---
 
## 🛠️ Personnalisation
 
### Ajouter un cours au planning
Ouvrez `js/calendar-data.js` et copiez un objet existant :
```js
{
    title: "Nom du cours",
    start: "2025-09-15T09:00",
    end:   "2025-09-15T11:00",
    color: "#3b82f6"
}
```
 
### Ajouter un professeur
Dans `html/equipe.html`, ajoutez un objet dans le tableau `profs` :
```js
{
    name: "Prénom Nom",
    role: "Enseignant en ...",
    photo: "../img/profs/nom.jpg",  // ou null pour les initiales
    studies: "Doctorat en ...",
    courses: "Cours 1, Cours 2",
    research: "Thème de recherche",
    tags: ["Tag1", "Tag2"]
}
```
 
### Ajouter une ressource pédagogique
Dans `html/formation.html`, dans le bon `sub-acc-inner` :
```html
<a href="lien-vers-fichier.pdf" class="resource-link">
    Nom de la ressource <span class="res-badge corrige">Corrigé</span>
</a>
```
 
---
 
## 🎨 Charte graphique
 
| Élément | Valeur |
|---|---|
| Couleur principale | `#1b57fb` |
| Couleur hover/accent | `#0056b3` |
| Badge Prépa | `#3b82f6` |
| Badge Bachelor | `#10b981` |
| Badge Master | `#8b5cf6` |
| Police | Inter (Google Fonts) |
 
---
 
## 📄 Licence
 
Projet étudiant — EFREI Paris 2025. Tous droits réservés.
 
```
 
