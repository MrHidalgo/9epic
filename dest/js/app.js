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

var foundationCB = function foundationCB() {
	$('.foundation__tab').on('click', function (ev) {
		var el = $(ev.currentTarget),
		    elID = el.attr('data-tab-id');

		$('.foundation__tab').removeClass('is-active');
		el.addClass('is-active');

		$('.foundation__tab-content').hide();
		$('.foundation__tab-content[data-content-id="' + elID + '"]').fadeIn(550);
	});
};

var homepageMainScrollAnimation = function homepageMainScrollAnimation() {
	$('.main__bg').css({ opacity: 1 });

	/* SCENES
 * ==================== */
	var controller1 = new ScrollMagic.Controller(),
	    controller11 = new ScrollMagic.Controller(),
	    controller2 = new ScrollMagic.Controller(),
	    controller22 = new ScrollMagic.Controller(),
	    controller3 = new ScrollMagic.Controller(),
	    controller33 = new ScrollMagic.Controller(),
	    controller4 = new ScrollMagic.Controller(),
	    controller44 = new ScrollMagic.Controller(),
	    controller5 = new ScrollMagic.Controller(),
	    controller55 = new ScrollMagic.Controller();

	var tween1 = new TimelineMax(),
	    tween11 = new TimelineMax(),
	    tween2 = new TimelineMax(),
	    tween22 = new TimelineMax(),
	    tween3 = new TimelineMax(),
	    tween33 = new TimelineMax(),
	    tween4 = new TimelineMax(),
	    tween44 = new TimelineMax(),
	    tween5 = new TimelineMax(),
	    tween55 = new TimelineMax();

	/* end :: SCENES
 * ==================== */

	/* SCENE 1
 * ==================== */
	tween1.fromTo('#video1Wrapper video', 1, { y: 0, scaleX: 1, scaleY: 1, transformOrigin: 'center' }, { y: 11, scaleX: 0.52, scaleY: 0.52, ease: Linear.easeNone }).fromTo('#pc-shadow', 1, { opacity: 0, y: 20, transformOrigin: 'center' }, { opacity: 1, y: 0, ease: Linear.easeNone }, '-=0.9').fromTo('#video1WrapperBorder > i', 1, { opacity: 0, y: 0, scale: 1.75, transformOrigin: 'center' }, { opacity: 1, y: 12, scale: 1, ease: Linear.easeNone }, '-=0.9').fromTo('#pc-bottom', 0.75, { opacity: 0, scaleY: 0, transformOrigin: 'center' }, { opacity: 1, scaleY: 1, ease: Linear.easeNone }, '-=0.3').fromTo(['#pc-top', '#pc-bg'], 0.75, { opacity: 0 }, { opacity: 1, ease: Linear.easeNone }, '-=0.3').to(['#video1WrapperBorder > i', '#video1Wrapper video'], 0.1, { opacity: 0, ease: Linear.easeNone }, '-=0.5');

	var scene1 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-1",
		offset: $(window).outerHeight(true) / 2 + 10,
		duration: $('.main__wrapper-1').outerHeight(true)
	}).setTween(tween1)
	// .addIndicators()
	.addTo(controller1);

	tween11.fromTo('.main__wrapper-1 .main__wrapper-left > div', 0.35, { opacity: 1 }, { opacity: 0, ease: Linear.easeNone });

	var scene11 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-1",
		offset: $(window).outerHeight(true) / 2 + 10,
		duration: $('.main__wrapper-1').outerHeight(true) / 2
	}).setTween(tween11)
	// .addIndicators()
	.addTo(controller11);
	/* end :: SCENE 1
 * ==================== */

	/* SCENE 2
 * ==================== */
	tween2.fromTo('#anim2-box-1', 1, { opacity: 0, x: 50, scale: 0.75, transformOrigin: 'center' }, { opacity: 1, x: 0, scale: 1, ease: Linear.easeNone }).fromTo('#anim2-box-2', 1, { opacity: 0, x: 50, scale: 0.75, transformOrigin: 'center' }, { opacity: 1, x: 0, scale: 1, ease: Linear.easeNone }).fromTo('#anim2-box-3', 1, { opacity: 0, x: 50, scale: 0.75, transformOrigin: 'center' }, { opacity: 1, x: 0, scale: 1, ease: Linear.easeNone }).fromTo('#anim2-box-4', 1, { opacity: 0, x: 50, scale: 0.75, transformOrigin: 'center' }, { opacity: 1, x: 0, scale: 1, ease: Linear.easeNone }).fromTo('#anim2-box-5', 1, { opacity: 0, x: 50, scale: 0.75, transformOrigin: 'center' }, { opacity: 1, x: 0, scale: 1, ease: Linear.easeNone }).to('#pc-bg', 1, { opacity: 0, ease: Linear.easeNone }, '+=0.5');

	var scene2 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-2",
		offset: 0,
		duration: $('.main__wrapper-2').outerHeight(true)
	}).setTween(tween2)
	// .addIndicators()
	.addTo(controller2);

	tween22.fromTo('.main__wrapper-2 .main__wrapper-left > div', 0.15, { opacity: 0 }, { opacity: 1, ease: Linear.easeNone });

	var scene22 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-2",
		offset: -($('.main__wrapper-1').outerHeight(true) / 2),
		duration: $('.main__wrapper-2').outerHeight(true) / 2
	}).setTween(tween22)
	// .addIndicators()
	.addTo(controller22);
	/* end :: SCENE 2
 * ==================== */

	/* SCENE 3
 * ==================== */
	tween3.to(['#anim2-box-1', '#anim2-box-2', '#anim2-box-3', '#anim2-box-4', '#anim2-box-5'], 0.1, { opacity: 0, ease: Linear.easeNone }).to('#mainSVG1', 0.1, { opacity: 0, ease: Linear.easeNone }, '-=0.1').fromTo('#video2Wrapper video', 0.1, { opacity: 0, y: 10, scale: 0.75, transformOrigin: 'center' }, { opacity: 1, y: 0, scale: 1, ease: Linear.easeNone }, '-=0.2');

	var scene3 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-3",
		offset: 0,
		duration: $('.main__wrapper-3').outerHeight(true)
	}).setTween(tween3)
	// .addIndicators()
	.addTo(controller3);

	tween33.fromTo('.main__wrapper-3 .main__wrapper-left > div', 0.15, { opacity: 0 }, { opacity: 1, ease: Linear.easeNone });

	var scene33 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-3",
		offset: -($('.main__wrapper-2').outerHeight(true) / 2),
		duration: $('.main__wrapper-3').outerHeight(true) / 2
	}).setTween(tween33)
	// .addIndicators()
	.addTo(controller33);
	/* end :: SCENE 3
 * ==================== */

	/* SCENE 4
 * ==================== */
	tween4.to('#video2Wrapper', 0.3, { opacity: 0, ease: Linear.easeNone }).fromTo('#mainSVG2', 0.3, { opacity: 0 }, { opacity: 1, ease: Linear.easeNone }, '-=0.2').fromTo('#anim4-bg', 2, { rotation: 0, transformOrigin: 'center' }, { rotation: 360, ease: Linear.easeNone }, '-=0.2').fromTo('#anim4-box-1', 0.5, { opacity: 0, scale: 0.5, transformOrigin: '460px 350px' }, { opacity: 1, scale: 1, ease: Linear.easeNone }, '-=1.9').fromTo('#anim4-box-2', 0.5, { opacity: 0, scale: 0.5, transformOrigin: '40px 350px' }, { opacity: 1, scale: 1, ease: Linear.easeNone }, '-=1.8').fromTo('#anim4-box-3', 0.5, { opacity: 0, scale: 0.5, transformOrigin: '-380px 350px' }, { opacity: 1, scale: 1, ease: Linear.easeNone }, '-=1.7').fromTo('#anim4-box-4', 0.5, { opacity: 0, scale: 0.5, transformOrigin: '560px -70px' }, { opacity: 1, scale: 1, ease: Linear.easeNone }, '-=1.6').fromTo('#anim4-box-5', 0.5, { opacity: 0, scale: 0.5, transformOrigin: '140px -70px' }, { opacity: 1, scale: 1, ease: Linear.easeNone }, '-=1.5').fromTo('#anim4-box-6', 0.5, { opacity: 0, scale: 0.5, transformOrigin: '-280px -70px' }, { opacity: 1, scale: 1, ease: Linear.easeNone }, '-=1.4').to('#mainSVG2', 0.25, { opacity: 0, ease: Linear.easeNone });

	var scene4 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-4",
		offset: 0,
		duration: $('.main__wrapper-4').outerHeight(true)
	}).setTween(tween4)
	// .addIndicators()
	.addTo(controller4);

	tween44.fromTo('.main__wrapper-4 .main__wrapper-left > div', 0.15, { opacity: 0 }, { opacity: 1, ease: Linear.easeNone });

	var scene44 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-4",
		offset: -($('.main__wrapper-3').outerHeight(true) / 2),
		duration: $('.main__wrapper-4').outerHeight(true) / 2
	}).setTween(tween44)
	// .addIndicators()
	.addTo(controller44);
	/* end :: SCENE 4
 * ==================== */

	/* SCENE 5
 * ==================== */
	tween5.fromTo('#video3Wrapper', 0.1, { opacity: 0, transformOrigin: 'center' }, { opacity: 1, ease: Linear.easeNone }, '-=0.2');

	var scene5 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-5",
		offset: 0,
		duration: $('.main__wrapper-5').outerHeight(true)
	}).setTween(tween5)
	// .addIndicators()
	.addTo(controller5).on('end', function (event) {
		$('#video3Wrapper').animate({ opacity: 0 }, 100);
	});

	tween55.fromTo('.main__wrapper-5 .main__wrapper-left > div', 0.15, { opacity: 0 }, { opacity: 1, ease: Linear.easeNone });

	var scene55 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-5",
		offset: -($('.main__wrapper-4').outerHeight(true) / 2),
		duration: $('.main__wrapper-5').outerHeight(true) / 2
	}).setTween(tween55)
	// .addIndicators()
	.addTo(controller55);
	/* end :: SCENE 5
 * ==================== */
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
	foundationCB();
	homepageMainScrollAnimation();
	// ==========================================
};

window.addEventListener('load', function () {
	initNative();
});