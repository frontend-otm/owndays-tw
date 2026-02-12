$(function(){
  AOS.init({
    once: true,
  });
  document.querySelectorAll('img').forEach((img) => 
    img.addEventListener("load", () => {
      AOS.refresh();
      $(".lineup__model-product-arrow--next").each(function () {
        $(this).trigger("click");
        console.log("trigger arrow next");
      });
      $(".lineup__model-product-arrow--prev").each(function () {
        $(this).trigger("click");
        console.log("trigger arrow prev");
      });
    })
  );

  let splideName = document.getElementsByClassName("splide--name");
  for (let i = 0; i < splideName.length; i++) {
    new Splide(splideName[i], {
      arrows: false,
      pagination: false,
      type: "loop",
      drag: "free",
      focus: "center",
      autoWidth: true,
      autoScroll: {
        speed: 0.2,
        pauseOnHover: false,
        pauseOnFocus: false,
      },
    }).mount(window.splide?.Extensions);
  }

  let lineupNavList = new Splide(".lineup__nav-list", {
    arrows: false,
    pagination: false,
    type: "loop",
    drag: "free",
    focus: "center",
    autoWidth: true,
    autoScroll: {
      speed: 0.2,
      pauseOnHover: false,
      pauseOnFocus: false,
    },
    breakpoints: {
      767: {
        destroy: true,
      },
    },
  });
  lineupNavList.mount(window.splide.Extensions);
  

  let lineupModelTopSet = document.getElementsByClassName(
    "lineup__model-top-set"
  );
  for (let i = 0; i < lineupModelTopSet.length; i++) {
    new Splide(lineupModelTopSet[i], {
      arrows: false,
      pagination: false,
      autoplay: true,
      pauseOnHover: false,
      pauseOnFocus: false,
      type: "loop",
      mediaQuery: "min",
      breakpoints: {
        768: {
          destroy: true,
        },
      },
    }).mount();
  }

  let lineupModelTopPoint = document.getElementsByClassName(
    "lineup__model-top-point"
  );
  for (let i = 0; i < lineupModelTopPoint.length; i++) {
    new Splide(lineupModelTopPoint[i], {
      arrows: false,
      pagination: true,
      mediaQuery: "min",
      breakpoints: {
        768: {
          autoWidth: true,
        },
        1296: {
          destroy: true,
        },
      },
    }).mount();
  }

  let lineupModelProductSlider = document.getElementsByClassName(
    "lineup__model-product-slider"
  );
  for (let i = 0; i < lineupModelProductSlider.length; i++) {
    const splideInstance = new Splide(lineupModelProductSlider[i], {
      arrows: false,
      pagination: false,
      type: "loop",
      perPage: 1.5,
      focus: "center",
      mediaQuery: "min",
      breakpoints: {
        768: {
          autoWidth: true,
        },
      },
    }).mount();

    $(lineupModelProductSlider[i])
      .closest(".lineup__model-product")
      .find(".lineup__model-product-arrow--prev")
      .on("click", function () {
        splideInstance.go("-1");
      });

    $(lineupModelProductSlider[i])
      .closest(".lineup__model-product")
      .find(".lineup__model-product-arrow--next")
      .on("click", function () {
        splideInstance.go("+1");
      });
  }

  $(".lineup__model-product").each(function () {
    const item = $(this);

    item.find(".lineup__model-product-skus > button").on("click", (e) => {
      e.preventDefault();
      const $this = $(e.currentTarget);
      const currentAttrValue = $this.attr("data-id-target");
      item.find(".lineup__model-product-slider").removeClass("is-show");
      item
        .find(".lineup__model-product-skus > button")
        .removeClass("is-active");
      item.find(".lineup__model-product-btn .l-sg__btn").removeClass("is-show");
      item.find(currentAttrValue).addClass("is-show");
      item
        .find(
          `.lineup__model-product-btn .l-sg__btn[data-id="${currentAttrValue}"]`
        )
        .addClass("is-show");
      $this.addClass("is-active");
    });
  });

    let accessoriesSlider = new Splide(".accessories__slider", {
    arrows: false,
    pagination: true,
    type: "loop",
  });
  accessoriesSlider.mount();
  
});
