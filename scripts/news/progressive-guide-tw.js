$(function () {
  $(".l-progressive-cp").addClass("active");
  $("body").addClass("specials-page");
  $(".stores__list-content").hide();

  // Add click event to titles
  $(".stores__list-title").on("click", function () {
    var $content = $(this).next(".stores__list-content");

    // Toggle the clicked content
    $content.slideToggle(300);

    // Toggle active class for the title
    $(this).toggleClass("active");
  });

  $(".options__item-lens--1")
    .append(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clip-path="url(#clip0_6552_1261)">
      <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM18 13H13V18H11V13H6V11H11V6H13V11H18V13Z" fill="#004085"/>
    </g>
    <defs>
      <clipPath id="clip0_6552_1261">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>`);

  $(".options__item-lens--2")
    .append(`<svg width="16" height="9" viewBox="0 0 16 9" fill="none">
    <path d="M1 1H15" stroke="#004085" stroke-width="2" stroke-linecap="square"/>
    <path d="M1 8H15" stroke="#004085" stroke-width="2" stroke-linecap="square"/>
  </svg>`);

  const $accordionTitles = $(".c-accordion__title");
  $(".c-accordion-open .c-accordion__content").show();

  $accordionTitles.on("click", function () {
    const $this = $(this);
    const $parent = $this.closest(".c-accordion");
    const $li = $this.closest("li");
    const $content = $this.next(".c-accordion__content");

    $li.toggleClass("c-accordion-open");

    if ($parent.data("acc-toggle")) {
      $parent
        .find(".c-accordion__content")
        .not($content)
        .stop(true, false)
        .slideUp();
      $parent
        .find(".c-accordion-open")
        .not($li)
        .removeClass("c-accordion-open");
      $content.stop(true, false).slideToggle();
    } else {
      $content.stop(true, false).slideToggle();
    }
  });

  $accordionTitles.on("mousedown", function (e) {
    e.preventDefault();
  });

  $(".lens__compare-table-slider .swiper-wrapper").addClass(
    `[--recommended-number:${lensCompareTableSliderColRecommended}]`,
  );
});

let lensCompareTableSliderCol = $(
  ".lens__compare-table-slider .swiper-slide",
).length;
let lensCompareTableSliderColRecommended = $(
  ".lens__compare-table-slider .swiper-slide.is-recommended",
).length;

const lensCompare = new Swiper(".lens__compare-table-slider", {
  slidesPerView: "auto",
  spaceBetween: 0,
  loop: false,
  breakpoints: {
    1024: {
      slidesPerView: lensCompareTableSliderCol,
      simulateTouch: false,
      touchStartPreventDefault: false,
      allowTouchMove: false,
      touchRatio: 0,
    },
  },
});

lensCompare.on("slideChange", function () {
  $(".lens__compare-table-slider .lens__slide-guide").fadeOut();
});

$(".lens__compare-icon--1")
  .append(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" stroke-width="2"/>
    <circle cx="12" cy="12" r="7" stroke-width="2"/>
  </svg>`);

$(".lens__compare-icon--2").append(`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" stroke-width="2"/>
  </svg>`);

$(".lens__compare-icon--3")
  .append(`<svg width="28" height="24" viewBox="0 0 28 24" fill="none">
    <path d="M1.87564 23L14 2L26.1244 23H1.87564Z" stroke-width="2"/>
  </svg>`);

$(".lens__compare-icon--4")
  .append(`<svg width="24" height="2" viewBox="0 0 24 2" fill="none">
    <path d="M0 1H24" stroke-width="2"/>
  </svg>`);

const $lHeader = $(".l-header");
const $lHeaderHeight = $lHeader.height();

$.fn.hasAttr = function (name) {
  return this.attr(name) !== undefined;
};

$(".l-content a[href^='#']")
  .not("a.nav-link")
  .on("click", function (e) {
    const $this = $(this);
    const $targetId = $this.attr("href");
    const $target = $($targetId);
    var $duration = $this.hasAttr("data-scroll-duration")
      ? $this.attr("data-scroll-duration")
      : 1000;
    var $offset = $this.hasAttr("data-scroll-offset")
      ? $this.attr("data-scroll-offset")
      : 15;
    const $scrollPosition = $target.offset().top - $lHeaderHeight - $offset;

    if ($target.length === 0) {
      return;
    }

    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $scrollPosition,
      },
      {
        duration: parseInt($duration),
        step: (now, fx) => {
          const $realPos = $target.offset().top - $lHeaderHeight - $offset;
          if (fx.end !== $realPos) {
            fx.end = $realPos;
          }
        },
      },
    );
  });

const dualUseLensesSlider = new Swiper(".c-dual-use-lenses-slider", {
  slidesPerView: "auto",
  spaceBetween: 40,
  loop: false,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
      simulateTouch: false,
      touchStartPreventDefault: false,
      allowTouchMove: false,
      touchRatio: 0,
    },
  },
});

dualUseLensesSlider.on("slideChange", function () {
  $(".c-dual-use-lenses-slider .lens__slide-guide").fadeOut();
});

$(".c-slider-2__container .tab-pane").each(function (index) {
  $(this).attr("id", "c-slider-2-item-" + (index + 1));
});
$(".c-slider-2__container .c-slider-2__color-nav .nav-link").each(
  function (index) {
    $(this).attr("href", "#c-slider-2-item-" + (index + 1));
  },
);
if ($("body[data-aos-easing]").length < 1) {
  $(".c-slider-2__color-nav").removeAttr("data-aos");
}

const tipsSlider = new Swiper(".tips .swiper", {
  touchStartPreventDefault: true,
  slideToClickedSlide: true,
  slidesPerView: 1.5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
    },
    1296: {
      slidesPerView: 3,
    },
  },
});

$(".l-accordion__item-q").click(function () {
  var $answer = $(this).next(".l-accordion__item-a");
  var $openNavigate = $(this).find(".c-open-navigate img");

  if ($answer.hasClass("open")) {
    $answer.removeClass("open").stop(true, false).slideUp();
    $openNavigate.attr(
      "src",
      "https://storage.owndays.com/storage/news/progressive-guide/circle-plus-icon_v2.svg",
    );
  } else {
    $answer.addClass("open").stop().slideDown();
    $openNavigate.attr(
      "src",
      "https://storage.owndays.com/storage/news/progressive-guide/circle-delete-icon_v2.svg",
    );
  }
});

$("a[href^='#']").on("mousedown", function (e) {
  e.preventDefault();
});

$("a[href^='#']").on("click", function (e) {
  const targetId = $(this).attr("href");
  const $target = $(targetId);

  if ($target.length === 0) return;

  const marginTop = 60;
  const targetPos = $target.offset().top - marginTop;

  $("html, body")
    .stop(true)
    .animate({ scrollTop: targetPos }, 600, function () {
      history.pushState(null, "", targetId);
    });
});
