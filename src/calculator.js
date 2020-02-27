import { calculate } from "./math.js";
import { appendParagraph } from "./log.js";

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInputs = document.querySelectorAll(".calculator__input");
const calculatorResult = document.querySelector(".calculator__result");
const calculatorClear = document.querySelector(".calculator__clear");
const calculatorOperators = document.querySelectorAll(".calculator__operator");
const logs = document.querySelector(".logs");

let numberOne = null;
let operator = null;
let waitingForNewNumber = true;

function calculateResult() {
  if (!operator) {
    return;
  }
  const numberTwo = Number(calculatorOutput.value);
  const result = calculate(numberOne, numberTwo, operator);

  const text = `${numberOne} ${operator} ${numberTwo} = ${result}`;
  appendParagraph(text, logs);

  calculatorOutput.value = result;

  numberOne = result;
  waitingForNewNumber = true;
  operator = null;
}

calculatorResult.addEventListener("click", calculateResult);

function clear() {
  calculatorOutput.value = "";
}

calculatorClear.addEventListener("click", clear);

function addInputEventListener(calculatorInput) {
  function handleCalculatorInputClick() {
    if (waitingForNewNumber) {
      numberOne = Number(calculatorOutput.value);
      calculatorOutput.value = "";
      waitingForNewNumber = false;
    }
    calculatorOutput.value += calculatorInput.innerText;
  }

  calculatorInput.addEventListener("click", handleCalculatorInputClick);
}

calculatorInputs.forEach(addInputEventListener);

function addOperatorEventListener(calculatorOperator) {
  function handleCalculatorOperatorClick() {
    if (!waitingForNewNumber && operator) {
      calculateResult();
    }
    operator = calculatorOperator.innerText;
    waitingForNewNumber = true;
  }
  calculatorOperator.addEventListener("click", handleCalculatorOperatorClick);
}
calculatorOperators.forEach(addOperatorEventListener);
