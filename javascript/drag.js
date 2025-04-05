let button = undefined;
let wrapper = undefined;
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
  wrapper = document.getElementById('stock-wrapper');
  button = document.getElementById('stock-button');
  stock = document.getElementById('stock-name');
  wrapper.style.display = "none";
  button.addEventListener("click", function(){
    if (wrapper.style.display == "none"){
      wrapper.style.display = "flex";
    }
    else {
      wrapper.style.display = "none";
    }
  });
});