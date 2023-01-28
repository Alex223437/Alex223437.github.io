const slider = tns({
  container: '.carousel__slider',
  items: 1,
  slideBy: 'page',
  speed: 500,
  controls: false,
  nav: false,
  mouseDrag: true,
  });

  document.querySelector('.carousel__button_prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.carousel__button_next').addEventListener('click', function () {
    slider.goTo('next');
});

const teamSlider = new Swiper('.team-carousel', {
  loop: true,
  slidesPerView: 3,
  speed: 1000,
  centeredSlides: true
});