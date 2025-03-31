import {data} from './values.js'
const ctx = document.getElementById('testChart');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['24', '25', '26', '27', '28'],
            datasets: [{
              label: 'Stock',
              data: [data["Time Series (Daily)"]["2025-03-24"]["2. high"], data["Time Series (Daily)"]["2025-03-25"]["2. high"], data["Time Series (Daily)"]["2025-03-26"]["2. high"], data["Time Series (Daily)"]["2025-03-27"]["2. high"], data["Time Series (Daily)"]["2025-03-28"]["2. high"]],
              borderWidth: 1,
              borderColor: 'rgb(0, 255, 38)',  // Line color (solid blue)
              backgroundColor: 'rgb(0, 255, 38)',
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: false
              }
            }
          }
        });