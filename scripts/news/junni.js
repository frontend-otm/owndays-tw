$(function(){
  // AOS
  AOS.init({
    once: true,
    duration: 800,
  });
  document.querySelectorAll('img').forEach((img) => img.addEventListener('load', () => AOS.refresh()));
  // end AOS

  $(".c-slider").each(function (index, element) {
    const cSlider = new Swiper(element, {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      effect: "fade",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    
    const $parent = $(element).closest('.c-slider__group');
    const $cSliderColorNavLinks = $parent.find(".c-slider__color-nav-link");
    const $cSliderProdBtn = $parent.find("a[data-product-btn]");
    const $cSliderColor = $parent.find(".lineup-color-label");
    const $firstActive = cSlider.realIndex;

    $cSliderColorNavLinks.eq($firstActive).addClass('active');
    $cSliderProdBtn.each(function () {
      const $this = $(this);
      $this.attr("href", $cSliderColorNavLinks.eq(0).data("url"));
    });

    $cSliderColorNavLinks.on("click", function (index) {
      const $this = $(this);
      const $index = $this.index();
      $parent.find('.swiper-pagination-bullet').eq($index).trigger('click');
    });

    cSlider.on('slideChange', function () {
      $cSliderColorNavLinks.removeClass("active").eq(cSlider.realIndex).addClass("active");
      $cSliderProdBtn.attr("href", $cSliderColorNavLinks.eq(cSlider.realIndex).data("url"));
      $cSliderColor.text($cSliderColorNavLinks.eq(cSlider.realIndex).text());
    });

    if ($("body[data-aos-easing]").length < 1) {
      $(element).find(".c-slider__color-nav").removeAttr("data-aos");
    }
  });

  function initFeatureSlider(selector, options) {
    $(selector).each(function (index, element) {
      const featureSlider = new Swiper(element, options);

      function updateCtrlButtonState() {
        const $parent = $(element).closest('.feature-slider-container');
        const $classDisabled = 'bg-[#fff] !text-[#5d90bb] !pointer-events-none';

        $parent.find('.ctrl-slide-next').toggleClass(
          $classDisabled,
          $parent.find('.feature-slider__button-next.swiper-button-disabled').length > 0
        );
        $parent.find('.ctrl-slide-prev').toggleClass(
          $classDisabled,
          $parent.find('.feature-slider__button-prev.swiper-button-disabled').length > 0
        );
      }

      featureSlider.on('slideChange slideResetTransitionStart', updateCtrlButtonState);
    });
  }

  initFeatureSlider('.feature-slider--sp', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".feature-slider__pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".feature-slider__button-next",
      prevEl: ".feature-slider__button-prev",
    },
  });

  initFeatureSlider('.feature-slider--pc', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: false,
    centeredSlides: false,
    pagination: {
      el: ".feature-slider__pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".feature-slider__button-next",
      prevEl: ".feature-slider__button-prev",
    },
    breakpoints: {
      768: {
        spaceBetween: 25,
      },
      1024: {
        spaceBetween: 40,
      },
    },
  });

  $('.ctrl-slide-next').on('click', function () {
    const $this = $(this);
    const $parent = $this.closest('.feature-slider-container');
    const $nextBtn = $parent.find('.feature-slider__button-next');

    $nextBtn.trigger('click').trigger('click');
  });
  
  $('.ctrl-slide-prev').on('click', function () {
    const $this = $(this);
    const $parent = $this.closest('.feature-slider-container');
    const $prevBtn = $parent.find('.feature-slider__button-prev');

    $prevBtn.trigger('click').trigger('click');
    featureSlider.slidePrev();
  });
  
  if ($('body[data-aos-easing]').length < 1) {
    $('.c-slider-sports__color-nav').removeAttr('data-aos');
  }
  

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
      easing: 'easeOutCubic',
      step: (now, fx) => {
        const $realPos = $target.offset().top - $lHeaderHeight - $offset;
        if (fx.end !== $realPos) {
          fx.end = $realPos;
        }
      },
    });
  });

});

$(window).on("load", function () {
  function getContryCode(url, index) {
    const parts = new URL(url).pathname.split('/').filter(Boolean);
    return parts[index] || '';
  }

  const url = window.location.href;
  const countryCode = getContryCode(url, 0);
  const languageCode = getContryCode(url, 1);
  const userId = $('#user_id').val();

  axios.get(`/v1/${countryCode}/${languageCode}/kids`, {
    params: {
      user_id: userId
    }
  })
  .then(function (response) {
    $('#ranking-container').html(response.data.html);

    setTimeout(() => {
      $(".search-list-slickslide").slick({
        infinite: false,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1440, // < 1440px
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1296, // < 1296px
            settings: {
              slidesToShow: 3.2,
            }
          },
          {
            breakpoint: 1024, // < 1024px
            settings: {
              slidesToShow: 2.3,
            }
          },
          {
            breakpoint: 768, // < 768px
            settings: {
              slidesToShow: 1.28,
            }
          },
      ]
      });
      function addRankSliderIcon() {
        if ($('#ranking-container .slick-next svg').length < 1) {
          $('#ranking-container .slick-prev, #ranking-container .slick-next').append(`<svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" fill="none" viewBox="0 0 49 48"> <path stroke="#000" d="M24.017.5C11.028.5.5 11.022.5 24s10.528 23.5 23.517 23.5c12.988 0 23.516-10.522 23.516-23.5S37.005.5 24.017.5Z"/> <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M13.51 24h20.514m0 0-7.005 8.5m7.005-8.5-7.005-8.5"/> </svg>`);
        }
      }
      $("#ranking-container .slick-list").removeClass("draggable");
      addRankSliderIcon();
      $('#ranking-container .p-product__favorite .favorite span').append(`<svg class="w-[20px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 97 91"> <path stroke="currentColor" stroke-miterlimit="10" stroke-width="4" d="M70.2 2.5c-7.7 0-15.4 3.6-20.4 9.6l-1.3 1.5-1.3-1.5c-5.1-6-12.7-9.6-20.4-9.6-13.9 0-24.8 11-24.8 25 0 17.4 15.8 31.9 39.6 53.8l6.9 6.2 6.9-6.2C79.3 59.4 95 44.9 95 27.5c0-14-10.9-25-24.8-25Z"/> </svg>`);
      let resizeTimer;
      $(window).on('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
          addRankSliderIcon();
        }, 100);
      });
      toggleColor();
      handleAllFavorite();
      fetchFavoriteData()
      fetchWomen()
    }, 0);
  })
  .catch(function (error) {
    console.error('Failed to fetch ranking data:', error);
  });
  
});
