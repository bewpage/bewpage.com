document.addEventListener("DOMContentLoaded", function() {


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
                return eTop - $(window).scrollTop();
            });
        return eTop - $(window).scrollTop();
    }

    function checkClassExist(){
        var windowElement = positionElement($('#profile'));
        if(header.is('.nav-up') && windowElement === 0){
            return false;
        } else if(!header.is('.nav-up') && windowElement === 0){
            $('html, body').animate({scrollTop: '-=115px'}, 800);
            return true;
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
        dropDownMenu.toggleClass('expand');
        mobileNav.toggleClass('toggle-nav-click');
        mobileNav.toggleClass('open');
        // hamburgerAnimation.toggleClass('open');
        e.preventDefault();
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
                //$('nav').removeClass('header__main-nav');
                chevronIcon.addClass('scroll-up');
                header.addClass('nav-up');
                //bgNav.removeClass('b-nav-fix');
                //hamburgerNav.removeClass('b-nav-fix');
                dropDownMenu.removeClass('expand');
                mobileNav.removeClass('open');
                // hamburgerAnimation.removeClass('open');
                checkClassExist();
                // console.log()

                //scroll up
            } else if ((st + $(window).height() < $(document).height())){
                header.removeClass('nav-up');
                header.css('background', '#000000');
                $('.toggle-nav-click').css('background', '#000000'); //color for hamburger
                checkClassExist();
            }

            lastScrollTop = st;

            //scroll position top
            if (st === 0){
                header.css('background', 'none');
                hamburgerNav.removeClass('b-nav-fix');
                mobileNav.attr('id','nav-icon1');
                chevronIcon.removeClass('scroll-up');
                $('.toggle-nav-click').css('background', 'none'); //bg color for hamburger
            }
        }
    }



    $(window).ready(function () {
        chevronIcon.removeClass('scroll-up');
        navScroll();
    });



});
