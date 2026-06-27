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

// ==========================
// Operator Button Events
// ==========================

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        const operator = button.textContent;

        if (operator === "×") {
            currentInput += "*";
        } else if (operator === "÷") {
            currentInput += "/";
        } else {
            currentInput += operator;
        }

        display.value = currentInput;
    });
});

// ==========================
// Function Buttons
// ==========================

functionButtons.forEach(button => {
    button.addEventListener("click", () => {
        const action = button.textContent;

        if (action === "AC") {
            currentInput = "";
        }

        if (action === "DEL") {
            currentInput = currentInput.slice(0, -1);
        }

        display.value = currentInput;
    });
});

// ==========================
// Equal Button
// ==========================

equalButton.addEventListener("click", () => {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch {
        display.value = "Error";
        currentInput = "";
    }
});