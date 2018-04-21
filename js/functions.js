//Initialize AnimateOnScroll
$(document).ready(function () {
    AOS.init({
        duration: 500
    });
});

//Andrew Header Animation
$(window).on("load", function () {
    $("#name").addClass("fadeIn");
    $("#top-line").addClass("fadeIn");
    $("#bottom-line").addClass("fadeIn");
    $("#left-nav").addClass("fadeIn");
    $("#right-nav").addClass("fadeIn");
});

//GLOW effects
$(window).on("load", function () {
    $(".glow").addGlow({
        radius: 200,
        textColor: "#492484",
        haloColor: "#492484",
        duration: 200
    });
    $(".navbar-section li").addGlow();
});

//PanelSwitches
$(document).ready(function() {
    $()
});