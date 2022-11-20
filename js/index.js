function myFunction() {
	let myLinks = document.getElementById("myLinks");
	let menu = document.getElementById("menu-hamburger");
	let hamburger = document.getElementById("hamburger");
	let close = document.getElementById("close");
	let darken = document.getElementById("darken");
	let body = document.getElementById("body");
	if (myLinks.style.display === "block") {
		menu.style.zIndex = 0;
		menu.style.borderRight = "none";
		myLinks.style.display = "none";
		hamburger.style.display = "block";
		close.style.display = "none";
		darken.classList.remove("freeze_page");

		//no darken page
		darken.style.opacity = 1;
	} else {
		menu.style.zIndex = 999;
		myLinks.style.display = "block";
		menu.style.borderRight = "1px solid #e38334";
		hamburger.style.display = "none";
		close.style.display = "block";

		//darken page
		darken.classList.add("freeze_page");
		darken.style.opacity = 0.4;
	}
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

/**
 * FOR AUTOMATIC SLIDE SHOW
 */

// let slideIndex = 0;
// showSlides();

// function showSlides() {
// 	let i;
// 	let slides = document.getElementsByClassName("mySlides");
// 	for (i = 0; i < slides.length; i++) {
// 		slides[i].style.display = "none";
// 	}
// 	slideIndex++;
// 	if (slideIndex > slides.length) {
// 		slideIndex = 1;
// 	}
// 	slides[slideIndex - 1].style.display = "block";
// 	setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
