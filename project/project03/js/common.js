$(document).ready(function () {


    // 상단메뉴
    $(".depth2,.depth2_bg").hide();

    $(".gnb>li").hover(function () {
        $("#header").toggleClass("on");
        $(".depth2_bg").stop().fadeToggle();
        $(this).children(".depth2").stop().fadeToggle();
    });




    // 전체메뉴
    $(".all_menu").hide();

    $(".sitemap").click(function () {
        $(".all_menu").fadeIn();
    });
    $(".all_close").click(function () {
        $(".all_menu").fadeOut();
    });



    // 모바일 메뉴    
    $(".ham").click(function () {
        $(".mgnb_wrap").animate({
            left: '0'
        });
    });

    $(".mgnb_close").click(function () {
        $(".mgnb_wrap").animate({
            left: '100%'
        });
    });



    //모바일 2차메뉴
    $(".mdepth2").hide();

    $(".mgnb > li").click(function () {
        $(this).children(".mdepth2").slideDown();
        $(this).siblings().children(".mdepth2").slideUp();
    });



    // 언어설정메뉴
    $('.language ul').hide();
    $('.language').click(function () {
        $('.language span').toggleClass('active');
        $(this).children('ul').slideToggle();
    });



    // 메인 슬라이드
    const mv = new Swiper('.mv', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $('.mv_play').hide();
    $('.mv_pause').click(function () {
        mv.autoplay.stop();
        $('.mv_pause').hide().siblings().show();
    });
    $('.mv_play').click(function () {
        mv.autoplay.start();
        $('.mv_play').hide().siblings().show();
    });



    // 베스트 슬라이드
    const bs = new Swiper(".bs", {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        speed: 500,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });

    $('.bs_play').hide();
    $('.bs_pause').click(function () {
        bs.autoplay.stop();
        $('.bs_pause').hide().siblings().show();
    });
    $('.bs_play').click(function () {
        bs.autoplay.start();
        $('.bs_play').hide().siblings().show();
    });



});
