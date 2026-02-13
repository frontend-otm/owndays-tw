$(function(){
  $('.about__play').addClass('active');

  AOS.init({
    once: true,
    duration: 800,
  });
  document.querySelectorAll('img').forEach((img) => img.addEventListener('load', () => AOS.refresh()));

  const styleSlider = $('.styles__top-img-slider');
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

  $('.styles__lineup-item').each(function() {
    var item = $(this);

    item.find('.product__details-colors > button').on('click', function(e) {
      e.preventDefault();

      var $this = $(this);
      var currentAttrValue = $this.attr('data-product');

      // Reset active states within the current parent item
      item.find('.product__img').removeClass('active');
      item.find('.product__btn').removeClass('active');
      item.find('.product__details-no').text('');
      item.find('.product__details-colors > button').removeClass('active');

      // Set active state for clicked item
      item.find(currentAttrValue).addClass('active');
      item
        .find(`.product__btn[data-id="${currentAttrValue}"]`)
        .addClass('active');
      item
        .find('.product__details-no')
        .text(currentAttrValue.replace('#product-', '').replace('-C', ' C'));
      $this.addClass('active');
    });
  });

  $('.check-bg-svg').append(`
		<svg xmlns="http://www.w3.org/2000/svg" width="98" height="40" fill="none" viewBox="0 0 98 40">
			<path stroke="#F7F6F2" stroke-linecap="square" stroke-linejoin="round" stroke-width="2" d="M90.416 4.865c0-5.06 6.584-5.246 6.584 0v2.04"/>
			<path fill="#F7F6F2" d="M90.416 5.18V39l-44.708-6.467L1 39V5.18c0-2.943 1.648-4.144 3.297-4.163h88.427"/>
			<path stroke="#F7F6F2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M90.416 5.18V39l-44.708-6.467L1 39V5.18c0-2.943 1.648-4.144 3.297-4.163h88.427"/>
		</svg>
	`);
	
	$('.icon-plus').append(`
		<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 13 13">
			<path fill="#000" d="M7.347 7.443v5.171h-1.49V7.443H.704V5.989h5.153V.84h1.49v5.15h5.132v1.454H7.347Z"/>
		</svg>
	`);
	
	const $lHeader = $(".l-header");
	const $lHeaderHeight = $lHeader.height();

	$.fn.hasAttr = function(name) {
		return this.attr(name) !== undefined;
	};

});
