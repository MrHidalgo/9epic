"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/*
* CALLBACK :: start
* ============================================= */
var approachTabCB = function approachTabCB() {
	$('.approach__tab').on('click', function (ev) {
		var el = $(ev.currentTarget),
		    elID = el.attr('data-tab-id');

		$('.approach__tab').removeClass('is-active');
		el.addClass('is-active');

		$('.approach__tab-content').hide();
		$('.approach__tab-content[data-tab-content="' + elID + '"]').fadeIn(550);
	});
};
/*
* CALLBACK :: end
* ============================================= */

/**
 * @name initNative
 *
 * @description Init all method
 */
var initNative = function initNative() {
	// default
	initPreventBehavior();
	// ==========================================

	// lib
	approachTabCB();
	// ==========================================

	// callback
	// ==========================================
};

window.addEventListener('load', function () {
	initNative();
});