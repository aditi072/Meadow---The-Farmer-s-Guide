(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    
    // // Header carousel
    // $(".header-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1500,
    //     items: 1,
    //     dots: true,
    //     loop: true,
    //     nav : true,
    //     navText : [
    //         '<i class="bi bi-chevron-left"></i>',
    //         '<i class="bi bi-chevron-right"></i>'
    //     ]
    // });

})(jQuery);