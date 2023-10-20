//add eventlistener to buttons
//when clicked, append inner html of button to inner html of screen 

const buttons = document.querySelectorAll(".button");
let display = document.querySelector("#screen");
const ac = document.querySelector("#AC");
const equals = document.querySelector("#equals");
const operators = document.querySelectorAll(".operator");
const operands = document.querySelectorAll(".operand");



operands.forEach(button => {
  button.addEventListener("click", e => {
    console.log(e.target.innerHTML);
    display.innerHTML += e.target.innerHTML;
  });
});

let firstOperand;
let op;
operators.forEach(operator => {
operator.addEventListener("click", e => {
firstOperand = Number(display.innerHTML);
display.innerHTML = '';
console.log(firstOperand);
op = operator.innerHTML;
console.log(op);

})
});

ac.addEventListener("click", function(e) {
  display.innerHTML = '';
})

let secondOperand;
equals.addEventListener("click", function(e) {
secondOperand = Number(display.innerHTML);
console.log(secondOperand);
if (op === "+") {
  display.innerHTML = (firstOperand + secondOperand);
} else if (op === "-") {
  display.innerHTML = (firstOperand - secondOperand);
} else if (op === "X") {
  display.innerHTML = (firstOperand * secondOperand);
} else if (op === "÷") {
  display.innerHTML = (firstOperand / secondOperand);
} else if (op === "%") {
  display.innerHTML = (firstOperand % secondOperand);
} else if (op === "+/-") {
    toggleNegative();

}


})

function toggleNegative() {
  const currentNumber = Number(display.innerHTML);
  display.innerHTML = -currentNumber;
}