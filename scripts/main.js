// initial calc el
const myBtnCalc = document.querySelector('.my-calculator');
const myCalc = document.querySelector('.main-calculate');
const wrapperCalc = document.querySelector('.calc');
const aboutCalc = document.querySelector('.main-content-works-calc');
const calcLink = document.querySelector('.my-link-calc');
const frameCalc = document.querySelector('.iframe-calc');

// initial slider el
const myBtnSlider = document.querySelector('.my-slider-btn');
const mySlider = document.querySelector('.slider');
const aboutSlider = document.querySelector('.main-content-works-slider');
const sliderLink = document.querySelector('.my-link-slider');
const frameSlider = document.querySelector('.iframe-slider');

// initial game el
const frameGame = document.querySelector('.game-frame');
const aboutGame = document.querySelector('.main-content-works-game');
const myBtnGame = document.querySelector('.my-game-btn');
const myGame = document.querySelector('.my-game');
const iframeGame = document.querySelector('.iframe-game');
const gameLink = document.querySelector('.my-link-game');

// closing page with code
const closeBtn = document.querySelector('.close-code-btn');

closeBtn.addEventListener('click', () => {
    function closeFrame(frame) {
        if (frame.classList.contains('my-frame-visible')) {
            frame.classList.remove('my-frame-visible');
        }
    }
    closeFrame(frameCalc);
    closeFrame(frameSlider);
    closeFrame(iframeGame);
    closeBtn.classList.remove('close-code-btn-visible')
    if (pageYOffset != 0) {
        scrollUpBtn.classList.add('scroll-up-active')
    }
})

// show project code
function showCode(codeLink) {
    codeLink.classList.add('my-frame-visible');
    closeBtn.classList.add('close-code-btn-visible');
    scrollUpBtn.classList.remove('scroll-up-active');
}

gameLink.addEventListener('click', () => {
    showCode(iframeGame)
})

calcLink.addEventListener('click', () => {
    showCode(frameCalc)
})

sliderLink.addEventListener('click', () => {
    showCode(frameSlider)
})

// editing project classes
function addClassList(btn, project, project2, project3, editClass1, editClass2, editClass3) {
    project.classList.add(editClass1);
    project2.classList.add(editClass2);
    project3.classList.add(editClass3);
    btn.innerHTML = 'скрыть'
}
function removeClassList(btn, project, project2, project3, editClass1, editClass2, editClass3) {
    project.classList.remove(editClass1);
    project2.classList.remove(editClass2);
    project3.classList.remove(editClass3);
    btn.innerHTML = 'показать'
}

function removeIfClassNotContains(project1, project2, editClass1, editClass2) {
    if (!project1.classList.contains(editClass1)) {
        project2.classList.remove(editClass2);
    }
}

function editTop(project) {
    project.classList.add('main-content-works-top')
}

// show slider, move description to the left, move away from element above and move element below
myBtnSlider.addEventListener('click', () => {
    if (mySlider.classList.contains('slider-visible')) {
        removeClassList(myBtnSlider, mySlider, aboutSlider, sliderLink, 'slider-visible', 'main-content-works-left', 'my-link-left');
        removeIfClassNotContains(aboutCalc, aboutSlider, 'main-content-works-left', 'main-content-works-top');
        removeIfClassNotContains(myGame, aboutGame, 'my-game-visible', 'main-content-works-top');
    } else {
        addClassList(myBtnSlider, mySlider, aboutSlider, sliderLink, 'slider-visible', 'main-content-works-left', 'my-link-left');
        editTop(aboutSlider)
        editTop(aboutGame)
    }
})

// show the game, move the description to the left and move away from the element on top
myBtnGame.addEventListener('click', () => {
    if (aboutGame.classList.contains('main-content-works-left')) {
        removeClassList(myBtnGame, aboutGame, myGame, gameLink, 'main-content-works-left', 'my-game-visible', 'my-link-left')
        removeIfClassNotContains(aboutSlider, aboutGame, 'main-content-works-left', 'main-content-works-top')
    } else {
        addClassList(myBtnGame, aboutGame, myGame, gameLink, 'main-content-works-left', 'my-game-visible', 'my-link-left')
        frameGame.classList.add('game-frame-visible')
        editTop(aboutGame);
    }
})

// show the calculator, move the description to the left and move the elements from the bottom
myBtnCalc.addEventListener('click', () => {
    if (myCalc.classList.contains('main-calculate-visible')) {
        removeClassList(myBtnCalc, myCalc, wrapperCalc, calcLink, 'main-calculate-visible', 'calc-visible', 'my-link-left')
        aboutCalc.classList.remove('main-content-works-left')
        removeIfClassNotContains(mySlider, aboutSlider, 'slider-visible', 'main-content-works-top')
    } else {
        addClassList(myBtnCalc, myCalc, wrapperCalc, calcLink, 'main-calculate-visible', 'calc-visible', 'my-link-left')
        aboutCalc.classList.add('main-content-works-left');
        editTop(aboutSlider)
    }
})