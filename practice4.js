// 1️⃣ Define numeric variables
const num1 = 10;
const num2 = 5;

// 2️⃣ Separate functions for each operation

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

// 3️⃣ Call functions
const additionResult = add(num1, num2);
const subtractionResult = subtract(num1, num2);
const multiplicationResult = multiply(num1, num2);
const divisionResult = divide(num1, num2);

// 4️⃣ Display formatted results
console.log(`The result of ${num1} + ${num2} is ${additionResult}.`);
console.log(`The result of ${num1} - ${num2} is ${subtractionResult}.`);
console.log(`The result of ${num1} * ${num2} is ${multiplicationResult}.`);
console.log(`The result of ${num1} / ${num2} is ${divisionResult}.`);

