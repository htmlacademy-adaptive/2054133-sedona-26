let button = document.querySelector('.navigation__toggle');
let list = document.querySelector('.navigation__list');


function toggleClass (element, className) {
  element.classList.toggle(className);
}

function removeClass (element, className) {
  element.classList.remove(className);
}

removeClass(list, "navigation__list--opened");
removeClass(button, "navigation__toggle--opened");

button.addEventListener("click", function () {
  toggleClass(list, "navigation__list--opened");
  toggleClass(button, "navigation__toggle--opened");
});
