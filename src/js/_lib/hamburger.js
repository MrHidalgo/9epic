

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
const initHamburger = () => {

  const btn = document.querySelector("[hamburger-js]"),
    btnDash = document.querySelector("[hamburger-dash-js]"),
    hideScrollContainer = document.querySelectorAll("html, body"),
    mobileContainer = document.querySelector("[mobile-block-js]"),
	  menuNode = document.querySelector("[menu-block-js]")
  ;

	/**
   * @description
	 */
	if(btn) {
		btn.addEventListener("click", (ev) => {
			const elem = ev.currentTarget;
			
			elem.classList.toggle("is-active");
			mobileContainer.classList.toggle("is-open");
			
			hideScrollContainer.forEach((val, idx) => {
				val.classList.toggle("is-hideScroll");
			});
		});
	}
	
	if(btnDash) {
		btnDash.addEventListener("click", (ev) => {
			const elem = ev.currentTarget;
			
			elem.classList.toggle("is-active");
			menuNode.classList.toggle("is-open");
			
			hideScrollContainer.forEach((val, idx) => {
				val.classList.toggle("is-hideScroll");
			});
		});
		
		$('.menu__close').on('click', (ev) => {
			$('[hamburger-dash-js]').removeClass('is-active');
			menuNode.classList.remove("is-open");
			
			hideScrollContainer.forEach((val, idx) => {
				val.classList.remove("is-hideScroll");
			});
		});
	}
};
