// ==========================
// Select Elements
// ==========================

const display = document.getElementById("display");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const functionButtons = document.querySelectorAll(".function");
const equalButton = document.querySelector(".equal");

// ==========================
// Variables
// ==========================

let currentInput = "";

// ==========================
// Number Button Events
// ==========================

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentInput += button.textContent;
        display.value = currentInput;
    });
});
