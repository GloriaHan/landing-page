// header: menu
const menuToggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active')
})

document.addEventListener('click', (event) => {
  const isClickInsideMenu = menu.contains(event.target)
  const isClickInsideMenuToggle = menuToggle.contains(event.target)

  if (!isClickInsideMenu && !isClickInsideMenuToggle) {
    menu.classList.remove('active')
  }
})

// header: search bar
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const searchinput = document.querySelector('.searchinput')

btn.addEventListener('click', () => {
  search.classList.toggle('active')
  searchinput.focus()
})
