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
});
