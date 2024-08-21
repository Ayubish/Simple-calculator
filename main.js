const resultBoard = document.querySelector(".result-input");
const operationBoard = document.querySelector(".operation-input");

function operate(operation) {
  operationBoard.value += operation;
}

function calculate() {
  let result = eval(operationBoard.value);
  resultBoard.value = result;
}
