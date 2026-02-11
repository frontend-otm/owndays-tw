$(".styles__slider-slick").slick({
  mobileFirst: true,
  slidesToShow: 1.1, // mobile
  arrows: false,
  dots: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.5,
      },
    },
    {
      breakpoint: 1296,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
});

$(".styles__product-slider").each(function () {
  const $wrapper = $(this);
  const $slider = $wrapper.find(".styles__product-slick");
  const $prev = $wrapper.find(".slick-prev");
  const $next = $wrapper.find(".slick-next");
  const $count = $wrapper.find(".slide-count");

  $slider.on("init afterChange", function (event, slick, currentSlide) {
    const index =
      typeof currentSlide !== "undefined" ? currentSlide : slick.currentSlide;
    $count.text(`${index + 1} / ${slick.slideCount}`);
  });

  $slider.slick({
    arrows: true,
    dots: false,
    variableWidth: true,
    infinite: false,
    prevArrow: $prev,
    nextArrow: $next,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          variableWidth: false,
          infinite: true,
        },
      },
    ],
  });
});

$(".styles__product").each(function () {
  const item = $(this);

  item.find(".styles__product-details-colors > button").on("click", (e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const currentAttrValue = $this.attr("data-product");

    item.find(".styles__product-slider").removeClass("is-active");
    item
      .find(".styles__product-details-colors > button")
      .removeClass("is-active");
    item.find(".l-move__btn").removeClass("is-active");

    item.find(currentAttrValue).addClass("is-active");
    item
      .find(".styles__product-details-code > span")
      .text(`${currentAttrValue.slice(-2)}`);
    item
      .find(`.l-move__btn[data-id="${currentAttrValue}"]`)
      .addClass("is-active");
    $this.addClass("is-active");
  });
});

const $wrapper = $(".tips__list-wrapper");
const $slider = $wrapper.find(".tips__list");
const $prev = $wrapper.find(".slick-prev");
const $next = $wrapper.find(".slick-next");
const $count = $wrapper.find(".slide-count");

$slider.on("init afterChange", function (event, slick, currentSlide) {
  const index =
    typeof currentSlide !== "undefined" ? currentSlide : slick.currentSlide;
  const total = slick.slideCount;
  const visibleSlides = slick.options.slidesToShow;
  const totalVisibleGroups = Math.ceil(total / slick.options.slidesToScroll);

  const currentGroup = Math.floor(index / slick.options.slidesToScroll) + 1;
  $count.text(`${currentGroup} / ${totalVisibleGroups}`);
});

$slider.slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  prevArrow: $prev,
  nextArrow: $next,
  dots: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});

$(window).on("scroll", function () {
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var documentHeight = $(".l-move").height();

  // If the user reaches the bottom of the page
  if (scrollTop + windowHeight >= documentHeight) {
    $(".navs-sticky__inner").css("position", "static");
  } else {
    // Reset to sticky or fixed when scrolling up
    $(".navs-sticky__inner").css("position", "fixed");
  }
});

$(function(){
  AOS.init({
    once: true,
    duration: 800,
  });
  document.querySelectorAll('img').forEach((img) => img.addEventListener('load', () => AOS.refresh()));  
});
