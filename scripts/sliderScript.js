// initial el
const myBtnNext = document.querySelector('.slide-btn-next');
const myBtnPrev = document.querySelector('.slide-btn-prev');
const slide = document.querySelectorAll('.slide1');
const images = document.querySelectorAll('.slide-single');
let countImage = 2;
const imageUrls = [];

// adding imgs to arr
imageUrls.push('../imgs/sliderImgs/img1.jpg');
imageUrls.push('../imgs/sliderImgs/img2.jpg');
imageUrls.push('../imgs/sliderImgs/img3.jpg');
imageUrls.push('../imgs/sliderImgs/img4.jpg');

// show next img
function next() {

    imageUrls.push(imageUrls[0]);
    imageUrls.shift();

    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('slide-current')) {
            images[i].src = imageUrls[2];
            images[i].classList.add('slide-prev');
            images[i].classList.remove('slide-current');
        } else if (images[i].classList.contains('slide-next')) {
            images[i].src = imageUrls[3];
            images[i].classList.add('slide-current');
            images[i].classList.remove('slide-next');
            images[i].style.transition = 'all 1s'
        } else {
            images[i].classList.add('slide-next');
            images[i].classList.remove('slide-prev');
            images[i].style.transition = 'all 0s'
        }
    }
}

// show prev img
function prev() {
    imageUrls.unshift(imageUrls[imageUrls.length - 1]);
    imageUrls.pop();

    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('slide-current')) {
            images[i].src = imageUrls[0];
            images[i].classList.add('slide-next');
            images[i].classList.remove('slide-current')
        } else if (images[i].classList.contains('slide-next')) {
            images[i].classList.add('slide-prev');
            images[i].classList.remove('slide-next');
            images[i].style.transition = 'all 0s';
        } else {
            images[i].src = imageUrls[3]
            images[i].classList.add('slide-current');
            images[i].classList.remove('slide-prev');
            images[i].style.transition = 'all 1s';
        }
    }
}

// image docking
next()

// subscribe to events
myBtnNext.onclick = next;
myBtnPrev.onclick = prev;