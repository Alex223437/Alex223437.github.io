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

window.addEventListener("orientationchange", function() {
  location.reload() 
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var modalButtons = document.querySelectorAll('.open-modal'),
      overlay      = document.querySelector('#overlay-modal')
  modalButtons.forEach(function(item){
     item.addEventListener('click', function(e) {
        e.preventDefault();
        var modalId = this.getAttribute('data-modal'),
            modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
        modalElem.classList.add('modal_active');
        overlay.classList.add('overlay_active');
     }); 
  }); 
  overlay.forEach(function(item) {
    item.addEventListener('click', function(e) {
     overlay.classList.remove('overlay_active')
    });
 });
}); 
