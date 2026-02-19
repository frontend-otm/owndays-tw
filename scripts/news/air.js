var controller;
var scene;

$(function(){
  $('.about__play').addClass('active');

  AOS.init({
    once: true,
    duration: 800,
  });
  document.querySelectorAll('img').forEach((img) => img.addEventListener('load', () => AOS.refresh()));

  const styleSlider = $(".styles__top-img-slider");
  const sliderConfig = {
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true,
  };

  styleSlider.slick({ ...sliderConfig });

  $(".styles__lineup-item").each(function () {
    var item = $(this);

    item.find(".product__details-colors > button").on("click", function (e) {
      e.preventDefault();

      var $this = $(this);
      var currentAttrValue = $this.attr("data-product");

      // Reset active states within the current parent item
      item.find(".product__img").removeClass("active");
      item.find(".product__btn").removeClass("active");
      item.find(".product__details-no").text("");
      item.find(".product__details-colors > button").removeClass("active");

      // Set active state for clicked item
      item.find(currentAttrValue).addClass("active");
      item
        .find(`.product__btn[data-id="${currentAttrValue}"]`)
        .addClass("active");
      item
        .find(".product__details-no")
        .text(currentAttrValue.replace("#product-", "").replace("-C", " C"));
      $this.addClass("active");
    });
  });

  handleResize();

  $(window).on('resize', function () {
    handleResize();
  });
});

function initScrollMagic() {
  var pinElement = document.querySelector('.hot-topic');
  var pinTarget = document.querySelector('#pin');

  if (!pinElement || !pinTarget) {
    console.warn('ScrollMagic: element not found');
    return;
  }

  controller = new ScrollMagic.Controller();

  var duration = Math.max(
    pinElement.scrollHeight - window.innerHeight,
    0
  );

  scene = new ScrollMagic.Scene({
    triggerElement: pinElement,
    triggerHook: 0,
    duration: duration
  })
    .setPin(pinTarget)
    .addTo(controller)
    .on("progress", function (e) {
      var percent = (e.progress * -100).toFixed(1) + '%';
      $(".hot-topic__features").css('top', percent);
    });
}


function destroyScrollMagic() {
  if (scene) {
    scene.destroy(true);
    scene = null;
  }
  if (controller) {
    controller.destroy(true);
    controller = null;
  }
}

// Handle resize event
function handleResize() {
  if (window.innerWidth >= 768) {
    if (!scene) {
      initScrollMagic();
    }
  } else {
    destroyScrollMagic();
  }
}
