// initial el
const scrollUpBtn = document.querySelector('.scroll-up');

// show scroll btn on page load
document.addEventListener('DOMContentLoaded', () => {
   if (pageYOffset != 0) {
    scrollUpBtn.classList.add('scroll-up-active')
   }
})

// the appearance of the paging btn when the page position is not on top
window.addEventListener('scroll', () => {
    if (pageYOffset != 0) {
        scrollUpBtn.classList.add('scroll-up-active')
    } else {
        scrollUpBtn.classList.remove('scroll-up-active')
    }
})

// scroll up btn
scrollUpBtn.addEventListener('click', () => {
    window.scrollTo(pageYOffset, 0)
})