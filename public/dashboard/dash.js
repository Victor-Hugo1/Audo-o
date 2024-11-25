











const ctx = document.getElementById('meuGrafico').getContext('2d');



const meuGrafico = new Chart(ctx, {

    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Ranking',
            data: [12, 19, 3, 5, 2],

            backgroundColor: [
                'rgba(233,111,5, 0.9)',
                'rgba(233,111,5, 0.9)',
                'rgba(233,111,5, 0.9)'
            
            ],
            borderColor: [
                'rgba(233,111,5, 0.9)',
                'rgba(233,111,5, 0.9)',
                'rgba(233,111,5, 0.9)'
            
            ],
            borderWidth: 2,
            borderRadius: 10
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


const pizza = document.getElementById('graficoPizza').getContext('2d');



const graficoPizza= new Chart(pizza, {

    type: 'pie',
    data: {
        labels: ['Sentimental', 'Introvertido', 'Extrovertido'],
        datasets: [{
            label: 'Ranking',
            data: [12, 19,50],

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
