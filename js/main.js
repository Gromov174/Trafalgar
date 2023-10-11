const burger = document.querySelector('.header__burger')
const burgerLine = document.querySelector('.header__burger-line')
const overlay = document.querySelector('.header__nav-list')
const noScroll = document.querySelector('.html')
const btn = document.querySelectorAll('.btn')
const nonActive = document.querySelectorAll('.disable-link')
const link = document.querySelectorAll('a.anchor-link')


function disablelink(constName) {
  constName.forEach(d => {
    d.addEventListener('click', (e) => {
      e.preventDefault()
    })
  })
}
function intClass(constName, action, className) {
  if (action === 'remove') {
    constName.classList.remove(className)
  }
  if (action === 'contains') {
    constName.classList.contains(className)
  }
  if (action === 'toggle') {
    constName.classList.toggle(className)
  }
  if (action === 'add') {
    constName.classList.add(className)
  }
}

disablelink(btn)
disablelink(nonActive)


link.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    if (overlay.classList.contains('header__nav-list--active')) {
      intClass(overlay, 'remove', 'header__nav-list--active')
      intClass(burgerLine, 'remove', 'header__burger-line--active')
      intClass(noScroll, 'remove', 'html--noscroll')
    }
    const href = this.getAttribute('href').substring(1)
    const scrollTarget = document.getElementById(href)
    const elemenPosition = scrollTarget.getBoundingClientRect().top
    const offsetPosition = elemenPosition - 10

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

  intClass(burgerLine, 'toggle', 'header__burger-line--active')
  intClass(overlay, 'toggle', 'header__nav-list--active')
  intClass(noScroll, 'toggle', 'html--noscroll')
})

const swiper = new Swiper('.testimonials__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.testimonials__arrow-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.testimonials__arrow-next',
    prevEl: '.testimonials__arrow-prev',
  },
});