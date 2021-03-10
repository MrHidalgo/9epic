

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {
  
  for(let i = 0, j = 1; i < $('.solution__slider-wrapper-1 .solution__slider-row').length; i++, j++) {
    new Swiper('.solutionSlider1' + i, {
      effect: 'flip',
      flipEffect: {
        slideShadows: false,
      },
      speed: 1000,
      navigation: {
        nextEl: '.solution__slider-wrapper-1 .solution__slider-row-' + j + ' .solution__slider-btn--next',
        prevEl: '.solution__slider-wrapper-1 .solution__slider-row-' + j + ' .solution__slider-btn--prev',
      }
    });
  }
  
};
