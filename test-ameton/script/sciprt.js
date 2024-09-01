// Swiper FAQ

const swiperFaq = new Swiper('.swiper-faq', {
  loop: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    450: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    580: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1230: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  }

});