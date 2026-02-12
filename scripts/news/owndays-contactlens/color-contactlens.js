$(function () {
  // AOS
  AOS.init({
    once: true,
    duration: 1000,
    offset: 120,
    delay: 0,
  });

  document.querySelectorAll('img').forEach((img) =>
    img.addEventListener('load', () =>
      AOS.refresh()
    )
  );

  setInterval(function() {
    var $btn = document.querySelector('.animate-play-btn');
    if ($btn) {
      $btn.classList.remove('animate-play-btn');
      void $btn.offsetWidth;
      $btn.classList.add('animate-play-btn');
    }
  }, 3000);

  new Swiper(".main-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    effect: "fade",
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  $(".lineup-slider").each(function (index, element) {
    const lineUpSlider = new Swiper(element, {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      effect: "fade",
      speed: 800,
      autoplay: false,
      pagination: {
        el: ".lineup-slider-pagination",
        clickable: true,
      },
    });
  
    const $parent = $(element).closest('.lineup-layout');
    const $currentSlide = $parent.find('.lineup-slider-current-slide');
    const $totalSlide = $parent.find('.lineup-slider-total-slide');
  
    $currentSlide.text(String(lineUpSlider.realIndex + 1).padStart(2, '0'));
    $totalSlide.text(String(lineUpSlider.slides.length - lineUpSlider.loopedSlides - 1).padStart(2, '0'));
  
    lineUpSlider.on('slideChange', function () {
      $currentSlide.text(String(lineUpSlider.realIndex + 1).padStart(2, '0'));
    });
  });
});
