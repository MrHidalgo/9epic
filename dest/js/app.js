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
	$('#main svg, #main video').css({ visibility: 'visible' });

	/* SCENE 1
 * ==================== */
	var controller1 = new ScrollMagic.Controller();
	var tween1 = new TimelineMax();

	tween1.set('#video1Wrapper video', { y: 0, transformOrigin: 'center' });

	tween1.to('#video1Wrapper', 3, {
		y: 175,
		scale: 0.91,
		borderBottom: '5px solid #B3B3B3',
		borderRadius: '5px',
		ease: Linear.easeNone
	}).to("#video1", 3, { opacity: 0, ease: Linear.easeNone }, '-=3');

	var scene1 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-1",
		offset: $('.main__wrapper-1').outerHeight(true) / 4,
		duration: $('.main__wrapper-1').outerHeight(true) - 300
	}).setTween(tween1)
	// .addIndicators()
	.addTo(controller1).on("progress", function (event) {
		if (Number((event.progress * 10).toFixed(1)) < 10) {
			$('#video1Wrapper').css({ opacity: 1 });
			$('#mainSVG1 svg').css({ opacity: 0 });
		}
	}).on("end", function (event) {
		$('#video1Wrapper').css({ opacity: 0 });
		$('#mainSVG1 svg').css({ opacity: 1 });
	});

	/* end :: SCENE 1
 * ==================== */

	/* SCENE 2
 * ==================== */
	var controller2 = new ScrollMagic.Controller();

	var tween2 = new TimelineMax();

	tween2.set('#mainSVG1 svg', { y: 0, transformOrigin: 'center' }).set(['#anim2-box-1', '#anim2-box-2', '#anim2-box-3', '#anim2-box-4', '#anim2-box-5'], { opacity: 0, x: 50, transformOrigin: '50%' }).set('#pc-top', { scaleY: 0, transformOrigin: 'center bottom' });

	tween2.to('#mainSVG1 svg', 1, { y: 149, ease: Linear.easeNone }).to('#pc-top', 0.05, { scaleY: 1, ease: Linear.easeNone }, '-=1').to('#anim2-box-1', 0.1, { opacity: 1, x: 0, ease: Linear.easeNone }, '-=1').to('#anim2-box-2', 0.1, { opacity: 1, x: 0, ease: Linear.easeNone }, '-=0.9').to('#anim2-box-3', 0.1, { opacity: 1, x: 0, ease: Linear.easeNone }, '-=0.8').to('#anim2-box-4', 0.1, { opacity: 1, x: 0, ease: Linear.easeNone }, '-=0.7').to('#anim2-box-5', 0.1, { opacity: 1, x: 0, ease: Linear.easeNone }, '-=0.6').to('#mainSVG1', 0.1, { opacity: 0, ease: Linear.easeNone }, '-=0.1');

	var scene2 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-2",
		offset: -49,
		duration: $('.main__wrapper-2').outerHeight(true)
	}).setTween(tween2)
	// .addIndicators()
	.addTo(controller2);

	/* end :: SCENE 2
 * ==================== */

	/* SCENE 3
 * ==================== */
	var controller3 = new ScrollMagic.Controller();
	var tween3 = new TimelineMax();

	tween3.fromTo('#video2Wrapper', 0.01, { y: -400, scale: 0.8, transformOrigin: 'center' }, { y: -50, scale: 1, ease: Linear.easeNone }).fromTo('#video2Wrapper', 0.001, { opacity: 0 }, { opacity: 1, ease: Linear.easeNone }, '-=0.01').to('#video2Wrapper', 0.001, { opacity: 0, scale: 0.75, rotation: 45, ease: Linear.easeNone }, '-=0.001');

	var scene3 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-3",
		offset: -100,
		duration: $('.main__wrapper-3').outerHeight(true) + 100
	}).setTween(tween3)
	// .addIndicators()
	.addTo(controller3);

	/* end :: SCENE 3
 * ==================== */

	/* SCENE 4
 * ==================== */
	var controller4 = new ScrollMagic.Controller();
	var tween4 = new TimelineMax();

	tween4.fromTo('#mainSVG2', 0.1, { opacity: 0 }, { opacity: 1, ease: Linear.easeNone }).fromTo('#mainSVG2 svg', 2, { y: -200 }, { y: 200, ease: Linear.easeNone }, '-=0.1').fromTo('#anim4-bg', 2, { rotation: 0, transformOrigin: 'center' }, { rotation: 360, ease: Linear.easeNone }, '-=2').fromTo('#anim4-box-1', 0.5, { opacity: 0, scale: 0.5, transformOrigin: '460px 350px' }, { opacity: 1, scale: 1, ease: Linear.easeNone }, '-=2').fromTo('#anim4-box-2', 0.5, { opacity: 0, scale: 0.5, transformOrigin: '40px 350px' }, { opacity: 1, scale: 1, ease: Linear.easeNone }, '-=1.9').fromTo('#anim4-box-3', 0.5, { opacity: 0, scale: 0.5, transformOrigin: '-380px 350px' }, { opacity: 1, scale: 1, ease: Linear.easeNone }, '-=1.8').fromTo('#anim4-box-4', 0.5, { opacity: 0, scale: 0.5, transformOrigin: '560px -70px' }, { opacity: 1, scale: 1, ease: Linear.easeNone }, '-=1.7').fromTo('#anim4-box-5', 0.5, { opacity: 0, scale: 0.5, transformOrigin: '140px -70px' }, { opacity: 1, scale: 1, ease: Linear.easeNone }, '-=1.6').fromTo('#anim4-box-6', 0.5, { opacity: 0, scale: 0.5, transformOrigin: '-280px -70px' }, { opacity: 1, scale: 1, ease: Linear.easeNone }, '-=1.5').to('#mainSVG2 svg', 0.001, { opacity: 0, ease: Linear.easeNone }, '-=0.001');

	var scene4 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-4",
		offset: -150,
		duration: $('.main__wrapper-4').outerHeight(true) + 150
	}).setTween(tween4)
	// .addIndicators()
	.addTo(controller4);
	/* end :: SCENE 4
 * ==================== */

	/* SCENE 5
 * ==================== */
	var controller5 = new ScrollMagic.Controller();
	var tween5 = new TimelineMax();

	tween5.fromTo('#video3Wrapper', 0.01, { y: -400, scale: 0.85, transformOrigin: 'center' }, { y: -50, scale: 1, ease: Linear.easeNone }).fromTo('#video3Wrapper', 0.001, { opacity: 0 }, { opacity: 1, ease: Linear.easeNone }, '-=0.01');

	var scene5 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-5",
		offset: -200,
		duration: $('.main__wrapper-5').outerHeight(true) + 200
	}).setTween(tween5)
	// .addIndicators()
	.addTo(controller5);

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