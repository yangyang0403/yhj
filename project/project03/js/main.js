$(document).ready(function () {

    // 메인 슬라이드
    const mv = new Swiper('.mv', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1500,
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
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            dragSize: 200,
            draggable: true,
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



    // 탭메뉴
    $('.new_list li').click(function () {
        let listNum = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.new_img li').eq(listNum).addClass('active').siblings().removeClass('active');
    });



    // 아코디언 배너
    $("#family ul li:nth-child(1)").addClass("active");
    $("#family ul li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });



});