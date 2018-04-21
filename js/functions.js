//Initialize AnimateOnScroll
$(document).ready(function () {
    AOS.init({
        duration: 500
    });
});

//hide elements on start
$(document).ready(function() {
    $(".header-animation").hide();
});

//Andrew Header Animation
$(window).on("load", function () {
    $(".header-animation").show();
    $(".header-animation").addClass("fadeIn");
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