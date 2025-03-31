import dotenv from 'dotenv';
//import axios from 'axios';
import {data} from './values.js'

//const company = "BYDDY";

dotenv.config({ path: './secrets/AlphaApi.env' });
const secretKey = process.env.SECRET_KEY;

console.log(data["Time Series (Daily)"]["2025-03-28"]["2. high"]);

/*
axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + company + '&apikey=' + secretKey)
  .then(response => {
    console.log(response.data["Time Series (Daily)"]["2025-03-28"]);
  })
  .catch(error => {
    console.error('There was an error with the request:', error);
  });
*/