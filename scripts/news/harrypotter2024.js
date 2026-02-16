$(function(){
  // AOS
  AOS.init({
    once: true,
    duration: 1000,
  });
  document.querySelectorAll('img').forEach((img) => img.addEventListener('load', () => AOS.refresh()));
  // end AOS

  function getBodyWidth() {
    document.documentElement.style.setProperty('--body-w', document.body.clientWidth + 'px');
  }
  getBodyWidth();
  window.addEventListener('resize', function() {
    getBodyWidth();
  });

  splitBtnText();

  $(window).on("resize", function() {
    splitBtnText();
  });

  new Swiper(".lineup__products-top-swiper", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    pagination: {
      el: ".lineup__products-top-swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    speed: 600,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });

  new Swiper(".lineup__products-middle-swiper", {
    slidesPerView: "auto",
    spaceBetween: 6,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".lineup__products-middle-swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        centeredSlides: false,
        simulateTouch: false,
        touchStartPreventDefault: false,
        allowTouchMove: false,
      },
    },
  });

  new Swiper(".lineup__products-bottom-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    speed: 300,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 220,
      depth: 400,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".lineup__products-bottom-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    breakpoints: {
      ...genBreakpoints(390, 418, 2, 230),
      ...genBreakpoints(420, 458, 2, 256),
      ...genBreakpoints(460, 480, 2, 290),
      ...genBreakpoints(482, 518, 2, 308),
      ...genBreakpoints(520, 538, 2, 340),
      ...genBreakpoints(540, 568, 2, 356),
      ...genBreakpoints(570, 598, 2, 380),
      ...genBreakpoints(600, 628, 2, 406),
      ...genBreakpoints(630, 650, 2, 430),
      ...genBreakpoints(652, 700, 2, 450),
      ...genBreakpoints(710, 760, 2, 498),
      ...genBreakpoints(760, 767, 2, 540),
      768: {
        coverflowEffect: {
          stretch: 455,
        },
      },
      1024: {
        coverflowEffect: {
          stretch: 650,
        },
      },
    },
  });

  // Merchandise
  var merchandiseSlider = new Swiper(".merchandise__main-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".merchandise__main-slider-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    speed: 600,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });

  var merchandiseOtherSlider = new Swiper(".merchandise__other-slider", {
    slidesPerView: 1.5,
    spaceBetween: 6,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".merchandise__other-slider-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3.5,
      },
      1024: {
        initialSlide: 2,
        slidesPerView: 5,
        spaceBetween: 9.5,
        pagination: false,
      },
    },
  });

  $(window).on("scroll", function() {
    handleScroll(".lineup__products-top-swiper", function($target) {
      $target.find(".swiper-pagination-bullet:first").trigger("click");
    });
    handleScroll(".merchandise__main", function ($target) {
      $target.find(".swiper-pagination-bullet:first").trigger("click");
    });
  });

  const iconUpDown = `<svg width="20" height="39" viewBox="0 0 20 39" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.3613 15.667L9.86133 8.66699L3.36133 15.667" stroke="white"/>
  <path d="M3.36133 23.667L9.86133 30.667L16.3613 23.667" stroke="white"/>
  </svg>
  `;

  $('.l-hp__btn--secondary').append(iconUpDown);

  $('#closeLetter').on('click', function(){
    $('.letter').hide();
    setSession();
  });
  $('.letter__nav a').on('click', function(){
    $('.letter').hide();
  });
  $('#openLetter').on('click', function(){
    $(this).addClass('is-open');
    $('.letter__paper').addClass('is-open');
    setTimeout(() => {
      $(this).fadeOut();
    }, 2000);
  })

  document.addEventListener('mousemove', createParticle);

  document.querySelectorAll('.c-accordion__title').forEach((title) => {
    title.addEventListener('click', () => {
      const content = title.nextElementSibling;

      title.parentElement.classList.toggle('c-accordion-open');

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

});

function splitBtnText() {
  if ($(window).width() >= 1024) {
    var maintxtElements = document.querySelectorAll(".l-hp__btn-inner");

    maintxtElements.forEach(function(maintxt) {
      var letters = maintxt.textContent.split("");
      var totalLetters = 0;

      maintxt.innerHTML = "";

      var fragment = document.createDocumentFragment();

      letters.forEach(function(letter) {
        var span = document.createElement("span");
        span.textContent = letter;

        if (letter === " ") {
          span.classList.add("space");
        }

        span.style.animationDelay = totalLetters * 0.05 + "s";
        fragment.appendChild(span);
        totalLetters++;
      });

      maintxt.appendChild(fragment);
    });
  }
}

function genBreakpoints(start, max, step, initialStretch) {
  const breakpoints = {};
  let stretch = initialStretch;

  for (let i = start; i <= max; i += step) {
    breakpoints[i] = { coverflowEffect: { stretch: stretch } };
    stretch += step;
  }

  return breakpoints;
}

function createParticle(e) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.left = `${e.clientX + 5}px`;
  particle.style.top = `${e.clientY + 5}px`;
  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 1000); // Match this with the CSS animation duration
}

