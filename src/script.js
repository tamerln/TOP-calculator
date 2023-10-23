//add eventlistener to buttons
//when clicked, append inner html of button to inner html of screen 

const buttons = document.querySelectorAll(".button");
let display = document.querySelector("#screen");
const ac = document.querySelector("#AC");
const equals = document.querySelector("#equals");
const operators = document.querySelectorAll(".operator");
const operands = document.querySelectorAll(".operand");
let firstOperand = null;
let secondOperand = null;
let op = null;


buttons.forEach(button => {
  button.addEventListener('click', e => {
    if (button.classList.contains("operand")) {
      display.innerHTML += e.target.innerHTML;
      console.log(firstOperand);
    } else if (button.classList.contains("operator")) {
      firstOperand = Number(display.innerHTML);
      clear();
      op = e.target.innerHTML;
      console.log(op);
    } else if (button.id === "equals") {
      secondOperand = Number(display.innerHTML);
      console.log(secondOperand);
      clear();
      evaluate(firstOperand, secondOperand, op);
    } else if (button.id === "AC") {
      clear();
    } else if (button.id === "negate") {
      makeNegative();
    }
  })
})


ac.addEventListener("click", clear())

function clear() {
  display.innerHTML = '';
}

function evaluate(firstOperand, secondOperand, op) {
  if (op === "+") {
    display.innerHTML = (firstOperand + secondOperand);
  } else if (op === "X") {
    display.innerHTML = (firstOperand * secondOperand);
  } else if (op === "-") {
    display.innerHTML = (firstOperand - secondOperand);
  } else if (op === "%") {
    display.innerHTML = (firstOperand % secondOperand);
  } else if (op === "÷") {
    display.innerHTML = (firstOperand / secondOperand);
  }
}
  

  function makeNegative() {
    let currentNumber = Number(display.innerHTML);
    display.innerHTML = -currentNumber;

  }



