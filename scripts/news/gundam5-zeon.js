$(function() {
  AOS.init({
    once: true
  });
  var rellax = new Rellax(".rellax");

  $(".slick--glasses").slick({
    arrows: false,
    dots: false,
    centerMode: true,
    variableWidth: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          variableWidth: false,
        },
      },
    ],
  });
  
  $(".slick--sunglasses").slick({
    arrows: false,
    dots: false,
    centerMode: true,
    variableWidth: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          variableWidth: false,
        },
      },
    ],
  });

  $("#glasses-nav .lineup__product-nav-btn--prev").on("click", function() {
    $(".slick--glasses").slick("slickPrev");
  });
  $("#glasses-nav .lineup__product-nav-btn--next").on("click", function() {
    $(".slick--glasses").slick("slickNext");
  });
  $("#sunglasses-nav .lineup__product-nav-btn--prev").on("click", function() {
    $(".slick--sunglasses").slick("slickPrev");
  });
  $("#sunglasses-nav .lineup__product-nav-btn--next").on("click", function() {
    $(".slick--sunglasses").slick("slickNext");
  });

  $("#glasses-colors").on("click", "button", function () {
    $("#glasses-colors button").removeClass("active");
    $(this).addClass("active");
  });

  $("#glasses-colors li button").on("click", function () {
    let tab_target = $(this).attr("data-target");
    let tab_color = $(this).attr("data-color");
    let tab_sku = $(this).attr("data-sku");

    $(".slick--glasses").hide();

    $("#" + tab_target).show();
    $("#" + tab_target).slick("setPosition");
    $("#glasses-color").text(tab_color);
    $("#glasses-link").attr("href", function(i, val) {
      return val.split("?")[0] + "?sku=" + tab_sku;
    });

    $("#glasses-nav .lineup__product-nav-btn--prev").on("click", function() {
      $("#" + tab_target).slick("slickPrev");
    });
    $("#glasses-nav .lineup__product-nav-btn--next").on("click", function() {
      $("#" + tab_target).slick("slickNext");
    });
  });

  $("#sunglasses-colors").on("click", "button", function () {
    $("#sunglasses-colors button").removeClass("active");
    $(this).addClass("active");
  });

  $("#sunglasses-colors li button").on("click", function () {   
    let tab_target = $(this).attr("data-target");
    let tab_color = $(this).attr("data-color");
    let tab_sku = $(this).attr("data-sku");

    $(".slick--sunglasses").hide();

    $("#" + tab_target).show();
    $("#" + tab_target).slick("setPosition");
    $("#sunglasses-color").text(tab_color);
    $("#sunglasses-link").attr("href", function(i, val) {
      return val.split("?")[0] + "?sku=" + tab_sku;
    });

    $("#sunglasses-nav .lineup__product-nav-btn--prev").on("click", function() {
      $("#" + tab_target).slick("slickPrev");
    });
    $("#sunglasses-nav .lineup__product-nav-btn--next").on("click", function() {
      $("#" + tab_target).slick("slickNext");
    });
  });

  function handleScroll(targetSelector, actionCallback) {
    $(targetSelector).each(function() {
      const $target = $(this);
  
      if ($target.hasClass("aos-animate") && !$target.hasClass("is-shown")) {
        $target.addClass("is-shown");
        actionCallback($target);
      }
    });
  }
  
  $(window).on("scroll", function () {
    handleScroll(".concept__movie", function($target) {
      const setAutoPlay = $target.find("iframe").attr("src").replace("autoplay=0", "autoplay=1");
      $target.find("iframe").attr("src", setAutoPlay);
    });
  });

  function handleCollection(dataCollection){
    $(`[data-fancybox="collection-${dataCollection}"]`).fancybox({ 
      afterLoad : function(instance, current) {
        current.$image.attr('alt', current.opts.$orig.find('img').attr('alt') );
      }
    });
    $(`[data-fancybox="collection-${dataCollection}"]`).eq(0).trigger('click');
  }

  $('.limited__item-thumb-img').on('click', function(e){
    let target = $(e.target).closest('.limited__item-thumb-img');
    let dataCollection = target.attr('data-collection');
    
    if (dataCollection !== undefined) {
        handleCollection(dataCollection);
    } else {
        console.log('data-collection attribute not found');
    }
  })

});
