const add = (x, y) => {
  return x + y;
}
const substract = (x, y) => {
  return y - x;
}
const multiply = (x, y) => {
  return x * y;
}
const divide = (x, y) => {
  return y / x;
}

let firstNumber = "";
let secondNumber = "";
let operator = "";

function operate() {
  if (operator === '+') {
    return add(+firstNumber, +secondNumber);
  } 
  if (operator === '-') {
    return substract(+firstNumber, +secondNumber);
  } 
  if (operator === 'x') {
    return multiply(+firstNumber, +secondNumber);
  } 
  if (operator === '/') {
    return divide(+firstNumber, +secondNumber);
  } 
}

document.querySelectorAll('.button').forEach(item => {
  item.addEventListener('click', () => {
    const pressedNumber = item.textContent;
    if (pressedNumber === 'AC') {
      firstNumber = '';
      secondNumber = '';
      operator = '';
    }
    if ((pressedNumber === '+' ||
     pressedNumber === '-' ||
     pressedNumber === 'x' ||
     pressedNumber === '/') && operator === ""
     ) {
      if (firstNumber === '') return;
      operator = pressedNumber;
      secondNumber = firstNumber;
      firstNumber = "";
    }
    else if ((pressedNumber === '+' ||
    pressedNumber === '-' ||
    pressedNumber === 'x' ||
    pressedNumber === '/') && operator !== "") {
      if (firstNumber === '') return;
      secondNumber = operate();
      operator = pressedNumber;
      firstNumber = "";
    }
    if (pressedNumber === '=') {
      if (firstNumber === '') return;
      firstNumber = operate();
      secondNumber = '';
      operator = '';
    }

    if (pressedNumber === 'C') {
      if (firstNumber !== '') {
        firstNumber = firstNumber.slice(0, -1);
      } else if (operator !== '') {
        operator = '';
        firstNumber = secondNumber;
        secondNumber = '';
      } else if (secondNumber !== '') {
        secondNumber = secondNumber.slice(0, -1);
      }
    }
    if (pressedNumber === '.') {
      if (firstNumber.includes('.') || secondNumber.includes('.')) return;
      else if (firstNumber !== '') {
        firstNumber += pressedNumber;
      }
      else if (operator !== '') return;
      else if (secondNumber !== '') {
        secondNumber += pressedNumber;
      }
    }
    let algorithm = /[0-9]/;
    if (algorithm.test(pressedNumber))  {
      firstNumber += pressedNumber };
    document.getElementById('current-operand').textContent = firstNumber;
    document.getElementById('previous-operand').textContent = secondNumber + ' ' + operator;
  })
})

let currentOperand = document.querySelectorAll('.current-operand');
