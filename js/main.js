const burger = document.querySelector('.header__burger')
const burgerLine = document.querySelector('.header__burger-line')
const overlay = document.querySelector('.header__nav-list')
const noScroll = document.querySelector('.html')
const btn = document.querySelectorAll('.btn')
const nonActive = document.querySelectorAll('.disable-link')
const link = document.querySelectorAll('a.anchor-link')


function disablelink(className) {
  className.forEach(d => {
    d.addEventListener('click', (e) => {
      e.preventDefault()
    })
  })
}

disablelink(btn);
disablelink(nonActive);


link.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    if (overlay.classList.contains('header__nav-list--active') || burgerLine.classList.contains('header__burger-line--active')) {
      overlay.classList.remove('header__nav-list--active')
      burgerLine.classList.remove('header__burger-line--active')
    }
    const href = this.getAttribute('href').substring(1)
    const scrollTarget = document.getElementById(href)
    const topOffset = 20
    const elemenPosition = scrollTarget.getBoundingClientRect().top
    const offsetPosition = elemenPosition - topOffset

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    })
  })
})

window.scroll({
  top: 150,
  left: 0,
  behavior: 'smooth'
});

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
});