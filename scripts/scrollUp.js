const scrollUpBtn = document.querySelector('.scroll-up');
document.addEventListener('DOMContentLoaded', () => {
   if (pageYOffset != 0) {
    scrollUpBtn.classList.add('scroll-up-active')
   }
})
window.addEventListener('scroll', () => {
    if (pageYOffset != 0) {
        scrollUpBtn.classList.add('scroll-up-active')
    } else {
        scrollUpBtn.classList.remove('scroll-up-active')
    }
})

scrollUpBtn.addEventListener('click', () => {
    window.scrollTo(pageYOffset, 0)
})