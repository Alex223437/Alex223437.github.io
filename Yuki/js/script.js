const teamSlider = new Swiper('.team-carousel', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  speed: 800,
  centeredSlides: true,
  navigation: {
    nextEl: ".team__button-next",
    prevEl: ".team__button-prev",
  },
  breakpoints: {
    374:{
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 3
    }
  }
});

const productsSlider = new Swiper('.products-carousel', {
  loop: true,
  effect: "fade",
  shadow: false,
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

const counters = document.querySelectorAll('.skillbars__item__procent'),
              bars = document.querySelectorAll('.skillbars__item__bar span');
        counters.forEach((item, i) => {
          bars[i].style.width = item.innerHTML;
        });

document.addEventListener('DOMContentLoaded', function() {
  const modalButtons = document.querySelectorAll('.open-modal'),
      overlay      = document.querySelector('#overlay-modal')
  modalButtons.forEach(function(item){
     item.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal'),
            modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
        modalElem.classList.add('modal_active');
        overlay.classList.add('overlay_active');
        overlay.addEventListener('click', e => {
          overlay.classList.remove('overlay_active');
          modalElem.classList.remove('modal_active');
        })
     }); 
  }); 
}); 
