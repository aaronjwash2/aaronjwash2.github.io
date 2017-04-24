//Close Drawer Icon
$(function() {

    $('.close-drawer').click(function() {
        $('body').removeClass('showing-drawer');
        $('body').removeClass('disableScroll');
        $('body').addClass('enableScroll');
        $('#overlay').removeClass('bodOverlay');
    });


    $('.overlayClose').click(function() {
        $('body').removeClass('showing-drawer');
        $('body').removeClass('disableScroll');
        $('body').addClass('enableScroll');
        $('#overlay').removeClass('bodOverlay');
        $('.drawer').removeClass('open');
    });


    $('.drawer-trigger').click(function() {
        $('body').addClass('showing-drawer');
        $('#overlay').addClass('bodOverlay');
        $('body').removeClass('enableScroll');
        $('body').addClass('disableScroll');
    });


    $('.gallery-drawer-trigger').click(function() {
        $('body').addClass('showing-drawer');
        $('body').removeClass('enableScroll');
        $('body').addClass('disableScroll');
    });

});



//If Drawer is open, scrolling page STOPS
$(function () {
    if ($('body').hasClass('showing-drawer')) {
        $('main').addClass('frozen');
    }
    else {
        $('main').removeClass('frozen');
    }
});


//Disable Scrolling until page loads
$(function () {
    $('body').removeClass('enableScroll');
    $('body').addClass('disableScroll');
});


//Button to return current object position
/*$(document).ready(function(){
    $("button").click(function(){
        var x = $(".img-lg2").position();
        alert("Top: " + x.top + " Left: " + x.left);
    });
});*/





//*******************************//
//********** Variables **********//
//*******************************//

var vidH = $('.banner').height();
var halfBannerH = $('.banner').height() / 2;
var partBannerH = $('.banner').height() / 3;
var quartBannerH = $('.banner').height() / 4;
var fifthBannerH = $('.banner').height() / 5;

var quoteThird = $('.quote-section').height() / 3;
var quoteQuart = $('.quote-section').height() / 4;
var quoteFifth = $('.quote-section').height() / 5;





//****************************//
//********** Navbar **********//
//****************************//


//Initially Logo is hidden
/*$(document).ready(function () {
    $('.AJWlogo').addClass('logo-gone');
});*/


//Navbar shows when scroll past banner
$(function () {
    //$(window).scroll(function () {
    function navbannerShow () {
        if ($(window).scrollTop() >= halfBannerH) {
            if (!$('.Navbar').hasClass('showNav')) {
                $('.Navbar').addClass('showNav'); 
            }
        }
        else {
            if ($('.Navbar').hasClass('showNav')) {
                $('.Navbar').removeClass('showNav');
            }
        }
    }//);

    /*$(window).scrollTop(function () {
        if ($(window).scrollTop() >= halfBannerH) {
            if (!$('.Navbar').hasClass('showNav')) {
                $('.Navbar').addClass('showNav'); 
            }
        }
        else {
            if ($('.Navbar').hasClass('showNav')) {
                $('.Navbar').removeClass('showNav');
            }
        }
    });*/

    navbannerShow();
    $(window).scroll(navbannerShow);
    $(window).scrollTop(navbannerShow);
});




//Navbar box-shadow
$(function () {
    if ($('#content-Nav').hasClass('open')) {
        $('.Nav-drawer').removeClass('noShadow');
    }
    else {
        $('#content-Nav').addClass('noShadow');
    }
});




