$(document).ready(function () {
  $(".single-item").slick({
    infinite: true,
    speed: 1500,
    cssEase: "linear",
    loop: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
  });

  // one page nav
  $("#nav").onePageNav({
    currentClass: "current",
    changeHash: false,
  });

  $("#nav").slicknav({
    label: "",
    duration: 1000,
  });
});

// sticky menu js
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 20) {
    $(".header-area").addClass("sticky");
  } else {
    $(".header-area").removeClass("sticky");
  }

  //  slick nav js
  // $("#nav").slicknav({
  //   label: "",
  //   duration: 1000,
  // });
});
