let $ = document;
let plsuBtn = $.querySelector(".plus-btn");
let inputNumber = $.querySelector("#input-number");
let minusBtn = $.querySelector(".minus-btn");

function addNumber() {
  inputNumber.value = parseInt(inputNumber.value) + 1;
}

function removeNumber() {
  if (inputNumber.value === "0") {
    inputNumber.value = "0";
  } else {
    inputNumber.value = parseInt(inputNumber.value) - 1;
  }
}

plsuBtn.addEventListener("click", addNumber);
minusBtn.addEventListener("click", removeNumber);
