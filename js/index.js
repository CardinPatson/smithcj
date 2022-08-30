function myFunction() {
	var x = document.getElementById("myLinks");
	var y = document.getElementById("hamburger");
	var z = document.getElementById("close");
	var k = document.getElementById("darken");
	if (x.style.display === "block") {
		x.style.display = "none";
		y.style.display = "block";
		z.style.display = "none";

		//no darken page
		k.style.opacity = 1;
	} else {
		x.style.display = "block";
		y.style.display = "none";
		z.style.display = "block";

		//darken page
		k.style.opacity = 0.4;
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