//Dropdown submenus
$(function () {

    //Video Dropdown
    $('.vidFa').click(function () {
        if ($(this).hasClass('fa-arrow-circle-down')) {
            $(this).removeClass('fa-arrow-circle-down');
            $(this).addClass('fa-times-circle');
            $('.vidDrop').addClass('openDropdown');
        }
        else if ($(this).hasClass('fa-times-circle')) {
            $(this).removeClass('fa-times-circle');
            $(this).addClass('fa-arrow-circle-down');
            $('.vidDrop').removeClass('openDropdown');
        }
    });

    //Graphic Design Dropdown
    $('.graphicFa').click(function () {
        if ($(this).hasClass('fa-arrow-circle-down')) {
            $(this).removeClass('fa-arrow-circle-down');
            $(this).addClass('fa-times-circle');
            $('.graphicDrop').addClass('openDropdown');
        }
        else if ($(this).hasClass('fa-times-circle')) {
            $(this).removeClass('fa-times-circle');
            $(this).addClass('fa-arrow-circle-down');
            $('.graphicDrop').removeClass('openDropdown');
        }
    });

    //Studio Art Dropdown
    $('.studioFa').click(function () {
        if ($(this).hasClass('fa-arrow-circle-down')) {
            $(this).removeClass('fa-arrow-circle-down');
            $(this).addClass('fa-times-circle');
            $('.studioDrop').addClass('openDropdown');
        }
        else if ($(this).hasClass('fa-times-circle')) {
            $(this).removeClass('fa-times-circle');
            $(this).addClass('fa-arrow-circle-down');
            $('.studioDrop').removeClass('openDropdown');
        }
    });

    //Drawing Dropdown
    $('.drawFa').click(function () {
        if ($(this).hasClass('fa-arrow-circle-down')) {
            $(this).removeClass('fa-arrow-circle-down');
            $(this).addClass('fa-times-circle');
            $('.drawDrop').addClass('openDropdown');
        }
        else if ($(this).hasClass('fa-times-circle')) {
            $(this).removeClass('fa-times-circle');
            $(this).addClass('fa-arrow-circle-down');
            $('.drawDrop').removeClass('openDropdown');
        }
    });

    //Music Dropdown
    $('.musicFa').click(function () {
        if ($(this).hasClass('fa-arrow-circle-down')) {
            $(this).removeClass('fa-arrow-circle-down');
            $(this).addClass('fa-times-circle');
            $('.musicDrop').addClass('openDropdown');
        }
        else if ($(this).hasClass('fa-times-circle')) {
            $(this).removeClass('fa-times-circle');
            $(this).addClass('fa-arrow-circle-down');
            $('.musicDrop').removeClass('openDropdown');
        }
    });
});






//****************************//
//********** Banner **********//
//****************************//


//Animate Banner Text and Underline
$(window).on('load', function () {

    $('body').removeClass('disableScroll');
    $('body').addClass('enableScroll');
    $('.loading').addClass('hide');

    setTimeout(function () {
        $('.banner').find('h2').removeClass('hiding');
        $('.banner').find('h2').addClass('inUp', 300);
    }, 300);

    setTimeout(function () {
        $('.underline').addClass('widen', 400);
        $('.Maya-undrlne').removeClass('widen');
        $('.Maya-undrlne').addClass('Maya-widen', 400);
    }, 600);
});






//********************************//
//********** Page Icons **********//
//********************************//


//Icons and Icon Text fade in
$(function () {
    //$(window).scroll(function () {
    function iconFade () {
        if ($(window).width() >= 992) {
            if ($(window).scrollTop() >= fifthBannerH) {
                //Icon 1
                setTimeout(function () {
                    $('.icon1').removeClass('iconsHiding');
                    $('.icon1').addClass('iconsUp', 300);
                }, 300);

                //Icon Text 1
                setTimeout(function () {
                    $('.icon1').find('h2').removeClass('iconsTextHiding');
                    $('.icon1').find('h2').addClass('iconsTextUp', 300);
                }, 500);

                //Icon 2
                setTimeout(function () {
                    $('.icon2').removeClass('iconsHiding');
                    $('.icon2').addClass('iconsUp', 300);
                }, 800);

                //Icon Text 2
                setTimeout(function () {
                    $('.icon2').find('h2').removeClass('iconsTextHiding');
                    $('.icon2').find('h2').addClass('iconsTextUp', 300);
                }, 1000);

                //Icon 3
                setTimeout(function () {
                    $('.icon3').removeClass('iconsHiding');
                    $('.icon3').addClass('iconsUp', 300);
                }, 1300);

                //Icon Text 3
                setTimeout(function () {
                    $('.icon3').find('h2').removeClass('iconsTextHiding');
                    $('.icon3').find('h2').addClass('iconsTextUp', 300);
                }, 1500);
            }   
        } 
        else {
            $('.icon1').removeClass('iconsHiding');
            $('.icon1').find('h2').removeClass('iconsTextHiding');
            $('.icon2').removeClass('iconsHiding');
            $('.icon2').find('h2').removeClass('iconsTextHiding');
            $('.icon3').removeClass('iconsHiding');
            $('.icon3').find('h2').removeClass('iconsTextHiding');
        }
    }

    iconFade();
    $(window).scroll(iconFade);
    $(window).scrollTop(iconFade);
    $(window).resize(iconFade);
});






//*****************************//
//********** Gallery **********//
//*****************************//


