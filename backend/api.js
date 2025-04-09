import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config({ path: './secrets/AlphaApi.env' });
const secretKey = process.env.SECRET_KEY;
const company = "BYDDY";

function formatDate(date) {
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate() - 1).padStart(2, '0'); //-1 cus sweden ig
  
    return `${year}-${month}-${day}`;
}

axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + company + '&apikey=' + secretKey)
  .then(response => {
    console.log(formatDate(new Date()))
    console.log(response.data["Time Series (Daily)"][formatDate(new Date())]);
  })
  .catch(error => {
    console.error('There was an error with the request:', error);
  });