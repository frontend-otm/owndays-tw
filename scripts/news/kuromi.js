function hasWebP() {
  var rv = $.Deferred(), img = new Image();
  img.onload = function() { rv.resolve(); };
  img.onerror = function() { rv.reject(); };
  img.src = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAIAAkA4JaQAA3AA/vshgAA=";
  return rv.promise();
}

hasWebP().then(function() {
  $('.l-kuromi').addClass('');
}, function() {
  $('.l-kuromi').addClass('no-webp');
});

(function(d) {
  var config = {
    kitId: 'sgy7yyu',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

$(function(){
  AOS.init({
    once: true,
    duration: 600,
    offset: 200
  });

  document.querySelectorAll('img')
    .forEach((img) =>
      img.addEventListener('load', () =>
        AOS.refresh()
      )
  );

  new Swiper(".swiper-lineup", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 14,
    loop: true,
    pagination: {
        el: ".lineup__slider-pagination",
        clickable: true,
    },
    breakpoints: {
        1400: {
          spaceBetween: 29,
        },
    },
  });
});

(function (d) {
  var config = {
      kitId: 'mtj2wof',
      scriptTimeout: 3000,
      async: true
  },
      h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
})(document);

(function(d) {
  var config = {
    kitId: 'hdk2aki',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);
