(function(d) {
  var config = {
    kitId: 'uzs2myr',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

$(function () {
  AOS.init({
    once: true,
    duration: 800,
  });
  document.querySelectorAll('img').forEach((img) => img.addEventListener('load', () => AOS.refresh()));

  $('.bs__slider').slick({
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: '25%',
    cssEase: 'linear',
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 15000,
    touchMove: false,
    responsive: [{
      breakpoint: 767,
      settings: {
        centerPadding: '15%',
        speed: 10000,
      }
    }]
  });
});
