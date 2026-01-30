$(function () {
  // AOS
  AOS.init({
    once: true,
    duration: 1000,
  });
  document.querySelectorAll('img').forEach((img) => img.addEventListener('load', () => AOS.refresh()));
  
  $(".product-slider").each(function (index, element) {
    const slider = new Swiper(element, {
      slidesPerView: 1,
      spaceBetween: 15,
      loop: true,
      pagination: {
        el: ".slider-pagination",
        clickable: true,
      },
    });
  });

  $(".point-slider").each(function (index, element) {
    const slider = new Swiper(element, {
      slidesPerView: 'auto',
      spaceBetween: 15,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: ".slider-point-pagination",
        clickable: true,
      },
      allowTouchMove: true,
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
          centeredSlides: false,
          allowTouchMove: false,
        },
      },
    });
  });

  
  const $lHeader = $(".l-header");
  const $lHeaderHeight = $lHeader.height();

  $.fn.hasAttr = function(name) {
    return this.attr(name) !== undefined;
  };

  $(".l-content a[href^='#']").not('a.nav-link').on("click", function (e) {
    const $this = $(this);
    const $targetId = $this.attr("href");
    const $target = $($targetId);
    const $duration = $this.hasAttr('data-scroll-duration') ? $this.attr("data-scroll-duration") : 1000;
    const $offset = $this.hasAttr('data-scroll-offset') ? $this.attr("data-scroll-offset") : 15;
    const $scrollPosition = $target.offset().top - $lHeaderHeight - $offset;

    if ($target.length === 0) {
      return;
    }

    e.preventDefault();

    $('html, body').animate({
      scrollTop: $scrollPosition
    }, {
      duration: parseInt($duration),
      easing: 'swing',
      step: (now, fx) => {
        const $realPos = $target.offset().top - $lHeaderHeight - $offset;
        if (fx.end !== $realPos) {
          fx.end = $realPos;
        }
      },
    });
  });
  
});
