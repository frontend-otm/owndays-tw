
$(window).on("load", function () {
  var rellax = new Rellax(".rellax", {
    center: true,
  });
});

$(function () {
  // AOS
  AOS.init({
    once: true,
    duration: 1000,
  });

  document.querySelectorAll('img').forEach((img) =>
    img.addEventListener('load', () =>
      AOS.refresh()
    )
  );

  new Swiper(".main__slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 0,
    },
    speed: 5000,
    loop: true,
    allowTouchMove: false,
  
    breakpoints: {
      768: {
        slidesPerView: 2.2,
        spaceBetween: 23,
      },
      1024: {
        slidesPerView: 2.8,
        spaceBetween: 23,
      },
    },
  });

  new Swiper(".features__slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".features__slider-button--next",
      prevEl: ".features__slider-button--prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    speed: 800,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 25,
        allowTouchMove: false,
        loop: false,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 77,
        allowTouchMove: false,
        loop: false,
      },
    },
  });

  new Swiper(".snap-glass__slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".snap-glass__slider-button--next",
      prevEl: ".snap-glass__slider-button--prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    speed: 800,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 25,
        allowTouchMove: false,
        loop: false,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 77,
        allowTouchMove: false,
        loop: false,
      },
    },
  });

  new Swiper(".lineup__group-body-content-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    on: {
      slideChangeTransitionEnd: function () {
        const slider = this;
        $('.swiper-pagination-bullet').removeClass('swiper-pagination-bullet-current')
        $(slider.el).closest('.tab-content').find('.swiper-pagination').each(function () {
          $(this).find('.swiper-pagination-bullet').eq(slider.realIndex).addClass('swiper-pagination-bullet-current');
        });
        setTimeout(function() {
          $('.swiper-pagination-bullet-current').trigger('click');
        }, 0)
      },
    },
  });

  $('.lineup .tab-pane').each(function(index) {
    $(this).attr('id', 'lineup-item-' + (index + 1));
  });
  $('.lineup .lineup__group-body-content-footer-color-nav .nav-link').each(function(index) {
    $(this).attr('href', '#lineup-item-' + (index + 1));
  });

  $(".lineup__group-body-content-footer-color-nav .nav-link").on('click', function () {
    const $this = $(this);
    const $parent = $this.closest(".lineup__group-body-content-footer");
    const $url = $(this).data('url');
    // $parent.find("a[data-product-btn]").attr('href', $url);
    // $parent.find("a[data-product-btn]").attr("href", $url);
  });
  if ($('body[data-aos-easing]').length < 1) {
    $('.lineup__group-body-content-footer-color-nav').removeAttr('data-aos');
  }


  $(".c-text-animate-random > span").each(function () {
    const $this = $(this);
    let contents = $(this).contents();
    let newText = "";

    contents.each(function() {
      if (this.nodeType === 3) {
        let text = $(this).text();
        for (let i = 0; i < text.length; i++) {
          newText += '<span class="text-split">' + text[i] + "</span>";
        }
      } else if (this.nodeType === 1 && this.tagName.toLowerCase() === "br") {
        newText += "<br>";
      }
    });
    $this.html(newText);
  });
  $(".c-text-animate-random").each(function () {
    const $this = $(this);
    $this.find(".text-split").each(function () {
      const $this = $(this);
      let randomDelay = Math.random() * 0.5; // Generate random number between 0 and 0.5
      $this.css("transition-delay", randomDelay.toFixed(3) + "s"); // Limit to 3 decimal places
    });
  });

  $.fn.hasAttr = function(name) {
    return this.attr(name) !== undefined;
  };

  document.querySelectorAll('.c-accordion__title').forEach((title) => {
    title.addEventListener('click', () => {
      const content = title.nextElementSibling;

      title.classList.toggle('is-open');

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});
