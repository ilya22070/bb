let scrollPos = window.pageYOffset,
  header = document.querySelector('.header'),
  headerHeight = header.offsetHeight,
  fixed = document.querySelector('.fixed')
window.addEventListener('scroll', () => {
  scrollPos = this.pageYOffset
  if (scrollPos >= headerHeight) {
    fixed.style.position = 'fixed'
    fixed.style.top = '0px'
  } else {
    fixed.style.position = 'absolute'
    fixed.style.top = '-100px'
  }
})

let lScroll = document.querySelectorAll('.scroll__links')

lScroll.forEach((e) => {
  let elementID = e.dataset.scroll

  if (e.closest('div').classList.contains('burger__menu-item')) {
    var burgerLink = e
  }
  e.addEventListener('click', function (e) {
    if (burgerLink) {
      burger.style.right = '-100%'
    }
    let elementOffset = document.querySelector(elementID).offsetTop
    e.preventDefault()
    window.scrollTo({
      top: elementOffset - 20,
      behavior: 'smooth',
    })
  })
})

let burgerBtn = document.querySelectorAll('.burger__btn'),
  burgerClose = document.querySelectorAll('.burger__btn-close'),
  burger = document.querySelector('.burger__menu')

burgerBtn.forEach((e) => {
  e.addEventListener('click', () => {
    burger.style.right = '0'
  })
})

burgerClose.forEach((e) => {
  e.addEventListener('click', () => {
    burger.style.right = '-100%'
  })
})
