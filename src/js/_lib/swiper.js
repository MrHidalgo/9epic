

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {
  
  for(let i = 0, j = 1; i < $('.solution__slider-wrapper-1 .solution__slider-row').length; i++, j++) {
    new Swiper('.solutionSlider1' + i, {
      effect: 'slide',
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 1000,
      navigation: {
        nextEl: '.solution__slider-wrapper-1 .solution__slider-row-' + j + ' .solution__slider-btn--next',
        prevEl: '.solution__slider-wrapper-1 .solution__slider-row-' + j + ' .solution__slider-btn--prev',
      },
      touchMoveStopPropagation:false,
      simulateTouch : false,
      allowSwipeToNext: true,
      allowSwipeToPrev: true,
      allowPageScroll: "auto ",
      on: {
        init: function (swiper) {
          if(swiper.slides.length > 1) {
            $('.solution__slider-wrapper-1 .solution__slider-row-' + j + ' .solution__slider-btn').animate({opacity: 1}, 550);
          }
        }
      }
    });
  }
  
};
