import { calculate } from "./math.js";

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInputs = document.querySelectorAll(".calculator__input");
const calculatorResult = document.querySelector(".calculator__result");
const calculatorClear = document.querySelector(".calculator__clear");
const calculatorOperators = document.querySelectorAll(".calculator__operator");

let numberOne = 0;
let numberTwo = 0;
let operator = "";

// playground operators
// function handleResultClick() {
//   numberTwo = Number(calculatorOutput.value);

//   if (calculatorOperator.innerText = "+") {
//     calculatorOutput.value = add(numberOne, numberTwo);
//     else if (calculatorOperator.innerText = "-") {calculatorOutput.value = subtract(numberOne, numberTwo);}
//     else if (calculatorOperator.innerText = "*") {calculatorOutput.value = multiply(numberOne, numberTwo);}
//     else ((calculatorOperator.innerText = "/") {calculatorOutput.value = divide(numberOne, numberTwo);}
//     console.log(
//       "handleResultClick",
//       numberOne,
//       numberTwo,
//       calculatorOutput.value
//     );
//   }

// calculatorResult.addEventListener("click", handleResultClick);

// Result-Funktion für = einfügen
function handleResultClick() {
  numberTwo = Number(calculatorOutput.value);
  calculatorOutput.value = calculate(numberOne, numberTwo, operator);
  console.log(
    "handleResultClick",
    numberOne,
    numberTwo,
    calculatorOutput.value
  );
}
calculatorResult.addEventListener("click", handleResultClick);

// Clear-Funktion für C einfügen
function clear() {
  calculatorOutput.value = "";
}
calculatorClear.addEventListener("click", clear);

// Tastenklick setzt betreffende Nummer in den Output
function addInputEventListener(calculatorInput) {
  function handleCalculatorInputClick() {
    calculatorOutput.value += calculatorInput.innerText;
    console.log(
      "handleOperatorInputClick",
      numberOne,
      numberTwo,
      calculatorOutput.value
    );
  }

  calculatorInput.addEventListener("click", handleCalculatorInputClick);
}
calculatorInputs.forEach(addInputEventListener);

// Click-Option auch für Operators hinzufügen
function addOperatorEventListener(calculatorOperator) {
  function handleCalculatorOperatorClick() {
    numberOne = Number(calculatorOutput.value);
    operator = calculatorOperator.innerText;
    clear();
  }
  calculatorOperator.addEventListener("click", handleCalculatorOperatorClick);
}
calculatorOperators.forEach(addOperatorEventListener);
