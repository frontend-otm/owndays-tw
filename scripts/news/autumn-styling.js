$(function () {
  AOS.init({
    once: true,
    duration: 1000,
    offset: 120,
    delay: 0,
  });

  document
    .querySelectorAll("img")
    .forEach((img) => img.addEventListener("load", () => AOS.refresh()));

  onClickAutoScroll();
  onCloseBackDrop("autumn-styling-question-modal");
  onLinkHash();
});

function onClickAutoScroll() {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    const target = $(this).attr("href");
    const $el = $(target);

    if ($el.length) {
      // default offset
      let offset = window.innerWidth < 1024 ? 70 : 75;

      // custom offset for some targets
      // if (target === '#xxx') {
      //   offset = 80;
      // }

      $("html, body").animate(
        {
          scrollTop: $el.offset().top - offset,
        },
        600,
      );
    }
  });
}

function onLinkHash() {
  if (!window.location.hash) return;

  const target = window.location.hash;
  const $el = $(target);
  if ($el.length) {
    let offset = window.innerWidth < 1024 ? 70 : 75;

    $("html, body").animate(
      {
        scrollTop: $el.offset().top - offset,
      },
      600,
    );
  }
}

function onClickQuestionModal(idModal, styleKey) {
  const q1 = document.getElementById("q-1");

  if (q1 && styleKey) {
    q1.dataset.key = styleKey;
    highlightButtonByDataKey("q-1");
    onSelectQuestionOption(styleKey);
  } else {
    console.warn('Element with id "q-1" not found');
  }

  highlightButtonByDataKey("q-1");

  const modal = document.getElementById(idModal);
  document.documentElement.style.overflow = "hidden";

  modal.style.display = "block";
  setTimeout(() => {
    modal.classList.add("show");
  }, 10);
}

function onCloseQuestionModal(key) {
  const modal = document.getElementById(key);
  document.documentElement.style.overflow = "";

  const q1 = document.getElementById("q-1");
  const q2 = document.getElementById("q-2");
  const q3 = document.getElementById("q-3");
  const q4 = document.getElementById("q-4");

  modal.classList.remove("show");
  onResetKeyAnswer();

  setTimeout(() => {
    modal.style.display = "none";
    q1.style.display = "block";
    q2.style.display = "none";
    q3.style.display = "none";
    q4.style.display = "none";
    document
      .querySelectorAll(".result-autumn-styling-block")
      .forEach((el) => (el.style.display = "none"));
  }, 400);
}

function onCloseBackDrop(key) {
  const modal = document.getElementById(key);
  document.documentElement.style.overflow = "";

  if (!modal) return;

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      onCloseQuestionModal(key);
      onResetKeyAnswer();
    }
  });
}

function onSelectQuestionOption(key) {
  const q1 = document.getElementById("q-1");
  const q2 = document.getElementById("q-2");
  const q3 = document.getElementById("q-3");
  const q4 = document.getElementById("q-4");

  const q1Keys = [
    "denim",
    "boacollar",
    "redcardigan",
    "butteryellow",
    "smokypink",
  ];
  const q2Keys = ["accessory", "performance"];
  const q3Keys = ["yes", "no"];
  const q4Keys = ["uv-pc-lens", "antifog-lens", "antiscratch-lens"];

  document
    .querySelectorAll(".result-autumn-styling-block")
    .forEach((el) => (el.style.display = "none"));

  if (q1Keys.includes(key)) {
    q1.style.display = "none";
    q2.style.display = "block";
    document.body.dataset.a1Key = key;
    q2.dataset.key = "";
  }

  if (q2Keys.includes(key) && key === "accessory") {
    q2.style.display = "none";
    q3.style.display = "block";
    q2.dataset.key = key;
    q3.dataset.key = "";
    highlightButtonByDataKey("q-2");
  }

  if (q2Keys.includes(key) && key === "performance") {
    q2.style.display = "none";
    q4.style.display = "block";
    q2.dataset.key = key;
    q4.dataset.key = "";
    highlightButtonByDataKey("q-2");
  }

  if (q3Keys.includes(key)) {
    q3.style.display = "none";
    let a1Key = document.body.dataset.a1Key;

    if (key === "yes") {
      document.getElementById(
        `result-photochromic-lens-${a1Key}`,
      ).style.display = "block";
    } else {
      document.getElementById(`result-color-lens-${a1Key}`).style.display =
        "block";
    }

    q3.dataset.key = key;
    highlightButtonByDataKey("q-3");
  }

  if (q4Keys.includes(key)) {
    q4.style.display = "none";
    let a1Key = document.body.dataset.a1Key;

    if (key === "uv-pc-lens") {
      document.getElementById(`result-uv-pc-lens-${a1Key}`).style.display =
        "block";
    }

    if (key === "antifog-lens") {
      document.getElementById(`result-antifog-lens-${a1Key}`).style.display =
        "block";
    }

    if (key === "antiscratch-lens") {
      document.getElementById(
        `result-antiscratch-lens-${a1Key}`,
      ).style.display = "block";
    }

    q4.dataset.key = key;
    highlightButtonByDataKey("q-4");
  }
}

