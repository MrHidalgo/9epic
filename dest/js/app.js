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
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
var initHamburger = function initHamburger() {

	var btn = document.querySelector("[hamburger-js]"),
	    btnDash = document.querySelector("[hamburger-dash-js]"),
	    hideScrollContainer = document.querySelectorAll("html, body"),
	    mobileContainer = document.querySelector("[mobile-block-js]"),
	    menuNode = document.querySelector("[menu-block-js]");

	/**
   * @description
  */
	if (btn) {
		btn.addEventListener("click", function (ev) {
			var elem = ev.currentTarget;

			elem.classList.toggle("is-active");
			mobileContainer.classList.toggle("is-open");

			hideScrollContainer.forEach(function (val, idx) {
				val.classList.toggle("is-hideScroll");
			});
		});
	}

	if (btnDash) {
		btnDash.addEventListener("click", function (ev) {
			var elem = ev.currentTarget;

			elem.classList.toggle("is-active");
			menuNode.classList.toggle("is-open");

			hideScrollContainer.forEach(function (val, idx) {
				val.classList.toggle("is-hideScroll");
			});
		});

		$('.menu__close').on('click', function (ev) {
			$('[hamburger-dash-js]').removeClass('is-active');
			menuNode.classList.remove("is-open");

			hideScrollContainer.forEach(function (val, idx) {
				val.classList.remove("is-hideScroll");
			});
		});
	}
};

/**
 * @name initHeaderFixed
 *
 * @description Fixing the site header in the scrolling page.
 */
var initHeaderFixed = function initHeaderFixed() {

	var countScroll = $(window).scrollTop(),
	    headerElement = $('.header');

	if (countScroll > 10) {
		headerElement.addClass("is-fixed");
	} else {
		headerElement.removeClass("is-fixed");
	}
};

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
 * @name initSmoothScroll
 *
 * @description Smooth transition to anchors to the block.
 */
var initSmoothScroll = function initSmoothScroll() {
	var btnName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[anchor-js]";
	var animateSpeed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

	$(btnName).on("click", function (e) {
		if ($(e.currentTarget).attr('href').length === 1) return;

		var linkHref = $(e.currentTarget).attr('href'),
		    headerHeight = $(".header").outerHeight() || 0,
		    topHeightOffset = $(linkHref).offset().top - headerHeight;

		$('body, html').animate({
			scrollTop: topHeightOffset
		}, animateSpeed);
	});
};

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {
	var _loop = function _loop(i, j) {
		new Swiper('.solutionSlider1' + i, {
			effect: 'slide',
			slidesPerView: 1,
			spaceBetween: 60,
			speed: 1000,
			navigation: {
				nextEl: '.solution__slider-wrapper-1 .solution__slider-row-' + j + ' .solution__slider-btn--next',
				prevEl: '.solution__slider-wrapper-1 .solution__slider-row-' + j + ' .solution__slider-btn--prev'
			},
			touchMoveStopPropagation: false,
			simulateTouch: false,
			allowSwipeToNext: true,
			allowSwipeToPrev: true,
			allowPageScroll: "auto ",
			on: {
				init: function init(swiper) {
					if (swiper.slides.length > 1) {
						$('.solution__slider-wrapper-1 .solution__slider-row-' + j + ' .solution__slider-btn').animate({ opacity: 1 }, 550);
					}
				}
			}
		});
	};

	for (var i = 0, j = 1; i < $('.solution__slider-wrapper-1 .solution__slider-row').length; i++, j++) {
		_loop(i, j);
	}
};

/**
 * @description Window on load.
 */
window.addEventListener('load', function (ev) {
	initHeaderFixed();
});

/**
 * @description Window on resize.
 */
window.addEventListener('resize', function (ev) {});

/**
 * @description Window on scroll.
 */
window.addEventListener('scroll', function (ev) {
	initHeaderFixed();
});

/*
* CALLBACK :: start
* ============================================= */

/**
 *
 * @param id
 */
function helperFoundationTabCB(id) {
	$('.foundation__tab').removeClass('is-active').eq(id).addClass('is-active');

	$('.foundation__tab-content').hide();
	$('.foundation__tab-content[data-content-id="' + id + '"]').fadeIn(550);
}

/**
 *
 * @param id
 */
function helperApproachTabCB(id) {
	$('.approach__tab').removeClass('is-active').eq(id).addClass('is-active');

	$('.approach__tab-content').hide();
	$('.approach__tab-content[data-tab-content="' + id + '"]').fadeIn(550);
}

/**
 *
 * @param id
 */
