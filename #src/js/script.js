import { Form } from "./classes/form";
// DOM Variables
const $mainSection = document.querySelector(".main-section");
const $addBookButton = document.querySelector(".add-book");

// Variables
const form = new Form("#form");

// Add EventListeners
$addBookButton.addEventListener("click", function () {
  form.validate();
  form.clearElements();
});
$mainSection.addEventListener("mousemove", parallax);

// Functions
function parallax(e) {
  this.querySelectorAll(".book-image").forEach((book) => {
    const bookSpeed = book.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * bookSpeed) / 100;
    const y = (window.innerHeight - e.pageY * bookSpeed) / 100;
    book.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
