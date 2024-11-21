const ctx = document.getElementById('meuGrafico').getContext('2d');

// Cria o gráfico
const meuGrafico = new Chart(ctx, {
    type: 'bar', // Tipo de gráfico (pode ser 'line', 'pie', 'doughnut', etc.)
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], // Rótulos do eixo X
        datasets: [{
            label: 'Vendas em R$', // Legenda do gráfico
            data: [12, 19, 3, 5, 2], // Dados do gráfico
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1 // Espessura da borda
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true // O eixo Y começa no zero
            }
        }
    }
});