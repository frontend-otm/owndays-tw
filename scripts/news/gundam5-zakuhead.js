function getBodyWidth() {
  document.documentElement.style.setProperty(
    "--body-w",
    document.body.clientWidth + "px",
  );
}
getBodyWidth();

// AOS
document.addEventListener("DOMContentLoaded", function (event) {
  AOS.init({
    once: true,
  });
});
document
  .querySelectorAll("img")
  .forEach((img) => img.addEventListener("load", () => AOS.refresh()));
// end AOS

const functionSlider = new Swiper(".function__slider", {
  slidesPerView: "auto",
  spaceBetween: 15,
  centeredSlides: true,
  loop: true,
  shortSwipes: false,
  longSwipesMs: 0,
  longSwipesRatio: 0.015,
  breakpoints: {
    768: {
      spaceBetween: 26,
    },
    1920: {
      slidesPerView: 3.2,
    },
    2560: {
      slidesPerView: 4.2,
    },
    3840: {
      slidesPerView: 4.8,
    },
  },
});

function fancyboxGallery() {
  $('[data-fancybox="gallery"]').fancybox({
    buttons: ["close"],
    loop: true,
    animationEffect: false,
    idleTime: false,
    afterLoad: function (instance, current) {
      current.$image.attr("alt", current.opts.$orig.find("img").attr("alt"));
    },
    baseTpl: `
    <div class="fancybox-container fancybox-gallery" role="dialog" tabindex="-1">
      <div class="fancybox-bg"></div>
      <div class="fancybox-inner">
        <div class="fancybox-toolbar">{{buttons}}</div>
        <div class="fancybox-stage">
          <div class="fancybox-stage-bottom">
            <div class="fancybox-caption">
              <div class="fancybox-caption__body"></div>
            </div>
            <div class="fancybox-navigation">{{arrows}}</div>
            <div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>
          </div>
        </div>
      </div>
    </div>`,
    btnTpl: {
      arrowLeft: `
      <button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">
        <i></i>
      </button>`,
      arrowRight: `
      <button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">
        <i></i>
      </button>`,
      close: `
      <button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">
        <i></i>
      </button>`,
    },
  });
}

$(".function__slider .swiper-slide button").on("click", function () {
  const $this = $(this);
  const $li = $this.parents("li");
  const $index = $li.data("swiper-slide-index");
  $("html").css({ "--fcbox-max-h": "465px", "--fcbox-max-h-sp": "283" });
  $('a[data-fancybox="gallery"]').removeAttr("data-fancybox");
  $("#gallery_img_popup > a").attr("data-fancybox", "gallery");
  fancyboxGallery();
  setTimeout(function () {
    $("#gallery_img_popup > a").eq($index).trigger("click").trigger("click");
  }, 50);
});

$(".stores__collapse-toggle").on("click", function () {
  $(this).next(".stores__collapse-content").stop().slideToggle();
  $(this).toggleClass("active");
});
$(".stores__collapse-toggle").on("mousedown", function (e) {
  e.preventDefault();
});

// function linkOffset() {
//   var $btnScroll = $(".main__scroll-down");
//   var $offset = "";
//   if ($(window).width() < 768) {
//     $offset = 0;
//   } else {
//     $offset = -150;
//   }
//   $btnScroll.attr("data-scroll-offset", $offset);
// }
// linkOffset();

function rotate3D() {
  let deg3D = $("#deg3D").css("transform");
  let translateY = parseFloat(deg3D.split(",")[5]);
  let translateX = parseFloat(deg3D.split(",")[4]);
  let roundedY = translateY.toFixed(0);
  let roundedX = translateX.toFixed(0);
  $("#model3d").attr("camera-orbit", `${roundedY}deg ${roundedX}deg 105%`);
}
//rotate3D();

$(".c-accordion__title").on("click", function () {
  const $this = $(this);
  const $li = $this.parent("li");
  const $content = $this.next();
  const $isOpen = $li.hasClass("c-accordion-open");
  const $topParents = $this.parents(".c-accordion");

  if ($topParents.hasClass("c-accordion-toggle")) {
    $($topParents).find("li").removeClass("c-accordion-open");
    $($topParents).find(".c-accordion__content").css("max-height", "");
    if (!$isOpen) {
      $content.css("max-height", $content.prop("scrollHeight") + "px");
      $li.addClass("c-accordion-open");
    } else {
      $li.removeClass("c-accordion-open");
      $content.css("max-height", "");
    }
  } else {
    if (!$isOpen) {
      $content.css("max-height", $content.prop("scrollHeight") + "px");
      $li.addClass("c-accordion-open");
    } else {
      $li.removeClass("c-accordion-open");
      $content.css("max-height", "");
    }
  }
});

$(".c-accordion-open").each(function () {
  const $content = $(this).find(".c-accordion__content");
  $content.css("transition-duration", "0s");
  $content.css("max-height", $content.prop("scrollHeight") + "px");
  setTimeout(function () {
    $content.css("transition-duration", "");
  }, 400);
});

$(".c-accordion__title").on("mousedown", function (e) {
  e.preventDefault();
});

