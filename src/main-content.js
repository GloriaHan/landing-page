// main Content - First section: 3 cards
const cards = document.querySelectorAll('.card')

cards.forEach((card) => {
  card.addEventListener('click', () => {
    window.location.href = '#'
  })
})

// main Content - Third section: thumbnail gallery images
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
    // get the full size images
    setLightboxImg(img.dataset.full)
  })
})

// add keydown eventlistener 
document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft') {
    currentImgIndex--;
    if (currentImgIndex < 0) {
      currentImgIndex = galleryImages.length - 1;
    }
    setLightboxImg(galleryImages[currentImgIndex].dataset.full);
  } else if (event.key === 'ArrowRight') {
    currentImgIndex++;
    if (currentImgIndex > galleryImages.length - 1) {
      currentImgIndex = 0;
    }
    setLightboxImg(galleryImages[currentImgIndex].dataset.full);
  } 
});

prevBtn.addEventListener('click', function () {
  currentImgIndex--
  if (currentImgIndex < 0) {
    currentImgIndex = galleryImages.length - 1
  }
  setLightboxImg(galleryImages[currentImgIndex].dataset.full)
})

nextBtn.addEventListener('click', function () {
  currentImgIndex++
  if (currentImgIndex > galleryImages.length - 1) {
    currentImgIndex = 0
  }
  setLightboxImg(galleryImages[currentImgIndex].dataset.full)
})

const closeBtn = document.querySelector('.close-btn')
closeBtn.addEventListener('click', function () {
  hideLightbox()
})

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    hideLightbox()
  }
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
  let fullSizeImgSrc = galleryImages[currentImgIndex].dataset.full
  lightboxImg.src = fullSizeImgSrc
}

// main Content - fourth section: content block
const toggles = document.querySelectorAll('.toggle')
toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
  })
})

// back to top button
const button = document.getElementById('back-to-top')

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = 'block'
  } else {
    button.style.display = 'none'
  }
}

button.onclick = function () {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