function helperSolutionTabCB(id) {
	$('.solution__tab').removeClass('is-active').eq(id).addClass('is-active');

	$('.solution__tab-content').hide();
	$('.solution__tab-content[data-tab-content="' + id + '"]').fadeIn(550);

	helperInnerSliderCB(id);
}

/**
 *
 * @param id
 */
function helperInnerSliderCB(id) {
	var partBool2 = true,
	    partBool3 = true;

	setTimeout(function () {

		if (parseInt(id) === 1 && partBool2) {
			var _loop2 = function _loop2(i, j) {
				new Swiper('.solutionSlider2' + i, {
					effect: 'slide',
					slidesPerView: 1,
					spaceBetween: 60,
					speed: 1000,
					navigation: {
						nextEl: '.solution__slider-wrapper-2 .solution__slider-row-' + j + ' .solution__slider-btn--next',
						prevEl: '.solution__slider-wrapper-2 .solution__slider-row-' + j + ' .solution__slider-btn--prev'
					},
					touchMoveStopPropagation: false,
					simulateTouch: false,
					allowSwipeToNext: true,
					allowSwipeToPrev: true,
					allowPageScroll: "auto ",
					on: {
						init: function init(swiper) {
							if (swiper.slides.length > 1) {
								$('.solution__slider-wrapper-2 .solution__slider-row-' + j + ' .solution__slider-btn').animate({ opacity: 1 }, 550);
							}
						}
					}
				});
			};

			for (var i = 0, j = 1; i < $('.solution__slider-wrapper-2 .solution__slider-row').length; i++, j++) {
				_loop2(i, j);
			}

			partBool2 = false;
		} else if (parseInt(id) === 2 && partBool3) {
			var _loop3 = function _loop3(i, j) {
				new Swiper('.solutionSlider3' + i, {
					effect: 'slide',
					slidesPerView: 1,
					spaceBetween: 60,
					speed: 1000,
					navigation: {
						nextEl: '.solution__slider-wrapper-3 .solution__slider-row-' + j + ' .solution__slider-btn--next',
						prevEl: '.solution__slider-wrapper-3 .solution__slider-row-' + j + ' .solution__slider-btn--prev'
					},
					touchMoveStopPropagation: false,
					simulateTouch: false,
					allowSwipeToNext: true,
					allowSwipeToPrev: true,
					allowPageScroll: "auto ",
					on: {
						init: function init(swiper) {
							if (swiper.slides.length > 1) {
								$('.solution__slider-wrapper-3 .solution__slider-row-' + j + ' .solution__slider-btn').animate({ opacity: 1 }, 550);
							}
						}
					}
				});
			};

			for (var i = 0, j = 1; i < $('.solution__slider-wrapper-3 .solution__slider-row').length; i++, j++) {
				_loop3(i, j);
			}

			partBool3 = false;
		}
	}, 100);
}

