// GRAFICO RANKING
let Pontuadores = [];
let Pontuacao = [];
let idUsuario = sessionStorage.ID_USUARIO;
let UsuarioMax = document.getElementById('maiorPontuacao')
let qtdVezesJogadas = document.getElementById('qtdVezesJogadas')



fetch("/pegarDados/qtdVezesJogadas", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }, body: JSON.stringify({
        idUsuarioServer: idUsuario
    })
}).then(function (resposta) {
    console.log("Maior Valor do Usuário")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);

            qtdVezesJogadas.innerHTML = json[0].totalVezesJogadas
            
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



// MAIOR PONTUAÇÃO POR USUARIO
fetch("/pegarDados/maiorPontuacao", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }, body: JSON.stringify({
        idUsuarioServer: idUsuario
    })
}).then(function (resposta) {
    console.log("Maior Valor do Usuário")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);

            UsuarioMax.innerHTML = json[0].PontuacaoUsuario
            
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







// CRIAÇÃO DA DASHBOARD DE RANKING
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
                    label: '',
                    backgroundColor: 'rgb(233, 115, 5, 0.9)',
                    data: Pontuacao,
                    borderRadius: 20,
                    
                }]
            };
            
            const config = {
                type: 'bar',
                data: data,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false 
                        },
                        title: {
                            display: true,
                            text: 'Ranking das 3 Maiores Pontuações',
                            font: {
                                size: 22,
                                family: 'Arial',
                                style: 'bold'
                            },
                            color: '#000',
                            padding: { top: 10, bottom: 30 }
                        },
                        legend: {
                            labels: {
                                font: {
                                    size: 18,
                                    family: 'Arial',
                                    style: 'bold'
                                },
                                color: '#333'
                            }
                        }
                    },
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 20,
                                    style: 'bold'
                                },
                                color: '#000'
                            },
                            grid: {
                                display: false
                            }
                        },
                        y: {
                            ticks: {
                                display: false,
                                font: {
                                    size: 16
                                },
                                
                            },
                            grid: {
                                display: false
                            },
                            beginAtZero: true
                        }
                    }
                }
            };
            
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
        labels: ['Introversão', 'Sensível', 'Curiosa', 'Energética'],
        datasets: [{
            label: 'Ranking',
            data: [12, 19, 20, 40],

            backgroundColor: [
                'rgba(255, 84, 0)',
                'rgba(255, 109, 0)',
                'rgba(255, 133, 0)',
                'rgba(255, 153, 0)'

            ],
            borderColor: [
                'rgba(255, 84, 0)',
                'rgba(255, 109, 0)',
                'rgba(255, 133, 0)',
                'rgba(255, 153, 0)'

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
