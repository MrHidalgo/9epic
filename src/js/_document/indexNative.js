/*
* CALLBACK :: start
* ============================================= */

/**
 *
 * @param id
 */
function helperFoundationTabCB(id) {
	$('.foundation__tab')
		.removeClass('is-active')
		.eq(id)
		.addClass('is-active');
	
	$('.foundation__tab-content').hide();
	$('.foundation__tab-content[data-content-id="' + id + '"]').fadeIn(550);
}

/**
 *
 * @param id
 */
function helperApproachTabCB(id) {
	$('.approach__tab')
		.removeClass('is-active')
		.eq(id)
		.addClass('is-active');
	
	$('.approach__tab-content').hide();
	$('.approach__tab-content[data-tab-content="' + id + '"]').fadeIn(550);
}

/**
 *
 * @param id
 */
function helperSolutionTabCB(id) {
	$('.solution__tab')
		.removeClass('is-active')
		.eq(id)
		.addClass('is-active');
	
	$('.solution__tab-content').hide();
	$('.solution__tab-content[data-tab-content="' + id + '"]').fadeIn(550);
	
	helperInnerSliderCB(id);
}

/**
 *
 * @param id
 */
function helperInnerSliderCB(id) {
	let partBool2 = true,
		partBool3 = true;
	
	setTimeout(() => {
		
		if(parseInt(id) === 1 && partBool2) {
			for(let i = 0, j = 1; i < $('.solution__slider-wrapper-2 .solution__slider-row').length; i++, j++) {
				new Swiper('.solutionSlider2' + i, {
					effect: 'slide',
					slidesPerView: 1,
					spaceBetween: 60,
					speed: 1000,
					navigation: {
						nextEl: '.solution__slider-wrapper-2 .solution__slider-row-' + j + ' .solution__slider-btn--next',
						prevEl: '.solution__slider-wrapper-2 .solution__slider-row-' + j + ' .solution__slider-btn--prev',
					},
					touchMoveStopPropagation:false,
					simulateTouch : false,
					allowSwipeToNext: true,
					allowSwipeToPrev: true,
					allowPageScroll: "auto ",
					on: {
						init: function (swiper) {
							if(swiper.slides.length > 1) {
								$('.solution__slider-wrapper-2 .solution__slider-row-' + j + ' .solution__slider-btn').animate({opacity: 1}, 550);
							}
						}
					}
				});
			}
			
			partBool2 = false;
		} else if(parseInt(id) === 2 && partBool3) {
			for(let i = 0, j = 1; i < $('.solution__slider-wrapper-3 .solution__slider-row').length; i++, j++) {
				new Swiper('.solutionSlider3' + i, {
					effect: 'slide',
					slidesPerView: 1,
					spaceBetween: 60,
					speed: 1000,
					navigation: {
						nextEl: '.solution__slider-wrapper-3 .solution__slider-row-' + j + ' .solution__slider-btn--next',
						prevEl: '.solution__slider-wrapper-3 .solution__slider-row-' + j + ' .solution__slider-btn--prev',
					},
					touchMoveStopPropagation:false,
					simulateTouch : false,
					allowSwipeToNext: true,
					allowSwipeToPrev: true,
					allowPageScroll: "auto ",
					on: {
						init: function (swiper) {
							if(swiper.slides.length > 1) {
								$('.solution__slider-wrapper-3 .solution__slider-row-' + j + ' .solution__slider-btn').animate({opacity: 1}, 550);
							}
						}
					}
				});
			}
			
			partBool3 = false;
		}
		
	}, 100);
}


const foundationCB = () => {
	$('.foundation__tab').on('click', (ev) => {
		const el = $(ev.currentTarget),
			elID = el.attr('data-tab-id');
		
		$('.foundation__tab').removeClass('is-active');
		el.addClass('is-active');
		
		$('.foundation__tab-content').hide();
		$('.foundation__tab-content[data-content-id="' + elID + '"]').fadeIn(550);
		
		// helperApproachTabCB(elID);
		// helperSolutionTabCB(elID);
	});
};


