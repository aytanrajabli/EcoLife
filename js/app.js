$('.pro-sliders').owlCarousel({
    loop: true,
    margin: 10,
    items: 4,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
$('.one-sliders').owlCarousel({
    items: 1,
})
$(".hot-slider").owlCarousel({
        nav: false,
        dots: false,
        autoplay: true,
        items: 1
    })
    // ? ? ? ? ?
    // $(".product ").slick({
    //     dots: true,
    //     speed: 300,
    //     slidesToShow: 2,
    //     slidesToScroll: 3,
    //     autoplay: false,
    // });
    // $('.filtering').slick({
    //     slidesToShow: 2,
    //     slidesToScroll: 4,
    //     autoplay: false,
    //     dots: true,
    //     speed: 300,
    // });
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});