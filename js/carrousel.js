// ========== CARROUSEL ==========

// "document.getElementById" cherche un élément HTML par son id
// On stocke les références dans des variables pour ne pas les re-chercher à chaque fois
const piste = document.getElementById('carrousel-piste');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const conteneurPoints = document.getElementById('carrousel-points');

// On compte le nombre de diapos en cherchant tous les éléments avec la classe "diapo"
// ".length" donne le nombre d'éléments trouvés
const nombreDeDiapos = document.querySelectorAll('.diapo').length;

// La diapo actuellement affichée (0 = première, 1 = deuxième, etc.)
let indexActuel = 0;

// Chaque fois qu'on avance, on note l'heure — ça sert à réinitialiser le timer auto
let timerAuto;


// ── Génération des points ──

// On crée autant de boutons-points qu'il y a de diapos
for (let i = 0; i < nombreDeDiapos; i++) {

    // "document.createElement" crée un nouvel élément HTML (ici un bouton)
    const point = document.createElement('button');

    // On lui donne la classe CSS "point" (définie dans styles.css)
    point.className = 'point';

    // Accessibilité : texte lu par les lecteurs d'écran
    point.setAttribute('aria-label', `Diapositive ${i + 1}`);

    // Quand on clique sur un point, on va directement à la diapo correspondante
    // "i" est capturé dans la closure — chaque bouton garde sa propre valeur de i
    point.addEventListener('click', () => allerA(i));

    // On ajoute le point dans le conteneur HTML
    conteneurPoints.appendChild(point);
}

// On récupère tous les points qu'on vient de créer dans un tableau
const tousLesPoints = conteneurPoints.querySelectorAll('.point');


// ── Fonction principale : aller à une diapo précise ──

function allerA(index) {

    // "transform: translateX" déplace la piste horizontalement
    // Si on est sur la diapo 0 : translateX(0%)   → piste à sa position d'origine
    // Si on est sur la diapo 1 : translateX(-33.33%) → piste décalée de 1/3 vers la gauche
    // Si on est sur la diapo 2 : translateX(-66.66%) → piste décalée de 2/3 vers la gauche
    // La transition CSS (définie dans styles.css) anime ce déplacement automatiquement
    const decalage = -(100 / nombreDeDiapos) * index;
    piste.style.transform = `translateX(${decalage}%)`;

    // On met à jour l'index actuel
    indexActuel = index;

    // On met à jour les points : on retire "actif" partout puis on l'ajoute au bon
    tousLesPoints.forEach((point, i) => {
        // "toggle" ajoute ou retire une classe selon la condition (true/false)
        point.classList.toggle('actif', i === index);
    });
}


// ── Boutons fléchés ──

btnNext.addEventListener('click', () => {
    // "%" est l'opérateur modulo : quand on dépasse la dernière diapo, on revient à 0
    // Exemple avec 3 diapos : (2 + 1) % 3 = 0 → retour au début
    const suivant = (indexActuel + 1) % nombreDeDiapos;
    allerA(suivant);
    reinitialiserTimer(); // on repart de 0 dans le compte à rebours automatique
});

btnPrev.addEventListener('click', () => {
    // Pour aller en arrière : si on est à 0, on va au dernier
    // "nombreDeDiapos - 1" = index de la dernière diapo
    const precedent = (indexActuel - 1 + nombreDeDiapos) % nombreDeDiapos;
    allerA(precedent);
    reinitialiserTimer();
});


// ── Défilement automatique ──

function demarrerTimer() {
    // "setInterval" appelle une fonction toutes les X millisecondes (ici 4000 = 4 secondes)
    // Il renvoie un identifiant qu'on garde pour pouvoir l'annuler
    timerAuto = setInterval(() => {
        const suivant = (indexActuel + 1) % nombreDeDiapos;
        allerA(suivant);
    }, 6000);
}

function reinitialiserTimer() {
    // "clearInterval" annule le timer en cours (sinon il y aurait 2 timers qui tournent)
    clearInterval(timerAuto);
    // On en redémarre un nouveau, propre
    demarrerTimer();
}


// ── Initialisation ──

// On affiche la première diapo (index 0) au chargement de la page
allerA(0);

// On démarre le défilement automatique
demarrerTimer();