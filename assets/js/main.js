// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@      SHOW & REMOVE MENU      @@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const navToggle = document.querySelector('.nav__toggle'),
  navClose = document.querySelector('.nav__close'),
  navMenu = document.querySelector('.nav__menu'),
  navLogo = document.querySelector('.nav__menu-logo'),
  overlay = document.querySelector('.overlay');

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
  overlay.classList.add('show-overlay');
  document.body.classList.add('remove-body-scroll');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
  overlay.classList.remove('show-overlay');
  document.body.classList.remove('remove-body-scroll');
});

navLogo.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
  overlay.classList.remove('show-overlay');
  document.body.classList.remove('remove-body-scroll');
});

overlay.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
  overlay.classList.remove('show-overlay');
  document.body.classList.remove('remove-body-scroll');
});

const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach((e) => {
  e.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    overlay.classList.remove('show-overlay');
    document.body.classList.remove('remove-body-scroll');
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@      swiperjs.com (BRANDS SECTION)      @@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const brandsSwiper = new Swiper('.brands__swiper', {
  slidesPerView: 3,
  spaceBetween: 15,
  grabCursor: true,
  loop: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    576: {
      slidesPerView: 4,
    },

    992: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@            SCROLL UP              @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const scrollUp = document.querySelector('.scrollup');

window.addEventListener('scroll', function () {
  if (this.scrollY > 100) {
    scrollUp.classList.add('show-scrollup');
  } else {
    scrollUp.classList.remove('show-scrollup');
  }
});
