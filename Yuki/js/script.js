const teamSlider = new Swiper('.team-carousel', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1000,
  centeredSlides: true,
  breakpoints: {
    374:{
      slidesPerView: 2,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 3
    }
  }
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