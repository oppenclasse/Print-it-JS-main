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
	}
]

let currentIndex = 0;

const buttons = document.querySelectorAll(".arrow");

buttons.forEach((button) =>{
	button.addEventListener("click", (e) => {
		const calcNextSlide = e.target.id === "left" ? -1 : 1
		console.log(calcNextSlide);
	})
})

function afficheSlide (index) {
	const slide = slides[index];
	const image = document.querySelector('.banner-img');
    const tagLine = document.getElementById('tagLine');
	image.src = `./assets/images/slideshow/${slide.image}`;
	tagLine.innerHTML = slide.tagLine;
	
}


afficheSlide(currentIndex);