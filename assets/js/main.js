$(function() {

    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)
    });

    /* Slider */
    var owl = $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        autoplay : true,
        autoplayTimeout: 5000,
        autoWidth:true,
        center: true
});

    /* Hide, show blocks */
    owl.on('changed.owl.carousel', function(event) {
        $('.slide-info').hide();
        $('.slide-info').eq(event.page.index).toggle();

        $('.slide-info2').hide();
        $('.slide-info2').eq(event.page.index).toggle();

        $('.slide-info3').hide();
        $('.slide-info3').eq(event.page.index).toggle();

        $('.slide-info4').hide();
        $('.slide-info4').eq(event.page.index).toggle();

        $('.slide-info5').hide();
        $('.slide-info5').eq(event.page.index).toggle();

        $('.slide-info6').hide();
        $('.slide-info6').eq(event.page.index).toggle();
    });

    /* Google events */

    $(".btn2").click(function () {
        ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'desktop',
            eventLabel: 'CTA'
        });

        ga('send', {
            hitType: 'event',
            eventCategory: 'ZvezdaPlus',
            eventAction: 'mobile',
            eventLabel: 'CTA'
        });
    });
})