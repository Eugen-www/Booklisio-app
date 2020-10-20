// Classes
class Form{
	constructor($selector) {
		this.$el = document.querySelector($selector);
	}
	checkFullness() {
		const inputs = this.$el.querySelectorAll("input");
		console.log(inputs[0].value.length);
		inputs.forEach((input, index) => {
			if (!(inputs[index].value.length > 0)) {
				input.classList.add("wrong");
			}
		})
	}	
	checkAuthor() {
		const authorInput = this.$el.querySelector("#author-input");

		return [...authorInput.value].some(letter => !isNaN(letter));
	}
	checkISBN() {
		const ISBNInput = this.$el.querySelector("#isbn-input");

		return ISBNInput.value > 0;
	}
	checkRating() {
		const ratingInput = this.$el.querySelector("#rating-input");
		if ([...ratingInput.value].some(letter => isNaN(letter))) {
			throw new Error("Введите число")
		} else {
			return ratingInput.value > 0 && ratingInput.value <= 5;
		}
	}
}

const $mainSection = document.querySelector(".main-section");
const form = new Form("#form");

$mainSection.addEventListener("mousemove", parallax);

function parallax(e) {
	this.querySelectorAll(".book-image").forEach(book => {
		const bookSpeed = book.getAttribute("data-speed");
		const x = (window.innerWidth - e.pageX * bookSpeed) / 100
		const y = (window.innerHeight - e.pageY * bookSpeed) / 100;
		book.style.transform = `translateX(${x}px) translateY(${y}px)`
	})
}