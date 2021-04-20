

/**
 * @name initSmoothScroll
 *
 * @description Smooth transition to anchors to the block.
 */
const initSmoothScroll = (btnName = "[anchor-js]", animateSpeed = 550) => {
  $(btnName).on("click", (e) => {
    if($(e.currentTarget).attr('href').length === 1) return;
  
    let linkHref = '';
    
    if($(window).width() < 768) {
      if($(e.currentTarget).attr('href') === '#main') {
        linkHref = $(e.currentTarget).attr('data-href');
      } else {
        linkHref = $(e.currentTarget).attr('href');
      }
    } else {
      linkHref = $(e.currentTarget).attr('href');
    }
 
    let headerHeight = $(".header").outerHeight() || 0,
      topHeightOffset = $(linkHref).offset().top - headerHeight;
  
    $('[hamburger-js]').removeClass("is-active");
    $('[mobile-block-js]').removeClass("is-open");
    $('html, body').removeClass("is-hideScroll");

    $('body, html').animate({
      scrollTop: topHeightOffset
    }, 250);
    
    return false;
  });
};
