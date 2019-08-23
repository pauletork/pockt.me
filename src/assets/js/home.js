$(window).on('load', function () {
    // initialization of HSMegaMenu component
    $('.js-mega-menu').HSMegaMenu({
        event: 'hover',
        pageContainer: $('.container'),
        breakpoint: 767.98,
        hideTimeOut: 0
    });

    // initialization of svg injector module
    $.HSCore.components.HSSVGIngector.init('.js-svg-injector');
});

$(document).on('ready', function () {
    // initialization of header
    $.HSCore.components.HSHeader.init($('#header'));

    // initialization of text animation (typing)
    var typed = new Typed(".u-text-animation.u-text-animation--typing", {
        strings: ["ideal", "fastest", "convenient"],
        typeSpeed: 60,
        loop: true,
        backSpeed: 25,
        backDelay: 1500
    });

    // initialization of fancybox
    $.HSCore.components.HSFancyBox.init('.js-fancybox');

    // initialization of go to
    $.HSCore.components.HSGoTo.init('.js-go-to');
});