/*
* CALLBACK :: start
* ============================================= */
const approachTabCB = () => {
	$('.approach__tab').on('click', (ev) => {
		const el = $(ev.currentTarget),
			elID = el.attr('data-tab-id');
		
		$('.approach__tab').removeClass('is-active');
		el.addClass('is-active');
		
		$('.approach__tab-content').hide();
		$('.approach__tab-content[data-tab-content="' + elID + '"]').fadeIn(550);
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
	
	
	let partBool2 = true,
		partBool3 = true;
	
	$('.solution__tab').on('click', (ev) => {
		const el = $(ev.currentTarget),
			elID = el.attr('data-tab-id');
		
		$('.solution__tab').removeClass('is-active');
		el.addClass('is-active');
		
		$('.solution__tab-content').hide();
		$('.solution__tab-content[data-tab-content="' + elID + '"]').fadeIn(550);
		
		setTimeout(() => {
			
			if(parseInt(elID) === 1 && partBool2) {
				for(let i = 0, j = 1; i < $('.solution__slider-wrapper-2 .solution__slider-row').length; i++, j++) {
					new Swiper('.solutionSlider2' + i, {
						effect: 'flip',
						flipEffect: {
							slideShadows: false,
						},
						speed: 1000,
						navigation: {
							nextEl: '.solution__slider-wrapper-2 .solution__slider-row-' + j + ' .solution__slider-btn--next',
							prevEl: '.solution__slider-wrapper-2 .solution__slider-row-' + j + ' .solution__slider-btn--prev',
						}
					});
				}
				
				partBool2 = false;
			} else if(parseInt(elID) === 2 && partBool3) {
				for(let i = 0, j = 1; i < $('.solution__slider-wrapper-3 .solution__slider-row').length; i++, j++) {
					new Swiper('.solutionSlider3' + i, {
						effect: 'flip',
						flipEffect: {
							slideShadows: false,
						},
						speed: 1000,
						navigation: {
							nextEl: '.solution__slider-wrapper-3 .solution__slider-row-' + j + ' .solution__slider-btn--next',
							prevEl: '.solution__slider-wrapper-3 .solution__slider-row-' + j + ' .solution__slider-btn--prev',
						}
					});
				}
				
				partBool3 = false;
			}
			
		}, 100);
	})
	
	helperSlider('.solution__slider-head-1 a','.solution__slider-footer-1 .solution__slider-row');
	helperSlider('.solution__slider-head-2 a','.solution__slider-footer-2 .solution__slider-row');
	helperSlider('.solution__slider-head-3 a','.solution__slider-footer-3 .solution__slider-row');
};


const foundationCB = () => {
	$('.foundation__tab').on('click', (ev) => {
		const el = $(ev.currentTarget),
			elID = el.attr('data-tab-id');
		
		$('.foundation__tab').removeClass('is-active');
		el.addClass('is-active');
		
		$('.foundation__tab-content').hide();
		$('.foundation__tab-content[data-content-id="' + elID + '"]').fadeIn(550);
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
const initNative = () => {
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
	// ==========================================
};


window.addEventListener('load', () => {
	initNative();
});
