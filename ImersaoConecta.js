var idOpne = document.getElementById('OpenMenu');
var idClose = document.getElementById('closemenu');

function OpenMenu() {
    idOpne.style.display = 'none';
   idClose.style.display = 'flex';

};

function CloseMenu() {

    
    idOpne.style.display = 'flex';
    idClose.style.display = 'none';

};

function scrollCarrossel(direction) {
    const carrosel = document.querySelector('.carrosel');
    const scrollAmount = carrosel.clientWidth; 
    carrosel.scrollBy({ 
        left: direction * scrollAmount, 
        behavior: 'smooth' 
    });
}

let currentIndex = 0;

function moveCarousel(direction) {
    const carouselContainer = document.querySelector('.carousel-container');
    const images = document.querySelectorAll('.carousel-image');
    const imageWidth = images[0].clientWidth;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    carouselContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

const modal = document.getElementById("modal");
const expandedImg = document.getElementById("expandedImg");

document.querySelectorAll('.carousel-image').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        expandedImg.src = this.src;
    });
});

function closeModal() {
    modal.style.display = "none";
}

function formatarMoeda(input) {
    let valor = input.value;
    
    valor = valor.replace(/\D/g, '');

    valor = (valor / 100).toFixed(2) + '';
    valor = valor.replace(".", ",");
    valor = valor.replace(/(\d)(?=(\d{3})+\,)/g, "$1.");

    input.value = 'R$ ' + valor;
}

function formatarTelefone(input) {
    let valor = input.value;

    valor = valor.replace(/\D/g, '');

    if (valor.length > 9) {
        valor = valor.substring(0, 11);
    }

    valor = valor.replace(/^(\d{2})(\d{0,7})/, "($1) $2");

    input.value = valor;
}


let startX;
let scrollLeft;
let isDragging = false;

const carousel = document.querySelector('.carousel-container');

carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isDragging = false;
});

carousel.addEventListener('mouseup', () => {
    isDragging = false;
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Velocidade de rolagem
    carousel.scrollLeft = scrollLeft - walk;
});

// Para dispositivos móveis
carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    isDragging = true;
});

carousel.addEventListener('touchend', () => {
    isDragging = false;
});

carousel.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Velocidade de rolagem
    carousel.scrollLeft = scrollLeft - walk;
});