//Gallery Accordion - Medium Down 1
/*$(function () {
    $('.Ai-link-4').mouseover(function () {
        //$('.img-lg2').addClass('lg-squash-dwn');
        $('.img-md-dwn1').addClass('md-expd-dwn');
    });
    $('.Ai-link-4').mouseout(function () {
        //$('.img-lg2').removeClass('lg-squash-dwn');
        $('.img-md-dwn1').removeClass('md-expd-dwn');
    });
});*/




//********** Gallery Drawer **********//

//Initially hide all stuff
$(function() {
    $('.gallery-img').addClass('hidingGalImg');
    $('.gal-cont').addClass('hidingGalCntnt');
});


//Left Button
$(function () {
    $('.gal-left-arr').click(function(){
        /*if ($('.img1').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img10').removeClass('hidingGalImg');
            $('.img10').addClass('currentGalImg');
            $('.content10').removeClass('hidingGalCntnt');
            $('.content10').addClass('currentGalCntnt');
        }*/

        if ($('.img2').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img1').removeClass('hidingGalImg');
            $('.img1').addClass('currentGalImg');
            $('.content1').removeClass('hidingGalCntnt');
            $('.content1').addClass('currentGalCntnt');

            $('.gal-left-arr').hide();
            $('.gal-right-arr').show();
        }

        if ($('.img3').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img2').removeClass('hidingGalImg');
            $('.img2').addClass('currentGalImg');
            $('.content2').removeClass('hidingGalCntnt');
            $('.content2').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }

        if ($('.img4').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img3').removeClass('hidingGalImg');
            $('.img3').addClass('currentGalImg');
            $('.content3').removeClass('hidingGalCntnt');
            $('.content3').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }

        if ($('.img5').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img4').removeClass('hidingGalImg');
            $('.img4').addClass('currentGalImg');
            $('.content4').removeClass('hidingGalCntnt');
            $('.content4').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }

        if ($('.img6').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img5').removeClass('hidingGalImg');
            $('.img5').addClass('currentGalImg');
            $('.content5').removeClass('hidingGalCntnt');
            $('.content5').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }

        if ($('.img7').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img6').removeClass('hidingGalImg');
            $('.img6').addClass('currentGalImg');
            $('.content6').removeClass('hidingGalCntnt');
            $('.content6').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }

        if ($('.img8').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img7').removeClass('hidingGalImg');
            $('.img7').addClass('currentGalImg');
            $('.content7').removeClass('hidingGalCntnt');
            $('.content7').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }

        if ($('.img9').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img8').removeClass('hidingGalImg');
            $('.img8').addClass('currentGalImg');
            $('.content8').removeClass('hidingGalCntnt');
            $('.content8').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }

        if ($('.img10').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img9').removeClass('hidingGalImg');
            $('.img9').addClass('currentGalImg');
            $('.content9').removeClass('hidingGalCntnt');
            $('.content9').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }
    });
});



//Right Button 1-9
$(function () {
    $('.gal-right-arr').click(function(){

        /*if ($('.img10').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img1').removeClass('hidingGalImg');
            $('.img1').addClass('currentGalImg');
            $('.content1').removeClass('hidingGalCntnt');
            $('.content1').addClass('currentGalCntnt');
        }*/

        if ($('.img9').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img10').removeClass('hidingGalImg');
            $('.img10').addClass('currentGalImg');
            $('.content10').removeClass('hidingGalCntnt');
            $('.content10').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').hide();
        }

        if ($('.img8').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img9').removeClass('hidingGalImg');
            $('.img9').addClass('currentGalImg');
            $('.content9').removeClass('hidingGalCntnt');
            $('.content9').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }

        if ($('.img7').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img8').removeClass('hidingGalImg');
            $('.img8').addClass('currentGalImg');
            $('.content8').removeClass('hidingGalCntnt');
            $('.content8').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }

        if ($('.img6').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img7').removeClass('hidingGalImg');
            $('.img7').addClass('currentGalImg');
            $('.content7').removeClass('hidingGalCntnt');
            $('.content7').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }

        if ($('.img5').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img6').removeClass('hidingGalImg');
            $('.img6').addClass('currentGalImg');
            $('.content6').removeClass('hidingGalCntnt');
            $('.content6').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }

        if ($('.img4').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img5').removeClass('hidingGalImg');
            $('.img5').addClass('currentGalImg');
            $('.content5').removeClass('hidingGalCntnt');
            $('.content5').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }

        if ($('.img3').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img4').removeClass('hidingGalImg');
            $('.img4').addClass('currentGalImg');
            $('.content4').removeClass('hidingGalCntnt');
            $('.content4').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }

        if ($('.img2').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img3').removeClass('hidingGalImg');
            $('.img3').addClass('currentGalImg');
            $('.content3').removeClass('hidingGalCntnt');
            $('.content3').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }

        if ($('.img1').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img2').removeClass('hidingGalImg');
            $('.img2').addClass('currentGalImg');
            $('.content2').removeClass('hidingGalCntnt');
            $('.content2').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }

    });
});





