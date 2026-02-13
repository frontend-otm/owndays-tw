let rellax;

initPlugins();
initSliders();
initEvents();
initScrollSystem();
autoScrollToHash();

function initPlugins() {
  // Rellax
  rellax = new Rellax(".rellax", { center: true });

  // AOS
  AOS.init({
    once: true,
    duration: 800,
  });

  $(".main__heading").addClass("is-show");
}

function initSliders() {
  initProductSplide();
  initOptionsSplide();
  initPickupSlider();
  initLineupAllItems();
}

function initProductSplide() {
  $(".lineup__product-slider .splide").each(function () {
    new Splide(this, {
      arrows: false,
      pagination: false,
      type: "loop",
      gap: 10,
      autoWidth: true,
      focus: "center",
      mediaQuery: "min",
      breakpoints: {
        1024: { destroy: true },
      },
    }).mount();
  });
}

function initOptionsSplide() {
  const optionsList = new Splide(".options__list .splide", {
    type: "loop",
    arrows: false,
    pagination: false,
    gap: 10,
    autoWidth: true,
    focus: "center",
    mediaQuery: "min",
    breakpoints: {
      1024: { destroy: true },
    },
  });

  optionsList.mount();
}

function initEvents() {
  bindContextMenuBlock();
  bindColorSwitch();
  bindModalTrigger();
  bindSmoothScroll();
  bindScrollFixNav();
}

function bindColorSwitch() {
  $(".lineup__product-color-btn").on("click", function () {
    var $this = $(this);
    // หา product container
    var $product = $this.closest(".lineup__product");
    if (!$product.length) {
      $product = $this.closest(".lineup__all-items__item");
    }

    var color = $this.data("color");
    var skuId = $this.data("sku-id");

    $(".lineup__product-btn .js-modal-in-stock-trigger").attr(
      "data-sku",
      "sku_" + skuId,
    );

    // active state
    $product.find(".lineup__product-color-btn").removeClass("is-active");
    $this.addClass("is-active");

    // product code
    var $codeEl = $product.find(".lineup__product-title-code");
    if (!$codeEl.length) {
      $codeEl = $product.find(
        ".lineup__all-items__item-info .lineup__product-title-code",
      );
    }

    var productCode = $.trim($codeEl.text()).split(" ")[0];

    // main image
    var $mainImg = $product.find(".lineup__product-thumb img");
    if (!$mainImg.length) {
      $mainImg = $product.find(".lineup__all-items__item-img img");
    }

    var currentSrc = $mainImg.attr("src");
    var newSrc = "";

    if (/\.webp$/.test(currentSrc)) {
      newSrc = currentSrc.replace(/_[^_]*\.webp$/, "_" + color + ".webp");
    } else if (/\.gif$/.test(currentSrc)) {
      newSrc = currentSrc.replace(/_[^_]*\.gif$/, "_" + color + ".gif");
    }

    if (newSrc) {
      $mainImg.attr("src", newSrc);
    }

    $mainImg.attr("alt", productCode + " " + color);

    // update title color
    $codeEl.text($codeEl.text().replace(/C\d+/, color));

    // slider images
    $product
      .find(".lineup__product-slider .splide__slide img")
      .each(function () {
        var $img = $(this);
        var src = $img.attr("src");
        var match = src.match(/_(\d+)\.webp$/);

        if (match) {
          var slideNo = match[1];
          var updatedSrc = src.replace(
            /_[^_]*_\d+\.webp$/,
            "_" + color + "_" + slideNo + ".webp",
          );
          $img.attr({
            src: updatedSrc,
            alt: productCode + " " + color,
          });
        }
      });

    const productUrl = $("#product-url").val();
    // product link
    $product
      .find(".lineup__all-items__item-link")
      .attr("href", productUrl + "?sku=" + skuId);

    // description images
    $product.find(".lineup__product-description-img img").each(function () {
      var $img = $(this);
      var src = $img.attr("src");
      var match = src.match(/_(\d+)\.webp$/);
      if (match) {
        var slideNo = match[1];
        $img.attr({
          src: src.replace(
            /_[^_]*_\d+\.webp$/,
            "_" + color + "_" + slideNo + ".webp",
          ),
          alt: productCode + " " + color,
        });
      }
    });

    // favorite button
    var $favoriteBtn = $product.find(".lineup__product-favorite");
    if (!$favoriteBtn.length) {
      $favoriteBtn = $product.find(".lineup__all-items__favorite-btn");
    }

    $favoriteBtn.attr("data-color", color).attr("data-sku-id", skuId);

    // CTA link
    var $productLink = $product.find(".lineup__product-btn a");
    var href = $productLink.attr("href");

    if (href) {
      $productLink.attr("href", href.replace(/sku=\d+/, "sku=" + skuId));
    }
  });
}

