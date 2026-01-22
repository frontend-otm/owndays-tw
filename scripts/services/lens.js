$(function () {
  onClickAutoScroll();
  onLinkHash();
  onClickListLensCategory();
});

function getOffset(target) {
  const isMobile = window.innerWidth < 1024;

  const sectionOffset = isMobile ? 56 : 124;
  const baseOffset = isMobile ? 100 : 200;

  const sections = [
    '#limited',
    '#novelty',
    '#ribbon-mini',
    '#relax-mini',
    '#accessories'
  ];

  return sections.includes(target) ? sectionOffset : baseOffset;
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

function onClickListLensCategory () {
  var $menuItems = $('.lens__menu label'),
    $lensItems = $('.lens__p-lens-tab').not('[data-key="header"]');

  function setActive(category) {
    // active menu
    $menuItems.removeClass('active');
    $('#' + category).addClass('active');
  
    // stop animation + reset
    $lensItems.stop(true, true).removeClass('is-animated');
    $lensItems.hide();
  
    var $targets;
  
    if (category === 'all') {
      $targets = $lensItems;
    } else {
      $targets = $lensItems.filter(function () {
        var dataCategory = $(this).data('category');
        if (!dataCategory) return false;
        return dataCategory.toString().split(' ').includes(category);
      });
    }
  
    $targets.each(function (i) {
      $(this)
        .delay(i * 120)
        .fadeIn(300)
        .addClass('is-animated');
    });
  }

  // click event
  $menuItems.on('click', function (e) {
    e.preventDefault();

    var category = this.id;

    setActive(category);
  });
}
