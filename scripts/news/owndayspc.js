/**
 * shuffleLetters - lightweight text shuffle animation
 * Animates text by cycling through random characters before revealing the original text.
 */
function shuffleLetters(element, options) {
  var defaults = {
    step: 8,
    fps: 25,
    text: '',
  };

  var settings = Object.assign({}, defaults, options);
  var originalText = settings.text || element.textContent;
  var length = originalText.length;
  var characterMap = [];
  var chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()';

  if (element.getAttribute('data-shuffling')) return;
  element.setAttribute('data-shuffling', 'true');

  for (var i = 0; i < length; i++) {
    characterMap.push({
      char: originalText[i],
      delay: Math.floor(Math.random() * settings.step),
    });
  }

  var step = 0;
  var interval = setInterval(function () {
    var output = '';
    var done = true;

    for (var i = 0; i < length; i++) {
      if (originalText[i] === ' ') {
        output += ' ';
        continue;
      }

      if (step >= characterMap[i].delay) {
        if (step >= characterMap[i].delay + settings.step) {
          output += characterMap[i].char;
        } else {
          output += chars[Math.floor(Math.random() * chars.length)];
          done = false;
        }
      } else {
        output += chars[Math.floor(Math.random() * chars.length)];
        done = false;
      }
    }

    element.textContent = output;

    if (done) {
      clearInterval(interval);
      element.removeAttribute('data-shuffling');
    }

    step++;
  }, 1000 / settings.fps);
}

/**
 * OWNDAYS PC Page Scripts
 * - AOS animation
 * - Slick sliders (main product, where section)
 * - Owl Carousel (about, points sections)
 * - Smooth scroll
 * - Waypoint shuffle letters animation
 */

// Strip pre-rendered AOS classes so AOS can re-initialize properly
document.querySelectorAll('[data-aos]').forEach(function (el) {
  el.classList.remove('aos-init', 'aos-animate');
});

// Delay AOS.init by one frame so the browser paints the hidden state first,
// allowing above-the-fold elements (e.g. main__top fade-right) to animate in.
requestAnimationFrame(function () {
  AOS.init({
    duration: 1000,
    once: true,
  });
});

/**
 * Clean pre-rendered slick markup so slick can re-initialize properly.
 * The HTML was captured post-initialization, so it contains slick-generated
 * wrappers (slick-list, slick-track, slick-slide) and classes (slick-initialized).
 */
function cleanSlick($el) {
  // Remove slick state classes
  $el.removeClass('slick-initialized slick-slider');
  $el.removeAttr('role');

  // Extract original slide items from slick wrappers
  var $items = $el.find('.slick-slide:not(.slick-cloned)').map(function () {
    // Inside each slick-slide there's a wrapping div > div.slider__item
    return $(this).find('.slider__item').clone().removeAttr('style')[0];
  });

  // Replace slick DOM with clean items
  $el.empty().append($items);

  // Remove the auto-added slider-N class (will be re-added by our JS)
  $el.attr('class', $el.attr('class').replace(/\bslider-\d+\b/g, '').trim());
}

/**
 * Clean pre-rendered Owl Carousel markup and duplicate items to simulate
 * the Blade @for($i=0; $i < 10; $i++) loop from prod.
 * This ensures enough items for center + autoWidth to work properly.
 */
function cleanOwl($el) {
  $el.removeClass('owl-loaded owl-drag');

  // If pre-rendered owl wrappers exist, extract the raw items first
  if ($el.find('.owl-stage-outer').length) {
    var extracted = [];
    $el.find('.owl-item:not(.cloned)').each(function () {
      extracted.push($(this).children().first().clone()[0]);
    });
    $el.find('.owl-stage-outer, .owl-nav, .owl-dots').remove();
    $el.empty().append(extracted);
  }

  // Duplicate items 10x (like @for loop) so Owl has enough for center+autoWidth
  var $origItems = $el.children().clone();
  for (var i = 1; i < 10; i++) {
    $el.append($origItems.clone());
  }
}

