'use strict';

$(document).ready(() => {

    // adding smooth scroll in header navigation menu

    $('a[href^="#"').click(e => {
        e.preventDefault();
        let href = $(e.target).closest('a').attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1000);
        return false;
    });

    // adding falling fields in header

    $('.tools__item').click(function () {
        $(this).next('form').toggleClass('active');

        if ($(this).next('form').hasClass('active')) {
            $('.header').addClass('active');
            $('.header__burg-img').removeClass('active')
                .parent().next('.menu').removeClass('active');
            $('.tools__item').not($(this))
                .next('form').removeClass('active');
        } else {
            $('.header').removeClass('active')
        };
    });

    // adding burger menu show / hide

    $('.header__burg').click(() => {
        $('.header__burg-img').toggleClass('active');
        $('.header__menu').toggleClass('active');

        if ($('.header__menu').hasClass('active')) {
            $('.header').addClass('active');
            $('.tools__item').next('form').removeClass('active');
        } else {
            $('.header').removeClass('active')
        };
    });

    // adding burger menu hide when .menu__item is clicked

    $('.header__menu > a').click(e => {
        e.preventDefault();
        $('.header').removeClass('active');
        $('.header__menu').removeClass('active');
        $('.header__burg-img').removeClass('active');
        $('.tools__item').next('form').removeClass('active');
    })

    // adding tabs in about section

    $('.chapter__tab').click(function () {
        $(this).addClass('active')
            .next('.chapter__body').addClass('on-display');

        // next line sets const height to all tab content parts
        $(this).next('.chapter__body').outerHeight($('.chapter__body.on-display').outerHeight());

        $('.chapter__tab').not($(this)).removeClass('active')
            .next('.chapter__body').removeClass('on-display');
    });

    // adding sliding accordeon in FAQ section

    $('.block__title').click(function () {
        $(this).toggleClass('open')
            .next('.block__text').slideToggle(500);
        $('.block__title').not($(this)).removeClass('open')
            .next('.block__text').slideUp(500);
    });

    // adding slider in products section

    $('.slider-shop').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // adding slider in testimonials section

    $('.slider-review').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear'
    });

    // adding animation to social icon buttons

    $('.social__item, .intro__goto-next').hover(function () {
        $(this).toggleClass('animate__pulse');
    });

});