// GRAFICO RANKING
let Pontuadores = [];
let Pontuacao = [];
let idUsuario = sessionStorage.ID_USUARIO;
let UsuarioMax = document.getElementById('maiorPontuacao')
let qtdVezesJogadas = document.getElementById('qtdVezesJogadas')
let suaPersonalidade = document.getElementById('personalidade')
// GRAFICO PERSONALIDADE
let PersonalidadesGrafico = []
let Compatibilidade = []



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

            const color = [
                'rgba(255, 72, 0)',
                'rgba(255, 109, 0)',
                'rgba(255, 145, 0)',
            ]
            const data = {
                labels: Pontuadores,
                datasets: [{
                    label: '',
                    backgroundColor: color,
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







// CRIAÇÃO DA DASHBOARD DE PERSONALIDADE



fetch("/quiz/pegarPersonalidade", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }, body: JSON.stringify({
        idUsuarioServer: idUsuario
    })
}).then(function (resposta) {
    console.log("Peguei as personalidades")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);


            PersonalidadesGrafico.push(json[0].Personalidades)
            PersonalidadesGrafico.push(json[1].Personalidades)
            PersonalidadesGrafico.push(json[2].Personalidades)
            PersonalidadesGrafico.push(json[3].Personalidades)
            Compatibilidade.push(json[0].compatibilidade)
            Compatibilidade.push(json[1].compatibilidade)
            Compatibilidade.push(json[2].compatibilidade)
            Compatibilidade.push(json[3].compatibilidade)


            const personalidade = document.getElementById('graficoPizza').getContext('2d');

            const cores = [
                'rgba(255, 72, 0)',
                'rgba(255, 109, 0)',
                'rgba(255, 145, 0)',
                'rgba(255, 170, 0)'
            ];


            const data = {
                labels: PersonalidadesGrafico,
                datasets: [{
                    label: '',
                    backgroundColor: cores,
                    data: Compatibilidade,
                    borderRadius:10
                }],

            };

            const config = {
                type: 'pie',
                data: data,
                options: {
                    responsive: true,
                    plugins: {
                        datalabels: {
                            color: '#fff', // Cor do texto
                            font: {
                                size: 16,
                                family: 'Arial',
                                weight: 'bold'
                            },
                            formatter: (value, ctx) => {
                                // Calculando a porcentagem
                                const total = ctx.chart.data.datasets[0].data.reduce((sum, val) => sum + val, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return percentage > 0 ? `${percentage}%` : '';
                            }
                        },
                        legend: {
                            display: true,
                            labels: {
                                font: {
                                    size: 18,
                                    family: 'Arial',
                                    style: 'bold'
                                },
                                color: '#333'
                            }
                        },
                        title: {
                            display: true,
                            text: 'Gráfico Personalidade',
                            font: {
                                size: 22,
                                family: 'Arial',
                                style: 'bold'
                            },
                            color: '#000',
                            padding: { top: 10, bottom: 30 }
                        }
                    }
                },
                plugins: [ChartDataLabels] 
            };
            new Chart(personalidade, config);


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



//KPI PERSONALIDADE

fetch("/quiz/kpiPersonalidade", {
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

            suaPersonalidade.innerHTML = json[0].Personalidades

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



// DASH