$(function () {
  // main
  const mainSlider = new Splide("#mainSlider", {
    arrows: false,
    pagination: false,
    type: "loop",
    drag: "free",
    focus: "center",
    autoWidth: true,
    autoScroll: {
      speed: "0.5",
      pauseOnHover: false,
      pauseOnFocus: false,
    },
  });
  mainSlider.mount(window.splide.Extensions);
  // real-style
  const realStyleSlider = new Swiper(".real-style-slider", {
    loop: true,
    loopAdditionalSlides: 2,
    initialSlide: 0,
    speed: 500,
    observer: true,
    observeParents: true,
    nested: true,
    watchSlidesProgress: true,
    loopPreventsSlide: false,
    navigation: {
      nextEl: ".real-style-slider-button--next",
      prevEl: ".real-style-slider-button--prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.3,
        spaceBetween: 20,
        centeredSlides: true,
        centeredSlidesBounds: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: true,
        centeredSlidesBounds: true,
      },
      1024: {
        slidesPerView: "auto",
        spaceBetween: 0,
        centeredSlides: true,
        centeredSlidesBounds: true,
        touchStartPreventDefault: false,
        allowTouchMove: true,
      },
    },
    on: {
      init: function () {
        if (window.innerWidth >= 1024) {
          this.slideToLoop(1, 0);
        }
        updateActiveSlideDetails(this);
      },
      transitionStart: function () {
        if (window.innerWidth < 1024) {
          updateActiveSlideDetails(this);
        }
      },
      transitionEnd: function () {
        if (window.innerWidth >= 1024) {
          updateActiveSlideDetails(this);
        }
      },
    },
  });

  const staffSliders = [];
  $(".real-style-staff-slider").each(function (i, el) {
    const staffSlider = new Swiper(el, {
      loop: true,
      nested: true,
      observer: true,
      observeParents: true,
      allowTouchMove: true,
      pagination: {
        el: $(el).find(".swiper-pagination")[0],
        clickable: true,
      },
      navigation: {
        nextEl: $(el).find(".real-style-staff-controls-button--next")[0],
        prevEl: $(el).find(".real-style-staff-controls-button--prev")[0],
      },
      on: {
        init: function () {
          $(el)
            .find(
              ".real-style-staff-controls-button--prev, .real-style-staff-controls-button--next",
            )
            .on("click", function (e) {
              e.stopPropagation();
            });
        },
        touchStart: function () {
          realStyleSlider.allowTouchMove = false;
        },
        touchEnd: function () {
          realStyleSlider.allowTouchMove = true;
        },
      },
    });
    staffSliders.push(staffSlider);
  });

  function updateActiveSlideDetails(swiper) {
    $(
      ".real-style-slider .real-style-staff-details, .real-style-slider .real-style-staff-controls",
    ).removeClass("is-active");
    swiper.slides.forEach((slide) => {
      const $slide = $(slide);
      if (
        !$slide.hasClass("swiper-slide-duplicate") &&
        $slide.hasClass("swiper-slide-active") &&
        $slide.hasClass("swiper-slide-visible")
      ) {
        $slide
          .find(".real-style-staff-details, .real-style-staff-controls")
          .addClass("is-active");
      }
    });
  }

  $(window).on("resize", function () {
    realStyleSlider.update();
    $.each(staffSliders, function (_, slider) {
      slider.update();
    });
  });

  $(window).on("orientationchange", function () {
    setTimeout(function () {
      realStyleSlider.update();
      $.each(staffSliders, function (_, slider) {
        slider.update();
      });
    }, 300);
  });

  $(document).on(
    "click",
    ".real-style-staff-controls-button--prev, .real-style-staff-controls-button--next",
    function (e) {
      e.stopPropagation();
    },
  );

  $(document).on("click", '.real-style-slider a[href^="#"]', function (e) {
    e.preventDefault();
    const hash = $(this).attr("href").replace("#", "");
    const $targetSlide = $(".real-style-slider-slide")
      .not(".swiper-slide-duplicate")
      .filter(function () {
        return $(this).find(`a[href="#${hash}"]`).length > 0;
      });

    if ($targetSlide.length > 0) {
      const slideIndex = $targetSlide.attr("data-swiper-slide-index");
      if (slideIndex !== undefined) {
        realStyleSlider.slideToLoop(parseInt(slideIndex, 10), 500);
      }

      const $target = $(`#${hash}`);
      if ($target.length > 0) {
        const headerHeight = $(".l-header").outerHeight() || 0;
        const top = $target.offset().top - headerHeight;
        $("html, body").animate({ scrollTop: top }, 500, "swing");
      }

      history.replaceState(
        null,
        null,
        window.location.pathname + window.location.search,
      );
    }
  });

  // styles
  const stylesSlider = $(".styles__slider .splide");
  for (let ss = 0; ss < stylesSlider.length; ss++) {
    new Splide(stylesSlider[ss], {
      type: "loop",
      perPage: 1,
      autoplay: true,
      interval: 4000,
    }).mount();
  }

  const productSlider = $(".styles__product .splide");
  productSlider.each(function (index, slider) {
    const splideInstance = new Splide(slider, {
      type: "loop",
      arrows: false,
      pagination: false,
      padding: 40,
      gap: 13,
      mediaQuery: "min",
      breakpoints: {
        768: {
          padding: { left: 40, right: 0 },
          direction: "rtl",
        },
        1024: {
          padding: { left: 80, right: 0 },
          gap: 17,
        },
        1296: {
          padding: 0,
          autoWidth: true,
        },
      },
    }).mount();

    $(slider)
      .closest(".styles__product")
      .find(".splide__arrow--prev")
      .on("click", function () {
        splideInstance.go("-1");
      });

    $(slider)
      .closest(".styles__product")
      .find(".splide__arrow--next")
      .on("click", function () {
        splideInstance.go("+1");
      });
  });

  $(".styles__item").each(function () {
    const item = $(this);

    item.find(".styles__product-skus > button").on("click", (e) => {
      e.preventDefault();

      const $this = $(e.currentTarget);
      const currentAttrValue = $this.attr("data-id-target");

      item.find(".splide").removeClass("is-show");
      item.find(".styles__product-color").removeClass("is-show");
      item.find(".styles__product-skus > button").removeClass("is-active");
      item.find(".l-freaks__btn").removeClass("is-show");
      item.find(".styles__spec").removeClass("is-show");

      item.find(currentAttrValue).addClass("is-show");
      item
        .find(`.styles__product-color[data-id="${currentAttrValue}"]`)
        .addClass("is-show");
      item
        .find(`.l-freaks__btn[data-id="${currentAttrValue}"]`)
        .addClass("is-show");
      item
        .find(`.styles__spec[data-id="${currentAttrValue}"]`)
        .addClass("is-show");

      $this.addClass("is-active");
    });
  });

  $(".styles__item").each(function (index, content) {
    $(window).on("load scroll resize", function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
      const offset = $(content).offset().top;
      const setTiming = windowHeight * 0.7;
      if (scroll + windowHeight >= offset + setTiming) {
        $(content).addClass("is-show");
      } else {
        $(content).removeClass("is-show");
      }
    });
  });

  // accessories
  const accessoriesImageSlider = new Swiper(".accessories__image-slider", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const accessoriesTextSlider = new Swiper(".accessories__text-slider", {
    loop: true,
    autoHeight: true,
  });

  accessoriesImageSlider.controller.control = accessoriesTextSlider;
  accessoriesTextSlider.controller.control = accessoriesImageSlider;

  // AOS
  AOS.init({
    duration: 800,
    once: true,
  });

  // Hash scroll fix for external links (includes Safari support)
  $(window).on("load", function () {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const href = location.href;
    let hash = location.hash;
    const isExternal =
      document.referrer && document.referrer.indexOf(location.hostname) === -1;
    if (isSafari && !hash && href.indexOf("#") !== -1) {
      hash = "#" + href.split("#")[1];
    }
    if (hash && isExternal) {
      const $target = $(hash);
      if ($target.length) {
        const headerHeight = $(".l-header").outerHeight();
        const position = $target.offset().top - headerHeight;
        $("html, body").animate({ scrollTop: position }, 700, "swing");
        history.replaceState(null, null, hash);
      }
    }
  });
});
