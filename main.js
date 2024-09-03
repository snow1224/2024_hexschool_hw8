import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";

/**
 * 首頁header swiper
 */
var headerSwiper = new Swiper(".headerSwiper", {
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        modifier: 1,
        slideShadows: true,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 40,
    centeredSlides: true,
  });