var foundationCB = function foundationCB() {
	$('.foundation__tab').on('click', function (ev) {
		var el = $(ev.currentTarget),
		    elID = el.attr('data-tab-id');

		$('.foundation__tab').removeClass('is-active');
		el.addClass('is-active');

		$('.foundation__tab-content').hide();
		$('.foundation__tab-content[data-content-id="' + elID + '"]').fadeIn(550);

		// helperApproachTabCB(elID);
		// helperSolutionTabCB(elID);
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

	$('.solution__tab').on('click', function (ev) {
		var el = $(ev.currentTarget),
		    elID = el.attr('data-tab-id');

		$('.solution__tab').removeClass('is-active');
		el.addClass('is-active');

		$('.solution__tab-content').hide();
		$('.solution__tab-content[data-tab-content="' + elID + '"]').fadeIn(550);

		// helperApproachTabCB(elID);
		// helperFoundationTabCB(elID);
		helperInnerSliderCB(elID);
	});

	helperSlider('.solution__slider-head-1 a', '.solution__slider-footer-1 .solution__slider-row');
	helperSlider('.solution__slider-head-2 a', '.solution__slider-footer-2 .solution__slider-row');
	helperSlider('.solution__slider-head-3 a', '.solution__slider-footer-3 .solution__slider-row');
};

var approachTabCB = function approachTabCB() {
	$('.approach__tab').on('click', function (ev) {
		var el = $(ev.currentTarget),
		    elID = el.attr('data-tab-id');

		$('.approach__tab').removeClass('is-active');
		el.addClass('is-active');

		$('.approach__tab-content').hide();
		$('.approach__tab-content[data-tab-content="' + elID + '"]').fadeIn(550);

		// helperSolutionTabCB(elID);
		// helperFoundationTabCB(elID);
	});
};

var homepageMainScrollAnimation = function homepageMainScrollAnimation() {
	var vid1 = $('#video1')[0];

	if ($('#main').length <= 0) {
		return;
	}

	$('.main__wrapper-left').css({ left: $('.main__wrapper')[0].getBoundingClientRect().left });
	$('[main-content-js]').animate({ opacity: 1 }, 1000);

	$(window).on('resize', function () {
		$('.main__wrapper-left').css({ left: $('.main__wrapper')[0].getBoundingClientRect().left });
	});

	$('.main__bg').css({ opacity: 1 });

	if (vid1.paused) vid1.play();

	/* SCENE 1
 * ==================== */
	var tween1 = new TimelineMax(),
	    scene1 = null,
	    controller1 = new ScrollMagic.Controller();

	var laptopDimension = $('#laptop-fill')[0].getBoundingClientRect(),
	    laptopDimensionW = laptopDimension.width - 5,
	    laptopDimensionH = laptopDimension.height - 5;

	tween1.fromTo('#video1WrapperBorder > i', 0.5, {
		width: '50vw',
		height: '100vh',
		borderRadius: 0,
		boxShadow: '0px 5px 15px rgba(64, 62, 61, 0)', transformOrigin: 'center' }, {
		width: laptopDimensionW,
		height: laptopDimensionH,
		borderRadius: 12,
		boxShadow: '0px 5px 15px rgba(64, 62, 61, 0.3)', ease: Linear.easeNone });

	scene1 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-5",
		offset: $(window).outerHeight(true) / 2 + 10,
		duration: $('.main__wrapper-5').outerHeight(true) - ($(window).outerHeight(true) / 2 + 10)
	}).setTween(tween1)
	// .addIndicators({name: 'video'})
	.addTo(controller1);

	/* end :: SCENE 1
 * ==================== */

	/* SCENE 2
 * ==================== */
	var tween2 = new TimelineMax(),
	    tween21 = new TimelineMax(),
	    tween22 = new TimelineMax(),
	    scene2 = null,
	    scene21 = null,
	    scene22 = null,
	    controller2 = new ScrollMagic.Controller(),
	    controller21 = new ScrollMagic.Controller(),
	    controller22 = new ScrollMagic.Controller();

	var wrapperNode2 = $('.main__wrapper-4'),
	    wrapperNode2H = wrapperNode2.outerHeight(true);

	tween2.fromTo('#video1Wrapper video', 10, { opacity: 1 }, { opacity: 0, ease: Linear.easeNone }, '-=0');

	tween21.fromTo('#laptop-border', 5, { opacity: 0 }, { opacity: 1, ease: Linear.easeNone }, '-=0').fromTo('#laptop-shadow', 5, { opacity: 0, y: -5, scaleY: 0, transformOrigin: 'center' }, { opacity: 1, y: 0, scaleY: 1, ease: Linear.easeNone }, '-=0').fromTo('#laptop-line', 5, { opacity: 0 }, { opacity: 1, ease: Linear.easeNone }, '-=0').fromTo('#laptop-bottom', 5, { opacity: 0, y: -20, scaleX: 0.5, scaleY: 0, transformOrigin: 'center' }, { opacity: 1, y: 0, scaleX: 1, scaleY: 1, ease: Linear.easeNone }, '-=0');

	tween22.fromTo('#laptop-circle-1', 1, { opacity: 0, x: 30, scale: 0.75, transformOrigin: 'center' }, { opacity: 1, x: 0, scale: 1, ease: Linear.easeNone }, '-=0').fromTo('#laptop-circle-2', 1, { opacity: 0, x: 30, scale: 0.75, transformOrigin: 'center' }, { opacity: 1, x: 0, scale: 1, ease: Linear.easeNone }, '-=0').fromTo('#laptop-circle-3', 1, { opacity: 0, x: 30, scale: 0.75, transformOrigin: 'center' }, { opacity: 1, x: 0, scale: 1, ease: Linear.easeNone }, '-=0').fromTo('#laptop-circle-4', 1, { opacity: 0, x: 30, scale: 0.75, transformOrigin: 'center' }, { opacity: 1, x: 0, scale: 1, ease: Linear.easeNone }, '-=0').fromTo('#laptop-circle-5', 1, { opacity: 0, x: 30, scale: 0.75, transformOrigin: 'center' }, { opacity: 1, x: 0, scale: 1, ease: Linear.easeNone }, '-=0');

	scene2 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-4",
		offset: 0,
		duration: wrapperNode2H / 5
	}).setTween(tween2)
	// .addIndicators({name: 'video-laptop'})
	.addTo(controller2);

	scene21 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-4",
		offset: 0,
		duration: wrapperNode2H / 2 - 200
	}).setTween(tween21)
	// .addIndicators({name: 'laptop'})
	.addTo(controller21).on("progress", function (event) {
		var num = Number((event.progress * 100).toFixed(0));

		// console.log(`num: `, num);
		// console.log(`vid1: `, vid1);

		if (num >= 60) {
			vid1.pause();
			vid1.currentTime = 0;
		} else if (num === 0) {
			vid1.play();
		}
	});

	scene22 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-4",
		offset: wrapperNode2H / 2 - 200,
		duration: wrapperNode2H / 2 + 100
	}).setTween(tween22)
	// .addIndicators({name: 'laptop-circle'})
	.addTo(controller22);
	/* end :: SCENE 2
 * ==================== */

	/* SCENE 3
 * ==================== */
	var tween3 = new TimelineMax(),
	    tween31 = new TimelineMax(),
	    tween32 = new TimelineMax(),
	    scene3 = null,
	    scene31 = null,
	    scene32 = null,
	    controller3 = new ScrollMagic.Controller(),
	    controller31 = new ScrollMagic.Controller(),
	    controller32 = new ScrollMagic.Controller(),
	    vid2 = $('#video2')[0],
	    vidBool = true;

	var wrapperNode3 = $('.main__wrapper-3'),
	    wrapperNode3H = wrapperNode3.outerHeight(true);

	tween3.to(['#video1WrapperBorder > i', '#mainSVG1'], 0.5, { opacity: 0, ease: Power1.easeInOut }, '-=0').fromTo('#video2Wrapper', 1, { opacity: 0 }, { opacity: 1, ease: Power1.easeInOut }, '-=0.5')
	// .to(['#laptop-screen', '#laptop-fill'], 1,
	// 	{opacity: 0, ease: Linear.easeNone}, '-=1'
	// )
	// .to('#laptop-border', 1,
	// 	{opacity: 0, ease: Linear.easeNone}, '-=1'
	// )
	// .to('#laptop-shadow', 1,
	// 	{opacity: 0, y: -10, scale: 0, ease: Linear.easeNone}, '-=1'
	// )
	// .to('#laptop-line', 1,
	// 	{opacity: 0, ease: Linear.easeNone}, '-=1'
	// )
	// .to('#laptop-bottom', 1,
	// 	{opacity: 0, scaleX: 0.5, scaleY: 0, ease: Linear.easeNone}, '-=1'
	// )
	// .to('#mainSVG1 .text', 1,
	// 	{opacity: 0, ease: Linear.easeNone}, '-=1'
	// )
	;

	// tween31
	// 	.fromTo(['#device-border', '#device-fill'], 1,
	// 		{opacity: 0, x: 10, y: 30, scale: 0.7, transformOrigin: 'center'}, {opacity: 1, x: 0, y: 0, scale: 1, ease: Linear.easeNone}, '-=0'
	// 	)
	// 	.fromTo('#device-option', 1,
	// 		{opacity: 0}, {opacity: 1, ease: Linear.easeNone}, '-=0'
	// 	)
	// ;

	// tween32
	// 	.fromTo('#device-circle-1', 10,
	// 		{opacity: 0, x: -80, y: -93, transformOrigin: 'center'}, {opacity: 1, x: 0, y: 0, ease: Linear.easeNone}, '-=0')
	// 	.to('#laptop-circle-1', 0.5,
	// 		{opacity: 0, ease: Linear.easeNone}, '-=9.9'
	// 	)
	// 	.fromTo('#device-circle-2', 10,
	// 		{opacity: 0, x: -113, y: -93, transformOrigin: 'center'}, {opacity: 1, x: 0, y: 0, ease: Linear.easeNone}, '-=0')
	// 	.to('#laptop-circle-2', 0.5,
	// 		{opacity: 0, ease: Linear.easeNone}, '-=10'
	// 	)
	// 	.fromTo('#device-circle-3', 10,
	// 		{opacity: 0, x: -145, y: -93, transformOrigin: 'center'}, {opacity: 1, x: 0, y: 0, ease: Linear.easeNone}, '-=0')
	// 	.to('#laptop-circle-3', 0.5,
	// 		{opacity: 0, ease: Linear.easeNone}, '-=10'
	// 	)
	// 	.fromTo('#device-circle-4', 10,
	// 		{opacity: 0, x: 282, y: -220, transformOrigin: 'center'}, {opacity: 1, x: 0, y: 0, ease: Linear.easeNone}, '-=0')
	// 	.to('#laptop-circle-4', 0.5,
	// 		{opacity: 0, ease: Linear.easeNone}, '-=10'
	// 	)
	// 	.fromTo('#device-circle-5', 10,
	// 		{opacity: 0, x: 250, y: -220, transformOrigin: 'center'}, {opacity: 1, x: 0, y: 0, ease: Linear.easeNone}, '-=0')
	// 	.to('#laptop-circle-5', 0.5,
	// 		{opacity: 0, ease: Linear.easeNone}, '-=10'
	// 	)
	// 	.fromTo('#device-circle-6', 10,
	// 		{opacity: 0, x: -153, y: 0, transformOrigin: 'center'}, {opacity: 1, x: 0, y: 0, ease: Linear.easeNone}, '-=0'
	// 	)
	// ;

	scene3 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-3",
		offset: 0,
		duration: wrapperNode3H / 3
	}).setTween(tween3)
	// .addIndicators({name: 'video-laptop'})
	.addTo(controller3).on("progress", function (event) {
		var num = Number((event.progress * 100).toFixed(0));

		// console.log(`scene3 num: `, num);

		if (num >= 0 && vidBool) {
			if (vid2.paused) vid2.play();
			vidBool = false;
		} else if (num === 0) {
			vid2.pause();
			vid2.currentTime = 0;
			vidBool = true;
		}
	});

	// scene31 = new ScrollMagic.Scene({
	// 	triggerElement: ".main__wrapper-3",
	// 	offset: 0,
	// 	duration: wrapperNode3H / 3
	// })
	// 	.setTween(tween31)
	// 	// .addIndicators({name: 'device'})
	// 	.addTo(controller31);
	//
	// scene32 = new ScrollMagic.Scene({
	// 	triggerElement: ".main__wrapper-3",
	// 	offset: wrapperNode3H / 3,
	// 	duration: (wrapperNode3H - (wrapperNode3H / 3)) - 100
	// })
	// 	.setTween(tween32)
	// 	// .addIndicators({name: 'device-laptop-circle'})
	// 	.addTo(controller32);
	/* end :: SCENE 3
 * ==================== */

	/* SCENE 4
 * ==================== */
	var tween4 = new TimelineMax(),
	    tween41 = new TimelineMax(),
	    tween42 = new TimelineMax(),
	    scene4 = null,
	    scene41 = null,
	    scene42 = null,
	    controller4 = new ScrollMagic.Controller(),
	    controller41 = new ScrollMagic.Controller(),
	    controller42 = new ScrollMagic.Controller();

	var wrapperNode4 = $('.main__wrapper-2'),
	    wrapperNode4H = wrapperNode4.outerHeight(true);

	tween4
	// .to(['#device-border', '#device-fill', '#device-option'], 1,
	// 	{opacity: 0, ease: Linear.easeNone}, '-=0'
	// )
	.fromTo('#video2Wrapper', 0.5, { opacity: 1 }, { opacity: 0, ease: Power1.easeInOut }, '-=0');

	tween41.fromTo('#anim4-bg rect', 0.5, {
		opacity: 0,
		x: 30, y: 128,
		width: '677px', height: '453px',
		rotation: 0,
		transformOrigin: '140px 460px'
	}, {
		opacity: '0.4',
		x: 0, y: 0,
		width: '500px', height: '500px',
		rotation: 45,
		ease: Linear.easeNone
	}, '-=0.5');

	tween42.fromTo('#anim4-box-1', 1, { opacity: 0, x: 14, y: 76, scale: 0.5, transformOrigin: 'center' }, { opacity: 1, x: 0, y: 0, scale: 1, ease: Bounce.easeOut }, '-=0')
	// .to('#device-circle-1', 1,
	// 	{opacity: 0, ease: Linear.easeNone}, '-=0.9'
	// )
	.fromTo('#anim4-box-2', 1, { opacity: 0, x: -23, y: 76, scale: 0.5, transformOrigin: 'center' }, { opacity: 1, x: 0, y: 0, scale: 1, ease: Bounce.easeOut }, '-=0')
	// .to('#device-circle-2', 1,
	// 	{opacity: 0, ease: Linear.easeNone}, '-=1'
	// )
	.fromTo('#anim4-box-3', 1, { opacity: 0, x: -58, y: 76, scale: 0.5, transformOrigin: 'center' }, { opacity: 1, x: 0, y: 0, scale: 1, ease: Bounce.easeOut }, '-=0')
	// .to('#device-circle-3', 1,
	// 	{opacity: 0, ease: Linear.easeNone}, '-=1'
	// )
	.fromTo('#anim4-box-4', 1, { opacity: 0, x: 62, y: 11, scale: 0.5, transformOrigin: 'center' }, { opacity: 1, x: 0, y: 0, scale: 1, ease: Bounce.easeOut }, '-=0')
	// .to('#device-circle-4', 1,
	// 	{opacity: 0, ease: Linear.easeNone}, '-=1'
	// )
	.fromTo('#anim4-box-5', 1, { opacity: 0, x: 27, y: 11, scale: 0.5, transformOrigin: 'center' }, { opacity: 1, x: 0, y: 0, scale: 1, ease: Bounce.easeOut }, '-=0')
	// .to('#device-circle-5', 1,
	// 	{opacity: 0, ease: Linear.easeNone}, '-=1'
	// )
	.fromTo('#anim4-box-6', 1, { opacity: 0, x: -9, y: 11, scale: 0.5, transformOrigin: 'center' }, { opacity: 1, x: 0, y: 0, scale: 1, ease: Bounce.easeOut }, '-=0')
	// .to('#device-circle-6', 1,
	// 	{opacity: 0, ease: Linear.easeNone}, '-=1'
	// )
	;

	scene4 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-2",
		offset: -100,
		duration: wrapperNode4H / 4 - 100
	}).setTween(tween4)
	// .addIndicators({name: 'device'})
	.addTo(controller4).on("progress", function (event) {
		var num = Number((event.progress * 100).toFixed(0));

		console.log("scene4 num: ", num);
		// console.log($('#video2Wrapper').attr('style'));
		// console.log($('#video2Wrapper').attr('style') === 'opacity: 0;');
		//
		if ($('#video2Wrapper').attr('style') === 'opacity: 0;') {
			vidBool = true;
			vid2.pause();
			vid2.currentTime = 0;
		} else if (num <= 90 && vidBool) {
			if (vid2.paused) vid2.play();
			vidBool = false;
		}
	});

	scene41 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-2",
		offset: 0,
		duration: wrapperNode4H - 200
	}).setTween(tween41)
	// .addIndicators({name: 'video'})
	.addTo(controller41).on("progress", function (event) {
		var num = Number((event.progress * 100).toFixed(0));

		// console.log(`scene41 num: `, num);
		//
		// if(num <= 5) {
		// 	if(vid2.paused) vid2.play();
		// }
	});

	scene42 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-2",
		offset: 300,
		duration: wrapperNode4H - 500
	}).setTween(tween42)
	// .addIndicators({name:'box-sq'})
	.addTo(controller42);
	/* end :: SCENE 4
 * ==================== */

	/* SCENE 5
 * ==================== */
	var tween5 = new TimelineMax(),
	    tween51 = new TimelineMax(),
	    tween52 = new TimelineMax(),
	    tween53 = new TimelineMax(),
	    scene5 = null,
	    scene51 = null,
	    scene52 = null,
	    scene53 = null,
	    controller5 = new ScrollMagic.Controller(),
	    controller51 = new ScrollMagic.Controller(),
	    controller52 = new ScrollMagic.Controller(),
	    controller53 = new ScrollMagic.Controller(),
	    vid3 = $('#video3')[0];

	var wrapperNode5 = $('.main__wrapper-1'),
	    wrapperNode5H = wrapperNode5.outerHeight(true);

	tween5.to('#mainSVG3', 0.5, { opacity: 0 }, '-=0')
	// .to(['#anim4-box-1', '#anim4-box-2', '#anim4-box-3', '#anim4-box-4', '#anim4-box-5', '#anim4-box-6'], 10,
	// 	{opacity: 0, scale: 0.5, transformOrigin: 'center', ease: Linear.easeNone},
	// 	'-=10'
	// )
	// .fromTo('#video3Wrapper', 1,
	// 	{opacity: 0}, {opacity: 1, ease: Linear.easeNone}, '-=10'
	// )
	;

	// tween51
	// 	.fromTo('#cloud-border', 10,
	// 		{opacity: 0, scale: 0.5, transformOrigin: 'center'}, {opacity: 1, scale: 1, ease: Linear.easeNone}, '-=0'
	// 	)
	// 	.fromTo('#cloud-fill', 10,
	// 		{opacity: 0, scale: 0.85, transformOrigin: 'center'}, {opacity: 1, scale: 1, ease: Linear.easeNone}, '-=8'
	// 	)
	// 	.fromTo('#cloud-visual', 10,
	// 		{opacity: 0, scale: 0, transformOrigin: 'center'}, {opacity: 0.3, scale: 1, ease: Elastic.easeOut.config(1.2,0.8)}, '-=7'
	// 	)
	// 	.fromTo('#cloud-circle-1', 10,
	// 		{opacity: 0, scale: 0, transformOrigin: 'center'}, {opacity: 1, scale: 1, ease: Elastic.easeOut.config(1,0.4)}, '-=6'
	// 	)
	// 	.fromTo('#cloud-circle-2', 10,
	// 		{opacity: 0, scale: 0, transformOrigin: 'center'}, {opacity: 1, scale: 1, ease: Elastic.easeOut.config(1,0.4)}, '-=6'
	// 	)
	// ;

	tween52.fromTo('#video3Wrapper', 1, { opacity: 0 }, { opacity: 1, ease: Linear.easeNone }, '-=0');

	// tween53
	// 	.to(['#video3Wrapper', '.main__wrapper-5 .main__wrapper-left > div'], 0.5,
	// 		{opacity: 0, y: '-500px', ease: Linear.easeNone}, '-=0'
	// 	)
	// ;

	scene5 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-1",
		offset: 0,
		duration: 300
	}).setTween(tween5)
	// .addIndicators({name: 'rect'})
	.addTo(controller5).on("progress", function (event) {
		var num = Number((event.progress * 100).toFixed(0));

		if (num > 0) {
			if (vid3.paused) vid3.play();
		} else if (num === 0 && !vid3.paused) {
			vid3.pause();
			vid3.currentTime = 0;
		}
	});

	// scene51 = new ScrollMagic.Scene({
	// 	triggerElement: ".main__wrapper-1",
	// 	offset: 0,
	// 	duration: wrapperNode5H - 100
	// })
	// 	.setTween(tween51)
	// 	// .addIndicators({name: 'last-svg'})
	// 	.addTo(controller51);

	scene52 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-1",
		offset: 200,
		duration: 800
	}).setTween(tween52)
	// .addIndicators({name: 'last-svg'})
	.addTo(controller52);

	// scene53 = new ScrollMagic.Scene({
	// 	triggerElement: ".main__wrapper-1",
	// 	offset: $('.main__wrapper-1').outerHeight(true) / 1.075,
	// 	duration: ($('.main__wrapper-1').outerHeight(true) - ($('.main__wrapper-1').outerHeight(true) / 1.075)) + 200
	// })
	// 	.setTween(tween53)
	// .addIndicators({name: 'last-animation'})
	// .addTo(controller53);

	/* end :: SCENE 5
 * ==================== */

	/* TEXT
 * ==================== */
	var tweenTXT1 = new TimelineMax(),
	    sceneTXT1 = null,
	    controllerTXT1 = new ScrollMagic.Controller(),
	    tweenTXT2 = new TimelineMax(),
	    sceneTXT2 = null,
	    controllerTXT2 = new ScrollMagic.Controller(),
	    tweenTXT3 = new TimelineMax(),
	    sceneTXT3 = null,
	    controllerTXT3 = new ScrollMagic.Controller(),
	    tweenTXT4 = new TimelineMax(),
	    sceneTXT4 = null,
	    controllerTXT4 = new ScrollMagic.Controller(),
	    tweenTXT5 = new TimelineMax(),
	    sceneTXT5 = null,
	    controllerTXT5 = new ScrollMagic.Controller()
	// tweenTXT6 = new TimelineMax(),
	// sceneTXT6 = null,
	// controllerTXT6 = new ScrollMagic.Controller()
	;

	tweenTXT1.fromTo('.main__wrapper-1 .main__wrapper-left', 1, { opacity: 1, y: 0 }, { opacity: 0, y: '-100%', ease: Linear.easeNone }, '-=0');

	tweenTXT2.fromTo('.main__wrapper-2 .main__wrapper-left', 1, { opacity: 0 }, { opacity: 1, y: 0, ease: Linear.easeNone }, '-=0');

	tweenTXT3.fromTo('.main__wrapper-2 .main__wrapper-left', 1, { opacity: 1 }, { opacity: 0, y: '-100%', ease: Linear.easeNone }, '-=0').fromTo('.main__wrapper-3 .main__wrapper-left', 1, { opacity: 0 }, { opacity: 1, y: 0, ease: Linear.easeNone }, '-=1');

	tweenTXT4.fromTo('.main__wrapper-3 .main__wrapper-left', 1, { opacity: 1 }, { opacity: 0, y: '-100%', ease: Linear.easeNone }, '-=0').fromTo('.main__wrapper-4 .main__wrapper-left', 1, { opacity: 0 }, { opacity: 1, y: 0, ease: Linear.easeNone }, '-=1');

	tweenTXT5.fromTo('.main__wrapper-4 .main__wrapper-left', 1, { opacity: 1 }, { opacity: 0, y: '-100%', ease: Linear.easeNone }, '-=0').fromTo('.main__wrapper-5 .main__wrapper-left', 1, { opacity: 0 }, { opacity: 1, y: 0, ease: Linear.easeNone }, '-=1');

	// tweenTXT6
	// 	.to('.main__wrapper-5 .main__wrapper-left', 1, {opacity: 1, y: '-75%', ease: Linear.easeNone}, '-=0')
	// ;

	sceneTXT1 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-5",
		offset: wrapperNode5H / 4,
		duration: wrapperNode5H + wrapperNode5H / 1.5
	}).setTween(tweenTXT1)
	// .addIndicators({name: '1 text'})
	.addTo(controllerTXT1);

	sceneTXT2 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-4",
		offset: 0,
		duration: wrapperNode4H
	}).setTween(tweenTXT2)
	// .addIndicators({name: '2 text'})
	.addTo(controllerTXT2);

	sceneTXT3 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-3",
		offset: 0,
		duration: wrapperNode3H
	}).setTween(tweenTXT3)
	// .addIndicators({name: '3 text'})
	.addTo(controllerTXT3);

	sceneTXT4 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-2",
		offset: 0,
		duration: wrapperNode2H
	}).setTween(tweenTXT4)
	// .addIndicators({name: '4 text'})
	.addTo(controllerTXT4);

	sceneTXT5 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-1",
		offset: 0,
		duration: $('.main__wrapper-1').outerHeight(true) - 300
	}).setTween(tweenTXT5)
	// .addIndicators({name: '5 text'})
	.addTo(controllerTXT5);

	// sceneTXT6 = new ScrollMagic.Scene({
	// 	triggerElement: ".main__wrapper-1",
	// 	offset: $('.main__wrapper-1').outerHeight(true) - 300,
	// 	duration: 1000
	// })
	// 	.setTween(tweenTXT6)
	// .addIndicators({name: '5 text'})
	// .addTo(controllerTXT6);
	/* end :: TEXT
 * ==================== */
};

