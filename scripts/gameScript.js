// initial el
const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeBtns = document.querySelector('#time-list');
let time = 0;
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
let score = 0
//set circle colors
let colors = [
    '#33C5EE', '#90DAEE', '#6AA0AF', '#0089AF',
    '#005D77', '#004577', '#0068B2', '#00406E',
    '#1F4D6E', '#47B2FF', '#0095FF', '#003459',
    '#173D59', '#00223B', '#0022B8', '#2843B8'
]

// start game btn
startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    setScreen(0);
})

// round time selection btn
timeBtns.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        setScreen(1);
        startGame();
    }

})

// circle click implementation
board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove();
        createRandomCircle()
    }
})

// options to start the game
function startGame() {
    setInterval(decreaseTime, 1000);
    setTime(time);
    createRandomCircle();
}

// set a timer for the round
function decreaseTime() {
    let current = --time
    if (current >= 0) {
        if (current < 10) {
            current = `0${current}`;
        }
        setTime(current);
    } else finishGame()
}


function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}

// go to the next menu item
function setScreen(screen) {
    screens[screen].classList.add('up');
}

// end of the game
function finishGame() {
    board.innerHTML = `<h1>Ваш счет: <span class='primary'>${score}</span></h1>`;
    timeEl.parentNode.classList.add('hide');
}

// apply random circle size
function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const { width, height } = board.getBoundingClientRect()

    circle.style.background = getRandomColor();

    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;

    board.append(circle)
}

// set random circle size
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

// set random color
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index]
}

// a function that allows you to score the maximum num of points
function winTheGame() {
    function kill() {
        const circle = document.querySelector('.circle');
        if (circle) {
            circle.click()
        }
    }
    setInterval(kill, 0.1)
}
