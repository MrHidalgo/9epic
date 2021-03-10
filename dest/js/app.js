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

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {

	for (var i = 0, j = 1; i < $('.solution__slider-wrapper-1 .solution__slider-row').length; i++, j++) {
		new Swiper('.solutionSlider1' + i, {
			effect: 'flip',
			flipEffect: {
				slideShadows: false
			},
			speed: 1000,
			navigation: {
				nextEl: '.solution__slider-wrapper-1 .solution__slider-row-' + j + ' .solution__slider-btn--next',
				prevEl: '.solution__slider-wrapper-1 .solution__slider-row-' + j + ' .solution__slider-btn--prev'
			}
		});
	}
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

var solutionCB = function solutionCB() {
	function helperSlider(btnName, footerNode) {
		$(btnName).on('click', function (ev) {
			var el = $(ev.currentTarget),
			    elID = el.attr('data-id');

			$(btnName).removeClass('is-active');
			el.addClass('is-active');

			$(footerNode).removeClass('is-show');
			$(footerNode + '-' + elID).addClass('is-show');
		});
	}

	var partBool2 = true,
	    partBool3 = true;

	$('.solution__tab').on('click', function (ev) {
		var el = $(ev.currentTarget),
		    elID = el.attr('data-tab-id');

		$('.solution__tab').removeClass('is-active');
		el.addClass('is-active');

		$('.solution__tab-content').hide();
		$('.solution__tab-content[data-tab-content="' + elID + '"]').fadeIn(550);

		setTimeout(function () {

			if (parseInt(elID) === 1 && partBool2) {
				for (var i = 0, j = 1; i < $('.solution__slider-wrapper-2 .solution__slider-row').length; i++, j++) {
					new Swiper('.solutionSlider2' + i, {
						effect: 'flip',
						flipEffect: {
							slideShadows: false
						},
						speed: 1000,
						navigation: {
							nextEl: '.solution__slider-wrapper-2 .solution__slider-row-' + j + ' .solution__slider-btn--next',
							prevEl: '.solution__slider-wrapper-2 .solution__slider-row-' + j + ' .solution__slider-btn--prev'
						}
					});
				}

				partBool2 = false;
			} else if (parseInt(elID) === 2 && partBool3) {
				for (var _i = 0, _j = 1; _i < $('.solution__slider-wrapper-3 .solution__slider-row').length; _i++, _j++) {
					new Swiper('.solutionSlider3' + _i, {
						effect: 'flip',
						flipEffect: {
							slideShadows: false
						},
						speed: 1000,
						navigation: {
							nextEl: '.solution__slider-wrapper-3 .solution__slider-row-' + _j + ' .solution__slider-btn--next',
							prevEl: '.solution__slider-wrapper-3 .solution__slider-row-' + _j + ' .solution__slider-btn--prev'
						}
					});
				}

				partBool3 = false;
			}
		}, 100);
	});

	helperSlider('.solution__slider-head-1 a', '.solution__slider-footer-1 .solution__slider-row');
	helperSlider('.solution__slider-head-2 a', '.solution__slider-footer-2 .solution__slider-row');
	helperSlider('.solution__slider-head-3 a', '.solution__slider-footer-3 .solution__slider-row');
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
	initSwiper();
	// ==========================================

	// callback
	approachTabCB();
	solutionCB();
	// ==========================================
};

window.addEventListener('load', function () {
	initNative();
});