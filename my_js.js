$(document).ready(function() {

            $(window).scroll(function () {
                //if you hard code, then use console
                //.log to determine when you want the 
                //nav bar to stick.  
                console.log($(window).scrollTop())
                if ($(window).scrollTop() > ($(window).height()-50)) {
                    $('.fixed-nav-bar').addClass('navbar-top');
                }
                if ($(window).scrollTop() < ($(window).height()-50)) {
                    $('.fixed-nav-bar').removeClass('navbar-top');
                }
            });
        });