const solutionCB = () => {
	function helperSlider(btnName, footerNode) {
		$(btnName).on('click', (ev) => {
			const el = $(ev.currentTarget),
				elID = el.attr('data-id');
			
			$(btnName).removeClass('is-active');
			el.addClass('is-active');
			
			$(footerNode).removeClass('is-show');
			$(footerNode + '-' +  elID).addClass('is-show');
		});
	}
	
	$('.solution__tab').on('click', (ev) => {
		const el = $(ev.currentTarget),
			elID = el.attr('data-tab-id');
		
		$('.solution__tab').removeClass('is-active');
		el.addClass('is-active');
		
		$('.solution__tab-content').hide();
		$('.solution__tab-content[data-tab-content="' + elID + '"]').fadeIn(550);
		
		// helperApproachTabCB(elID);
		// helperFoundationTabCB(elID);
		helperInnerSliderCB(elID);
	})
	
	helperSlider('.solution__slider-head-1 a','.solution__slider-footer-1 .solution__slider-row');
	helperSlider('.solution__slider-head-2 a','.solution__slider-footer-2 .solution__slider-row');
	helperSlider('.solution__slider-head-3 a','.solution__slider-footer-3 .solution__slider-row');
};


const approachTabCB = () => {
	$('.approach__tab').on('click', (ev) => {
		const el = $(ev.currentTarget),
			elID = el.attr('data-tab-id');
		
		$('.approach__tab').removeClass('is-active');
		el.addClass('is-active');
		
		$('.approach__tab-content').hide();
		$('.approach__tab-content[data-tab-content="' + elID + '"]').fadeIn(550);
		
		// helperSolutionTabCB(elID);
		// helperFoundationTabCB(elID);
	});
};


