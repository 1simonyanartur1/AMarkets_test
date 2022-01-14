const { test } = require("../blocks/test/test");

document.addEventListener("DOMContentLoaded", function (event) {
	test();

	(function addPhoneMask() {
		let telephone = document.querySelectorAll('input[type="tel"]');
		let im = new Inputmask("+7 (999) 999-99-99");
		im.mask(telephone);
	}());
});