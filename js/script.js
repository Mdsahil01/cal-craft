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
// Helper Functions
// ==========================

function updateDisplay() {
    display.value = currentInput;
}

function isOperator(value) {
    return ["+", "-", "*", "/", "%"].includes(value);
}

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
        updateDisplay();
    });
});

// ==========================
// Operator Button Events
// ==========================

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {

        const operator = button.textContent;

        // Prevent starting with an operator
        if (currentInput === "") {
            return;
        }

        const lastChar = currentInput.slice(-1);

        // Prevent consecutive operators
        if (
            isOperator(lastChar) &&
            isOperator(operator === "×" ? "*" : operator === "÷" ? "/" : operator)
        ) {
            return;
        }

        if (operator === "×") {
            currentInput += "*";
        } else if (operator === "÷") {
            currentInput += "/";
        } else {
            currentInput += operator;
        }

        updateDisplay();
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

        updateDisplay();
    });
});

// ==========================
// Equal Button
// ==========================

equalButton.addEventListener("click", () => {

    if (currentInput.trim() === "") {
        return;
    }

    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch {
        display.value = "Error";

        setTimeout(() => {
            currentInput = "";
            updateDisplay();
        }, 1000);
    }
});

// ==========================
// Keyboard Support
// ==========================

document.addEventListener("keydown", (event) => {

    const key = event.key;

    const allowedKeys = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        ".", "+", "-", "*", "/", "%",
        "Enter", "Backspace", "Escape"
    ];

    if (!allowedKeys.includes(key)) {
        return;
    }

    const lastChar = currentInput.slice(-1);

    // Prevent starting with an operator
    if (
        currentInput === "" &&
        ["+", "-", "*", "/", "%"].includes(key)
    ) {
        return;
    }

    // Prevent consecutive operators
    if (
        ["+", "-", "*", "/", "%"].includes(key) &&
        ["+", "-", "*", "/", "%"].includes(lastChar)
    ) {
        return;
    }

    // Prevent multiple decimal points
    if (key === ".") {
        const parts = currentInput.split(/[+\-*/%]/);

        if (parts[parts.length - 1].includes(".")) {
            return;
        }
    }

    // Numbers & Operators
    if (
        (key >= "0" && key <= "9") ||
        key === "." ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "%"
    ) {
        currentInput += key;
        updateDisplay();
    }

    // Calculate
    if (key === "Enter") {
        equalButton.click();
    }

    // Delete
    if (key === "Backspace") {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    }

    // Clear
    if (key === "Escape") {
        currentInput = "";
        updateDisplay();
    }
});