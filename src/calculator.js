"use strict";

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInputs = document.querySelectorAll(".calculator__input");
const calculatorResult = document.querySelector(".calculator__result");
const calculatorClear = document.querySelector(".calculator__clear");
const calculatorOperators = document.querySelectorAll(".calculator__operator");

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function divide(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

let numberOne = 0;
let numberTwo = 0;

function handleResultClick() {
  numberTwo = Number(calculatorOutput.value);
  calculatorOutput.value = add(numberOne, numberTwo);
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

// Click-Option für Operators hinzufügen
function addOperatorEventListener(calculatorOperator) {
  function handleCalculatorOperatorClick() {
    numberOne = Number(calculatorOutput.value);
    clear();
  }
  calculatorOperator.addEventListener("click", handleCalculatorOperatorClick);
}
calculatorOperators.forEach(addOperatorEventListener);
