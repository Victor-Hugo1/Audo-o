const cachorro = document.querySelector('.cachorro')
const hidrante = document.querySelector('.hidrante')
const score = document.querySelector('.score')
var jaPulou = false
var contar = 0;

document.addEventListener('keydown', (e) => {
    if ((e.code === 'ArrowUp') | (e.code === 'Space')) {
        pular();
    }
});

function pular() {
    if (!cachorro.classList.contains('pular')); {
        cachorro.classList.add('pular');
        jaPulou = true;

        setTimeout(() => {
            cachorro.classList.remove('pular');
            jaPulou = false;
        }, 1100);
    }
}

setInterval(() => {
    var cachorroBottom = parseInt(
        window.getComputedStyle(cachorro).getPropertyValue('bottom')
    );
    var hidranteLeft = parseInt(
        window.getComputedStyle(hidrante).getPropertyValue('left')
    );
    if (hidranteLeft > 1 && hidranteLeft < 200 && cachorroBottom <= 2 && !jaPulou) {
        alert (`Game Over! Sua pontuação foi: ${contar}`);
        contar = 0;
    }
    contar++;
    score.innerHTML = `Pontuação: ${contar}`;
}, 10);