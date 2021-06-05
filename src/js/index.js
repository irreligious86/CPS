import '../scss/style.scss';

console.log('Works!');


const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.container-header__link'
  },

  // autoHeight: true,

  slidesPerView: 'auto',

  watchOverflow: true,

  spaceBetween: 20,

  slidesPerGroup: 1,

  slidesPerColumn: 1,

  centeredSlides: true,

  initialSlide: 0,

  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: true
  }

});
