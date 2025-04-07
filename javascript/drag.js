let button = undefined;
let drag_wrapper = undefined;
let click_wrapper = undefined;
let stock = undefined;

function dragstartHandler(ev) {
  ev.dataTransfer.setData("stock-token", ev.target.dataset.stock);
} 
function dragoverHandler(ev) {
  ev.preventDefault();
}
function dropHandler(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("stock-token");
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