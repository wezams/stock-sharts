import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let quotes = {
    "2025-03-26": "Just live man",
    "2025-03-27": "penis is the hotdog of a man",
    "2025-03-28": "You gay sonova bitch",
    "2025-03-29": "I have the 69 of ace"
};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('myDatePicker').addEventListener('input', function() {
        var inputValue = this.value.trim();
        console.log(inputValue)
        console.log(quotes[inputValue]);
        quotes["2025-03-26"]
    });
    flatpickr("#myDatePicker", {
        dateFormat: "Y-m-d",
        minDate: Object.keys(quotes)[0],     
        maxDate: Object.keys(quotes)[Object.keys(quotes).length - 1],
        theme: "light",    
    });
});