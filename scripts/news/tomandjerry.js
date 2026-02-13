$(function() {
  AOS.init({
    once: true,
  });
  
  document.querySelectorAll('img').forEach((img) =>
    img.addEventListener('load', () =>
      AOS.refresh()
    )
  );


  //------- LINEUP -------
  $(".lineup__main__slider__points").slick({
    infinite: true,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
  });

  $(".lineup__main__slider__products").slick({
    infinite: true,
    dots: false,
    speed: 500,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768, // Below 768px
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: false,
        },
      },
      {
        breakpoint: 961, // From 768px to 961px
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 99999, // Above 1024px
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: true,
        },
      },
    ],
  });

  function changePointFunnySlide(index) {
    $(".lineup__main__slider__points").slick("slickGoTo", index);
    $(".lineup__main__header-option").removeClass("lineup__main__header-option--active");
    $(".lineup__main__header__order-funny-" + (index + 1))
      .find(".lineup__main__header-option")
      .addClass("lineup__main__header-option--active");
  }

  $(".lineup__main__header__order-funny-1").click(function () {
    changePointFunnySlide(0);
  });

  $(".lineup__main__header__order-funny-2").click(function () {
    changePointFunnySlide(1);
  });

  $(".lineup__main__header__order-funny-3").click(function () {
    changePointFunnySlide(2);
  });

  $(".lineup__main__slider__points__funny").on("afterChange", function (event, slick, currentSlide) {
    $(".lineup__main__header-option__funny").removeClass("lineup__main__header-option__funny--active");
    $(".lineup__main__header__order-funny-" + (currentSlide + 1))
      .find(".lineup__main__header-option__funny")
      .addClass("lineup__main__header-option__funny--active");
  });


  function changePointChaseSlide(index) {
    $(".lineup__main__slider__points__chase").slick("slickGoTo", index);
    $(".lineup__main__header-option__chase").removeClass("lineup__main__header-option__chase--active");
    $(".lineup__main__header__order-chase-" + (index + 1))
      .find(".lineup__main__header-option__chase")
      .addClass("lineup__main__header-option__chase--active");
  }

  $(".lineup__main__header__order-chase-1").click(function () {
    changePointChaseSlide(0);
  });

  $(".lineup__main__header__order-chase-2").click(function () {
    changePointChaseSlide(1);
  });

  $(".lineup__main__header__order-chase-3").click(function () {
    changePointChaseSlide(2);
  });

  $(".lineup__main__slider__points__chase").on("afterChange", function (event, slick, currentSlide) {
    $(".lineup__main__header-option__chase").removeClass("lineup__main__header-option__chase--active");
    $(".lineup__main__header__order-chase-" + (currentSlide + 1))
      .find(".lineup__main__header-option__chase")
      .addClass("lineup__main__header-option__chase--active");
  });

  function changePointFriendlyFaceSlide(index) {
    $(".lineup__main__slider__points__friendly-face").slick("slickGoTo", index);
    $(".lineup__main__header-option__friendly-face").removeClass("lineup__main__header-option__friendly-face--active");
    $(".lineup__main__header__order-friendly-face-" + (index + 1))
      .find(".lineup__main__header-option__friendly-face")
      .addClass("lineup__main__header-option__friendly-face--active");
  }

  $(".lineup__main__header__order-friendly-face-1").click(function () {
    changePointFriendlyFaceSlide(0);
  });

  $(".lineup__main__header__order-friendly-face-2").click(function () {
    changePointFriendlyFaceSlide(1);
  });

  $(".lineup__main__header__order-friendly-face-3").click(function () {
    changePointFriendlyFaceSlide(2);
  });

  $(".lineup__main__slider__points__friendly-face").on("afterChange", function (event, slick, currentSlide) {
    $(".lineup__main__header-option__friendly-face").removeClass("lineup__main__header-option__friendly-face--active");
    $(".lineup__main__header__order-friendly-face-" + (currentSlide + 1))
      .find(".lineup__main__header-option__friendly-face")
      .addClass("lineup__main__header-option__friendly-face--active");
  });

  function changePointCheeseSlide(index) {
    $(".lineup__main__slider__points__cheese").slick("slickGoTo", index);
    $(".lineup__main__header-option__cheese").removeClass("lineup__main__header-option__cheese--active");
    $(".lineup__main__header__order-cheese-" + (index + 1))
      .find(".lineup__main__header-option__cheese")
      .addClass("lineup__main__header-option__cheese--active");
  }

  $(".lineup__main__header__order-cheese-1").click(function () {
    changePointCheeseSlide(0);
  });

  $(".lineup__main__header__order-cheese-2").click(function () {
    changePointCheeseSlide(1);
  });

  $(".lineup__main__header__order-cheese-3").click(function () {
    changePointCheeseSlide(2);
  });

  $(".lineup__main__slider__points__cheese").on("afterChange", function (event, slick, currentSlide) {
    $(".lineup__main__header-option__cheese").removeClass("lineup__main__header-option__cheese--active");
    $(".lineup__main__header__order-cheese-" + (currentSlide + 1))
      .find(".lineup__main__header-option__cheese")
      .addClass("lineup__main__header-option__cheese--active");
  });


  const imgUrl = document.getElementById("image-container").dataset.imgUrl;
  const funnyImgElements = document.querySelectorAll(".product-funny-img");
  const funnyColorChips = document.querySelectorAll(".lineup__main__product__color-chip__funny");
  const funnyColorNameElement = document.querySelector(".lineup__main__product__color-name__funny");

  funnyColorChips.forEach(chip => {
      chip.addEventListener("click", function () {
          const selectedColor = this.dataset.color; // Get 'c1' or 'c2'

          funnyImgElements.forEach((img) => {
            const index = img.dataset.index;
            img.src = `${imgUrl}/products/funny/tj1001x_5s_${selectedColor}_0${index}.webp`;
          });

          funnyColorChips.forEach(c => c.classList.remove("lineup__main__product__color-chip__funny--selected"));
          this.classList.add("lineup__main__product__color-chip__funny--selected");

          funnyColorNameElement.innerHTML = selectedColor.toUpperCase() + " " + funnyColorNameElement.dataset[selectedColor];

          const skuMapping = {
            "c1": "8357",
            "c2": "8360"
          };

          const button = document.querySelector(".lineup__main__product__button__funny a");
          if (button) {
              const baseUrl = button.href.split('?')[0];
              button.href = `${baseUrl}?sku=${skuMapping[selectedColor]}`;
          }
      });
  });

  const chaseImgElements = document.querySelectorAll(".product-chase-img");
  const chaseColorChips = document.querySelectorAll(".lineup__main__product__color-chip__chase");
  const chaseColorNameElement = document.querySelector(".lineup__main__product__color-name__chase");

  chaseColorChips.forEach(chip => {
      chip.addEventListener("click", function () {
          const selectedColor = this.dataset.color; // Get 'c1' or 'c2'

          chaseImgElements.forEach((img) => {
            const index = img.dataset.index;
            img.src = `${imgUrl}/products/chase/tj2001b_5s_${selectedColor}_0${index}.webp`;
          });

          chaseColorChips.forEach(c => c.classList.remove("lineup__main__product__color-chip__chase--selected"));
          this.classList.add("lineup__main__product__color-chip__chase--selected");

          chaseColorNameElement.innerHTML = selectedColor.toUpperCase() + " " + chaseColorNameElement.dataset[selectedColor];

          const skuMapping = {
            "c1": "8356",
            "c2": "8361"
          };

          const button = document.querySelector(".lineup__main__product__button__chase a");
          if (button) {
              const baseUrl = button.href.split('?')[0];
              button.href = `${baseUrl}?sku=${skuMapping[selectedColor]}`;
          }
      });
  });


  const friendlyFaceImgElements = document.querySelectorAll(".product-friendly-face-img");
  const friendlyFaceColorChips = document.querySelectorAll(".lineup__main__product__color-chip__friendly-face");
  const friendlyFaceColorNameElement = document.querySelector(".lineup__main__product__color-name__friendly-face");

  friendlyFaceColorChips.forEach(chip => {
      chip.addEventListener("click", function () {
          const selectedColor = this.dataset.color; // Get 'c1' or 'c2'

          friendlyFaceImgElements.forEach((img) => {
            const index = img.dataset.index;
            img.src = `${imgUrl}/products/friendly-face/tj2002b_5s_${selectedColor}_0${index}.webp`;
          });

          friendlyFaceColorChips.forEach(c => c.classList.remove("lineup__main__product__color-chip__friendly-face--selected"));
          this.classList.add("lineup__main__product__color-chip__friendly-face--selected");

          friendlyFaceColorNameElement.innerHTML = selectedColor.toUpperCase() + " " + friendlyFaceColorNameElement.dataset[selectedColor];

          const skuMapping = {
            "c1": "8355",
            "c2": "8362"
          };
      
          const button = document.querySelector(".lineup__main__product__button__friendly-face a");
          if (button) {
              const baseUrl = button.href.split('?')[0];
              button.href = `${baseUrl}?sku=${skuMapping[selectedColor]}`;
          }
      });
  });


  const cheeseImgElements = document.querySelectorAll(".product-cheese-img");
  const cheeseColorChips = document.querySelectorAll(".lineup__main__product__color-chip__cheese");
  const cheeseColorNameElement = document.querySelector(".lineup__main__product__color-name__cheese");

  cheeseColorChips.forEach(chip => {
      chip.addEventListener("click", function () {
          const selectedColor = this.dataset.color; // Get 'c1' or 'c2'

          cheeseImgElements.forEach((img) => {
            const index = img.dataset.index;
            img.src = `${imgUrl}/products/cheese/tj2003n_5s_${selectedColor}_0${index}.webp`;
          });

          cheeseColorChips.forEach(c => c.classList.remove("lineup__main__product__color-chip__cheese--selected"));
          this.classList.add("lineup__main__product__color-chip__cheese--selected");

          cheeseColorNameElement.innerHTML = selectedColor.toUpperCase() + " " + cheeseColorNameElement.dataset[selectedColor];

          const skuMapping = {
            "c1": "8353",
            "c2": "8354"
          };
      
          const button = document.querySelector(".lineup__main__product__button__cheese a");
          if (button) {
              const baseUrl = button.href.split('?')[0];
              button.href = `${baseUrl}?sku=${skuMapping[selectedColor]}`;
          }
      });
  });

  //------- END LINEUP -------

  //------- ACCESSORIES -------
  const accessoriesSlider = $(".accessories__container__slider");

  accessoriesSlider.slick({
    arrows: false,
    dots: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 1,
          centerMode: true,
          dots: false,
          variableWidth: false,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          arrows: true,
          slidesToShow: 1,
          centerMode: true,
          dots: false,
          variableWidth: true,
        },
      },
      {
        breakpoint: 9999,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: false,
          dots: true,
          variableWidth: false,
        },
      },
    ]
  });
accessoriesSlider.addClass("loaded");

  //------- END ACCESSORIES -------
  
});


// Initially hide all collapsible content
$('.stores__collapse-content').hide();

// Toggle the content when the button is clicked
$('.stores__collapse-toggle').on('click',function() {
  // Find the associated content div and toggle it
  $(this).next('.stores__collapse-content').slideToggle();
  $(this).toggleClass('active');
});
