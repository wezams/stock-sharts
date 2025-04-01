//import dotenv from 'dotenv';
//import axios from 'axios';
import {data} from './values.js'
import { createChart } from './chart.js';
import { setChart1 } from './values.js';

const company = "BYDDY";
const bby = {
  "x1": "1",
  "x2": "2",
  "x3": "3",
  "x4": "4",
  "x5": "5",
  "y1": "1337",
  "y2": "6969",
  "y3": "69",
  "y4": "1234",
  "y5": "5555",

}
setChart1(bby)
createChart(bby)

//dotenv.config({ path: './secrets/AlphaApi.env' });
//const secretKey = process.env.SECRET_KEY;

console.log(data["Time Series (Daily)"]["2025-03-28"]["2. high"]);


/*axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + company + '&apikey=' + secretKey)
  .then(response => {
    console.log(response.data["Time Series (Daily)"]["2025-03-28"]);
  })
  .catch(error => {
    console.error('There was an error with the request:', error);
  });*/