var headerChangeColor = function headerChangeColor() {
	var vid = $('#video3')[0];

	var containerNode = $('#container')[0],
	    header = $('#header');

	if (!containerNode) return;

	function isAnyPartOfElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		var windowHeight = window.innerHeight || document.documentElement.clientHeight;
		var windowWidth = window.innerWidth || document.documentElement.clientWidth;
		var vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
		var horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

		return vertInView && horInView;
	}
	function helperColorChange() {
		if (isAnyPartOfElementInViewport(containerNode) && containerNode.getBoundingClientRect().top < 0) {
			header.addClass('is-color');
			vid.pause();
			vid.currentTime = 0;
		} else {
			header.removeClass('is-color');
			vid.play();
		}
	}

	helperColorChange();

	$(window).on('scroll', function (ev) {
		helperColorChange();
	});

	setTimeout(function () {
		header.animate({ opacity: 1 }).css({ transform: 'translateY(0)' });
	}, 500);
};

var approachCollapse = function approachCollapse() {
	$('.approach__collapse-head').on('click', function (ev) {
		var el = $(ev.currentTarget);

		el.toggleClass('is-active');

		el.siblings('.approach__collapse-body').slideToggle(550);
	});
};

var passwordPreview = function passwordPreview() {
	$('.sign__form-pass').on('click', function (ev) {
		if ($(ev.currentTarget).hasClass('is-active')) {
			$(ev.currentTarget).removeClass('is-active');
			$(ev.currentTarget).prev().attr('type', 'password');
		} else {
			$(ev.currentTarget).addClass('is-active');
			$(ev.currentTarget).prev().attr('type', 'text');
		}
	});
};

var dashboardCB = function dashboardCB() {
	$('.dashboard__nav a').on('click', function (ev) {
		$('.dashboard__nav a').removeClass('is-active');
		$(ev.currentTarget).addClass('is-active');
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
	initSwiper();
	initSmoothScroll();
	initHamburger();
	// ==========================================

	// callback
	approachTabCB();
	solutionCB();
	foundationCB();
	homepageMainScrollAnimation();
	headerChangeColor();
	approachCollapse();
	passwordPreview();
	dashboardCB();
	// ==========================================
};

window.addEventListener('load', function () {
	initNative();
});