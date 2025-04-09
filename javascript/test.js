import {data} from './values.js'
import { createChart, updateChartNumbersSize, updateChartNumbersVisibilty } from './chart.js';
import { setChart1 } from './values.js';
const ctx = document.getElementById('testChart');
const computedStyle = window.getComputedStyle(ctx);

const bby = {
  "x1": "2025-03-28",
  "x2": "2025-03-27",
  "x3": "2025-03-26",
  "x4": "2025-03-25",
  "x5": "2025-03-24",
  "y1": data["Time Series (Daily)"]["2025-03-28"]["2. high"],
  "y2": data["Time Series (Daily)"]["2025-03-27"]["2. high"],
  "y3": data["Time Series (Daily)"]["2025-03-26"]["2. high"],
  "y4": data["Time Series (Daily)"]["2025-03-25"]["2. high"],
  "y5": data["Time Series (Daily)"]["2025-03-24"]["2. high"],

}
setChart1(bby)
if (window.innerWidth <= 600) { 
  createChart(bby, true, parseInt(computedStyle.width) / 37.5)
}
else{
  createChart(bby, true, 16)
}

window.addEventListener('resize', function() {
  if (window.innerWidth <= 600) { 
    ctx.style.height = parseInt(computedStyle.width) / 2 + "px";
    updateChartNumbersSize(parseInt(computedStyle.width) / 37.5);
  }
  else{
    updateChartNumbersVisibilty(16);
  }
});