// const buttonRef = document.querySelector(".change-color");
// spanRef.addEventListener(".color");

// buttonRef.addEventListener("click", onBtnColorChange);
// function onBtnColorChange() {
//   color = getRandomHexColor();
// };


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");

btnEl.addEventListener("click", changeBodyColor);

function changeBodyColor(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  textEl.textContent = getRandomHexColor();
}
