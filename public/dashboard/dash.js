// GRAFICO RANKING
let Pontuadores = []
let Pontuacao = []


fetch("/pegarDados/pegarDados", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
}).then(function (resposta) {
    console.log("Peguei os 3 maiores valores")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);

            for (i = 0; i < json.length; i++) {
                Pontuadores.push(json[i].nome)
                Pontuacao.push(json[i].maiorPontuacao)
            }

            const ranking = document.getElementById('meuGrafico').getContext('2d');

            const data = {
                labels: Pontuadores,
                datasets: [{
                    label: 'Ranking',
                    backgroundColor: 'rgb(233, 111, 5, 0.9)',
                    data: Pontuacao,
                    borderRadius: 20
                },
                ]

            }

            const config = {
                type: 'bar',
                data: data,
                options:{
                    responsive: true, 
                    scales: {
                        x: {
                            grid: {
                                display: false 
                            }
                        },
                        y: {
                            ticks:{
                                display: false
                            },
                            grid: {
                                display: false 
                            },
                            beginAtZero: true 
                        }
                    }
                }
            }
           
            new Chart(ranking, config);


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


const pizza = document.getElementById('graficoPizza').getContext('2d');



const graficoPizza = new Chart(pizza, {

    type: 'pie',
    data: {
        labels: ['Sentimental', 'Introvertido', 'Extrovertido'],
        datasets: [{
            label: 'Ranking',
            data: [12, 19, 50],

            backgroundColor: [
                'rgba(255, 84, 0)',
                'rgba(255, 109, 0)',
                'rgba(255, 133, 0)'

            ],
            borderColor: [
                'rgba(255, 84, 0)',
                'rgba(255, 109, 0)',
                'rgba(255, 133, 0)'

            ],
            borderWidth: 2,
            borderRadius: 10,

        }]
    },
    options: {
        scales: {
            x: {
                ticks: {
                    display: false
                },
                grid: {
                    display: false // Remove as linhas de grade do eixo X
                }
            },
            y: {
                ticks: {
                    display: false
                },
                grid: {
                    display: false // Remove as linhas de grade do eixo Y
                },
                beginAtZero: true // O eixo Y começa no zero
            }
        }
    }
});


// DASH