$(".limited__collection button").on("click", function () {
  const $this = $(this);
  const $li = $this.closest("li");
  let selectIndex = $li.index() + 1;
  $("html").css({ "--fcbox-max-h": "412px", "--fcbox-max-h-sp": "250" });
  $('a[data-fancybox="gallery"]').removeAttr("data-fancybox");
  $(`#collection_img_popup-${selectIndex} a`).attr("data-fancybox", "gallery");
  fancyboxGallery();
  setTimeout(function () {
    $(`#collection_img_popup-${selectIndex} a`)
      .eq(0)
      .trigger("click")
      .trigger("click");
  }, 50);
});

$(".l-content a[href^='#']")
  .not("a.nav-link")
  .on("click", function (e) {
    let id = $(this).attr("href");
    const $target = $(id);
    const $this = $(this);
    let $offset;
    let $duration;
    $.fn.hasAttr = function (name) {
      return this.attr(name) !== undefined;
    };
    if ($this.hasAttr("data-scroll-duration")) {
      $duration = $this.data("scroll-duration");
    } else {
      $duration = 1000;
    }
    if ($this.hasAttr("data-scroll-offset")) {
      $offset = $this.data("scroll-offset");
    } else {
      $offset = 15;
    }

    const $headerHeight = $(".l-header").height() + $offset;

    if ($target.length > 0) {
      e.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $target.offset().top - $headerHeight,
        },
        {
          duration: $duration,
          easing: "swing",
          step: (now, fx) => {
            let realPos = $target.offset().top - $headerHeight;
            if (fx.end !== realPos) {
              fx.end = realPos;
            }
          },
        },
      );
    }
  });

function highestCollectionDesc() {
  const $descs = $(".limited__collection-desc");
  $descs.css("height", "");

  if ($(window).width() >= 768) {
    const maxHeights = [];
    for (let i = 0; i < $descs.length; i += 2) {
      const $first = $descs.eq(i);
      const $second = $descs.eq(i + 1);
      const firstHeight = $first.outerHeight();
      const secondHeight = $second.outerHeight();
      maxHeights.push(Math.max(firstHeight, secondHeight));
    }

    for (let i = 0; i < $descs.length; i += 2) {
      const maxHeight = maxHeights[i / 2];
      $descs.eq(i).css("height", maxHeight);
      $descs.eq(i + 1).css("height", maxHeight);
    }
  } else {
    $descs.css("height", "");
  }
}

const modelViewer = document.getElementById("model3d");

$(document).ready(function () {
  function getUrlParams() {
    const params = {};
    const queryString = window.location.search.slice(1);
    const pairs = queryString.split("&");
    pairs.forEach((pair) => {
      const [key, value] = pair.split("=");
      if (key) {
        params[key] = decodeURIComponent(value);
      }
    });
    return params;
  }
  const urlParams = getUrlParams();
  if (urlParams.ar === "true") {
    function checkModelLoading() {
      if (modelViewer.loaded) {
        setTimeout(function () {
          $("#default-ar-btn").trigger("click");
        }, 100);
        setTimeout(function () {
          $(".model-poster").addClass("inactive");
          $("#model3d").addClass("active");
          $("#ar-btn").removeClass("d-none");
        }, 6000);
      } else {
        setTimeout(checkModelLoading, 100);
      }
    }
    checkModelLoading();

    $("#ar-btn").on("click", function () {
      $(".l-gundam5__loader").removeClass("deactive");
      setTimeout(function () {
        $("#default-ar-btn").trigger("click");
      }, 100);
      setTimeout(function () {
        $(".l-gundam5__loader").addClass("deactive");
      }, 6000);
    });
  } else {
    function checkModelLoadingAR() {
      if (modelViewer.loaded) {
        $(".model-poster").addClass("inactive");
        $("#model3d").addClass("active");
      } else {
        setTimeout(checkModelLoadingAR, 100);
      }
    }
    checkModelLoadingAR();
    $("#ar-btn").on("click", function () {
      $(".l-gundam5__loader").removeClass("deactive");
      // fix bug video stop when open ar
      $(".c-modal-video").removeClass("aos-animate is-shown");
      const disableAutoPlay = $(".c-modal-video iframe")
        .attr("src")
        .replace("autoplay=1", "autoplay=0");
      $(".c-modal-video iframe").attr("src", disableAutoPlay);
      // end fix bug video stop when open ar
      setTimeout(function () {
        $("#default-ar-btn").trigger("click");
      }, 100);
      setTimeout(function () {
        $(".l-gundam5__loader").addClass("deactive");
      }, 6000);
    });
  }

  function handleScroll(targetSelector, actionCallback) {
    $(targetSelector).each(function () {
      const $target = $(this);

      if ($target.hasClass("aos-animate") && !$target.hasClass("is-shown")) {
        $target.addClass("is-shown");
        actionCallback($target);
      }
    });
  }

  $(window).on("resize", function () {
    getBodyWidth();
    linkOffset();
    highestCollectionDesc();
    $(".c-accordion-open .c-accordion__content").each(function () {
      const $this = $(this);
      $this.css("max-height", "none").css("max-height", $this.height());
    });
  });

  $(window).on("scroll", function () {
    // rotate3D();
    handleScroll(".c-modal-video", function ($target) {
      const setAutoPlay = $target
        .find("iframe")
        .attr("src")
        .replace("autoplay=0", "autoplay=1");
      $target.find("iframe").attr("src", setAutoPlay);
    });
  });
});

$(window).on("load", function () {
  $(".l-gundam5__loader").addClass("deactive");
  highestCollectionDesc();
});