//Image 1
$(function() {
    $('.gal-link1').click(function(){
        $('.gallery-img').removeClass('currentGalImg');
        $('.gallery-img').addClass('hidingGalImg');
        $('.gal-cont').removeClass('currentGalCntnt');
        $('.gal-cont').addClass('hidingGalCntnt');

        $('.img1').removeClass('hidingGalImg');
        $('.img1').addClass('currentGalImg');
        $('.content1').removeClass('hidingGalCntnt');
        $('.content1').addClass('currentGalCntnt');

        $('.gal-left-arr').hide();
        $('.gal-right-arr').show();
    });
});


//Image 2
$(function() {
    $('.gal-link2').click(function(){
        $('.gallery-img').removeClass('currentGalImg');
        $('.gallery-img').addClass('hidingGalImg');
        $('.gal-cont').removeClass('currentGalCntnt');
        $('.gal-cont').addClass('hidingGalCntnt');

        $('.img2').removeClass('hidingGalImg');
        $('.img2').addClass('currentGalImg');
        $('.content2').removeClass('hidingGalCntnt');
        $('.content2').addClass('currentGalCntnt');

        $('.gal-left-arr').show();
        $('.gal-right-arr').show();
    }); 
});


//Image 3
$(function() {
    $('.gal-link3').click(function(){
        $('.gallery-img').removeClass('currentGalImg');
        $('.gallery-img').addClass('hidingGalImg');
        $('.gal-cont').removeClass('currentGalCntnt');
        $('.gal-cont').addClass('hidingGalCntnt');

        $('.img3').removeClass('hidingGalImg');
        $('.img3').addClass('currentGalImg');
        $('.content3').removeClass('hidingGalCntnt');
        $('.content3').addClass('currentGalCntnt');

        $('.gal-left-arr').show();
        $('.gal-right-arr').show();
    });
});


//Image 4
$(function() {
    $('.gal-link4').click(function(){
        $('.gallery-img').removeClass('currentGalImg');
        $('.gallery-img').addClass('hidingGalImg');
        $('.gal-cont').removeClass('currentGalCntnt');
        $('.gal-cont').addClass('hidingGalCntnt');

        $('.img4').removeClass('hidingGalImg');
        $('.img4').addClass('currentGalImg');
        $('.content4').removeClass('hidingGalCntnt');
        $('.content4').addClass('currentGalCntnt');

        $('.gal-left-arr').show();
        $('.gal-right-arr').show();
    });
});


//Image 5
$(function() {
    $('.gal-link5').click(function(){
        $('.gallery-img').removeClass('currentGalImg');
        $('.gallery-img').addClass('hidingGalImg');
        $('.gal-cont').removeClass('currentGalCntnt');
        $('.gal-cont').addClass('hidingGalCntnt');

        $('.img5').removeClass('hidingGalImg');
        $('.img5').addClass('currentGalImg');
        $('.content5').removeClass('hidingGalCntnt');
        $('.content5').addClass('currentGalCntnt');

        $('.gal-left-arr').show();
        $('.gal-right-arr').show();
    });
});


//Image 6
$(function() {
    $('.gal-link6').click(function(){
        $('.gallery-img').removeClass('currentGalImg');
        $('.gallery-img').addClass('hidingGalImg');
        $('.gal-cont').removeClass('currentGalCntnt');
        $('.gal-cont').addClass('hidingGalCntnt');

        $('.img6').removeClass('hidingGalImg');
        $('.img6').addClass('currentGalImg');
        $('.content6').removeClass('hidingGalCntnt');
        $('.content6').addClass('currentGalCntnt');

        $('.gal-left-arr').show();
        $('.gal-right-arr').show();
    });
});


//Image 7
$(function() {
    $('.gal-link7').click(function(){
        $('.gallery-img').removeClass('currentGalImg');
        $('.gallery-img').addClass('hidingGalImg');
        $('.gal-cont').removeClass('currentGalCntnt');
        $('.gal-cont').addClass('hidingGalCntnt');

        $('.img7').removeClass('hidingGalImg');
        $('.img7').addClass('currentGalImg');
        $('.content7').removeClass('hidingGalCntnt');
        $('.content7').addClass('currentGalCntnt');

        $('.gal-left-arr').show();
        $('.gal-right-arr').show();
    });
});


