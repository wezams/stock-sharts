console.log(document.currentScript) + "pp";
import { clearChart } from "./chart";
import { createChart } from "./chart";

let button = undefined;
let drag_wrapper = undefined;
let click_wrapper = undefined;
let stock = undefined;
const BYDDY = {
  "x1": "2024-03-28",
  "x2": "2024-03-27",
  "x3": "2024-03-26",
  "x4": "2024-03-25",
  "x5": "2024-03-24",
  "y1": data["Time Series (Daily)"]["2025-03-28"]["2. high"],
  "y2": data["Time Series (Daily)"]["2025-03-27"]["2. high"],
  "y3": data["Time Series (Daily)"]["2025-03-26"]["2. high"],
  "y4": data["Time Series (Daily)"]["2025-03-25"]["2. high"],
  "y5": data["Time Series (Daily)"]["2025-03-24"]["2. high"],
}
const GME = {
  "x1": "2023-03-28",
  "x2": "2023-03-27",
  "x3": "2023-03-26",
  "x4": "2023-03-25",
  "x5": "2023-03-24",
  "y1": data["Time Series (Daily)"]["2025-03-28"]["2. high"],
  "y2": data["Time Series (Daily)"]["2025-03-27"]["2. high"],
  "y3": data["Time Series (Daily)"]["2025-03-26"]["2. high"],
  "y4": data["Time Series (Daily)"]["2025-03-25"]["2. high"],
  "y5": data["Time Series (Daily)"]["2025-03-24"]["2. high"],
}
const PLBY = {
  "x1": "2022-03-28",
  "x2": "2022-03-27",
  "x3": "2022-03-26",
  "x4": "2022-03-25",
  "x5": "2022-03-24",
  "y1": data["Time Series (Daily)"]["2025-03-28"]["2. high"],
  "y2": data["Time Series (Daily)"]["2025-03-27"]["2. high"],
  "y3": data["Time Series (Daily)"]["2025-03-26"]["2. high"],
  "y4": data["Time Series (Daily)"]["2025-03-25"]["2. high"],
  "y5": data["Time Series (Daily)"]["2025-03-24"]["2. high"],
}

function dragstartHandler(ev) {
  ev.dataTransfer.setData("stock-token", ev.target.dataset.stock);
} 
function dragoverHandler(ev) {
  ev.preventDefault();
}
function dropHandler(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("stock-token");
  clearChart();
  if(data == "BYDDY"){
    createChart(BYDDY, true, 16);
  }
  if(data == "GME"){
    createChart(GME, true, 16);
  }
  if(data == "PLBY"){
    createChart(PLBY, true, 16);
  }
  stock.innerText = data;
}

document.addEventListener("DOMContentLoaded", function(){

  drag_wrapper = document.getElementById('stock-drag-wrapper');
  click_wrapper = document.getElementById('stock-click-wrapper')
  button = document.getElementById('stock-button');
  stock = document.getElementById('stock-name');
  drag_wrapper.style.display = "none";
  click_wrapper.style.display = "none";
  button.addEventListener("click", function(){
    navigator.vibrate(50);
    if (window.innerWidth >= 600) { 
      if (drag_wrapper.style.display == "none"){
        drag_wrapper.style.display = "flex";
      }
      else {
        drag_wrapper.style.display = "none";
      }
    }
    else{
      if (click_wrapper.style.display == "none"){
        click_wrapper.style.display = "flex";
      }
      else {
        click_wrapper.style.display = "none";
      }
    }
  });
});

window.addEventListener('resize', function() {
  if (window.innerWidth <= 600) {
    drag_wrapper.style.display = "none";
  }
  else{
    click_wrapper.style.display = "none";
  }
});