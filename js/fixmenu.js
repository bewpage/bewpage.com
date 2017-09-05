document.addEventListener("DOMContentLoaded", function() {


    var nav = $('.header__main-nav');
    var bgNav = $('.header__menu-fix');
    var mobileNav = $('#nav-icon1');
    var dropDownMenu = $('.header__responsive-menu');
    var hamburgerAnimation = $('#nav-icon1');
    var hamburgerNav = $('.nav-icon');



//function to have current width of the browser window

    function adjustWidth() {
        var parentwidth = $(".test").width();
        // console.log('szerokosc ' + parentwidth);
        $(".header__mobile").width(parentwidth);
        // $(".header__main-nav__brand").width(parentwidth);
        nav.width(parentwidth);
    };

    $(window).resize(
        function() {
            adjustWidth();
        });

//drop down menu
    mobileNav.on('click', function(e) {
        dropDownMenu.toggleClass('expand');
        mobileNav.toggleClass('toggle-nav-click');
        hamburgerAnimation.toggleClass('open')
        e.preventDefault();
    });

    // hide nav bar when scroll
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = nav.outerHeight();
    console.log(navbarHeight);

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        console.log('this is st= ' + st);
        // console.log('this is lastscrolltop= ' + lastScrollTop);


        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            //$('nav').removeClass('header__main-nav');
            $('nav').removeClass('f-nav-fix').addClass('nav-up');
            bgNav.removeClass('b-nav-fix');
            hamburgerNav.removeClass('b-nav-fix');
            dropDownMenu.removeClass('expand');
            hamburgerAnimation.removeClass('open');

            //scroll up
        } else if ((st + $(window).height() < $(document).height())){
            $('nav').removeClass('nav-up').addClass('f-nav-fix');
            bgNav.addClass('b-nav-fix');
            $('.toggle-nav-click').css('background', '#000000'); //color for hamburger
        }

        lastScrollTop = st;

        //scroll position top
        if (st === 0){
            $('nav').removeClass('nav-up').removeClass('f-nav-fix').addClass('header__main-nav');
            bgNav.removeClass('b-nav-fix');
            hamburgerNav.removeClass('b-nav-fix');
            hamburgerAnimation.attr('id','nav-icon1');
            $('.toggle-nav-click').css('background', 'none'); //bg color for hamburger
        }
    };


});