const homepageMainScrollAnimation =() => {
	const vid1 = $('#video1')[0];
	
	if($('#main').length <= 0) {
		return;
	}
	
	$('.main__wrapper-left').css({left: $('.main__wrapper')[0].getBoundingClientRect().left});
	$('[main-content-js]').animate({opacity: 1}, 1000);
	
	$(window).on('resize', () => {
		$('.main__wrapper-left').css({left: $('.main__wrapper')[0].getBoundingClientRect().left});
	});
	
	$('.main__bg').css({opacity: 1});
	
	/* SCENE 1
	* ==================== */
	let tween1 = null,
		scene1 = null,
		controller1 = null;
	
	function helperScene1() {
		tween1 = new TimelineMax();
		controller1 = new ScrollMagic.Controller();
		
		let laptopDimension = $('#laptop-fill')[0].getBoundingClientRect(),
			laptopDimensionW = laptopDimension.width - 5,
			laptopDimensionH = laptopDimension.height - 5;
		
		tween1
			.fromTo('#video1WrapperBorder > i', 0.5,
				{
					width: '50vw',
					height: '100vh',
					borderRadius: 0,
					boxShadow: '0px 5px 15px rgba(64, 62, 61, 0)', transformOrigin: 'center'},
				{
					width: laptopDimensionW,
					height: laptopDimensionH,
					borderRadius: 12,
					boxShadow: '0px 5px 15px rgba(64, 62, 61, 0.3)', ease: Linear.easeNone}
			)
		;
		
		let sceneOffset1 = ($(window).outerHeight(true) / 2) + 10;
		$(window).on('resize', () => {
			sceneOffset1 = ($(window).outerHeight(true) / 2) + 10;
		});
		
		scene1 = new ScrollMagic.Scene({
			triggerElement: ".main__wrapper-5",
			offset: sceneOffset1,
			duration: $('.main__wrapper-5').outerHeight(true) - (($(window).outerHeight(true) / 2) + 10)
		})
			.setTween(tween1)
			// .addIndicators({name: 'video'})
			.addTo(controller1);
	}
	
	if (document.documentElement.clientWidth >= 768) {
		helperScene1();
	}
	
	window.addEventListener("resize", function() {
		if (document.documentElement.clientWidth >= 768) {
			helperScene1();
		} else {
			destroyController();
		}
	});
	
	function destroyController() {
		controller1.destroy(true);
		scene1.destroy(true);
	}
	/* end :: SCENE 1
	* ==================== */
	
	/* SCENE 2
	* ==================== */
	let tween2 = new TimelineMax(),
		tween21 = new TimelineMax(),
		tween22 = new TimelineMax(),
		scene2 = null,
		scene21 = null,
		scene22 = null,
		controller2 = new ScrollMagic.Controller(),
		controller21 = new ScrollMagic.Controller(),
		controller22 = new ScrollMagic.Controller()
	;
	
	let wrapperNode2 = $('.main__wrapper-4'),
		wrapperNode2H = wrapperNode2.outerHeight(true);
	
	tween2
		.fromTo('#video1Wrapper video', 10,
			{opacity: 1}, {opacity: 0, ease: Linear.easeNone}, '-=0'
		)
	;
	
	tween21
		.fromTo('#laptop-border', 5,
			{opacity: 0}, {opacity: 1, ease: Linear.easeNone}, '-=0'
		)
		.fromTo('#laptop-shadow', 5,
			{opacity: 0, y: -5, scaleY: 0, transformOrigin: 'center'}, {opacity: 1, y: 0, scaleY: 1, ease: Linear.easeNone}, '-=0'
		)
		.fromTo('#laptop-line', 5,
			{opacity: 0}, {opacity: 1, ease: Linear.easeNone}, '-=0'
		)
		.fromTo('#laptop-bottom', 5,
			{opacity: 0, y: -20, scaleX: 0.5, scaleY: 0, transformOrigin: 'center'},
			{opacity: 1, y: 0, scaleX: 1, scaleY: 1, ease: Linear.easeNone}, '-=0'
		)
	;
	
	tween22
		.fromTo('#laptop-circle-1', 1,
			{opacity: 0, x: 30, scale: 0.75, transformOrigin: 'center'}, {opacity: 1, x: 0, scale: 1, ease: Linear.easeNone}, '-=0'
		)
		.fromTo('#laptop-circle-2', 1,
			{opacity: 0, x: 30, scale: 0.75, transformOrigin: 'center'}, {opacity: 1, x: 0, scale: 1, ease: Linear.easeNone}, '-=0'
		)
		.fromTo('#laptop-circle-3', 1,
			{opacity: 0, x: 30, scale: 0.75, transformOrigin: 'center'}, {opacity: 1, x: 0, scale: 1, ease: Linear.easeNone}, '-=0'
		)
		.fromTo('#laptop-circle-4', 1,
			{opacity: 0, x: 30, scale: 0.75, transformOrigin: 'center'}, {opacity: 1, x: 0, scale: 1, ease: Linear.easeNone}, '-=0'
		)
		.fromTo('#laptop-circle-5', 1,
			{opacity: 0, x: 30, scale: 0.75, transformOrigin: 'center'}, {opacity: 1, x: 0, scale: 1, ease: Linear.easeNone}, '-=0'
		)
	;
	
	scene2 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-4",
		offset: 0,
		duration: wrapperNode2H / 5
	})
		.setTween(tween2)
		// .addIndicators({name: 'video-laptop'})
		.addTo(controller2);
	
	scene21 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-4",
		offset: 0,
		duration: wrapperNode2H / 2 - 200
	})
		.setTween(tween21)
		// .addIndicators({name: 'laptop'})
		.addTo(controller21)
		.on("progress", function (event) {
			let num = Number((event.progress * 100).toFixed(0));
			
			if(num >= 60) {
				vid1.pause();
				vid1.currentTime = 0;
			} else if(num === 0) {
				vid1.play();
			}
		});
	
	scene22 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-4",
		offset: wrapperNode2H / 2 - 200,
		duration: wrapperNode2H / 2 + 100
	})
		.setTween(tween22)
		// .addIndicators({name: 'laptop-circle'})
		.addTo(controller22);
	/* end :: SCENE 2
	* ==================== */
	
	
	/* SCENE 3
	* ==================== */
	let tween3 = new TimelineMax(),
		scene3 = null,
		controller3 = new ScrollMagic.Controller(),
		vid2 = $('#video2')[0],
		vidBool = true
	;
	
	let wrapperNode3 = $('.main__wrapper-3'),
		wrapperNode3H = wrapperNode3.outerHeight(true);
	
	tween3
		.to(['#video1WrapperBorder > i', '#mainSVG1'], 0.5,
			{opacity: 0, ease: Power1.easeInOut}, '-=0'
		)
		.fromTo('#video2Wrapper', 1,
			{opacity: 0}, {opacity: 1, ease: Power1.easeInOut}, '-=0.5'
		)
	;
	
	scene3 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-3",
		offset: 0,
		duration: wrapperNode3H / 3
	})
		.setTween(tween3)
		// .addIndicators({name: 'video-laptop'})
		.addTo(controller3)
		.on("progress", function (event) {
			let num = Number((event.progress * 100).toFixed(0));
			
			if(num >= 0 && vidBool) {
				if(vid2.paused) vid2.play();
				vidBool = false;
			} else if(num === 0) {
				vid2.pause();
				vid2.currentTime = 0;
				vidBool = true;
			}
		})
	;
	
	/* end :: SCENE 3
	* ==================== */
	
	/* SCENE 4
	* ==================== */
	let tween4 = new TimelineMax(),
		tween41 = new TimelineMax(),
		tween42 = new TimelineMax(),
		scene4 = null,
		scene41 = null,
		scene42 = null,
		controller4 = new ScrollMagic.Controller(),
		controller41 = new ScrollMagic.Controller(),
		controller42 = new ScrollMagic.Controller()
	;
	
	let wrapperNode4 = $('.main__wrapper-2'),
		wrapperNode4H = wrapperNode4.outerHeight(true);
	
	tween4
		.to('#video2Wrapper', 0.5,
			{opacity: 0, ease: Power1.easeInOut}, '-=0'
		)
	;
	
	tween41
		.fromTo('#anim4-bg rect', 0.5,
			{
				opacity: 0,
				x: 30, y: 128,
				width: '677px', height: '453px',
				rotation: 0,
				transformOrigin: '140px 460px'
			},
			{
				opacity: '0.4',
				x: 0, y: 0,
				width: '500px', height: '500px',
				rotation: 45,
				ease: Linear.easeNone
			},
			'-=0.5'
		)
	;
	
	tween42
		.fromTo('#anim4-box-1', 1,
			{opacity: 0, x: 14, y: 76, scale: 0.5, transformOrigin: 'center'}, {opacity: 1, x: 0, y: 0, scale: 1, ease: Bounce.easeOut}, '-=0')
		.fromTo('#anim4-box-2', 1,
			{opacity: 0, x: -23, y: 76, scale: 0.5, transformOrigin: 'center'}, {opacity: 1, x: 0, y: 0, scale: 1, ease: Bounce.easeOut}, '-=0')
		.fromTo('#anim4-box-3', 1,
			{opacity: 0, x: -58, y: 76, scale: 0.5, transformOrigin: 'center'}, {opacity: 1, x: 0, y: 0, scale: 1, ease: Bounce.easeOut}, '-=0')
		.fromTo('#anim4-box-4', 1,
			{opacity: 0, x: 62, y: 11, scale: 0.5, transformOrigin: 'center'}, {opacity: 1, x: 0, y: 0, scale: 1, ease: Bounce.easeOut}, '-=0')
		.fromTo('#anim4-box-5', 1,
			{opacity: 0, x: 27, y: 11, scale: 0.5, transformOrigin: 'center'}, {opacity: 1, x: 0, y: 0, scale: 1, ease: Bounce.easeOut}, '-=0')
		.fromTo('#anim4-box-6', 1,
			{opacity: 0, x: -9, y: 11, scale: 0.5, transformOrigin: 'center'}, {opacity: 1, x: 0, y: 0, scale: 1, ease: Bounce.easeOut}, '-=0')
	;
	
	scene4 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-2",
		offset: -100,
		duration: wrapperNode4H / 4 - 100
	})
		.setTween(tween4)
		// .addIndicators({name: 'device'})
		.addTo(controller4)
		.on("progress", function (event) {
			let num = Number((event.progress * 100).toFixed(0));
			
			if($('#video2Wrapper').attr('style') === 'opacity: 0;') {
				vidBool = true;
				vid2.pause();
				vid2.currentTime = 0;
			} else if(num <= 90 && vidBool) {
				if(vid2.paused) vid2.play();
				vidBool = false;
			}
		});
	
	scene41 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-2",
		offset: 0,
		duration: wrapperNode4H - 200
	})
		.setTween(tween41)
		// .addIndicators({name: 'video'})
		.addTo(controller41);
	
	scene42 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-2",
		offset: 300,
		duration: wrapperNode4H - 500
	})
		.setTween(tween42)
		// .addIndicators({name:'box-sq'})
		.addTo(controller42);
	/* end :: SCENE 4
	* ==================== */
	
	/* SCENE 5
	* ==================== */
	let tween5 = new TimelineMax(),
		tween52 = new TimelineMax(),
		scene5 = null,
		scene52 = null,
		controller5 = new ScrollMagic.Controller(),
		controller52 = new ScrollMagic.Controller(),
		vid3 = $('#video3')[0]
	;
	
	let wrapperNode5 = $('.main__wrapper-1'),
		wrapperNode5H = wrapperNode5.outerHeight(true);
	
	tween5
		.to('#mainSVG3', 0.5, {opacity: 0}, '-=0')
	;
	
	tween52
		.fromTo('#video3Wrapper', 1, {opacity: 0}, {opacity: 1, ease: Linear.easeNone}, '-=0')
	;
	
	scene5 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-1",
		offset: 0,
		duration: 300
	})
		.setTween(tween5)
		// .addIndicators({name: 'rect'})
		.addTo(controller5)
		.on("progress", function (event) {
			let num = Number((event.progress * 100).toFixed(0));
			
			if(num > 0) {
				if(vid3.paused) vid3.play();
			} else if(num === 0 && !vid3.paused) {
				vid3.pause();
				vid3.currentTime = 0;
			}
		});
	
	scene52 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-1",
		offset: 200,
		duration: 800
	})
		.setTween(tween52)
		// .addIndicators({name: 'last-svg'})
		.addTo(controller52);
	
	/* end :: SCENE 5
	* ==================== */
	
	
	/* TEXT
	* ==================== */
	let tweenTXT1 = new TimelineMax(),
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
	;
	
	tweenTXT1
		.fromTo('.main__wrapper-1 .main__wrapper-left', 1, {opacity: 1, y: 0}, {opacity: 0, y: '-100%', ease: Linear.easeNone}, '-=0');
	
	tweenTXT2
		.fromTo('.main__wrapper-2 .main__wrapper-left', 1, {opacity: 0}, {opacity: 1, y: 0, ease: Linear.easeNone}, '-=0');

	tweenTXT3
		.fromTo('.main__wrapper-2 .main__wrapper-left', 1, {opacity: 1}, {opacity: 0, y: '-100%', ease: Linear.easeNone}, '-=0')
		.fromTo('.main__wrapper-3 .main__wrapper-left', 1, {opacity: 0}, {opacity: 1, y: 0, ease: Linear.easeNone}, '-=1');

	tweenTXT4
		.fromTo('.main__wrapper-3 .main__wrapper-left', 1, {opacity: 1}, {opacity: 0, y: '-100%', ease: Linear.easeNone}, '-=0')
		.fromTo('.main__wrapper-4 .main__wrapper-left', 1, {opacity: 0}, {opacity: 1, y: 0, ease: Linear.easeNone}, '-=1');
	
	tweenTXT5
		.fromTo('.main__wrapper-4 .main__wrapper-left', 1, {opacity: 1}, {opacity: 0, y: '-100%', ease: Linear.easeNone}, '-=0')
		.fromTo('.main__wrapper-5 .main__wrapper-left', 1, {opacity: 0}, {opacity: 1, y: 0, ease: Linear.easeNone}, '-=1');
	
	let sceneOffset2 = $(window).outerHeight(true) / 2;
	$(window).on('resize', () => {
		sceneOffset2 = $(window).outerHeight(true) / 2;
	});
	
	sceneTXT1 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-5",
		offset: $(window).outerHeight(true) / 2,
		duration: wrapperNode5H + (wrapperNode5H / 1.5)
	})
		.setTween(tweenTXT1)
		// .addIndicators({name: '1 text'})
		.addTo(controllerTXT1);
	
	sceneTXT2 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-4",
		offset: 0,
		duration: wrapperNode4H
	})
		.setTween(tweenTXT2)
		// .addIndicators({name: '2 text'})
		.addTo(controllerTXT2);
	
	sceneTXT3 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-3",
		offset: 0,
		duration: wrapperNode3H
	})
		.setTween(tweenTXT3)
		// .addIndicators({name: '3 text'})
		.addTo(controllerTXT3);
	
	sceneTXT4 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-2",
		offset: 0,
		duration: wrapperNode2H
	})
		.setTween(tweenTXT4)
		// .addIndicators({name: '4 text'})
		.addTo(controllerTXT4);
	
	sceneTXT5 = new ScrollMagic.Scene({
		triggerElement: ".main__wrapper-1",
		offset: 0,
		duration: $('.main__wrapper-1').outerHeight(true) - 300
	})
		.setTween(tweenTXT5)
		// .addIndicators({name: '5 text'})
		.addTo(controllerTXT5);
	/* end :: TEXT
	* ==================== */
};


