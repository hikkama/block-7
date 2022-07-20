// Menu
const menu = document.querySelector('.main-menu')
const menuWrapper = '.main-menu__wrapper'

const menuBtn = document.querySelector('.header__menu-btn')
menuBtn.addEventListener('click', function (e) {
  e.preventDefault()
  popupOpen(menu, menuWrapper)
})

const menuCloseBtn = document.querySelector('.main-menu__btn')
menuCloseBtn.addEventListener('click', function (e) {
  e.preventDefault()
  popupClose(menu)
})

// Feedback
const modalFeedback = document.querySelector('.modal-feedback')
const modalFeedbackWrapper = '.modal-feedback__wrapper'

const modalFeedbackOpenBtn = document.querySelector('.link-icon--message')
modalFeedbackOpenBtn.addEventListener('click', function (e) {
  e.preventDefault()
  popupOpen(modalFeedback, modalFeedbackWrapper)
  popupClose(menu)
  body.classList.add('lock')
})

const modalFeedbackCloseBtn = document.querySelector(
  '.modal-feedback__btn-close'
)
modalFeedbackCloseBtn.addEventListener('click', function (e) {
  e.preventDefault()
  popupClose(modalFeedback)
})

// Call
const modalCall = document.querySelector('.modal-call')
const modalCallWrapper = '.modal-call__wrapper'

const modalCallOpenBtn = document.querySelector('.link-icon--phone')
modalCallOpenBtn.addEventListener('click', function (e) {
  e.preventDefault()
  popupOpen(modalCall, modalCallWrapper)
  popupClose(menu)
  body.classList.add('lock')
})

const modalCallCloseBtn = document.querySelector('.modal-call__btn-close')
modalCallCloseBtn.addEventListener('click', function (e) {
  e.preventDefault()
  popupClose(modalCall)
})

const body = document.querySelector('body')

function popupOpen(popup, popupWrapper) {
  popup.classList.add('open')
  body.classList.add('lock')
  popup.addEventListener('click', function (e) {
    if (!e.target.closest(popupWrapper)) {
      popupClose(popup)
    }
  })
}

function popupClose(popup) {
  popup.classList.remove('open')
  body.classList.remove('lock')
}
