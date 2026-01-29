$(function () {
  onClickAutoScroll();
  onLinkHash();
});

function getOffset(target) {
  const isMobile = window.innerWidth < 1024;
  const baseOffset = isMobile ? 56 : 124;

  return baseOffset;
}

function smoothScrollTo(target) {
  const $el = $(target);
  if (!$el.length) return;

  const offset = getOffset(target);

  $('html, body').animate(
    {
      scrollTop: $el.offset().top - offset
    },
    600,
    () => {
      if (typeof callback === 'function') callback();
    }
  );
}

function onClickAutoScroll() {
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    
    const hash = $(this).attr('href');
    const url = window.location.pathname + hash;
    history.pushState(null, null, url);

    smoothScrollTo(hash);
  });
}

function onLinkHash() {
  if (window.location.hash) {
    setTimeout(() => {
      smoothScrollTo(window.location.hash);
    }, 200);
  }
}
