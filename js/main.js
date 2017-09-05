document.addEventListener("DOMContentLoaded", function() {

        applyNavigation();

    });


    /* NAVIGATION FUNCTIONS */
    function applyNavigation() {
        applyClickEvent();
    }


    function applyClickEvent() {
        $('a[href*="#"]').on('click', function (e) {
            e.preventDefault();

            if ($($.attr(this, 'href')).length > 0) {
                $('html, body').animate(
                    {
                        scrollTop: $($.attr(this, 'href')).offset().top
                    }, 400);
            }
            return false;
        });
    }
