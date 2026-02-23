$(window).on("load", function () {
  if (["jp", "tw"].includes(langPage.toLowerCase())) {
    bxSlider = function (id) {
      const config = {
        dots: false,
        accessibility: false,
        infinite: false,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1920,
            settings: {
              slidesToShow: 3.6,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1296,
            settings: {
              slidesToShow: 3.15,
              slidesToScroll: 1,
              arrows: false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
      };
      let slider = $("#" + id + "_slider" + " > .search-list-slickslide");
      if (id == "all") {
        slider = $(".all > .search-list-slickslide");
      }
      if (!slider.hasClass("slick-initialized")) {
        slider.slick(config);
      }
    };
  } else {
    bxSlider = function (id) {
      const config = {
        speed: 330,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      };
      let slider = $("#" + id + "_slider" + " > .search-list-slickslide");
      if (id == "all") {
        slider = $(".all > .search-list-slickslide");
      }
      if (!slider.hasClass("slick-initialized")) {
        slider.slick(config);
      }
    };
  }
  bxSlider("all");
  $(".l-product__panel").css("opacity", 1);
});

function toggleClass(addClass, addTo) {
  $(addTo).addClass(addClass).siblings().removeClass(addClass);
}
// toggle tab class
$(".l-product__tab label").click(function () {
  const id = $(this).attr("id");
  toggleClass("active", "#" + id + "_slider");
  toggleClass("active", "#" + id);
  bxSlider(id);
  $(".slick-initialized").each(function () {
    $(this).slick("setPosition");
  });
});

$('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
  $(".slick-initialized").each(function () {
    $(this).slick("setPosition");
  });
});

function initialRecommendProducts(id) {
  $("#" + id).addClass("active");
  toggleClass("active", "#" + id + "_slider");
  toggleClass("active", "#" + id);
  bxSlider(id);
  $(".slick-initialized").each(function () {
    $(this).slick("setPosition");
  });
}

function setRecommendProducts(type) {
  var country = $('a[data-toggle="tab"]').data("country");
  var gender = $('a[data-toggle="tab"]').data("gender");
  if (country && country === "jp" && gender) {
    initialRecommendProducts(type + "_" + gender);
  }
}
