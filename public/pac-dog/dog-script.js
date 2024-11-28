var contar = 0;
var qtdVezesJogadas = 0;


var intervaloPontuacao;
const gameOver = document.getElementById("card-gameOver");
gameOver.style.backgroundColor = "transparent";


function tentarNovamente(){
    window.location.reload()
}

function ComecarJogo() {

    const botao = document.getElementById("botao");
    const game = document.getElementById("game");
    const gameOver = document.getElementById("card-gameOver");
    game.style.display = "block";
    botao.style.display = "none";
    gameOver.style.backgroundColor = "rgba(0, 0, 0, 0.753)";

    const cachorro = document.querySelector(".cachorro");
    const hidrante = document.querySelector(".hidrante");
    const score = document.querySelector(".score");
    var jaPulou = false;

    document.addEventListener("keydown", (e) => {
        if (e.code === "ArrowUp" || e.code === "Space") {
            pular();
        }
    });

    function pular() {
        if (!cachorro.classList.contains("pular")) {
            cachorro.classList.add("pular");
            jaPulou = true;

            setTimeout(() => {
                cachorro.classList.remove("pular");
                jaPulou = false;
            }, 1100);
        }
    }

    intervaloPontuacao = setInterval(() => {
        var cachorroBottom = parseInt(
            window.getComputedStyle(cachorro).getPropertyValue("bottom")
        );
        var hidranteLeft = parseInt(
            window.getComputedStyle(hidrante).getPropertyValue("left")
        );
        if (hidranteLeft > -80 && hidranteLeft < 80 && cachorroBottom <= 4  && !jaPulou) {
           mostrarResultados();
            return;
        }
        contar++;
        score.innerHTML = `Pontuação: ${contar}`;
    }, 5);

    qtdVezesJogadas ++;
}

function mostrarResultados() {

    const hidrante = document.getElementById("hidrante");
    const gameOver = document.getElementById("card-gameOver");
    const ptFinal = document.getElementById("pontuacaoFinal");

    var idUsuario = sessionStorage.getItem("ID_USUARIO")

    
    clearInterval(intervaloPontuacao);
    hidrante.style.animation = "none";
    gameOver.style.zIndex = 1;
    ptFinal.innerHTML += `Pontuação Final: ${contar}`;

    
    fetch("/dogJump/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            contarServer: contar,
            idUsuarioServer: idUsuario,
            qtdVezesJogadasServer : qtdVezesJogadas,
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
            });

        } else {

            console.log("Houve um erro ao armazenar sua pontuação!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    contar = 0

    return false;



 

    
}





