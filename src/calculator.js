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

// Falls kein Operator angegeben wurde, passiert nichts.
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

// Eine Zahl wird eingetippt. Falls wFNN=true, wird das aktuelle Outputfeld zu numberOne. Das Feld wird gecleared, wFNN wird false
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

// Wenn waitingForNewNumber false ist und ein Operator eingegeben wurde
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

// Outputfeld wird wieder gecleared
function clear() {
  calculatorOutput.value = "";
}
calculatorClear.addEventListener("click", clear);