const headerChangeColor = () => {
	const vid = $('#video3')[0];
	
	let containerNode = $('#container')[0],
		header = $('#header');
	
	if(!containerNode) return;
	
	function isAnyPartOfElementInViewport(el) {
		const rect = el.getBoundingClientRect();
		const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
		const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
		const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
		const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

		return (vertInView && horInView);
	}
	
	function helperColorChange() {
		if(isAnyPartOfElementInViewport(containerNode) && containerNode.getBoundingClientRect().top < 0) {
			header.addClass('is-color');
			vid.pause();
			vid.currentTime = 0;
		} else {
			header.removeClass('is-color');
			vid.play();
		}
	}
	
	helperColorChange();
	
	$(window).on('scroll', (ev) => {
		helperColorChange();
  });
};


const approachCollapse = () => {
	$('.approach__collapse-head').on('click', (ev) => {
		const el = $(ev.currentTarget);
		
		el.toggleClass('is-active');
		
		el.siblings('.approach__collapse-body').slideToggle(550);
	});
};


const passwordPreview = () => {
	$('.sign__form-pass').on('click', (ev) => {
		if($(ev.currentTarget).hasClass('is-active')) {
			$(ev.currentTarget).removeClass('is-active');
			$(ev.currentTarget).prev().attr('type', 'password');
		} else {
			$(ev.currentTarget).addClass('is-active');
			$(ev.currentTarget).prev().attr('type', 'text');
		}
	});
};