//Image 8
$(function() {
    $('.gal-link8').click(function(){
        $('.gallery-img').removeClass('currentGalImg');
        $('.gallery-img').addClass('hidingGalImg');
        $('.gal-cont').removeClass('currentGalCntnt');
        $('.gal-cont').addClass('hidingGalCntnt');

        $('.img8').removeClass('hidingGalImg');
        $('.img8').addClass('currentGalImg');
        $('.content8').removeClass('hidingGalCntnt');
        $('.content8').addClass('currentGalCntnt');

        $('.gal-left-arr').show();
        $('.gal-right-arr').show();
    });
});


//Image 9
$(function() {
    $('.gal-link9').click(function(){
        $('.gallery-img').removeClass('currentGalImg');
        $('.gallery-img').addClass('hidingGalImg');
        $('.gal-cont').removeClass('currentGalCntnt');
        $('.gal-cont').addClass('hidingGalCntnt');

        $('.img9').removeClass('hidingGalImg');
        $('.img9').addClass('currentGalImg');
        $('.content9').removeClass('hidingGalCntnt');
        $('.content9').addClass('currentGalCntnt');

        $('.gal-left-arr').show();
        $('.gal-right-arr').show();
    });
});


//Image 10
$(function() {
    $('.gal-link10').click(function(){
        $('.gallery-img').removeClass('currentGalImg');
        $('.gallery-img').addClass('hidingGalImg');
        $('.gal-cont').removeClass('currentGalCntnt');
        $('.gal-cont').addClass('hidingGalCntnt');

        $('.img10').removeClass('hidingGalImg');
        $('.img10').addClass('currentGalImg');
        $('.content10').removeClass('hidingGalCntnt');
        $('.content10').addClass('currentGalCntnt');

        $('.gal-left-arr').show();
        $('.gal-right-arr').hide();
    });
});



//Gallery Arrows appear
$(function() {

    $('.gallery-drawer-trigger').click(function () {
        setTimeout(function () {
            $('.gal-left-arr').removeClass('invisible', 350);
        }, 350);

        setTimeout(function () {
            $('.gal-right-arr').removeClass('invisible', 350);
        }, 350);
    });

    $('.close-drawer').click(function () {
        $('.gal-left-arr').addClass('invisible');
        $('.gal-right-arr').addClass('invisible');
    });

});



//********** Gallery Squares Responsiveness **********//

$(document).ready(function () {
    function galSquares() {
        if ($(window).width() <= 767) {
            $('.gal-img').removeClass('img-lg1');
            $('.gal-img').removeClass('gal-gray-2L');
            $('.gal-img').removeClass('img-md-dwn1');
            $('.gal-img').removeClass('img-md-dwn2');
            $('.gal-img').removeClass('img-lg2');
            $('.gal-img').removeClass('gal-gray-l');
            $('.gal-img').removeClass('gal-gray-r');
            $('.gal-img').removeClass('img-md-up');
            $('.gal-img').removeClass('img-md-bth');
            $('.gal-img').removeClass('img-lg3');
            $('.gal-img').removeClass('img-sm-rght');
            $('.gal-img').removeClass('img-sm-bth');
            $('.gal-img').removeClass('img-xs-lft');
        }
    }

    galSquares();
    $(window).resize(galSquares);
});






//*******************************//
//********** Home Page **********//
//*******************************//


//Banner Image for Mobile
$(document).ready(function () {
    function bannerImages() {
        var imgOptions = ['banImg1', 'banImg2', 'banImg3'];
        var bannerImg = imgOptions[Math.floor(Math.random(Date.now()) * imgOptions.length)];

        if ($(window).width() <= 991) {
            $('#homeVid').addClass('hidingGalImg');
            $('.vidBanner').removeClass('hidingGalImg');
            $('.vidBanner').addClass(bannerImg);
        }
        else {
            $('#homeVid').removeClass('hidingGalImg');
            $('.vidBanner').removeClass(bannerImg);
            $('.vidBanner').addClass('hidingGalImg');
        }
    }

    bannerImages();
    $(window).resize(bannerImages);
});



