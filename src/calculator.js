// document.querySelector(".calculator__output").value = "13";

// const calculatorInputs = document.querySelectorAll(".calculator__input");
// calculatorInputs.forEach(function(calculatorInput) {
//   calculatorInput.addEventListener("click", function() {
//     calculatorOutput.value = calculatorInput.innerHTML;
//   });
// });

const calculatorOutput = document.querySelector(".calculator__output");
calculatorOutput.value = multiply(3, 9);

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
