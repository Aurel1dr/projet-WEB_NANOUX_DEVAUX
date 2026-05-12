const piste = document.getElementById('carrousel-piste'); // cherche un élément HTML par son id + stocke les références dans des variables pour ne pas les re-chercher à chaque fois
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const conteneurPoints = document.getElementById('carrousel-points');

const nombreDeDiapos = document.querySelectorAll('.diapo').length; // On compte le nb de diapos en cherchant tous les éléments avec la classe "diapo"// ".length" = d'éléments trouvés

let indexActuel = 0; // 0 = premiere diapo, la banière avec les prof 

let timerAuto; // reinitialiszr le temps pour switch automatique


// Génération des points
// nb boutons = nb diapos
for (let i = 0; i < nombreDeDiapos; i++) {
    const point = document.createElement('button');
    point.className = 'point';
    point.setAttribute('aria-label', `Diapositive ${i + 1}`);
 
    point.addEventListener('click', () => allerA(i)); // clique sur un point, on va directement à la diapo

    conteneurPoints.appendChild(point);    // ajoute le point dans le conteneur HTML
}

const tousLesPoints = conteneurPoints.querySelectorAll('.point');// On récupère tous les points qu'on vient de créer dans un tableau



// - Fonction principale : aller à une diapo précise -
function allerA(index) {

    // "transform: translateX" déplace la piste horizontalement => sur la diapo 0 : translateX(0%)   → piste à sa position d'origine ; Si on est sur la diapo 1 : translateX(-33.33%) → piste décalée de 1/3 vers la gauche ...
    const decalage = -(100 / nombreDeDiapos) * index;
    piste.style.transform = `translateX(${decalage}%)`;

    indexActuel = index;    // MAJ l'index actuel


    // MAJ les points : on retire "actif" partout puis on l'ajoute au bon
    tousLesPoints.forEach((point, i) => {
        point.classList.toggle('actif', i === index);
    });
}


// - Boutons fléchés -
btnNext.addEventListener('click', () => {
    const suivant = (indexActuel + 1) % nombreDeDiapos;    // quand on dépasse la dernière diapo, on revient à 0 + Exemple avec 3 diapos : (2 + 1) % 3 = 0 → retour au début
    allerA(suivant);
    reinitialiserTimer(); // on repart de 0 dans le compte à rebours automatique
});

btnPrev.addEventListener('click', () => {
    const precedent = (indexActuel - 1 + nombreDeDiapos) % nombreDeDiapos;    // Pour aller en arrière 
    allerA(precedent);
    reinitialiserTimer();
});


// - Défilement automatique -
function demarrerTimer() {
    //  appelle une fonction toutes les 4s + Il renvoie un identifiant qu'on garde pour pouvoir l'annuler
    timerAuto = setInterval(() => {
        const suivant = (indexActuel + 1) % nombreDeDiapos;
        allerA(suivant);
    }, 6000);
}

function reinitialiserTimer() {
    clearInterval(timerAuto);    // annule le timer en cours
    demarrerTimer();    //  redémarre un nouveau
}

// - Initialisation -
allerA(0);// (index 0) au chargement de la page
demarrerTimer();// On démarre le défilement automatique

//  ANIMATION NAV + BOUTONS CARROUSEL 
window.addEventListener("DOMContentLoaded", () => {
    const carrousel = document.getElementById("carrousel");
    if (!carrousel) return;

    const links = document.querySelectorAll(".nav-links a, .link-page");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const url = this.href;

            if (typeof timerAuto !== "undefined") clearInterval(timerAuto);

            const diapoActive = document.querySelectorAll('.diapo')[indexActuel];            // On mémorise l'image de la diapo active pour la bannière
            const imgSrc = diapoActive ? diapoActive.querySelector('img').getAttribute('src') : '';
            sessionStorage.setItem('bannerImg', imgSrc);

            carrousel.classList.add("small");

            setTimeout(() => {
                window.location.href = url;
            }, 800);
        });
    });
});