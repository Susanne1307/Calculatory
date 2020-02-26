"use strict";

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInputs = document.querySelectorAll(".calculator__input");
const calculatorResult = document.querySelector(".calculator__result");
const calculatorClear = document.querySelector(".calculator__clear");

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

const numberOne = Number(calculatorInputs[5].innerText);
const numberTwo = Number(calculatorInputs[6].innerText);
// calculatorOutput.value = subtract(numberOne, numberTwo);

function handleClick() {
  calculatorOutput.value = subtract(numberOne, numberTwo);
  console.log("hallo");
}
calculatorResult.addEventListener("click", handleClick);

function clear() {
  calculatorOutput.value = "";
  console.log("Moin");
}
calculatorClear.addEventListener("click", clear);
