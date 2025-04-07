//import dotenv from 'dotenv';
//import axios from 'axios';
import {data} from './values.js'
import { createChart, updateChart } from './chart.js';
import { setChart1 } from './values.js';
const ctx = document.getElementById('testChart');
const computedStyle = window.getComputedStyle(ctx);


const company = "BYDDY";
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
  createChart(bby, false)
}
else{
  createChart(bby, true)
}

//gör så att diagramet har en 2.1 aspect ratio och så att numrerna blir mindre när man minskar fönstret

window.addEventListener('resize', function() {
  if (window.innerWidth <= 600) { 
    ctx.style.height = parseInt(computedStyle.width) / 2 + "px";
    updateChart(false);
  }
  else{
    updateChart(true);
  }
});

//dotenv.config({ path: './secrets/AlphaApi.env' });
//const secretKey = process.env.SECRET_KEY;

/*axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + company + '&apikey=' + secretKey)
  .then(response => {
    console.log(response.data["Time Series (Daily)"]["2025-03-28"]);
  })
  .catch(error => {
    console.error('There was an error with the request:', error);
  });*/
