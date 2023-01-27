const slider = tns({
  container: '.carousel__slider',
  items: 1,
  slideBy: 'page',
  speed: 500,
  // autoplay: true,
  // autoplayButtonOutput: false,
  controls: false,
  nav: false,
  mouseDrag: true
  // autoplayHoverPause: true
  });

  document.querySelector('.carousel__button_prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.carousel__button_next').addEventListener('click', function () {
    slider.goTo('next');
});