function onAddToCart(product) {
  if (product) {
    var lensOptionId = product.lensOptionId;
    var lensTypeId = product.lensTypeId;
    var framePrice = product.price.value;
    var productCode = product.number;
    var skuTryOnCode = product.skuTryOnCode;
    var skuId = product.skuId;
    var lensCoatingTypeId = product.lensCoatingTypeId;
    var lensCoatingOptionId = product.lensCoatingOptionId;
    const modal = $("#modal-try-on-lens-selection");
    modal.find("#product-code-input").val(productCode);
    modal.find("#sku-try_on_code").val(skuTryOnCode);
    modal.find("#hidden-frame-price").val(framePrice);

    modal.find("#default-lens-type").val("");
    modal.find("#default-lens-option").val("");
    modal.find("#default-lens-coating-type").val("");
    modal.find("#default-lens-coating-option").val("");

    if (lensTypeId != null && lensOptionId != null) {
      modal.find("#default-lens-type").val(lensTypeId);
      modal.find("#default-lens-option").val(lensOptionId);
    }

    if (lensCoatingTypeId != null && lensCoatingOptionId != null) {
      modal.find("#default-lens-coating-type").val(lensCoatingTypeId);
      modal.find("#default-lens-coating-option").val(lensCoatingOptionId);
    }
    var actionUrl2 = actionUrl + skuId;
    modal.find("#cart-add-new").attr("action", actionUrl2);
    modal.find("#product-sku-input").val(skuId);
  }
}

function onOpenVTOModal(product) {
  if (product) {
    var lensOptionId = product.lensOptionId;
    var lensTypeId = product.lensTypeId;
    var framePrice = product.price.value;
    var productCode = product.number;
    var skuTryOnCode = product.skuTryOnCode;
    var skuId = product.skuId;
    var lensCoatingTypeId = product.lensCoatingTypeId;
    var lensCoatingOptionId = product.lensCoatingOptionId;
    const modal = $("#modal-try-on-lens-selection");
    modal.find("#product-code-input").val(productCode);
    modal.find("#sku-try_on_code").val(skuTryOnCode);
    modal.find("#hidden-frame-price").val(framePrice);

    modal.find("#default-lens-type").val("");
    modal.find("#default-lens-option").val("");
    modal.find("#default-lens-coating-type").val("");
    modal.find("#default-lens-coating-option").val("");

    if (lensTypeId != null && lensOptionId != null) {
      modal.find("#default-lens-type").val(lensTypeId);
      modal.find("#default-lens-option").val(lensOptionId);
    }

    if (lensCoatingTypeId != null && lensCoatingOptionId != null) {
      modal.find("#default-lens-coating-type").val(lensCoatingTypeId);
      modal.find("#default-lens-coating-option").val(lensCoatingOptionId);
    }
    var actionUrl2 = actionUrl + skuId;
    modal.find("#cart-add-new").attr("action", actionUrl2);
    modal.find("#product-sku-input").val(skuId);
  }
}

function highlightButtonByDataKey(highlightKey) {
  const container = document.getElementById(highlightKey);
  if (!container) return;

  const styleKey = container.dataset.key;
  const buttons = container.querySelectorAll("button");

  buttons.forEach((btn) => {
    const btnKey = btn.dataset.key;
    if (btnKey === styleKey) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });
}

function onBackQuestionModal(qId) {
  const q1 = document.getElementById("q-1");
  const q2 = document.getElementById("q-2");
  const q3 = document.getElementById("q-3");
  const q4 = document.getElementById("q-4");

  if (qId === "q-1") {
    q1.style.display = "block";
    q2.style.display = "none";
    q2.dataset.key = "";
  }

  if (qId === "q-2") {
    q2.style.display = "block";
    q3.style.display = "none";
    q3.dataset.key = "";
  }

  if (qId === "q-3") {
    q4.style.display = "none";
    q4.dataset.key = "";

    if (q2.dataset.key === "performance") {
      q2.style.display = "block";
    } else {
      q3.style.display = "block";
    }
  }
}

function onResetKeyAnswer() {
  const q1 = document.getElementById("q-1");
  const q2 = document.getElementById("q-2");
  const q3 = document.getElementById("q-3");
  const q4 = document.getElementById("q-4");

  q1.dataset.key = "";
  q2.dataset.key = "";
  q3.dataset.key = "";
  q4.dataset.key = "";

  document
    .querySelectorAll(".modal-autumn-styling__choices button")
    .forEach((el) => el.classList.remove("selected"));
}
