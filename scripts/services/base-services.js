$(function () {
  AOS.init({
    once: true,
    duration: 600,
  });

  document.querySelectorAll('img').forEach((img) =>
    img.addEventListener('load', () =>
      AOS.refresh()
    )
  );
});
