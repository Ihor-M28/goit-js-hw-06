const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

let counterValue = 0;

decrementBtnEl.addEventListener("click", function () {
  counterValue -= 1;
  console.log(counterValue);
  valueEl.textContent = counterValue;
});

incrementBtnEl.addEventListener("click", function () {
  counterValue += 1;
  console.log(counterValue);
  valueEl.textContent = counterValue;
});