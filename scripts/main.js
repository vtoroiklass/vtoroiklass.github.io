const myBtnCalc = document.querySelector('.my-calculator');
const myCalc = document.querySelector('.main-calculate');
const wrapperCalc = document.querySelector('.calc');
const aboutCalc = document.querySelector('.main-content-works-calc');
const calcLink = document.querySelector('.my-link-calc');
const myBtnSlider = document.querySelector('.my-slider-btn');
const mySlider = document.querySelector('.slider');
const aboutSlider = document.querySelector('.main-content-works-slider');
const frameCalc = document.querySelector('.iframe-calc');
const closeBtn = document.querySelector('.close-code-calc-btn');
const sliderLink = document.querySelector('.my-link-slider');
const frameSlider = document.querySelector('.iframe-slider');


closeBtn.addEventListener('click', () => {
    function closeFrame(frame) {
        if (frame.classList.contains('my-frame-visible')) {
            frame.classList.remove('my-frame-visible');
        }
    }
    closeFrame(frameCalc);
    closeFrame(frameSlider);
    closeBtn.classList.remove('close-code-btn-visible')
    if (pageYOffset != 0) {
        scrollUpBtn.classList.add('scroll-up-active')
       }
})

calcLink.addEventListener('click', () => {
    frameCalc.classList.add('my-frame-visible');
    closeBtn.classList.add('close-code-btn-visible');
    scrollUpBtn.classList.remove('scroll-up-active');
})

sliderLink.addEventListener('click', () => {
    closeBtn.classList.add('close-code-btn-visible');
    frameSlider.classList.add('my-frame-visible');
    scrollUpBtn.classList.remove('scroll-up-active');
})

myBtnCalc.addEventListener('click', () => {
    if (myCalc.classList.contains('main-calculate-visible')) {
        myCalc.classList.remove('main-calculate-visible')
        wrapperCalc.classList.remove('calc-visible')
        aboutCalc.classList.remove('main-content-works-left')
        calcLink.classList.remove('my-link-left')
        if (!mySlider.classList.contains('slider-visible')) {
            aboutSlider.classList.remove('main-content-works-top');
        }
        myBtnCalc.innerHTML = 'показать'
    } else {
        myCalc.classList.add('main-calculate-visible');
        wrapperCalc.classList.add('calc-visible');
        aboutCalc.classList.add('main-content-works-left');
        calcLink.classList.add('my-link-left');
        aboutSlider.classList.add('main-content-works-top');
        myBtnCalc.innerHTML = 'скрыть'
    }
})

myBtnSlider.addEventListener('click', () => {
    if (mySlider.classList.contains('slider-visible')) {
        mySlider.classList.remove('slider-visible');
        aboutSlider.classList.remove('main-content-works-left');
        sliderLink.classList.remove('my-link-left');
        if (!aboutCalc.classList.contains('main-content-works-left')) {
            aboutSlider.classList.remove('main-content-works-top');
        }
        myBtnSlider.innerHTML = 'показать'
    } else {
        mySlider.classList.add('slider-visible');
        aboutSlider.classList.add('main-content-works-top');
        aboutSlider.classList.add('main-content-works-left');
        sliderLink.classList.add('my-link-left');       
        myBtnSlider.innerHTML = 'скрыть'
    }
})
