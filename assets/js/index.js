$(document).ready(function () {
    $('li.active').removeClass('active');
    $('a[href="' + location.pathname + '"]').closest('li').addClass('active');
});



var owl = $("#owl");
    owl.owlCarousel({
        items: 3,
        navigation: true,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        dots: false,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        navText: [
            "<i class='fa fa-chevron-left nav'></i>",
            "<i class='fa fa-chevron-right nav'></i>"
        ],
        responsiveClass:true,
        responsive:{
            400:{
                items:1,
                nav:true
            },
            768:{
                items:1,
                nav:true
            },
            1200:{
                items:2,
                nav:false
            },
            1600:{
                items:3,
                nav:true,
                loop:false
            },
        },    
    });
    $(".play").on("click", function () {
        owl.trigger("play.owl.autoplay", [5000]);
    });
    $(".stop").on("click", function () {
        owl.trigger("stop.owl.autoplay");

    });

    var owl2 = $("#partner");
    owl2.owlCarousel({
        items: 5,
        navigation: true,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        dots: false,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        navText: [
            "<i class='fa fa-chevron-left nav'></i>",
            "<i class='fa fa-chevron-right nav'></i>"
        ],
        responsiveClass:true,
        responsive:{
            400: {
                items:1,
                nav:true
            },
            600: {
                items:1,
                nav:true
            },
            768:{
                items:2,
                nav:true
            },
            1200:{
                items:3,
                nav:false
            },
            1600:{
                items:5,
                nav:true,
                loop:false
            },
        },
    });
    $(".play").on("click", function () {
        owl.trigger("play.owl.autoplay", [5000]);
    });
    $(".stop").on("click", function () {
        owl.trigger("stop.owl.autoplay");

    });

const nav = document.querySelector('.Navbar');
window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('navbar-active');
    } else {
        nav.classList.remove('navbar-active');
    }
}