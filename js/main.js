// change height images of slider when window resize
$(document).ready(function () {
    SliderImageHeightIconButtonResizer();
    SliderPrevNextButtonsLeftRightChanger()
    $(window).resize(function () {
        SliderImageHeightIconButtonResizer();
        SliderPrevNextButtonsLeftRightChanger();
    });
    function SliderPrevNextButtonsLeftRightChanger() {
        if (window.innerWidth < 600) {
            $("#slider .carousel-control-prev").css("left", "0px")
            $("#slider .carousel-control-next").css("right", "0px")
        }
        else {
            $("#slider .carousel-control-prev").css("left", "50px")
            $("#slider .carousel-control-next").css("right", "50px")
        }
    }
    function SliderImageHeightIconButtonResizer() {
        if (window.innerWidth < 992) {
            $("#slider img").height(400);
            $("#slider .vip-icon").css("top", "5%")
            $("#slider .car-details").css({
                "font-size": "17px",
                "width": "100px",
                "height": "50px",
                "line-height": "50px"
            })
        }
        else if (window.innerWidth >= 992) {
            $("#slider img").height(800);
            $("#slider .vip-icon").css("top", "18%")
            $("#slider .car-details").css({
                "font-size": "20px",
                "width": "120px",
                "height": "70px",
                "line-height": "70px"
            })
        }
    }
});

//small screens sidebar menu
$(document).ready(function () {
    $("#small-screens #sidebar-btn").click(function () {
        $("#small-screens #sidebar-btn").toggleClass("collapsed")
        $(this).children().toggleClass("w-100")
        $("#small-screens #sidebar").toggleClass("visible");
    })
});

//menu position changer
$(document).ready(function () {
    LargeScreenMenuPositionChanger();
    document.addEventListener("scroll", function () {
        LargeScreenMenuPositionChanger();
    })
    function LargeScreenMenuPositionChanger() {
        if (document.scrollingElement.scrollTop > 42) {
            $("#large-screens .menubar").css({
                "position": "fixed",
                "width": "100%",
                "top": "0",
                "background-color": "rgba(17, 46, 59, 0.9)"
            })
        }
        else {
            $("#large-screens .menubar").css({
                "position": "unset",
                "background-color": "unset"
            })
        }
    }
});

//preloader
$(document).ready(function () {
    $("#preloader").hide();
})

//login page line span width changer
$(document).ready(function () {
    $("#login .sign-in-input").focus(function () {
        LoginAndRegisterSpanLineWidthChanger("login", $(this));
    })
    $("#register .sign-in-input").focus(function () {
        LoginAndRegisterSpanLineWidthChanger("register", $(this));
    })
    function LoginAndRegisterSpanLineWidthChanger(section, input) {
        $(`#${section} .line`).css("width", "0%")
        $(input).next().css("width", "100%")
    }
});

$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

$(document).ready(function () {
    let maxHeight = 0;
    PostGalleryImagesHeightResizer(maxHeight);
    $(window).resize(function () { 
        maxHeight = 0
        $("#post .post-gallery img").each(function(){
            $(this).css("height","auto" )
        })
        PostGalleryImagesHeightResizer(maxHeight);
    });
    function PostGalleryImagesHeightResizer(height){
        $("#post .post-gallery img").each(function () {
            if ($(this).height() > height) {
                height = $(this).height()
            }
        });
        $("#post .post-gallery img").each(function () {
            $(this).height(height)
        });
    }
});