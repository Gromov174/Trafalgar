const burger = document.querySelector('.header__burger')
const burgerLine = document.querySelector('.header__burger-line')
const overlay = document.querySelector('.header__nav-list')
const noScroll  = document.querySelector('.html')

burger.addEventListener('click', (e) => {
  e.preventDefault()
  burgerLine.classList.toggle('header__burger-line--active')
  overlay.classList.toggle('header__nav-list--active')
  noScroll.classList.toggle('html--noscroll')
})




const swiper = new Swiper('.testimonials__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.testimonials__arrow-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.testimonials__arrow-next',
    prevEl: '.testimonials__arrow-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});