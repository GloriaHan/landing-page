//menu
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

// search bar
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const searchinput = document.querySelector('.searchinput')

btn.addEventListener('click', () => {
  search.classList.toggle('active')
  searchinput.focus()
})

// Sub Header: accommodation application form
const message = localStorage.getItem('message')

if (message) {
  document.querySelector('.message').style.display = 'block'
  document.getElementById('firstNameResult').textContent = message
  // Remove the message from local storage so it doesn't show again on refresh
  localStorage.removeItem('message')
}

function submitForm() {
  // Collect form data
  const firstName = document.getElementById('firstName').value
  const lastName = document.getElementById('lastName').value
  const email = document.getElementById('email').value
  const phone = document.getElementById('phone').value
  const text = document.getElementById('text').value

  // Perform basic form validation
  let isValid = true
  if (firstName === '') {
    document.getElementById('firstName').style.border = '1px solid red'
    isValid = false
  } else {
    document.getElementById('firstName').style.border = '1px solid #ced4da'
  }

  if (lastName === '') {
    document.getElementById('lastName').style.border = '1px solid red'
    isValid = false
  } else {
    document.getElementById('lastName').style.border = '1px solid #ced4da'
  }

  if (email === '') {
    document.getElementById('email').style.border = '1px solid red'
    isValid = false
  } else {
    document.getElementById('email').style.border = '1px solid #ced4da'
  }

  if (phone === '') {
    document.getElementById('phone').style.border = '1px solid red'
    isValid = false
  } else {
    document.getElementById('phone').style.border = '1px solid #ced4da'
  }

  if (text === '') {
    document.getElementById('text').style.border = '1px solid red'
    isValid = false
  } else {
    document.getElementById('text').style.border = '1px solid #ced4da'
  }

  // validate the email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (!emailRegex.test(email)) {
    document.getElementById('email').style.border = '1px solid red'
    isValid = false
  } else {
    document.getElementById('email').style.border = '1px solid #ced4da'
  }

  // Validate the phone number
  const phoneRegex1 = /^\d{4} \d{3} \d{3}$/
  const phoneRegex2 = /^\d{10}$/
  if (!phoneRegex1.test(phone) && !phoneRegex2.test(phone)) {
    document.getElementById('phone').style.border = '1px solid red'
    isValid = false
  } else {
    document.getElementById('phone').style.border = '1px solid #ced4da'
  }

  if (!isValid) {
    return false
  }

  // Hide the form and display message
  document.querySelector('.contact-form form').style.display = 'none'
  document.querySelector('.message').style.display = 'block'
  document.getElementById('firstNameResult').textContent = firstName

  // Clear the form
  document.getElementById('firstName').value = ''
  document.getElementById('lastName').value = ''
  document.getElementById('email').value = ''
  document.getElementById('phone').value = ''
  document.getElementById('text').value = ''
}

// Sub Header: rotator-slider
const slides = document.querySelectorAll('.slide')
let currentSlide = 0

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1
  } else if (index >= slides.length) {
    index = 0
  }

  slides[currentSlide].classList.remove('active')
  slides[currentSlide].classList.remove('next')
  slides[index].classList.add('active')
  slides[(index + 1) % slides.length].classList.add('next')

  currentSlide = index
}

setInterval(() => {
  showSlide(currentSlide + 1)
}, 4000)

// Page Content
// First section: 3 cards
const cards = document.querySelectorAll('.card')

cards.forEach((card) => {
  card.addEventListener('click', () => {
    window.location.href = '#'
  })
})

// Third section: thumbnail gallery images
const galleryImages = document.querySelectorAll('.thumbnail-gallery img')
const lightboxModal = document.getElementById('lightbox-modal')
const lightboxImg = document.getElementById('lightbox-img')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
let currentImgIndex = 0

galleryImages.forEach((img, index) => {
  img.addEventListener('click', function () {
    currentImgIndex = index
    showLightbox()
    setLightboxImg()
  })
})

prevBtn.addEventListener('click', function () {
  currentImgIndex--
  if (currentImgIndex < 0) {
    currentImgIndex = galleryImages.length - 1
  }
  setLightboxImg()
})

nextBtn.addEventListener('click', function () {
  currentImgIndex++
  if (currentImgIndex > galleryImages.length - 1) {
    currentImgIndex = 0
  }
  setLightboxImg()
})

const closeBtn = document.querySelector('.close-btn')
closeBtn.addEventListener('click', function () {
  hideLightbox()
})

function showLightbox() {
  let width = screen.width
  if (width <= 480) {
    lightboxModal.style.display = 'flex'
  } else {
    lightboxModal.style.display = 'block'
  }
}

function hideLightbox() {
  lightboxModal.style.display = 'none'
}

function setLightboxImg() {
  lightboxImg.src = galleryImages[currentImgIndex].src
}

// content block
const toggles = document.querySelectorAll('.toggle')

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
  })
})