function bindModalTrigger() {
  // เปิด modal จากปุ่มใน lineup
  $(document).on("click", ".js-modal-in-stock-trigger", function (e) {
    e.preventDefault();

    const $productContainer = $(this).closest(".lineup__product");
    const $activeButton = $productContainer.find(
      ".lineup__product-color-btn.is-active",
    );

    if (!$activeButton.length) {
      return;
    }

    const sku_code = $activeButton.attr("data-sku-code");
    const product_code = $activeButton.attr("data-product-code");

    if (typeof window.updateStockSearchCodes !== "function") {
      return;
    }

    window.updateStockSearchCodes(product_code, sku_code);
    $("#modalInstock").modal("show");
  });

  // เปิด modal จาก pickup
  $(document).on("click", "#modal_in_stock", function (e) {
    e.preventDefault();

    const $activeButton = $(".pickup__product-info-btn.is-active");

    if (!$activeButton.length) {
      return;
    }

    const sku_code = $activeButton.attr("data-sku-code");
    const product_code = $activeButton.attr("data-product-code");

    if (typeof window.updateStockSearchCodes !== "function") {
      return;
    }

    window.updateStockSearchCodes(product_code, sku_code);
    $("#modalInstock").modal("show");
  });
}

function bindSmoothScroll() {
  $(document).on("click", 'a[href^="#"]', function (e) {
    e.preventDefault();

    const headerHeight = $(".l-header").outerHeight() || 0;
    const target = $($(this).attr("href"));
    if (!target.length) return;

    $("html, body").animate(
      { scrollTop: target.offset().top - headerHeight },
      500,
    );
  });
}

function bindScrollFixNav() {
  $(window).on("scroll", function () {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const documentHeight = $(".l-bib").height();

    $(".l-bib__nav").toggleClass(
      "is-fixed",
      scrollTop + windowHeight < documentHeight,
    );
  });
}

function bindContextMenuBlock() {
  $(".block-image").on("contextmenu", function () {
    return false;
  });
}

function initScrollSystem() {
  initScrollTrigger();
  $(window).on("hashchange", autoScrollToHash);
}

function autoScrollToHash() {
  var hash = window.location.hash;
  if (!hash) return;

  var code = hash.substring(1);
  var $target = $(`[data-product-id-target="${code}"]`).first();
  if (!$target.length) return;

  var isMobile = window.innerWidth <= 768;
  var extraOffset = isMobile ? 100 : 200;
  var $scrollParent = findScrollableParent($target);

  if (
    isMobile &&
    ($scrollParent[0] === window ||
      $scrollParent.is("html") ||
      $scrollParent.is("body"))
  ) {
    $target[0].scrollIntoView({ behavior: "smooth", block: "start" });

    setTimeout(function () {
      window.scrollBy({ top: -extraOffset, left: 0, behavior: "smooth" });
    }, 20);
    return;
  }

  var scrollTo = calcScrollTop($scrollParent, $target, extraOffset);

  var animateDone = function () {
    $(document).trigger("productScrollTrigger", {
      productCode: code,
      element: $target[0],
    });
  };

  if (
    $scrollParent[0] === window ||
    $scrollParent.is("html") ||
    $scrollParent.is("body")
  ) {
    $("html, body").animate({ scrollTop: scrollTo }, 300, animateDone);
  } else {
    $scrollParent.animate({ scrollTop: scrollTo }, 300, animateDone);
  }
}

