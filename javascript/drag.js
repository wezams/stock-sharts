function dragstartHandler(ev) {
    ev.dataTransfer.setData("text", ev.target.dataset.stock);
  }
  
  function dragoverHandler(ev) {
    ev.preventDefault();
  }
  
  function dropHandler(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    alert(data);
  }