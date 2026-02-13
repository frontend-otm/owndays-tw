
(function (d) {
    var config = {
        kitId: 'mtj2wof',
        scriptTimeout: 3000,
        async: true
    },
        h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
})(document);

var rellax = new Rellax('.rellax');

var scroll = new SmoothScroll('a[href*="#"]', {
    header: ".l-header",
    speed: 600
});


$(function () {
    $('.loading').delay(2000).slideUp();
    
    AOS.init({
        duration: 2000,
        once: true,
    });

    $(window).on("scroll", function () {
       AOS.init({
        duration: 2000,
        once: true,
    });
    });

    $(".lineup__item__slider").slick({
        dots: true,
        arrows: false,
        fade: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: true,
            }
        }]
    });
    $(".shoplist__list > dt").on('click', function () {
        $(this).toggleClass('open');
        $(this).next("dd").slideToggle();
    });

    var numSlick = 0;
    $('.lineup__item__product-slider--for').each(function () {
        numSlick++;
        $(this).addClass('slider-' + numSlick).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
            infinite: false,
            asNavFor: '.lineup__item__product-slider--nav.slider-' + numSlick,
            infinite: false,
            swipe: false,
            swipeToSlide: false,
            draggable: false,
            accessibility: false,
        });
    });

    numSlick = 0;
    $('.lineup__item__product-slider--nav').each(function () {
        numSlick++;
        $(this).addClass('slider-' + numSlick).slick({
            slidesToShow: 2,
            asNavFor: '.lineup__item__product-slider--for.slider-' + numSlick,
            arrows: false,
            dots: false,
            focusOnSelect: true,
            infinite: false,
            swipe: false,
            swipeToSlide: false,
            draggable: false,
            accessibility: false,
        });
    });
});