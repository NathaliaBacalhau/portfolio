let btnAbrirMenu = document.getElementById('btn-abrir-menu')
let btnFecharMenu = document.getElementById('btn-fechar-menu')
let navMenu = document.getElementById('nav-menu')
let menu = document.getElementById('menu-mobile')
let overlay= document.getElementById('overlay-menu')

btnAbrirMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

btnFecharMenu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

navMenu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})