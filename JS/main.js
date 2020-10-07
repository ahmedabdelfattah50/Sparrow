
$(window).on('load', function(){
    $('.page_over_lay .sk-folding-cube').fadeOut(1200, function(){
        $(this).parent().fadeOut(1500,function(){
            // decalre nice scroll 
//             $("body").niceScroll({
//                 cursorwidth: "7px",
//                 cursorborder: "1px solid #ddd",
//                 scrollspeed: 70,
//             });
            $('body').css({'overflow':'auto' , 'overflow-X':'hidden !important'});
            $(this).remove();
        });
    });
});

$(document).ready(function(){
    $('.vertical_nav_bars').click(function(){
        $(this).toggleClass('close');
        $('.nav_vertical_menu').toggleClass('vertical_menu_displayFlex');
        $('.nav_vertical_menu .nav-vertical-item').toggleClass('nav-vertical_activeItem');
    });

    // smoothscroll of the link
    $('a').smoothScroll();

    // navbar drop
    $(window).on('scroll' ,function(){
        if ($(window).scrollTop() >= 100) {
            $(".navbar").addClass("nav_scroll");
        } else {
            $(".navbar").removeClass("nav_scroll");
        }
    });
});

    
