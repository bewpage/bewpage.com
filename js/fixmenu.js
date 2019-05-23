document.addEventListener("DOMContentLoaded", function() {


    // color variable
    var menuBackgroungColor = '#222222';

    var header = $('header');
    var headerTest = $('header.section__header');
    var bgNav = $('.header__menu-fix');
    var mobileNav = $('#nav-icon1');
    var dropDownMenu = $('.header__responsive-menu');
    var hamburgerNav = $('.nav-icon');
    var chevronIcon = $('section.section__profile div.container a');


    function positionElement(element){
        var eTop = element.offset().top;
        $(window).scroll(function (){
                return Math.floor(eTop - $(window).scrollTop());
            });
        return Math.floor(eTop - $(window).scrollTop());
    }

    function checkClassExist(){
        var sectionProfile = positionElement($('#profile'));
        // console.log('element position', windowElement);
        if(header.is('.nav-up') && sectionProfile === 0){
            return false;
        } else if (!header.is('.nav-up') && sectionProfile === 0){
            if($(window).width() < 1025) {
                $('html, body').animate({scrollTop: '-=80px'}, 800);
                return true;
            }else {
                $('html, body').animate({scrollTop: '-=115px'}, 800);
                return true;
            }
        }
    }

//function to have current width of the browser window

    /*\function adjustWidth() {
        var parentwidth = $(".test").width();
        // console.log('szerokosc ' + parentwidth);
        $(".header__mobile").width(parentwidth);
        // $(".header__main-nav__brand").width(parentwidth);
        header.width(parentwidth);
    }

    $(window).resize(
        function() {
            adjustWidth();
        });*/

//drop down menu
    mobileNav.on('click', function(e) {
        e.preventDefault();

        var navIcon = $('#nav-icon1');
        var headerJumbotron = $('.header__jumbotron');
        dropDownMenu.toggleClass('expand');
        mobileNav.toggleClass('toggle-nav-click');
        mobileNav.toggleClass('open');
        if(positionElement(headerJumbotron) === 0 && navIcon.is('.open')){
            header.css('background', menuBackgroungColor);
        }else if(positionElement(headerJumbotron) === 0 && !navIcon.is('.open')){
            header.css('background', 'none');
        }
    });

    // hide nav bar when scroll
    function navScroll() {
        var didScroll = true;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = header.outerHeight();
        console.log(navbarHeight);

        $(window).scroll(function(){
            return didScroll = true;
        });

        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                return didScroll = false;
            }
        }, 250);



        function hasScrolled() {

            var st = $(this).scrollTop();

            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;

            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $('.chevron__container').css('display', 'block');
                chevronIcon.addClass('scroll-up');
                header.addClass('nav-up');
                dropDownMenu.removeClass('expand');
                mobileNav.removeClass('open');
                checkClassExist();

                //scroll up
            } else if ((st + $(window).height() < $(document).height())){
                header.removeClass('nav-up');
                header.css('background', menuBackgroungColor);
                $('.toggle-nav-click').css('background', menuBackgroungColor); //color for hamburger
                checkClassExist();
            }

            lastScrollTop = st;

            //scroll position top
            if (st === 0){
                header.css('background', 'none');
                hamburgerNav.removeClass('b-nav-fix');
                chevronIcon.removeClass('scroll-up');
                $('.chevron__container').css('display', 'none');
                $('.toggle-nav-click').css('background', 'none'); //bg color for hamburger
            }
        }
    }



    $(window).ready(function () {
        $('.chevron__container').css('display', 'none');
        navScroll();
    });



});