//Quote Animate
$(document).ready(function () {
    function quoteAnimate () {
        if ($(window).width() >= 992) {
            if ($(window).scrollTop() >= partBannerH) {
                $('.aaron-img').removeClass('invisible');
                $('.aaron-img').addClass('quoteRightImg', 300);
                $('.aaron-quote').removeClass('invisible');

                //Everyone is born a 
                setTimeout(function () {
                    $('.everyone').removeClass('invisible');
                    $('.everyone').addClass('quoteRight', 300);
                }, 300);

                //Creative
                setTimeout(function () {
                    $('.creative').removeClass('invisible');
                    $('.creative').addClass('quoteRight', 300);
                }, 600);

                //Being,
                setTimeout(function () {
                    $('.being').removeClass('invisible');
                    $('.being').addClass('quoteRight', 300);
                }, 900);

                //We simply utilize
                setTimeout(function () {
                    $('.utilize').removeClass('invisible');
                    $('.utilize').addClass('quoteRight', 300);
                }, 1500);

                //Different
                setTimeout(function () {
                    $('.diff').removeClass('invisible');
                    $('.diff').addClass('quoteRight', 300);
                }, 1800);

                //Mediums
                setTimeout(function () {
                    $('.mediums').removeClass('invisible');
                    $('.mediums').addClass('quoteRight', 300);
                }, 2100);
            }
        }
        else {
            $('.aaron-img').removeClass('invisible');
            $('.aaron-quote').removeClass('invisible');
            $('.everyone').removeClass('invisible');
            $('.creative').removeClass('invisible');
            $('.being').removeClass('invisible');
            $('.utilize').removeClass('invisible');
            $('.diff').removeClass('invisible');
            $('.mediums').removeClass('invisible');
        }
    }

    quoteAnimate();
    $(window).scroll(quoteAnimate);
    $(window).scrollTop(quoteAnimate);
    $(window).resize(quoteAnimate);
});



//Columns Animate
$(function () {
    function columAnimate () {
        if ($(window).width() >= 992) {
            if ($(window).scrollTop() >= vidH) {
                $('.about-clm').addClass('appear', 200);

                setTimeout (function () {
                    $('.vid-clm').addClass('appear', 200);
                }, 100);

                setTimeout (function () {
                    $('.graphic-clm').delay(400).addClass('appear', 200);
                }, 200);

                setTimeout (function () {
                    $('.photo-clm').delay(600).addClass('appear', 200);
                }, 300);

                setTimeout (function () {
                    $('.studio-clm').delay(800).addClass('appear', 200);
                }, 400);

                setTimeout (function () {
                    $('.music-clm').delay(1000).addClass('appear', 200);
                }, 500);

                setTimeout (function () {
                    $('.clm').addClass('moveUp');
                }, 700);
            }
        }
    }

    columAnimate();
    $(window).scroll(columAnimate);
    $(window).scrollTop(columAnimate);
    $(window).resize(columAnimate);
});



//Columns Accordion
$(document).ready(function () {
    function columAccord () {
        if ($(window).width() >= 992) {
            $('.clm-link').mouseover(function () {
                $('.clm').removeClass('wide-clm');
                $('.clm').addClass('squash-clm');
                $(this).find('.clm').removeClass('squash-clm');
                $(this).find('.clm').addClass('wide-clm');
            });
            $('.clm-link').mouseout(function () {
                $('.clm').removeClass('wide-clm');
                $('.clm').removeClass('squash-clm');
            });
        }
        else {
            $('.clm-link').mouseover(function () {
                $('.clm').removeClass('wide-clm');
                $('.clm').removeClass('squash-clm');
            });
            $('.clm-link').mouseout(function () {
                $('.clm').removeClass('wide-clm');
                $('.clm').removeClass('squash-clm');
            });
        }
    }

    columAccord();
    $(window).resize(columAccord);
});






//***************************************//
//********** Illustration Page **********//
//***************************************//


//Left Button 2-8
$(function () {
    $('.Illustr-left-arr').click(function(){

        if ($('.img1').hasClass('currentGalImg')) {
            $('.gal-left-arr').hide();
            $('.gal-right-arr').show();
        }

        if ($('.img8').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img2').removeClass('hidingGalImg');
            $('.img2').addClass('currentGalImg');
            $('.content2').removeClass('hidingGalCntnt');
            $('.content2').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }

    });
});


//Right Button 1-7
$(function () {
    $('.Illustr-right-arr').click(function(){

        if ($('.img8').hasClass('currentGalImg')) {
            $('.gal-left-arr').show();
            $('.gal-right-arr').hide();
        }

        if ($('.img1').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img2').removeClass('hidingGalImg');
            $('.img2').addClass('currentGalImg');
            $('.content2').removeClass('hidingGalCntnt');
            $('.content2').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }

    });
});


