

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
      spaceBetween: 60,
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
  
  new Swiper('.mainSwiper', {
    effect: 'slide',
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      init: function (swiper) {
        $(swiper.$el[0]).animate({opacity: 1}, 1250);
      },
      slideChange: function (swiper) {
        let activeIDX = Number(swiper.realIndex);
        
        switch (activeIDX) {
          case 1:
            tweenAnimation1.play();
            break;
          case 2:
            $('#video2')[0].play();
            break;
          case 3:
            tweenAnimation2.play();
            break;
          case 4:
            $('#video3')[0].play();
            break;
          default:
            break;
        }
      },
    }
  });
  
};