const dashboardCB = () => {
	$('.dashboard__nav a').on('click', (ev) => {
		const el = $(ev.currentTarget),
			elID = el.attr('data-id');
		
		if(!elID) return
		
		$('.dashboard__nav a').removeClass('is-active');
		el.addClass('is-active');
		
		$('.dashboard__row').hide();
		$('.dashboard__row[data-content-id="' + elID + '"]').fadeIn(550).css({display: 'flex'});
		
		if($(window).width() < 768) {
			$('.menu__close').trigger('click');
		}
	});
};


const hashPartners = () => {
	function helperClick() {
		$('#header .header__nav a[href="#solution"]')[0].click();
	}
	
	const hashName = window.location.hash;
	
	switch (hashName) {
		case '#BuiltRight':
			helperClick();
			$('.solution__tab[data-tab-id="0"]').click();
			break;
		case '#HeadStart':
			helperClick();
			$('.solution__tab[data-tab-id="1"]').click();
			break;
		case '#ZeroFriction':
			helperClick();
			$('.solution__tab[data-tab-id="2"]').click();
			break;
		default:
			break;
	}
};
/*
* CALLBACK :: end
* ============================================= */


/**
 * @name initNative
 *
 * @description Init all method
 */
const initNative = () => {
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
	hashPartners();
	// ==========================================
};


window.addEventListener('load', () => {
	initNative();
	
	setTimeout(() => {
		$('#header').animate({opacity: 1});
	
		if($(window).width() < 768) {
			$('#submain video, #submain img').animate({opacity: 1});
		}
	}, 500);
	
	$('body').on('click', function (e) {
		const className = "[mobile-block-js], [hamburger-js]";
		
		if (!$(e.target).closest(className).length) {
			$('[hamburger-js]').removeClass("is-active");
			$('[mobile-block-js]').removeClass("is-open");
			$('html, body').removeClass("is-hideScroll");
		}
	});
});

window.addEventListener('resize', () => {
	setTimeout(() => {
		if($(window).width() < 768) {
			$('#submain video, #submain img').animate({opacity: 1});
		}
	}, 500);
});
