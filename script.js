import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

new Swiper(".swiper", {
	direction: "horizontal",
	loop: true,

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},

	autoplay: {
		delay: 3000
	},

	pagination: {
		el: ".swiper-pagination",
		type: "bullets",
		clickable: true
	}
});