//Image 1
$(function() {
    $('.gal-link1').click(function(){
        $('.gallery-img').removeClass('currentGalImg');
        $('.gallery-img').addClass('hidingGalImg');
        $('.gal-cont').removeClass('currentGalCntnt');
        $('.gal-cont').addClass('hidingGalCntnt');

        $('.img1').removeClass('hidingGalImg');
        $('.img1').addClass('currentGalImg');
        $('.content1').removeClass('hidingGalCntnt');
        $('.content1').addClass('currentGalCntnt');

        $('.Illustr-left-arr').hide();
        $('.gal-right-arr').show();
    });
});


//Image 8
$(function() {
    $('.gal-link8').click(function(){
        $('.gallery-img').removeClass('currentGalImg');
        $('.gallery-img').addClass('hidingGalImg');
        $('.gal-cont').removeClass('currentGalCntnt');
        $('.gal-cont').addClass('hidingGalCntnt');

        $('.img8').removeClass('hidingGalImg');
        $('.img8').addClass('currentGalImg');
        $('.content8').removeClass('hidingGalCntnt');
        $('.content8').addClass('currentGalCntnt');

        $('.gal-left-arr').show();
        $('.Illustr-right-arr').hide();
    });
});





//***********************************//
//********** Painting Page **********//
//***********************************//


//Left Button 2-8
$(function () {
    $('.Paint-left-arr').click(function(){

        if ($('.img1').hasClass('currentGalImg')) {
            $('.gal-left-arr').hide();
            $('.gal-right-arr').show();
        }

        if ($('.img8').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img2').removeClass('hidingGalImg');
            $('.img2').addClass('currentGalImg');
            $('.content2').removeClass('hidingGalCntnt');
            $('.content2').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }

    });
});


//Right Button 1-7
$(function () {
    $('.Paint-right-arr').click(function(){

        if ($('.img8').hasClass('currentGalImg')) {
            $('.gal-left-arr').show();
            $('.gal-right-arr').hide();
        }

        if ($('.img1').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img2').removeClass('hidingGalImg');
            $('.img2').addClass('currentGalImg');
            $('.content2').removeClass('hidingGalCntnt');
            $('.content2').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }

    });
});


//Image 1
$(function() {
    $('.gal-link1').click(function(){
        $('.gallery-img').removeClass('currentGalImg');
        $('.gallery-img').addClass('hidingGalImg');
        $('.gal-cont').removeClass('currentGalCntnt');
        $('.gal-cont').addClass('hidingGalCntnt');

        $('.img1').removeClass('hidingGalImg');
        $('.img1').addClass('currentGalImg');
        $('.content1').removeClass('hidingGalCntnt');
        $('.content1').addClass('currentGalCntnt');

        $('.Paint-left-arr').hide();
        $('.gal-right-arr').show();
    });
});


//Image 8
$(function() {
    $('.gal-link8').click(function(){
        $('.gallery-img').removeClass('currentGalImg');
        $('.gallery-img').addClass('hidingGalImg');
        $('.gal-cont').removeClass('currentGalCntnt');
        $('.gal-cont').addClass('hidingGalCntnt');

        $('.img8').removeClass('hidingGalImg');
        $('.img8').addClass('currentGalImg');
        $('.content8').removeClass('hidingGalCntnt');
        $('.content8').addClass('currentGalCntnt');

        $('.gal-left-arr').show();
        $('.Paint-right-arr').hide();
    });
});





//**************************************//
//********** Printmaking Page **********//
//**************************************//


//Left Button 2-7
$(function () {
    $('.Print-left-arr').click(function(){

        if ($('.img1').hasClass('currentGalImg')) {
            $('.gal-left-arr').hide();
            $('.gal-right-arr').show();
        }

        if ($('.img7').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img2').removeClass('hidingGalImg');
            $('.img2').addClass('currentGalImg');
            $('.content2').removeClass('hidingGalCntnt');
            $('.content2').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }

    });
});


//Right Button 1-6
$(function () {
    $('.Print-right-arr').click(function(){

        if ($('.img7').hasClass('currentGalImg')) {
            $('.gal-left-arr').show();
            $('.gal-right-arr').hide();
        }

        if ($('.img1').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img2').removeClass('hidingGalImg');
            $('.img2').addClass('currentGalImg');
            $('.content2').removeClass('hidingGalCntnt');
            $('.content2').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }

    });
});


