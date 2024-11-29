// VAR GLOBAIS
let Introversao = 0;
let Sensivel = 0;
let Curiosa = 0;
let Energetica = 0;

let personalidade = document.getElementById("resultadoPersonalidade")


//PEGAR ESTILO DE CADA QUIZ

const quiz1 = document.getElementById('quiz1');
const quiz2 = document.getElementById('quiz2');
const quiz3 = document.getElementById('quiz3');
const quiz4 = document.getElementById('quiz4');
const quiz5 = document.getElementById('quiz5');
const quiz6 = document.getElementById('quiz6');
const quiz7 = document.getElementById('quiz7');
const quiz8 = document.getElementById('quiz8');
const quiz9 = document.getElementById('quiz9');
const quiz10 = document.getElementById('quiz10');
const cardFinalizado = document.getElementById('finalizado')


function resp1(resposta) {
  
    if (resposta == 1) {
         Introversao += 10

    } else if (resposta == 2) {
         Sensivel += 10
    }
    else if (resposta == 3) {
         Curiosa += 10
    }
    else if (resposta == 4) {
         Energetica += 10
    }

    quiz1.style.display = "none"
    quiz2.style.display = "flex"
}

function resp2(resposta) { 
      
    if (resposta == 1) {
        Introversao += 10

   } else if (resposta == 2) {
        Sensivel += 10
   }
   else if (resposta == 3) {
        Curiosa += 10
   }
   else if (resposta == 4) {
        Energetica += 10
   }

   quiz2.style.display = "none"
   quiz3.style.display = "flex"
}


function resp3(resposta) {
      
    if (resposta == 1) {
        Introversao += 10

   } else if (resposta == 2) {
        Sensivel += 10
   }
   else if (resposta == 3) {
        Curiosa += 10
   }
   else if (resposta == 4) {
        Energetica += 10
   }

   quiz3.style.display = "none"
   quiz4.style.display = "flex"

 }

function resp4(resposta) { 
      
    if (resposta == 1) {
        Introversao += 10

   } else if (resposta == 2) {
        Sensivel += 10
   }
   else if (resposta == 3) {
        Curiosa += 10
   }
   else if (resposta == 4) {
        Energetica += 10
   }

   quiz4.style.display = "none"
   quiz5.style.display = "flex"
}


function resp5(resposta) {
      
    if (resposta == 1) {
        Introversao += 10

   } else if (resposta == 2) {
        Sensivel += 10
   }
   else if (resposta == 3) {
        Curiosa += 10
   }
   else if (resposta == 4) {
        Energetica += 10
   }

   quiz5.style.display = "none"
   quiz6.style.display = "flex"

 }

function resp6(resposta) { 
      
    if (resposta == 1) {
        Introversao += 10

   } else if (resposta == 2) {
        Sensivel += 10
   }
   else if (resposta == 3) {
        Curiosa += 10
   }
   else if (resposta == 4) {
        Energetica += 10
   }

   quiz6.style.display = "none"
   quiz7.style.display = "flex"

}

function resp7(resposta) {
      
    if (resposta == 1) {
        Introversao += 10

   } else if (resposta == 2) {
        Sensivel += 10
   }
   else if (resposta == 3) {
        Curiosa += 10
   }
   else if (resposta == 4) {
        Energetica += 10
   }

   quiz7.style.display = "none"
   quiz8.style.display = "flex"

 }

function resp8(resposta) {
      
    if (resposta == 1) {
        Introversao += 10

   } else if (resposta == 2) {
        Sensivel += 10
   }
   else if (resposta == 3) {
        Curiosa += 10
   }
   else if (resposta == 4) {
        Energetica += 10
   }

   quiz8.style.display = "none"
   quiz9.style.display = "flex"

 }

function resp9(resposta) { 
      
    if (resposta == 1) {
        Introversao += 10

   } else if (resposta == 2) {
        Sensivel += 10
   }
   else if (resposta == 3) {
        Curiosa += 10
   }
   else if (resposta == 4) {
        Energetica += 10
   }

   quiz9.style.display = "none"
   quiz10.style.display = "flex"

}

function resp10(resposta) {
      
    if (resposta == 1) {
        Introversao += 10

   } else if (resposta == 2) {
        Sensivel += 10
   }
   else if (resposta == 3) {
        Curiosa += 10
   }
   else if (resposta == 4) {
        Energetica += 10
   }

   quiz10.style.display = "none"
   cardFinalizado.style.display = "flex"
   descobrirPersonalidade(Introversao,Sensivel,Curiosa,Energetica)
   

 }



 function descobrirPersonalidade(Introversao,Sensivel,Curiosa,Energetica){

    if
        ((Introversao > Sensivel) &&
        (Introversao > Curiosa) &&
        (Introversao > Energetica) ){
        personalidade.innerHTML = "Introversão" 
    }

    else if
        ((Sensivel > Introversao) &&
        (Sensivel > Curiosa) &&
        (Sensivel > Energetica) ){
        personalidade.innerHTML = "Sensível" 
    }

    else if
        ((Curiosa > Sensivel) &&
        (Curiosa > Introversao) &&
        (Curiosa > Energetica) ){
         personalidade.innerHTML = "Curiosa"
    }

    else if
        ((Energetica > Sensivel) &&
        (Energetica > Curiosa) &&
        (Energetica > Introversao) ){
        personalidade.innerHTML = "Energética" 
    }

    enviarPontuacoes(Introversao, Sensivel ,Curiosa, Energetica)
 }

 function enviarPontuacoes(){
      
 }