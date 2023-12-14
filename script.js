function add (num1, num2) {
  return num1 + num2;
}

function substract (num1, num2) {
  return num1 - num2;
}

function multiply (num1, num2) {
  return num1 * num2;
}

function divide (num1, num2) {
  return num1 / num2;
}

let numberFirst;
let numberSecond;
let operator;

function operate (numberFirst, numberSecond, operator) {
  switch (operator) {
    case '+':
      add(numberFirst, numberSecond);
      break;
    case '-':
      substract(numberFirst, numberSecond);
      break;
    case '*':
      multiply(numberFirst, numberSecond);
      break;
    case '/':
      divide(numberFirst, numberSecond);
      break;
  }
}
