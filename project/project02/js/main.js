$(document).ready(function () {


    $(".dim").hide();

    $(".ham").click(function () {
        $(".gnb_wrap").animate({ left: '0' });
        $(".dim").fadeIn();
    });
    $(".gnb_close").click(function () {
        $(".gnb_wrap").animate({ left: '-100%' });
        $(".dim").fadeOut();
    });



    const gift_txt = new Swiper('.gift_txt', {


        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
    });

    const gift_img = new Swiper('.gift_img', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
    });

    gift_txt.controller.control = gift_img;
    gift_img.controller.control = gift_txt;



});