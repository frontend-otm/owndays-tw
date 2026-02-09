$(function () {
  // AOS
  AOS.init({
    once: true,
    duration: 1000,
  });
  document.querySelectorAll('img').forEach((img) => img.addEventListener('load', () => AOS.refresh()));

  new Swiper('.contactlens__slider', {
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});

