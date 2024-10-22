// Declare arrays to store numbers and operators
let numbers = []; // Array to store numbers
let operators = []; // Array to store operators

function appendValue(value) {
    // Get the current display value
    let display = document.getElementById("display").value;

    // Append the clicked value to the display
    document.getElementById("display").value = display + value;
}

function setOperation(op) {
    let display = document.getElementById("display").value;

    // If the display is not empty, parse the last number
    if (display !== '') {
        numbers.push(parseFloat(display));
        operators.push(op);
        document.getElementById("display").value = ''; // Clear the display
    }
}

function clearResult() {
    numbers = []; // Reset numbers array
    operators = []; // Reset operators array
    document.getElementById("display").value = ''; // Clear display
}

function calculateResult() {
    let display = document.getElementById("display").value;

    // If there's a number in the display, push it to the numbers array
    if (display !== '') {
        numbers.push(parseFloat(display));
    }

    if (numbers.length === 0) {
        document.getElementById("display").value = 'Error';
        return;
    }

    let result = numbers[0]; // Initialize the result with the first number

    // Loop through the operators and apply them to the numbers
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '+') {
            result += numbers[i + 1];
        } else if (operators[i] === '-') {
            result -= numbers[i + 1];
        } else if (operators[i] === '*') {
            result *= numbers[i + 1];
        } else if (operators[i] === '/') {
            result = numbers[i + 1] !== 0 ? result / numbers[i + 1] : 'Error';
        } else if (operators[i] === '%') {
            // Calculate percentage of the previous number
            let percentage = numbers[i + 1] / 100; 
            result = result * percentage; // Apply percentage calculation
        }
    }

    // Update the display with the final result
    document.getElementById("display").value = result;

    // Clear arrays for new calculation but only after showing result
    numbers = [];
    operators = [];
}

// Currency conversion functions
function converttoUSD() {
    const amountInINR = parseFloat(document.getElementById("display").value);
    const conversionRate = 0.012; // Example rate: 1 INR = 0.012 USD
    const convertedAmount = amountInINR * conversionRate;
    document.getElementById("display").value = convertedAmount.toFixed(2) + " USD";
}

function converttoIND() {
    const amountInUSD = parseFloat(document.getElementById("display").value);
    const conversionRate = 83.33; // Example rate: 1 USD = 83.33 INR
    const convertedAmount = amountInUSD * conversionRate;
    document.getElementById("display").value = convertedAmount.toFixed(2) + " INR";
}

// Temperature conversion functions
function convertoCelsius() {
    const fahrenheit = parseFloat(document.getElementById("display").value);
    if (isNaN(fahrenheit)) {
        document.getElementById("display").value = 'Error';
        return;
    }
    const celsius = (fahrenheit - 32) * (5 / 9);
    document.getElementById("display").value = celsius.toFixed(2) + " °C";
}

function converttoFahrenheit() {
    const celsius = parseFloat(document.getElementById("display").value);
    if (isNaN(celsius)) {
        document.getElementById("display").value = 'Error'; // Handle invalid input
        return;
    }
    const fahrenheit = (celsius * (9 / 5)) + 32;
    document.getElementById("display").value = fahrenheit.toFixed(2) + " °F";
}
