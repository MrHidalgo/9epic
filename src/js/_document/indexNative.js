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
	approachTabCB();
	// ==========================================
	
	// callback
	// ==========================================
};


window.addEventListener('load', () => {
	initNative();
});
