const ctx = document.getElementById('testChart');
      export function createChart(data){
        console.log(data.dataset1)
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: [data.x1, data.x2, data.x3, data.x4, data.x5],
            datasets: [{
              label: 'Share price',
              data: [data.y1, data.y2, data.y3, data.y4, data.y5],
              borderWidth: 1,
              borderColor: 'rgb(0, 255, 38)',
              backgroundColor: 'rgb(0, 255, 38)',
            }]
          },
          options: {
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              y: {
                beginAtZero: false
              }
            }
          }
        });
      }