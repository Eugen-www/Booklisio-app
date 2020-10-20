const $mainSection = document.querySelector(".main-section");

$mainSection.addEventListener("mousemove", parallax);

function parallax(e) {
	this.querySelectorAll(".book-image").forEach(book => {
		const bookSpeed = book.getAttribute("data-speed");
		const x = (window.innerWidth - e.pageX * bookSpeed) / 100
		const y = (window.innerHeight - e.pageY * bookSpeed) / 100;
		book.style.transform = `translateX(${x}px) translateY(${y}px)`
	})
}