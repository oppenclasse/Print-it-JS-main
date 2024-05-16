const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
]


let currentIndex = 0;

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

arrowLeft.addEventListener('click', prevSlide);
arrowRight.addEventListener('click', nextSlide);

// Fonction pour passer à la diapositive suivante-----------------------
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Incrémente l'index ou revient à zéro si on atteint la fin
    showSlide(currentIndex); // Affiche la diapositive suivante
}


// Fonction pour passer à la diapositive précédente---------------------
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Décrémente l'index ou revient à la fin si on atteint zéro
    showSlide(currentIndex); // Affiche la diapositive précédente
}

// Fonction pour afficher une diapositive spécifique--------------------
function showSlide(index) {
    // Récupère la diapositive correspondant à l'index donné
    const slide = slides[index];

    // Sélectionne l'élément de l'image dans le DOM
    const image = document.querySelector('.banner-img');
    // Sélectionne l'élément du texte de la diapositive dans le DOM
    const tagLine = document.getElementById('tagLine');

    // Met à jour l'attribut src de l'image avec le chemin de l'image de la diapositive actuelle
    image.src = `./assets/images/slideshow/${slide.image}`;
    // Met à jour le contenu HTML de l'élément du texte avec le texte de la diapositive actuelle
    tagLine.innerHTML = slide.tagLine;
    // Met à jour les points de navigation
    updateDots(index);
    
}
// Fonction pour mettre à jour les points de navigation------------------------
function updateDots(index) {
    // Sélectionne le conteneur des points de navigation dans le DOM
    const dotsContainer = document.querySelector('.dots');

    // Efface les anciens points de navigation
    dotsContainer.innerHTML = '';

    // Pour chaque diapositive, crée une balle de navigation correspondante
    slides.forEach((slide, i) => {
        const dot = document.createElement('div'); // Crée un élément div pour la balle de navigation
        dot.classList.add('dot'); // Ajoute la classe 'dot' à la balle de navigation

        // Si l'index de la diapositive correspond à l'index actuel, ajoute la classe 'dot_selected' pour la mise en surbrillance
        if (i === index) {
            dot.classList.add('dot_selected');
        }

        // Ajoute la balle de navigation au conteneur des points de navigation
        dotsContainer.appendChild(dot);
    });
}



// appelle de la fonction-------
showSlide(currentIndex);
