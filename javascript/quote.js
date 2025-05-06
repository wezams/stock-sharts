import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { cowsays } from "./cowsay";

let quoteBox = null;
let calendar = null;
let dates = null;
let quotes = {
    "2025-03-26": "Just live man",
    "2025-03-27": "penis is the hotdog of a man",
    "2025-03-28": "You gay sonova bitch",
    "2025-03-29": "I have the 69th of ace",
    "2025-03-30": "If you have luck, she will suck",
    "2025-03-31": "I may be dumb, but at least i'm not Martin"
};

document.addEventListener("DOMContentLoaded", () => {
    dates = Object.keys(quotes);
    const temp = dates[dates.length - 1];
    quoteBox = document.getElementById('quote');
    calendar = document.getElementById('calendar');
    calendar.value = temp;
    quoteBox.innerText = quotes[temp];
    calendar.addEventListener('input', function() {
        var inputValue = this.value.trim();
        quoteBox.innerText = quotes[inputValue];
    });
    flatpickr("#calendar", {
        dateFormat: "Y-m-d",
        minDate: dates[0],     
        maxDate: dates[dates.length - 1],
        theme: "light",    
    });
    cowsays("Hej Danne!");
});