function initScrollTrigger() {
  const productTargets = document.querySelectorAll("[data-product-id-target]");

  if ("IntersectionObserver" in window) {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const productCode = entry.target.getAttribute(
            "data-product-id-target",
          );

          // Find the parent lineup__content-item
          const $contentItem = $(entry.target).closest(".lineup__content-item");

          // Remove active class from products within the same lineup__content-item only
          $contentItem.find(".lineup__product").removeClass("is-active");

          // Add active class to matching product within the same lineup__content-item
          $contentItem
            .find(`.lineup__product[data-product-id="${productCode}"]`)
            .addClass("is-active");

          // Trigger custom event
          $(document).trigger("productScrollTrigger", {
            productCode: productCode,
            element: entry.target,
          });
        }
      });
    }, observerOptions);

    productTargets.forEach((target) => {
      observer.observe(target);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    $(window).on("scroll.productTrigger", function () {
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();
      const triggerPoint = scrollTop + windowHeight / 2;

      productTargets.forEach((target) => {
        const $target = $(target);
        const targetTop = $target.offset().top;
        const targetBottom = targetTop + $target.outerHeight();

        if (triggerPoint >= targetTop && triggerPoint <= targetBottom) {
          const productCode = target.getAttribute("data-product-id-target");

          // Find the parent lineup__content-item
          const $contentItem = $target.closest(".lineup__content-item");

          // Remove active class from products within the same lineup__content-item only
          $contentItem.find(".lineup__product").removeClass("is-active");

          // Add active class to matching product within the same lineup__content-item
          $contentItem
            .find(`.lineup__product[data-product-id="${productCode}"]`)
            .addClass("is-active");

          // Trigger custom event
          $(document).trigger("productScrollTrigger", {
            productCode: productCode,
            element: target,
          });
        }
      });
    });
  }
}

function initPickupSlider() {
  $(".pickup__product-img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  });

  $(".pickup__product-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".pickup__product-img",
    dots: false,
    focusOnSelect: true,
  });

  $(".pickup__product-info-btn").on("click", function () {
    const $btn = $(this);
    const product = JSON.parse($btn.attr("data-product"));
    const basePath = $btn.attr("data-base-path");
    const baseSku = $btn.attr("data-sku-id");
    $(".pickup__product-info-btn").removeClass("is-active");
    $btn.addClass("is-active");

    onClickPickupProductInfoBtn(product, basePath, baseSku);
    setPickupFavoriteBtn(product);
  });

  $(".pickup__product-info__colors").on("click", "button", function () {
    const productCode = $(this).data("product-code");
    const skuCode = $(this).data("sku-code");
  });
}

function onClickPickupProductInfoBtn(product, basePath, baseSku) {
  if (!product || !product.list) return;

  const { alt, route, list } = product;

  // Update product code / title
  $(".pickup__product-info__code").text(alt);

  // Update product link
  $(".pickup__btn a").attr("href", route);

  // Update modal sku
  $(".pickup__btn .js-modal-in-stock-trigger").attr(
    "data-sku",
    "sku_" + baseSku,
  );

  const $imgSlider = $(".pickup__product-img");
  const $navSlider = $(".pickup__product-nav");

  // Guard: slick ต้อง init แล้ว
  if (
    !$imgSlider.hasClass("slick-initialized") ||
    !$navSlider.hasClass("slick-initialized")
  ) {
    return;
  }

  // ลบ slide เก่า
  $imgSlider.slick("removeSlide", null, null, true);
  $navSlider.slick("removeSlide", null, null, true);

  // สร้าง slide ใหม่
  list.forEach((src) => {
    const fullSrc = `${basePath}${src}`;

    $imgSlider.slick(
      "slickAdd",
      `<div><img src="${fullSrc}" alt="${alt}" loading="lazy"></div>`,
    );

    $navSlider.slick(
      "slickAdd",
      `<div><img src="${fullSrc}" alt="${alt}" loading="lazy"></div>`,
    );
  });

  // กลับไป slide แรก
  $imgSlider.slick("slickGoTo", 0);
  $navSlider.slick("slickGoTo", 0);
}

function initLineupAllItems() {
  const slider = document.querySelector(".lineup__all-items__list");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5; // à¸„à¸§à¸²à¸¡à¹€à¸£à¹‡à¸§à¸¥à¸²à¸ à¸›à¸£à¸±à¸šà¹„à¸”à¹‰
    slider.scrollLeft = scrollLeft - walk;
  });

  rellax.refresh();
}
