

/**
 * @name initSmoothScroll
 *
 * @description Smooth transition to anchors to the block.
 */
const initSmoothScroll = (btnName = "[anchor-js]", animateSpeed = 550) => {
  $(btnName).on("click", (e) => {
    // if($(e.currentTarget).attr('href').length === 1) return;
    //
    // let linkHref = $(e.currentTarget).attr('href');
    //
    // if($(window).width() < 768) {
    //   if($(e.currentTarget).attr('href') === '#main') {
    //     linkHref = $(e.currentTarget).attr('data-href');
    //   } else {
    //     linkHref = $(e.currentTarget).attr('href');
    //   }
    // } else {
    //   linkHref = $(e.currentTarget).attr('href');
    // }
    //
    // let headerHeight = $(".header").outerHeight() || 0,
    //   topHeightOffset = $(linkHref).offset().top - headerHeight;
    //
    // $('body, html').animate({
    //   scrollTop: topHeightOffset
    // }, 1000);
  
    // return false;
  
    var scroll = new SmoothScroll('a[href*="#"]', {
      header: '#header',
      ignore: '.hamburger',
      topOnEmptyHash: false,
      speed: 750,
      // easing: 'Linear',
      updateURL: false,
      popstate: false,
      offset: function (anchor, toggle) {
        if($(toggle).attr('href') === '#solution') {
          if($(window).width() > 767) {
            return -100;
          } else {
            return -80;
          }
        } else {
          if($(window).width() > 767) {
            return -100;
          } else {
            return -80;
          }
        }
      },
      speedAsDuration: true
    });
  
    var logScrollEvent = function (event) {
      const btnAttr = $(event.detail.toggle).attr('data-section');
  
      switch (btnAttr) {
        case 'foundation2':
          $('.foundation__tab[data-tab-id="1"]').click();
          break;
        case 'foundation3':
          $('.foundation__tab[data-tab-id="2"]').click();
          break;
        default:
          break;
      }
    };

    document.addEventListener('scrollStart', logScrollEvent, false);
    
    $('[hamburger-js]').removeClass("is-active");
    $('[mobile-block-js]').removeClass("is-open");
    $('html, body').removeClass("is-hideScroll");
  });
};
