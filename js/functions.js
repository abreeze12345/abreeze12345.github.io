//Initialize AnimateOnScroll
$(document).ready(function () {
    AOS.init({
        duration: 500
    });
});

//Andrew Header Animation
$(window).on("load", function() {
    $(".hidden").removeClass("hidden");
    $(".hidden").addClass("animated");
    $("#name").addClass("fadeIn");
    $("#top-line").addClass("fadeIn");
    $("#bottom-line").addClass("fadeIn");
    $("#left-nav").addClass("fadeIn");
    $("#right-nav").addClass("fadeIn");
});

$(window).on("load", function() {
    $("")
})