const background = document.querySelector(".main-container");
const input = document.querySelector(".card__search-input");

const modeToggle = () => {
  background.classList.toggle("main-container-dark");
  input.classList.toggle("card__search-input-dark");
}