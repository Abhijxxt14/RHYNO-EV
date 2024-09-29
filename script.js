
let changingWords = ['Style', 'Elegance', 'Minimalism', 'Comfort'];
let wordIndex = 0;

function changeWord() {
    document.getElementById('changing-word').textContent = changingWords[wordIndex];
    wordIndex = (wordIndex + 1) % changingWords.length;
}

setInterval(changeWord, 3000);

let carouselIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
function showCarouselItem() {
    carouselItems.forEach(item => item.style.display = 'none');
    carouselItems[carouselIndex].style.display = 'block';
    carouselIndex = (carouselIndex + 1) % carouselItems.length;
}

setInterval(showCarouselItem, 5000);
