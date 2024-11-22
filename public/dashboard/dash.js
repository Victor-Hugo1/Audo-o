const ctx = document.getElementById('meuGrafico').getContext('2d');



const meuGrafico = new Chart(ctx, {
  
    type: 'bar',
    data: {
        labels: ['Gigi', 'Outro', 'Mais Um'],
        datasets: [{
            label: 'Ranking',
            data: [12, 19, 3, 5, 2],
            
            backgroundColor: [
                'rgba(233,111,5, 0.5)',
                'rgba(233,111,5, 0.5)',
                'rgba(233,111,5, 0.5)',
                'rgba(233,111,5, 0.5)',
                'rgba(233,111,5, 0.5)'
            ],
            borderColor: [
                'rgba(233,111,5, 1)',
                'rgba(233,111,5, 1)',
                'rgba(233,111,5, 1)',
                'rgba(233,111,5, 1)',
                'rgba(233,111,5, 1)'
            ],
            borderWidth: 2,
            borderRadius:10
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
                ticks:{
                    display:false
                },
                grid: {
                    display: false // Remove as linhas de grade do eixo Y
                },
                beginAtZero: true // O eixo Y começa no zero
            }
        }
    }
});
