export function calculate(numberOne, numberTwo, operator) {
  if (operator === "+") {
    return numberOne + numberTwo;
  }
  if (operator === "-") {
    return numberOne - numberTwo;
  }
  if (operator === "*") {
    return numberOne * numberTwo;
  }
  if (operator === "/") {
    return numberOne / numberTwo;
  }
}
