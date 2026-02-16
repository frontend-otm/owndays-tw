/* =========================
   Utils
========================= */


if (window.lazySizes) {
  lazySizes.cfg.expand = 1000;
}

/* =========================
   Adobe Font
========================= */
(function (d) {
  var config = {
      kitId: 'hva4phf',
      scriptTimeout: 3000,
      async: true
    },
    h = d.documentElement,
    t = setTimeout(function () {
      h.className = h.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive';
    }, config.scriptTimeout),
    tk = d.createElement('script'),
    f = false,
    s = d.getElementsByTagName('script')[0];

  h.className += ' wf-loading';
  tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
  tk.async = true;
  tk.onload = tk.onreadystatechange = function () {
    var a = this.readyState;
    if (f || (a && a !== 'complete' && a !== 'loaded')) return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config);
    } catch (e) {}
  };
  s.parentNode.insertBefore(tk, s);
})(document);

/* =========================
   Ripple
========================= */
function initializeRipple(parentSelector, textureImg) {
  const parent = document.querySelector(
    parentSelector + ' .lineup__products-banner'
  );
  if (!parent || typeof RippleEffect === 'undefined') return null;

  return new RippleEffect({
    parent,
    texture: textureImg,
    intensity: 1.9,
    strength: 0.15,
    hover: false,
    waveSpeed: 0.01,
  });
}

function handleScrollAnimation(target, rippleEffect) {
  if (!rippleEffect) return;

  const $target = $(target).find('.lineup__products-banner');
  if (!$target.length) return;

  const targetTop = $target.offset().top;
  const screenHeight = window.innerHeight;

  if (
    $(window).scrollTop() >= targetTop - screenHeight + 400 &&
    !$target.hasClass('shown')
  ) {
    $target.addClass('shown');
    rippleEffect.start();

    setTimeout(() => rippleEffect.stop(), 700);

    setTimeout(() => {
      $(target).find('canvas').remove();
      $(target)
        .find('img')
        .each(function () {
          if (window.lazySizes) {
            lazySizes.loader.unveil(this);
          }
        });
    }, 1500);
  }
}

/* =========================
   bounceBtn
========================= */

