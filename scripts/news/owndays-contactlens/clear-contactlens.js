$(function () {
  // AOS
  AOS.init({
    once: true,
    duration: 1000,
  });
  document.querySelectorAll('img').forEach((img) => img.addEventListener('load', () => AOS.refresh()));

  new Swiper('.main-slider', {
    loop: true,
  });
});

