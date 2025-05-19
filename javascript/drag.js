//Modifierad kod tagen från w3school

import { clearChart } from "./shart.js";
import { createChart } from "./shart.js";
import {data} from './values.js'

let chart = undefined;
let button = undefined;
let drag_wrapper = undefined;
let click_wrapper = undefined;
let stock = undefined;
const BYDDY = {
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
const GME = {
  "x1": "2025-03-28",
  "x2": "2025-03-27",
  "x3": "2025-03-26",
  "x4": "2025-03-25",
  "x5": "2025-03-24",
  "y1": 9000,
  "y2": 12000,
  "y3": 16769,
  "y4": 19001,
  "y5": 20020,
}
const PLBY = {
  "x1": "2025-03-28",
  "x2": "2025-03-27",
  "x3": "2025-03-26",
  "x4": "2025-03-25",
  "x5": "2025-03-24",
  "y1": data["Time Series (Daily)"]["2025-03-14"]["2. high"],
  "y2": data["Time Series (Daily)"]["2025-03-13"]["2. high"],
  "y3": data["Time Series (Daily)"]["2025-03-12"]["2. high"],
  "y4": data["Time Series (Daily)"]["2025-03-11"]["2. high"],
  "y5": data["Time Series (Daily)"]["2025-03-10"]["2. high"],
}

function dragstartHandler(ev) {
  ev.dataTransfer.setData("stock-token", ev.target.dataset.stock);
} 
export function dragoverHandler(ev) {
  ev.preventDefault();
}
export function dropHandler(ev) {
  ev.preventDefault();
  event_Handler(ev);
}

function event_Handler(ev) {
  let data;
  if (ev.dataTransfer) {
    data = ev.dataTransfer.getData("stock-token");
  } 
  else{
    data = ev.target.dataset.stock;
  } 

  clearChart();
  console.log(data);

  if (data === "Build Your Dreams") {
    createChart(BYDDY, true, NaN);
  }
  if (data === "Gamestop") {
    createChart(GME, true, NaN);
  }
  if (data === "Playboy") {
    createChart(PLBY, true, NaN);
  }
  stock.innerText = data;
}


document.addEventListener("DOMContentLoaded", function(){

  chart = document.getElementById('testChart');
  drag_wrapper = document.getElementById('stock-drag-wrapper');
  click_wrapper = document.getElementById('stock-click-wrapper');
  button = document.getElementById('stock-button');
  stock = document.getElementById('stock-name');
  drag_wrapper.style.display = "none";
  click_wrapper.style.display = "none";

  chart.ondrop=dropHandler;
  chart.ondragover=dragoverHandler;

  for (let drag of drag_wrapper.children){
    drag.ondragstart= dragstartHandler;
  }
  for (let click of click_wrapper.children){
    click.addEventListener("click", function(ev){
      try{
        navigator.vibrate(50);
      }
      catch{
        console.log("browser does not support vibrate")
      }
      event_Handler(ev);
    });
  }

  button.addEventListener("click", function(){
    try{
      navigator.vibrate(50);
    }
    catch{
      console.log("browser does not support vibrate")
    }
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