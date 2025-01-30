const closeIcon = document.querySelector('#close-icon')
const navBar = document.querySelector('#nav-bar')
const hamburgerMenuIcon = document.querySelector('#hamburger-menu-icon')


closeIcon.addEventListener('click', () => {
    navBar.classList.add('hidden')
    hamburgerMenuIcon.classList.remove('hidden')
})

hamburgerMenuIcon.addEventListener('click', (e) => {
    navBar.classList.remove('hidden')
    navBar.classList.add('flex')
    hamburgerMenuIcon.classList.add('hidden')
    e.stopPropagation()
})

navBar.addEventListener('click', (e) => {
    e.stopPropagation()
})

window.addEventListener('click', () => {
    navBar.classList.add('hidden')
    hamburgerMenuIcon.classList.remove('hidden')
})
