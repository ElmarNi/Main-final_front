"use strict";

// change height images of slider when window resize
$(document).ready(function () {
  SliderImageHeightIconButtonResizer();
  SliderPrevNextButtonsLeftRightChanger();
  $(window).resize(function () {
    SliderImageHeightIconButtonResizer();
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

  function SliderImageHeightIconButtonResizer() {
    if (window.innerWidth < 992) {
      $("#slider img").height(400);
      $("#slider .vip-icon").css("top", "5%");
      $("#slider .car-details").css({
        "font-size": "17px",
        "width": "100px",
        "height": "50px",
        "line-height": "50px"
      });
    } else if (window.innerWidth >= 992) {
      $("#slider img").height(800);
      $("#slider .vip-icon").css("top", "18%");
      $("#slider .car-details").css({
        "font-size": "20px",
        "width": "120px",
        "height": "70px",
        "line-height": "70px"
      });
    }
  }
}); //small screens sidebar menu

$(document).ready(function () {
  $(window).resize(function () {
    if (window.innerWidth > 992) {
      $("body").css("overflow-y", "unset");

      if ($("#small-screens #sidebar-btn").hasClass("collapsed")) {
        $("#small-screens #sidebar-btn").removeClass("collapsed");
        $("#small-screens #sidebar-btn").children().removeClass("w-100");
        $("#small-screens #sidebar").removeClass("visible");
      }
    }
  });
  $("#small-screens #sidebar-btn").click(function () {
    $("#small-screens #sidebar-btn").toggleClass("collapsed");
    $(this).children().toggleClass("w-100");
    $("#small-screens #sidebar").toggleClass("visible");

    if ($(this).hasClass("collapsed")) {
      $("body").css("overflow-y", "hidden");
    } else {
      $("body").css("overflow-y", "unset");
    }
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
        "z-index": "9999999",
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
}); //login page & register page & contact page line span width changer

$(document).ready(function () {
  $("#login .sign-in-input").focus(function () {
    LoginAndRegisterSpanLineWidthChanger("login", $(this));
  });
  $("#register .sign-in-input").focus(function () {
    LoginAndRegisterSpanLineWidthChanger("register", $(this));
  });
  $("#contact .sign-in-input").focus(function () {
    LoginAndRegisterSpanLineWidthChanger("contact", $(this));
  });

  function LoginAndRegisterSpanLineWidthChanger(section, input) {
    $("#".concat(section, " .line")).css("width", "0%");
    $(input).next().css("width", "100%");
  }
}); //detail gallery

$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
}); //car details tab changer and gallery img height resizer

$(document).ready(function () {
  $("#single-car-details .tabs a").click(function (e) {
    e.preventDefault();
    var dataId = $(this).parent().attr("data-id");
    $("#single-car-details .tabs li.active").removeClass("active");
    $(this).parent().addClass("active");
    $("#single-car-details .tab-contents .tab-content.active").removeClass("active");
    $("#single-car-details .tab-contents .tab-content[data-id=\"".concat(dataId, "\"]")).addClass("active");

    if (dataId == 3) {
      $(".detail-gallery img").each(function () {
        $(this).css("height", "auto");
      });
      PostGalleryImagesHeightResizer(0, "single-car-details");
    }
  }); //single post gallery and car details gallery height resizer

  PostGalleryImagesHeightResizer(0, "post");
  PostGalleryImagesHeightResizer(0, "single-car-details");
  $(window).resize(function () {
    $(".detail-gallery img").each(function () {
      $(this).css("height", "auto");
    });
    PostGalleryImagesHeightResizer(0, "post");
    PostGalleryImagesHeightResizer(0, "single-car-details");
  });

  function PostGalleryImagesHeightResizer(height, sectionId) {
    $("#".concat(sectionId, " .detail-gallery img")).each(function () {
      if ($(this).height() > height) {
        height = $(this).height();
      }
    });
    $("#".concat(sectionId, " .detail-gallery img")).each(function () {
      $(this).height(height);
    });
  }
});