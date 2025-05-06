let BYDDY = undefined;
let GME = undefined;
let PLBY = undefined;
let today = {
    BYYDY: 1337,
    GME: 1337,
    PLBY: 40000
}
let yeterday = {
    BYYDY: 1338,
    GME: 1336,
    PLBY: 42069
}
document.addEventListener("DOMContentLoaded", function(){
    BYDDY = document.getElementById("BYDDY-tablePrice");
    GME = document.getElementById("GME-tablePrice");
    PLBY = document.getElementById("PLBY-tablePrice");
    if(today.BYYDY > yeterday.BYYDY){
        BYDDY.style.color = "greenyellow";
    }
    else{
        BYDDY.style.color = "red";
    }
    BYDDY.innerText = today.BYYDY + "";
    if(today.GME > yeterday.GME){
        GME.style.color = "greenyellow";
    }
    else{
        GME.style.color = "red";
    }
    GME.innerText = today.GME + "";
    if(today.PLBY > yeterday.PLBY){
        PLBY.style.color = "greenyellow";
    }
    else{
        PLBY.style.color = "red";
    }
    PLBY.innerText = today.PLBY + "";
});