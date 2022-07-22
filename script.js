let dogImage = document.querySelector('.img-dog')
let currentImageIndex = 0
let nextButton = document.querySelector('.next-btn')
let prevButton = document.querySelector('.prev-btn')
let infoDog = document.querySelector('.slider-amount-img')
let totalDog = document.querySelector('.solution-dog')
let dogName = document.querySelector('.dog-name')

let arrayImg = []
arrayImg.push("https://i.gifer.com/ent.gif");
arrayImg.push('https://media2.giphy.com/media/d7nDg0GHwK6g44Hf1G/200w.gif?cid=82a1493bzahzoq98bpqkgo3z3g3cp2xy3nlzyxd99wu7h9pl&rid=200w.gif&ct=g');
arrayImg.push('https://thumbs.gfycat.com/RecklessWearyGrebe-max-1mb.gif');
arrayImg.push('https://vgif.ru/gifs/133/vgif-ru-13304.gif');
arrayImg.push('https://c.tenor.com/gOsUm3YpsAkAAAAM/budda-dog.gif')

dogImage.src = arrayImg[currentImageIndex];
let amountImg = function () {
    if (currentImageIndex == 0) {
        return document.querySelector('.slider-amount-img').innerHTML = `номир собачи: ${currentImageIndex + 1}, это таневальный пес`
    }
    if (currentImageIndex == 1) {
        return document.querySelector('.slider-amount-img').innerHTML = `номир собачи: ${currentImageIndex + 1}, эта собачь пьет водически`
    }
    if (currentImageIndex == 2) {
        return document.querySelector('.slider-amount-img').innerHTML = `номир собачи: ${currentImageIndex + 1}, он согласен`
    }
    if (currentImageIndex == 3) {
        return document.querySelector('.slider-amount-img').innerHTML = `номир собачи: ${currentImageIndex + 1}, супирпес`
    }
    if (currentImageIndex == 4) {
        return document.querySelector('.slider-amount-img').innerHTML = `номир собачи: ${currentImageIndex + 1}, даволны доставалец еды`
    }

}
amountImg()
let onShowPrevBtnClick = function (event) {
    if (currentImageIndex == 0) {
        // reloaded slider
        currentImageIndex = (arrayImg.length - 1)
    } else {
        currentImageIndex--
    }
    dogImage.src = arrayImg[currentImageIndex]
    amountImg()
};

let onShowNextBtnClick = function (event) {
    if (currentImageIndex >= (arrayImg.length - 1)) {
        // reloaded slider
        currentImageIndex = 0
    } else {
        currentImageIndex++
    }
    dogImage.src = arrayImg[currentImageIndex]
    amountImg()
};



let totalBtn = function (event) {
    prevButton.remove()
    nextButton.remove()
    totalDog.remove()
    document.querySelector('.slider-amount-img').innerHTML = `этот выбор будет иметь последствие. И его уже не изменить.`;
    dogName.innerHTML = 'теперь введите имя этой собаки!'
    let input = document.createElement("input");
    input.setAttribute('type', 'text')
    let inputDogName = document.querySelector('.input-dog-name')
    inputDogName.appendChild(input)
    let btn = document.createElement("input");
    btn.type = 'button';
    btn.value = 'я хочу эти имя!';
    inputDogName.appendChild(btn)
    btn.addEventListener('click', function () {

        if (input.value != '') {
            inputDogName.remove()
            btn.remove()
            if (currentImageIndex == 0) {
                dogName.innerHTML = `${input.value} танцевал(a) так долго, что стал(а) победителем в шоу танцы дети)`
            }
            if (currentImageIndex == 1) {
                dogName.innerHTML = `онет!!! ${input.value} выпил всю воду в мире... и вас(`
            }
            if (currentImageIndex == 2) {
                dogName.innerHTML = `${input.value} соглашался на все и на него оформили кредит. платить вам)`
            }
            if (currentImageIndex == 3) {
                dogName.innerHTML = `${input.value} он слишком долго шел и ушел(`
            }
            if (currentImageIndex == 4) {
                dogName.innerHTML = `ура благодаря ${input.value} вы поели!`
            }
        } else alert('Вы не ввели имя!')
    })
}



totalDog.addEventListener('click', totalBtn);
prevButton.addEventListener('click', onShowPrevBtnClick);
nextButton.addEventListener('click', onShowNextBtnClick);