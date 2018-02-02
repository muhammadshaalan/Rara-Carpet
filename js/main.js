/*global $*/
/*global console */
$(document).ready(function () {
    "use strict";
//Nice Scroll
    $("body").niceScroll({
        cursorwidth: "10",
        cursorcolor: "#33D1C5"
    });

//Carousel
    $('.carousel').carousel({
        interval: 3000
    });

//Fixed Navbar
    $(window).scroll(function () {
        var nav = $('.navbar');
        if ($(window).scrollTop() >= nav.height()) {
            nav.addClass('scrolled');
        } else {
            nav.removeClass('scrolled');
        }
    });
    
//Edit
    $('.navbar-inverse .navbar-toggle').click(function () {
        $('.navbar').addClass('scrolled');
    });
    
//Scroll Header
    $('.collapse li a').click(function () {
        $('html, body').animate({
            scrollTop : $('#' + $(this).data('value')).offset().top
        }, 1000);
    });
    
    $('.collapse li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

//Dropdown Menu    
    $('.dropdown-toggle').mouseover(function () {
        $('.dropdown-menu').fadeIn(300);
    });
    $('.dropdown').mouseleave(function () {
        $('.dropdown-menu').fadeOut(300);
    });
    
    $('.panel-heading').click(function () {
        $(this).addClass('active').siblings().removeClass("active");
    });
    
//Button Scroll Top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $("#scroll-top").show();
        } else {
            $("#scroll-top").hide();
        }
    });
    $("#scroll-top").click(function () {
        $('html,body').animate({scrollTop : 0}, 1000);
    });
        

});
