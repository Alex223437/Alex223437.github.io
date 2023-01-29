const teamSlider = new Swiper('.team-carousel', {
  loop: true,
  slidesPerView: 3,
  speed: 1000,
  centeredSlides: true
});

const productsSlider = new Swiper('.products-carousel', {
  loop: true,
  effect: "flip",
  slidesPerView: 1,
  speed: 1000,
  centeredSlides: true,
  navigation: {
    nextEl: ".products-carousel__button_next",
    prevEl: ".products-carousel__button_prev",
  },
});