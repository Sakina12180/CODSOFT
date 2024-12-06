let display = document.getElementById("display");

function clearAll() {
    display.textContent = "0";
}

function deleteLast() {
    display.textContent = display.textContent.slice(0, -1) || "0";
}

function appendNumber(number) {
    if (display.textContent === "0") {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}

function appendOperator(operator) {
    const lastChar = display.textContent[display.textContent.length - 1];

    // Remove the initial zero if it's the first input
    if (display.textContent === "0" && (operator === "-" || operator === "(")) {
        display.textContent = operator;
        return;
    }
    
    // Check if last character is an operator to avoid duplicates
    if (["+", "-", "*", "/", "%"].includes(lastChar) && operator !== "(" && operator !== ")") {
        display.textContent = display.textContent.slice(0, -1) + operator;
    } else {
        display.textContent += operator;
    }
}

function calculate() {
    try {
        display.textContent = eval(display.textContent.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch (error) {
        display.textContent = "Error";
    }
}