function bounceBtn() {
  /* ===============================
   * Shared state
   * =============================== */
  const mouse = { x: 0, y: 0 };
  let tickCount = 0;

  /* ===============================
   * Bounce Button
   * =============================== */
  class BounceButton {
    constructor() {
      this.container = document.querySelector('.btn_bounce');
      this.button = document.querySelector('.btn_bounce__illus');
      this.selection = document.querySelector('.btn_bounce__selec');

      if (!this.button || !this.selection) return;

      this.resetState();
      this.init();
    }

    resetState() {
      this.angle = this.iAngle = this.sAngle = 0;
      this.moveX = this.moveY = 0;
      this.iMoveX = this.iMoveY = 0;
      this.sMoveX = this.sMoveY = 0;
      this.accelY = 0;
      this.x = this.y = this.radius = 0;
    }

    init() {
      this.button.style.transform = '';
      this.selection.style.transform = '';

      const rect = this.button.getBoundingClientRect();
      this.radius = rect.width / 2;
      this.x = rect.left + this.radius;
      this.y = rect.top + this.radius;
    }

    update(cnt) {
      let dx = this.x - mouse.x;
      let dy = this.y - mouse.y;

      // Idle animation
      if (Math.abs(dx) > 800 || Math.abs(dy) > 300) {
        dx = 30 - Math.abs((cnt % 200) / 500 - 0.5) * 80;
        dy = 20 - Math.abs(((75 + cnt) % 300) / 300 - 0.5) * 40;
      } else {
        dx *= -0.5;
        dy *= -0.5;
      }

      this.angle = (dx / (window.innerWidth / -2)) * 25;

      this.moveX = Math.max(-100, Math.min(100, dx));
      this.moveY = Math.max(-100, dy);

      // inertia
      this.iAngle += (this.angle - this.iAngle) * 0.04;
      this.iMoveX += (this.moveX - this.iMoveX) * 0.04;
      this.iMoveY += (this.moveY - this.iMoveY) * 0.04 + this.accelY;

      this.accelY *= 0.5;

      // selection follows slower
      this.sAngle += (this.angle - this.iAngle) * 0.03;
      this.sMoveX += (this.moveX - this.sMoveX) * 0.03;
      this.sMoveY += (this.moveY - this.sMoveY) * 0.03 + this.accelY;

      this.sMoveX = Math.max(
        this.iMoveX - 30,
        Math.min(this.iMoveX + 30, this.sMoveX)
      );
    }

    draw() {
      this.button.style.transform =
        `translate3d(${this.iMoveX}px, ${this.iMoveY}px, 0)`;

      this.selection.style.transform =
        `translate3d(${this.sMoveX}px, ${this.sMoveY}px, 0)`;
    }
  }

  /* ===============================
   * Falling Object
   * =============================== */
  class FallingObject {
    constructor() {
      this.create();
      this.init();
    }

    create() {
      this.el = document.createElement('div');
      this.el.className = `object object--${Math.ceil(Math.random() * 7)}`;
      this.el.style.zIndex = Math.random() > 0.5 ? 1 : 3;
      this.el.style.opacity = 0;

      document.querySelector('.objects')?.appendChild(this.el);
      requestAnimationFrame(() => (this.el.style.opacity = ''));
    }

    init() {
      const rect = this.el.getBoundingClientRect();
      this.absX = rect.left + rect.width / 2;
      this.absY = rect.top + rect.height / 2;

      this.accelY = 0.5;
      this.velX = this.velY = 0;
      this.moveX = 75;
      this.moveY = 0;
      this.rotate = 2;
      this.angle = 0;
      this.bounced = false;
      this.stop = false;
    }

    update(btn) {
      if (this.stop) return;

      const nextX = this.absX + this.moveX;
      const nextY = this.absY + this.moveY;

      const dx = nextX - btn.x - btn.iMoveX + btn.iAngle;
      const dy = nextY - btn.y - btn.iMoveY;
      const dist = Math.hypot(dx, dy);

      if (!this.bounced && dist <= btn.radius && this.velY > 0) {
        btn.accelY = this.velY * 0.75;

        const angle = Math.atan2(dy, dx) * 180 / Math.PI + 90;
        const strength = angle / 90;

        this.rotate = angle * 0.25;
        this.velY *= -0.35 - Math.random() * 0.7 * (1 - Math.abs(strength));
        this.velX = this.velY * -strength;

        if (Math.random() > 0.5) this.bounced = true;
      } else {
        this.accelY += 0.0025;
        this.velY += this.accelY;
      }

      this.velX *= 0.99;

      this.angle += this.rotate;
      this.moveX += this.velX;
      this.moveY += this.velY;

      if (this.moveY > 600) this.stop = true;
    }

    draw() {
      this.el.style.opacity = this.stop ? 0 : '';
      this.el.style.transform =
        `translate3d(${this.moveX}px, ${this.moveY}px, 0)`;
    }
  }

  /* ===============================
   * Events
   * =============================== */
  window.addEventListener('mousemove', e => {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
  });

  window.addEventListener('resize', () => btn.init());

  /* ===============================
   * Init
   * =============================== */
  const btn = new BounceButton();
  const objects = Array.from({ length: 3 }, () => new FallingObject());

  function animate() {
    objects.forEach(o => {
      o.update(btn);
      o.draw();
    });

    btn.update(tickCount);
    btn.draw();

    tickCount++;
    requestAnimationFrame(animate);
  }

  animate();
}


/* =========================
   Init
========================= */
$(function(){
  AOS.init({
    once: true,
    duration: 1000,
  });

  if (window.Swiper) {
    new Swiper('.lineup__products-slider .swiper', {
      slidesPerView: 'auto',
      spaceBetween: 15,
      loop: true,
      centeredSlides: true,
      breakpoints: {
        768: {
          centeredSlides: false,
          navigation: {
            nextEl: '.lineup__products-nav-button--next',
            prevEl: '.lineup__products-nav-button--prev',
          },
        },
      },
    });

    new Swiper('.case .swiper', {
      slidesPerView: 1,
      spaceBetween: 15,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }

  $('.lineup__products-color a').on('click', function () {
    const color = $(this).text();
    $(this)
      .closest('.lineup__products-slider-text')
      .find('.lineup__products-code small')
      .text(color);
  });

  bounceBtn();

  function getBodyWidth() {
    document.documentElement.style.setProperty('--body-w', document.body.clientWidth + 'px');
  }
  getBodyWidth();

  window.addEventListener('resize', function() {
    getBodyWidth();
  });
});

/* =========================
   Resize
========================= */
let lastWidth = $(window).width();

$(window).on('resize', function () {
  const w = $(window).width();
  if (w === lastWidth) return;
  lastWidth = w;

  getBodyWidth();

  if (w > 768) {
    bounceBtn();
  } else {
    $('.lineup__products-banner canvas').remove();
  }
});
