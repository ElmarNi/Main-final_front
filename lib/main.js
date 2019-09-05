"use strict";

// change height images of slider when window resize
$(document).ready(function () {
  SliderImageHeightResizer();
  SliderPrevNextButtonsLeftRightChanger();
  $(window).resize(function () {
    SliderImageHeightResizer();
    SliderPrevNextButtonsLeftRightChanger();
  });

  function SliderPrevNextButtonsLeftRightChanger() {
    if (window.innerWidth < 600) {
      $("#slider .carousel-control-prev").css("left", "0px");
      $("#slider .carousel-control-next").css("right", "0px");
    } else {
      $("#slider .carousel-control-prev").css("left", "50px");
      $("#slider .carousel-control-next").css("right", "50px");
    }
  }

  function SliderImageHeightResizer() {
    if (window.innerWidth < 992) {
      $("#slider img").height(400);
      $("#slider .owl-nav").css('transform', 'translateY(-50%)');
    } else if (window.innerWidth >= 992) {
      $("#slider img").height(800);
      $("#slider .owl-nav").css('transform', 'translateY(0%)');
    }
  }
}); //small screens sidebar menu

$(document).ready(function () {
  $("#small-screens #sidebar-btn").click(function () {
    $("#small-screens #sidebar-btn").toggleClass("collapsed");
    $(this).children().toggleClass("w-100");
    $("#small-screens #sidebar").toggleClass("visible");
  });
}); //menu position changer

$(document).ready(function () {
  LargeScreenMenuPositionChanger();
  document.addEventListener("scroll", function () {
    LargeScreenMenuPositionChanger();
  });

  function LargeScreenMenuPositionChanger() {
    if (document.scrollingElement.scrollTop > 42) {
      $("#large-screens .menubar").css({
        "position": "fixed",
        "width": "100%",
        "top": "0",
        "background-color": "rgba(17, 46, 59, 0.9)"
      });
    } else {
      $("#large-screens .menubar").css({
        "position": "unset",
        "background-color": "unset"
      });
    }
  }
}); //preloader

$(document).ready(function () {
  $("#preloader").hide();
}); //login page line span width changer

$(document).ready(function () {
  $("#login .sign-in-input").focus(function () {
    LoginAndRegisterSpanLineWidthChanger("login", $(this));
  });
  $("#register .sign-in-input").focus(function () {
    LoginAndRegisterSpanLineWidthChanger("register", $(this));
  });

  function LoginAndRegisterSpanLineWidthChanger(section, input) {
    $("#".concat(section, " .line")).css("width", "0%");
    $(input).next().css("width", "100%");
  }
});