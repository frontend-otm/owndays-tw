// AOS
$(function () {
  AOS.init({
    once: true,
  });

  Fancybox.bind("[data-fancybox]");
});

$("img").on("load", function () {
  AOS.refresh();
});
// end AOS

function splitTextAnimate() {
  $(".l-toystory__type-animate > span").each(function () {
    var $span = $(this);
    var contents = $span.contents();
    var newText = "";
    contents.each(function () {
      if (this.nodeType === 3) {
        var text = $(this).text();
        for (var i = 0; i < text.length; i++) {
          newText += '<span class="text-split">' + text[i] + "</span>";
        }
      }
    });
    $span.html(newText);
  });

  $(".l-toystory__type-animate").each(function () {
    var transitionDelay = 0.0;
    $(this)
      .find(".text-split")
      .each(function () {
        $(this).css("transition-delay", transitionDelay + "s");
        transitionDelay += 0.05;
      });
  });
}

function lineupSection() {
  // Smooth Scroll
  $("a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var target = $($(this).attr("href"));
    if (target.length) {
      var offset = 200;
      var winWidth = $(window).width();

      if (winWidth <= 767) {
        offset = 250;

        if (target.is("#woody-1")) {
          offset = 20;
        }

        if (target.is("#woody-2")) {
          offset = 50;
        }

        if (target.is("#buzz-1")) {
          offset = 280;
        }

        if (target.is("#buzz-2")) {
          offset = 60;
        }
      } else {
        if (target.is("#woody-1, #woody-2")) {
          offset = 0;
        }

        if (target.is("#buzz-2")) {
          offset = 70;
        }
      }

      $("html, body").animate({ scrollTop: target.offset().top - offset }, 600);
    }
  });

  // Animation Title Starts (viewport check with jQuery)
  var $targets = $(".l-toystory__lineup__header__title");

  if ($targets.length > 0) {
    function checkTitleInView() {
      var winHeight = $(window).height();
      var scrollTop = $(window).scrollTop();
      var threshold = 0.5;

      $targets.each(function () {
        var $el = $(this);
        if ($el.hasClass("animate")) return;

        var elTop = $el.offset().top;
        var elHeight = $el.outerHeight();
        var elVisible =
          Math.min(elTop + elHeight, scrollTop + winHeight) -
          Math.max(elTop, scrollTop);
        var ratio = elVisible / elHeight;

        if (ratio >= threshold) {
          $el.addClass("animate");
        }
      });
    }

    $(window).on("scroll resize", checkTitleInView);
    checkTitleInView();
  }

  // Points Slider
  $(".l-toystory__lineup__body__points").slick({
    infinite: true,
    dots: true,
    infinite: true,
    speed: 500,
    variableWidth: false,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  });

  $(".l-toystory__lineup__footer__glasses").slick({
    infinite: true,
    dots: true,
    infinite: true,
    speed: 500,
    variableWidth: true,
    centerMode: true,
    arrows: true,
  });

  // Image Header
  function imageHeaderAOS() {
    var $imgElements = $(".l-toystory__lineup__header__img");

    if (!$imgElements.length) return;

    var fadeRightKeys = [
      "woody-1",
      "buzz-1",
      "jessie",
      "lotso",
      "bo-peep",
      "slinky-dog",
    ];

    $imgElements.each(function () {
      var $img = $(this);
      var dataKey = $img.attr("data-key");

      if ($(window).width() <= 767) {
        $img.attr("data-aos", "fade-up");
      } else {
        $img.removeAttr("data-aos");
        $img.attr(
          "data-aos",
          $.inArray(dataKey, fadeRightKeys) !== -1 ? "fade-right" : "fade-left",
        );
      }
    });

    AOS.refresh();
  }

  imageHeaderAOS();
}

function exclusiveSection() {
  $(".l-toystory__exclusive__list").slick({
    infinite: true,
    dots: true,
    infinite: true,
    speed: 500,
    variableWidth: false,
    arrows: false,
    slidesToShow: 1,
  });

  $(".l-toystory__exclusive__card").on("aos:in", function () {
    var $el = $(this);
    setTimeout(function () {
      $el.addClass("animated");
    }, 1000);
  });

  var $element = $(".l-toystory__exclusive__stores");
  if (!$element.length) return;

  var now = new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" });
  var today = new Date(now);
  var endDate = new Date("2025-04-10T23:59:59+07:00");

  if (today <= endDate) {
    $element.css("display", "flex");
    $("html").css("--before-bottom", "320px");
  } else {
    $element.hide();
    $("html").css("--before-bottom", "0px");
  }
}

function ctaButton() {
  $(window).on("scroll", function () {
    var $cta = $("#cta-floating");
    if (!$cta.length) return;

    var scrollTop = $(window).scrollTop();
    var winHeight = $(window).height();
    var top = $cta.offset().top;
    var bottom = top + $cta.outerHeight();

    if (top <= scrollTop + winHeight && bottom >= scrollTop) {
      $(".l-toystory__navs").removeClass("is-fixed");
    } else {
      $(".l-toystory__navs").addClass("is-fixed");
    }
  });
}

function handleScroll(targetSelector, actionCallback) {
  $(targetSelector).each(function () {
    var $target = $(this);

    if ($target.hasClass("aos-animate") && !$target.hasClass("is-shown")) {
      $target.addClass("is-shown");
      actionCallback($target);
    }
  });
}

function changeVideoBasedOnScreenWidth() {
  var screenWidth = $(window).width();
  var $videoIframes = $(".l-toystory__concept__video-container iframe");
  var $videoLinks = $(".l-toystory__concept__video-container[data-fancybox]");

  var mobileVideoId = "sbENhqNWLzw";
  var desktopVideoId = "3CG_WpIi4ds";
  var videoId = screenWidth > 767 ? desktopVideoId : mobileVideoId;

  $videoIframes.each(function () {
    var currentSrc = $(this).attr("src");
    currentSrc = currentSrc.replace(/(sbENhqNWLzw|3CG_WpIi4ds)/g, videoId);
    $(this).attr("src", currentSrc);
  });

  $videoLinks.each(function () {
    var $link = $(this);
    if ($link.attr("href")) {
      var currentHref = $link.attr("href");
      currentHref = currentHref.replace(/(sbENhqNWLzw|3CG_WpIi4ds)/g, videoId);
      $link.attr("href", currentHref);
    }
  });
}

$(function () {
  changeVideoBasedOnScreenWidth();
});

$(window).on("resize", function () {
  changeVideoBasedOnScreenWidth();
});

splitTextAnimate();
lineupSection();
exclusiveSection();
ctaButton();
