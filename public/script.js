window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    const pontoDeMudanca = 50; // Defina o ponto onde a mudança ocorre

    if (window.scrollY > pontoDeMudanca) {
        header.classList.add("boxshadow");
    } else {
        header.classList.remove("boxshadow");

    }})


    document.addEventListener("DOMContentLoaded", function () {
        
        document.body.classList.add("transicao-blur-entrando");
    });
    
    function navigateTo(url) {
       
        document.body.classList.add("transicao-blur-saindo");
    
        setTimeout(function () {
            window.location.href = url;
        }, 400); 
    }



// Carrossel Sobre Mim
    var imgVictor = 0;
    var autorollVictor;

function moverVictor(direction) {
    const slides = document.querySelectorAll('.carrossel-imagem img');
    const totalSlides = slides.length;


    imgVictor += direction;

   
    if (imgVictor >= totalSlides) {
        imgVictor = 0;
    } else if (imgVictor < 0) {
        imgVictor = totalSlides - 1;
    }

    document.querySelector('.carrossel-imagem').style.transform = `translateX(-${imgVictor * 100}%)`;
}

function startVictor() {
    autorollVictor = setInterval(() => {
        moverVictor(1); 
    }, 5000); 
}
document.addEventListener("DOMContentLoaded", () => {
    startVictor(); })


// Carrossel Duque

var imgDuque = 0;
var autorollDuque;

function moverDuque(direction) {
const slides = document.querySelectorAll('.carrossel-imagem-2 img');
const totalSlides = slides.length;


imgDuque += direction;


if (imgDuque >= totalSlides) {
    imgDuque = 0;
} else if (imgDuque < 0) {
    imgDuque = totalSlides - 1;
}

document.querySelector('.carrossel-imagem-2').style.transform = `translateX(-${imgDuque * 100}%)`;
}

function startDuque() {
autorollDuque = setInterval(() => {
    moverDuque(1); 
}, 5000); 
}
document.addEventListener("DOMContentLoaded", () => {
startDuque(); })



// CARROSSEL Bob


var imgBob = 0;
var autorollBob;

function moverBob(direction) {
const slides = document.querySelectorAll('.carrossel-imagem-3 img');
const totalSlides = slides.length;


imgBob += direction;


if (imgBob >= totalSlides) {
    imgBob = 0;
} else if (imgBob < 0) {
    imgBob = totalSlides - 1;
}

document.querySelector('.carrossel-imagem-3').style.transform = `translateX(-${imgBob * 100}%)`;
}

function startBob() {
autorollBob = setInterval(() => {
    moverBob(1); 
}, 5000); 
}
document.addEventListener("DOMContentLoaded", () => {
startBob(); })




//ANIMACAO CARD

document.querySelectorAll('.card-ods').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('ativarRodar');
    });
});