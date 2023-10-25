//add eventlistener to buttons
//when clicked, append inner html of button to inner html of screen 

const buttons = document.querySelectorAll(".button");
const display = document.querySelector("#screen");
const ac = document.querySelector("#AC");
let firstOperand = null;
let secondOperand = null;
let op = null;


buttons.forEach(button => {
  button.addEventListener('click', e => {
    if (button.classList.contains("operand")) {
      display.innerHTML += e.target.innerHTML;
      
      let maxCharLength = 10;
      let currentCharLength = display.innerHTML.length;
      if (currentCharLength === maxCharLength) {
        display.innerHTML = display.innerHTML.slice(0,-1);
      }
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