/**
 * Clean pre-rendered slick markup for the where slider.
 */
function cleanSlickSimple($el) {
  $el.removeClass('slick-initialized slick-slider');
  $el.removeAttr('role');

  var $items = $el.find('.slick-slide:not(.slick-cloned)').map(function () {
    // The where slider items are direct children wrapped by slick
    return $(this).children().first().children().first().clone().removeAttr('style')[0];
  });

  $el.empty().append($items);
}

$(function () {
  // Smooth scroll for anchor links
  var scroll = new SmoothScroll('a[href*="#"]', {
    header: '.l-header',
  });

  // Shuffle letters animation on About section
  var list = document.querySelector('ul.shuffle');
  if (list) {
    var listItems = list.querySelectorAll('p');

    var waypoint = new Waypoint({
      element: document.getElementById('about'),
      handler: function () {
        Array.prototype.forEach.call(listItems, function (element) {
          shuffleLetters(element, {
            fps: 30,
          });
        });
        this.destroy();
      },
    });
  }

  // Clean pre-rendered slick markup, then initialize
  $('.slider--for').each(function () {
    cleanSlick($(this));
  });
  $('.slider--nav').each(function () {
    cleanSlick($(this));
  });

  // Main product sliders (slick)
  var numSlick = 0;
  $('.slider--for').each(function () {
    numSlick++;
    $(this)
      .addClass('slider-' + numSlick)
      .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.slider--nav.slider-' + numSlick,
      });
  });

  numSlick = 0;
  $('.slider--nav').each(function () {
    numSlick++;
    $(this)
      .addClass('slider-' + numSlick)
      .slick({
        asNavFor: '.slider--for.slider-' + numSlick,
        arrows: false,
        dots: false,
        focusOnSelect: true,
        infinite: false,
        swipe: false,
        swipeToSlide: false,
        draggable: false,
        variableWidth: true,
      });
  });

  $('.slider--for').on('setPosition', function () {
    AOS.refresh();
  });

  // Clean and re-init where slider
  var $whereSlider = $('.where__slider');
  cleanSlickSimple($whereSlider);

  // Where section slider (slick)
  $whereSlider.slick({
    centerMode: true,
    centerPadding: '45px',
    arrows: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 4,
        },
      },
    ],
  });

  // Clean and re-init owl carousels
  var $owlAbout = $('.owl-carousel--about');
  cleanOwl($owlAbout);

  // About section owlำcenter carousel
  $owlAbout.owlCarousel({
    loop: true,
    center: true,
    nav: false,
    dots: false,
    navSpeed: 500,
    responsiveClass: true,
    autoplayTimeout: 4000,
    smartSpeed: 500,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1.5,
        margin: 10,
      },
      768: {
        autoWidth: true,
        margin: 20,
      },
      1024: {
        autoWidth: true,
        margin: 30,
      },
    },
  });
  $('.owl-next--about').click(function () {
    $owlAbout.trigger('next.owl.carousel');
  });
  $('.owl-prev--about').click(function () {
    $owlAbout.trigger('prev.owl.carousel', [300]);
  });

  // Clean and re-init points owl carousel
  var $owlPoint = $('.owl-carousel--point');
  cleanOwl($owlPoint);

  // Points section owlenter carousel
  $owlPoint.owlCarousel({
    loop: true,
    center: true,
    nav: false,
    dots: false,
    lazyLoad: true,
    navSpeed: 500,
    responsiveClass: true,
    autoplayTimeout: 4000,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1.5,
        margin: 10,
      },
      768: {
        autoWidth: true,
        margin: 20,
      },
      1024: {
        autoWidth: true,
        margin: 30,
      },
    },
  });
  $('.owl-next--point').click(function () {
    $owlPoint.trigger('next.owl.carousel');
  });
  $('.owl-prev--point').click(function () {
    $owlPoint.trigger('prev.owl.carousel', [300]);
  });
});
