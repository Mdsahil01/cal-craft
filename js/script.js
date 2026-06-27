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
        
        if (button.textContent === ".") {
    const parts = currentInput.split(/[+\-*/%]/);

    if (parts[parts.length - 1].includes(".")) {
        return;
    }
}
        currentInput += button.textContent;
        display.value = currentInput;
    });
});

// =================
// Isoperator function
// ===================

function isOperator(value) {
    return ["+", "-", "*", "/", "%"].includes(value);
}

// ==========================
// Operator Button Events
// ==========================

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        const operator = button.textContent;
        const lastChar = currentInput.slice(-1);

if (isOperator(lastChar) && isOperator(operator)) {
    return;
}

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