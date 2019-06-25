var open = document.querySelector(".search-hotel-button");
var form = document.querySelector(".search-hotel-form");

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle(visually-hidden)
}