//Image 1
$(function() {
    $('.gal-link1').click(function(){
        $('.gallery-img').removeClass('currentGalImg');
        $('.gallery-img').addClass('hidingGalImg');
        $('.gal-cont').removeClass('currentGalCntnt');
        $('.gal-cont').addClass('hidingGalCntnt');

        $('.img1').removeClass('hidingGalImg');
        $('.img1').addClass('currentGalImg');
        $('.content1').removeClass('hidingGalCntnt');
        $('.content1').addClass('currentGalCntnt');

        $('.Print-left-arr').hide();
        $('.gal-right-arr').show();
    });
});


//Image 7
$(function() {
    $('.gal-link7').click(function(){
        $('.gallery-img').removeClass('currentGalImg');
        $('.gallery-img').addClass('hidingGalImg');
        $('.gal-cont').removeClass('currentGalCntnt');
        $('.gal-cont').addClass('hidingGalCntnt');

        $('.img7').removeClass('hidingGalImg');
        $('.img7').addClass('currentGalImg');
        $('.content8').removeClass('hidingGalCntnt');
        $('.content8').addClass('currentGalCntnt');

        $('.gal-left-arr').show();
        $('.Print-right-arr').hide();
    });
});





//*********************************//
//********** Finale Page **********//
//*********************************//


//Left Button 2-3
$(function () {
    $('.finale-left-arr').click(function(){

        if ($('.img1').hasClass('currentGalImg')) {
            $('.gal-left-arr').hide();
            $('.gal-right-arr').show();
        }

        if ($('.img3').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img2').removeClass('hidingGalImg');
            $('.img2').addClass('currentGalImg');
            $('.content2').removeClass('hidingGalCntnt');
            $('.content2').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }

    });
});




//Right Button 1-2
$(function () {
    $('.finale-right-arr').click(function(){

        if ($('.img3').hasClass('currentGalImg')) {
            $('.gal-left-arr').show();
            $('.gal-right-arr').hide();
        }

        if ($('.img1').hasClass('currentGalImg')) {
            $('.gallery-img').removeClass('currentGalImg');
            $('.gallery-img').addClass('hidingGalImg');
            $('.gal-cont').removeClass('currentGalCntnt');
            $('.gal-cont').addClass('hidingGalCntnt');

            $('.img2').removeClass('hidingGalImg');
            $('.img2').addClass('currentGalImg');
            $('.content2').removeClass('hidingGalCntnt');
            $('.content2').addClass('currentGalCntnt');

            $('.gal-left-arr').show();
            $('.gal-right-arr').show();
        }

    });
});




//Image 1
$(function() {
    $('.gal-link1').click(function(){
        $('.gallery-img').removeClass('currentGalImg');
        $('.gallery-img').addClass('hidingGalImg');
        $('.gal-cont').removeClass('currentGalCntnt');
        $('.gal-cont').addClass('hidingGalCntnt');

        $('.img1').removeClass('hidingGalImg');
        $('.img1').addClass('currentGalImg');
        $('.content1').removeClass('hidingGalCntnt');
        $('.content1').addClass('currentGalCntnt');

        $('.finale-left-arr').hide();
        $('.gal-right-arr').show();
    });
});


//Image 2
$(function() {
    $('.gal-link2').click(function(){
        $('.gallery-img').removeClass('currentGalImg');
        $('.gallery-img').addClass('hidingGalImg');
        $('.gal-cont').removeClass('currentGalCntnt');
        $('.gal-cont').addClass('hidingGalCntnt');

        $('.img2').removeClass('hidingGalImg');
        $('.img2').addClass('currentGalImg');
        $('.content2').removeClass('hidingGalCntnt');
        $('.content2').addClass('currentGalCntnt');

        $('.gal-left-arr').show();
        $('.gal-right-arr').show();
    }); 
});


//Image 3
$(function() {
    $('.gal-link3').click(function(){
        $('.gallery-img').removeClass('currentGalImg');
        $('.gallery-img').addClass('hidingGalImg');
        $('.gal-cont').removeClass('currentGalCntnt');
        $('.gal-cont').addClass('hidingGalCntnt');

        $('.img3').removeClass('hidingGalImg');
        $('.img3').addClass('currentGalImg');
        $('.content3').removeClass('hidingGalCntnt');
        $('.content3').addClass('currentGalCntnt');

        $('.gal-left-arr').show();
        $('.finale-right-arr').hide();
    });
});
