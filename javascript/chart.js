import { updateChartElement } from "./functions.js";
import { dropHandler } from "./drag.js";
import { dragoverHandler } from "./drag.js";
import { cowsays } from "./cowsay.js";

let ctx = document.getElementById('testChart');
const chartParent = document.getElementById('canvas-holder');
let chart = document.getElementById('testChart');
let chart1 = undefined;
let displayNumbers = false;
let numbersSize = 20;

      export function changeShart(){
        ctx = document.getElementById('testChart');
      }

      export function updateChartNumbersSize(size){
        if (numbersSize != size){
          cowsays(numbersSize + " is now number size")
          numbersSize = size;
          chart1.options.scales.x.ticks.font.size = numbersSize;
          chart1.options.scales.y.ticks.font.size = numbersSize;
          chart1.update();
        }
      }

      export function updateChartNumbersVisibilty(numbers){
        if (displayNumbers != numbers){
          cowsays(numbers + " is now set");
          displayNumbers = numbers;
          chart1.options.scales.y.ticks.display = displayNumbers;
          chart1.options.scales.x.ticks.display = displayNumbers;
          chart1.update();
        }
      }

      export function clearChart(){
        chartParent.removeChild(chart);
        chart = document.createElement('canvas');
        chart.id = "testChart";
        chart.ondrop = dropHandler;
        chart.ondragover = dragoverHandler;
        chartParent.appendChild(chart);
        updateChartElement();
      }

      export function createChart(data, numbers, size){
        displayNumbers = numbers;
        if (size + "" != "NaN"){
          numbersSize = size;
        }
        console.log(numbersSize)
        chart1 = new Chart(ctx, {
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
              x: {
                ticks: {
                  display: displayNumbers,
                  color: 'white',
                  font: {
                    size: numbersSize
                  },
                },
              },
              y: {
                beginAtZero: false,
                ticks: {
                  display: displayNumbers,
                  color: 'white',
                  font: {
                    size: numbersSize
                  },
                },
              }
            }
          }
        });
      }