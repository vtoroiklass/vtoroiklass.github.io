

document.querySelector('.lang-selection').addEventListener('change', () => {
    let data = document.querySelector('.lang-selection').value;
    let html = document.querySelector('.html')
    let css = document.querySelector('.css')
    let js = document.querySelector('.js')
    html.style.display = 'none'
    css.style.display = 'none'
    js.style.display = 'none'
    if (data == 'html') {
        html.style.display = 'block'
    } else if (data == 'css') {
        css.style.display = 'block'
    } else {
        js.style.display = 'block'
    }
})