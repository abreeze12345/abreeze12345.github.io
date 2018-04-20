//Initialize AnimateOnScroll
$(document).ready(function () {
    AOS.init();
});
$(document).ready(function () {
    if ($('body').hasClass('mobile')) {
        var viewportHeight = $(".ufo-row").outerHeight();
        $(".ufo-row").css({height: viewportHeight});
    }
});


//UFO animation
$(".navbar-row").hide();