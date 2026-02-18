// Complete working version with YouTube and full debugging
(function() {
    'use strict';

    // Debug helper
    const log = {
        success: (msg) => console.log('✓', msg),
        error: (msg) => console.error('❌', msg),
        warn: (msg) => console.warn('⚠️', msg),
        info: (msg) => console.log('ℹ️', msg)
    };

    // Check dependencies
    function checkDependencies() {
        const deps = {
            jquery: typeof jQuery !== 'undefined',
            slick: typeof jQuery !== 'undefined' && typeof jQuery.fn.slick !== 'undefined',
            bxSlider: typeof jQuery !== 'undefined' && typeof jQuery.fn.bxSlider !== 'undefined',
            fancybox: typeof jQuery !== 'undefined' && typeof jQuery.fancybox !== 'undefined',
            enllax: typeof jQuery !== 'undefined' && typeof jQuery.fn.enllax !== 'undefined'
        };

        log.info('Dependencies:');
        Object.keys(deps).forEach(key => {
            if (deps[key]) {
                log.success(`${key} loaded`);
            } else {
                log.warn(`${key} NOT loaded`);
            }
        });

        return deps;
    }

    // Utility functions
    const utils = {
        scrollToElement(href, speed = 700, offset = -150) {
            const target = href === "#" || href === "" ? document.documentElement : document.querySelector(href);
            if (!target) return;
            
            const position = target.getBoundingClientRect().top + window.pageYOffset + offset;
            window.scrollTo({
                top: position,
                behavior: 'smooth'
            });
        },

        replaceUrlParam(element, oldParam, newParam) {
            const currentHref = element.getAttribute('href');
            if (!currentHref) return;
            const newHref = currentHref.replace(new RegExp(oldParam, 'g'), newParam);
            element.setAttribute('href', newHref);
        },

        loadImage(img) {
            const dataSrc = img.getAttribute('data-src');
            if (dataSrc && (!img.src || img.src.indexOf('data:image') === 0 || img.src === window.location.href)) {
                img.src = dataSrc;
                img.removeAttribute('data-src');
                img.classList.remove('lazyload', 'lazyloading');
                img.classList.add('lazyloaded');
            }
        }
    };

    // Force load all images
    function forceLoadAllImages() {
        const allImages = document.querySelectorAll('img[data-src], img.lazyload, img.lazyloading');
        let count = 0;
        
        allImages.forEach(img => {
            utils.loadImage(img);
            count++;
        });

        if (count > 0) {
            log.success(`Force loaded ${count} images`);
        }
        return count;
    }

    // Initialize lazy loading
    function initLazyLoad() {
        const lazyImages = document.querySelectorAll('img.lazyload, img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        utils.loadImage(entry.target);
                        imageObserver.unobserve(entry.target);
                    }
                });
            }, {
                rootMargin: '150px 0px',
                threshold: 0.01
            });

            lazyImages.forEach(img => {
                if (!img.src || img.src === window.location.href) {
                    img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';
                }
                imageObserver.observe(img);
            });
        } else {
            lazyImages.forEach(utils.loadImage);
        }
    }

    // Initialize smooth scroll
    function initSmoothScroll() {
        $('a[href^="#"]').on('click', function(e) {
            e.preventDefault();
            const href = $(this).attr('href');
            utils.scrollToElement(href);
        });
        log.success('Smooth scroll initialized');
    }

    // Initialize Fancybox for YouTube
    function initFancybox() {
        if (typeof jQuery === 'undefined' || typeof jQuery.fancybox === 'undefined') {
            log.error('Fancybox not available - YouTube videos will not work');
            return;
        }

        try {
            // Initialize Fancybox for YouTube links
            $('[data-fancybox]').fancybox({
                youtube: {
                    controls: 1,
                    showinfo: 0,
                    rel: 0
                },
                vimeo: {
                    color: 'f00'
                }
            });

            // Initialize .play class links
            $('.play, a[href*="youtube.com"], a[href*="youtu.be"]').fancybox({
                maxWidth: 920,
                maxHeight: 515,
                width: 920,
                height: 515,
                aspectRatio: true,
                autoSize: false,
                closeClick: true,
                openEffect: 'fade',
                closeEffect: 'fade',
                helpers: {
                    media: true
                },
                youtube: {
                    controls: 1,
                    showinfo: 0
                },
                afterShow: function() {
                    log.success('Fancybox opened');
                },
                afterClose: function() {
                    log.info('Fancybox closed');
                }
            });

            log.success('Fancybox initialized for YouTube videos');
        } catch (e) {
            log.error('Fancybox initialization failed: ' + e.message);
        }
    }

    // Initialize lineup sliders (Slick)
    function initLineupSliders() {
        if (typeof jQuery === 'undefined' || typeof jQuery.fn.slick === 'undefined') {
            log.warn('Slick not available');
            return;
        }

        const $sliders = $('.l-poupelle__lineup-sku');
        if ($sliders.length === 0) {
            log.info('No lineup sliders found');
            return;
        }

        try {
            $sliders.slick({
                arrows: false,
                dots: true,
                lazyLoad: 'ondemand',
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        arrows: false,
                        pauseOnFocus: false,
                        pauseOnHover: false,
                        pauseOnDotsHover: false,
                    }
                }]
            });
            log.success(`Initialized ${$sliders.length} lineup sliders`);
        } catch (e) {
            log.error('Lineup sliders failed: ' + e.message);
        }
    }

    // Initialize modal slider
    function initModalSlider() {
        if (typeof jQuery === 'undefined' || typeof jQuery.fn.slick === 'undefined') return;

        $('#case-modal').on('shown.bs.modal', function() {
            $('.slick-wrap').animate({opacity: 1}, 200);
            
            const $modalSlider = $('#case-modal ul');
            if ($modalSlider.length && !$modalSlider.hasClass('slick-initialized')) {
                $modalSlider.slick({
                    dots: true,
                    arrows: true,
                    centerPadding: "5%",
                    lazyLoad: 'ondemand',
                    responsive: [{
                        breakpoint: 767,
                        settings: { arrows: false }
                    }]
                });
                log.success('Modal slider initialized');
            }
        });
    }

    // Initialize BxSlider
    function initBxSliders() {
        if (typeof jQuery === 'undefined') {
            log.error('jQuery not loaded - bxSlider cannot initialize');
            return;
        }

        if (typeof jQuery.fn.bxSlider === 'undefined') {
            log.error('bxSlider plugin not loaded');
            return;
        }

        log.info('Starting bxSlider initialization...');

        // Pre-load images
        const sliderIds = ['#PU2001T-0A', '#PU2002T-0A', '#PU2001T-0AS', '#PU2002T-0AS'];
        
        sliderIds.forEach(id => {
            const $container = $(id);
            if ($container.length) {
                $container.find('img[data-src], img.lazyload').each(function() {
                    utils.loadImage(this);
                });
            }
        });

        // Wait for images then initialize
        setTimeout(() => {
            const sliders = [
                {id: 'PU2001T-0A', pager: 'pager-pair', captionId: 'slidercaption', titleId: 'shoot-title'},
                {id: 'PU2002T-0A', pager: 'pager-pair2', captionId: 'slidercaption02', titleId: 'shoot-title02'},
                {id: 'PU2001T-0AS', pager: 'pager-pair3', captionId: 'slidercaption03', titleId: 'shoot-title03'},
                {id: 'PU2002T-0AS', pager: 'pager-pair4', captionId: 'slidercaption04', titleId: 'shoot-title04'}
            ];

            sliders.forEach(config => {
                const $element = $(`#${config.id}`);
                
                if ($element.length === 0) {
                    log.info(`${config.id} not found`);
                    return;
                }

                if ($element.parent().hasClass('bx-wrapper')) {
                    log.info(`${config.id} already initialized`);
                    return;
                }

                try {
                    $element.bxSlider({
                        auto: false,
                        controls: false,
                        touchEnabled: false,
                        oneToOneTouch: false,
                        preventDefaultSwipeX: false,
                        preventDefaultSwipeY: false,
                        pagerCustom: `#${config.pager}`,
                        mode: 'horizontal',
                        infiniteLoop: false,
                        hideControlOnEnd: true,
                        useCSS: true,
                        preloadImages: 'all',
                        
                        onSliderLoad: function() {
                            log.success(`${config.id} loaded`);
                            $element.find('img').each(function() {
                                utils.loadImage(this);
                            });
                        },
                        
                        onSlideAfter: function($slideElement) {
                            const $span = $slideElement.find('span');
                            const title = $span.attr('title');
                            const datasrc = $span.attr('datasrc');
                            
                            if (title) {
                                $(`#${config.captionId}`).html(title);
                            }
                            
                            if (datasrc) {
                                const split = datasrc.split('/')[1];
                                if (split) {
                                    $(`#${config.titleId} p`).html(split);
                                }
                            }

                            $slideElement.find('img').each(function() {
                                utils.loadImage(this);
                            });
                        }
                    });

                    log.success(`${config.id} initialized`);
                } catch (e) {
                    log.error(`${config.id} failed: ${e.message}`);
                }
            });
        }, 500);
    }

    // Initialize color switchers
    function initColorSwitchers() {
        const colorMappings = [
            {selector: '.item1-c1', targetClass: '.item1', oldSku: 'sku=5036', newSku: 'sku=5035'},
            {selector: '.item1-c2', targetClass: '.item1', oldSku: 'sku=5035', newSku: 'sku=5036'},
            {selector: '.item2-c1', targetClass: '.item2', oldSku: 'sku=5038', newSku: 'sku=5037'},
            {selector: '.item2-c2', targetClass: '.item2', oldSku: 'sku=5037', newSku: 'sku=5038'},
            {selector: '.item1-S-c1', targetClass: '.item1-S', oldSku: 'sku=5040', newSku: 'sku=5039'},
            {selector: '.item1-S-c2', targetClass: '.item1-S', oldSku: 'sku=5039', newSku: 'sku=5040'},
            {selector: '.item2-S-c1', targetClass: '.item2-S', oldSku: 'sku=5042', newSku: 'sku=5041'},
            {selector: '.item2-S-c2', targetClass: '.item2-S', oldSku: 'sku=5041', newSku: 'sku=5042'}
        ];

        let count = 0;
        colorMappings.forEach(mapping => {
            $(mapping.selector).on('click', function(e) {
                e.preventDefault();
                $(mapping.targetClass).each(function() {
                    utils.replaceUrlParam(this, mapping.oldSku, mapping.newSku);
                });
            });
            count += $(mapping.selector).length;
        });

        if (count > 0) {
            log.success(`Initialized ${count} color switchers`);
        }
    }

    // Initialize project slider
    function initProjectSlider() {
        if (typeof jQuery === 'undefined' || typeof jQuery.fn.slick === 'undefined') return;

        const $slider = $('.l-poupelle__project-slider');
        if ($slider.length === 0) return;

        try {
            $slider.slick({
                arrows: true,
                dots: true,
                slidesToShow: 3,
                cssEase: 'linear',
                pauseOnFocus: false,
                pauseOnHover: false,
                pauseOnDotsHover: false,
                lazyLoad: 'ondemand',
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                }]
            });
            log.success('Project slider initialized');
        } catch (e) {
            log.error('Project slider failed: ' + e.message);
        }
    }

    // Initialize parallax
    function initParallax() {
        if (typeof jQuery === 'undefined' || typeof jQuery.fn.enllax === 'undefined') {
            log.warn('Enllax not available');
            return;
        }

        try {
            $(window).enllax({type: 'background'});
            log.success('Parallax initialized');
        } catch (e) {
            log.error('Parallax failed: ' + e.message);
        }
    }

    // Main initialization
    function runInit() {
        console.log('\n%c=== 🚀 Poupelle Script Starting ===', 'color: #00ff00; font-size: 16px; font-weight: bold');
        
        // Check all dependencies
        const deps = checkDependencies();

        try {
            // Step 1: Images
            log.info('Step 1: Loading images...');
            forceLoadAllImages();
            initLazyLoad();
            
            // Step 2: Core components
            log.info('Step 2: Initializing core components...');
            initSmoothScroll();
            initFancybox(); // ← สำคัญสำหรับ YouTube!
            
            // Step 3: Sliders
            log.info('Step 3: Initializing sliders...');
            initLineupSliders();
            initModalSlider();
            initBxSliders();
            initProjectSlider();
            
            // Step 4: Other features
            log.info('Step 4: Initializing other features...');
            initColorSwitchers();
            initParallax();

            // Step 5: Final check
            setTimeout(() => {
                forceLoadAllImages();
                console.log('\n%c=== ✅ Initialization Complete ===', 'color: #00ff00; font-size: 16px; font-weight: bold\n');
            }, 1500);

        } catch (error) {
            log.error('Critical error: ' + error.message);
            console.error(error);
        }
    }

    // Start when ready
    function init() {
        if (typeof jQuery === 'undefined') {
            log.warn('Waiting for jQuery...');
            setTimeout(init, 100);
            return;
        }

        $(document).ready(function() {
            log.success('DOM Ready + jQuery loaded');
            runInit();
        });
    }

    // Start
    init();

})();
