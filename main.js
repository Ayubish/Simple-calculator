const resultBoard = document.querySelector(".result-input");
const operationBoard = document.querySelector(".operation-input");

function operate(operation) {
  operationBoard.value += operation;

  calculate();
}

function calculate() {
  let result = eval(operationBoard.value);
  resultBoard.value = result;
}
function clearAll() {
  operationBoard.value = 0;
  resultBoard.value = 0;
}
function cancel() {
  if (operationBoard.value.length > 2) {
    operationBoard.value = operationBoard.value.slice(
      0,
      operationBoard.value.length - 1
    );
    calculate();
  } else {
    operationBoard.value = "";
    resultBoard.value = 0;
  }
}

operationBoard.value.addEventListener("change", () => (resultBoard.value = 0));
