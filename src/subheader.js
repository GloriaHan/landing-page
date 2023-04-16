// subheader
function submitForm() {
  const firstName = document.getElementById('firstName').value
  const lastName = document.getElementById('lastName').value
  const email = document.getElementById('email').value
  const phone = document.getElementById('phone').value
  const text = document.getElementById('text').value

  // Perform basic form validation
  let isValid = true
  const firstNameLabel = document.querySelector('label[for="firstName"]')
  const firstNameError = document.querySelector('#firstNameError')
  if (firstName === '') {
    document.getElementById('firstName').style.border = '1px solid red'
    if (!firstNameError) {
      const errorEl = document.createElement('span')
      errorEl.id = 'firstNameError'
      errorEl.style.color = 'red'
      errorEl.textContent = ' (enter your first name)'
      firstNameLabel.appendChild(errorEl)
    }
    isValid = false
  } else {
    document.getElementById('firstName').style.border = '1px solid #ced4da'
    if (firstNameError) {
      firstNameError.remove()
    }
  }

  const lastNameLabel = document.querySelector('label[for="lastName"]')
  const lastNameError = document.querySelector('#lastNameError')
  if (lastName === '') {
    document.getElementById('lastName').style.border = '1px solid red'
    if (!lastNameError) {
      const errorEl = document.createElement('span')
      errorEl.id = 'lastNameError'
      errorEl.style.color = 'red'
      errorEl.textContent = '(enter your last name)'
      lastNameLabel.appendChild(errorEl)
    }
    isValid = false
  } else {
    document.getElementById('lastName').style.border = '1px solid #ced4da'
    if (lastNameError) {
      lastNameError.remove()
    }
  }

  // Validate email
  const emailLabel = document.querySelector('label[for="email"]')
  const emailError = document.querySelector('#emailError')
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (email === '') {
    document.getElementById('email').style.border = '1px solid red'
    if (!emailError) {
      const errorEl = document.createElement('span')
      errorEl.id = 'emailError'
      errorEl.style.color = 'red'
      errorEl.textContent = '(enter your email)'
      emailLabel.appendChild(errorEl)
    }
    isValid = false
  } else if (!emailRegex.test(email)) {
    document.getElementById('email').style.border = '1px solid red'
    if (!emailError) {
      const errorEl = document.createElement('span')
      errorEl.id = 'emailError'
      errorEl.style.color = 'red'
      errorEl.textContent = '(enter a valid email address)'
      emailLabel.appendChild(errorEl)
    }
    isValid = false
  } else {
    document.getElementById('email').style.border = '1px solid #ced4da'
    if (emailError) {
      emailError.remove()
    }
  }

  const phoneLabel = document.querySelector('label[for="phone"]')
  const phoneError = document.querySelector('#phoneError')

  if (phone === '') {
    document.getElementById('phone').style.border = '1px solid red'
    if (!phoneError) {
      const errorEl = document.createElement('span')
      errorEl.id = 'phoneError'
      errorEl.style.color = 'red'
      errorEl.textContent = '(enter your phone number)'
      phoneLabel.appendChild(errorEl)
    }
    isValid = false
  } else {
    const phoneRegex1 = /^\d{4} \d{3} \d{3}$/
    const phoneRegex2 = /^\d{10}$/
    if (!phoneRegex1.test(phone) && !phoneRegex2.test(phone)) {
      document.getElementById('phone').style.border = '1px solid red'
      if (!phoneError) {
        const errorEl = document.createElement('span')
        errorEl.id = 'phoneError'
        errorEl.style.color = 'red'
        errorEl.textContent = '(enter a valid phone number)'
        phoneLabel.appendChild(errorEl)
      }
      isValid = false
    } else {
      document.getElementById('phone').style.border = '1px solid #ced4da'
      if (phoneError) {
        phoneError.remove()
      }
    }
  }

  const textLabel = document.querySelector('label[for="text"]')
  const textError = document.querySelector('#textError')
  if (text === '') {
    document.getElementById('text').style.border = '1px solid red'
    if (!textError) {
      const errorEl = document.createElement('span')
      errorEl.id = 'textError'
      errorEl.style.color = 'red'
      errorEl.textContent = '(enter your message)'
      textLabel.appendChild(errorEl)
    }
    isValid = false
  } else {
    document.getElementById('text').style.border = '1px solid #ced4da'
    if (textError) {
      textError.remove()
    }
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
