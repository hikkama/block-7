//  Button 'Читать далее' services

const textServices = document.querySelector('.services__text')
const heightOfTextServices = textServices.scrollHeight
const btnServices = document.querySelector('.services__btn-more')

textServices.style.maxHeight = `${textServices.children[0].offsetHeight}px`

btnServices.addEventListener('click', function () {
  textServices.style.maxHeight = `${heightOfTextServices}px`
  textServices.style.marginBottom = '0'
  btnServices.disabled = true
})

//  Button 'показать все' gallery brands

const galleryBrands = document.querySelector('.swiper-brands')
const fullHeigthOfGalleryBrands = galleryBrands.scrollHeight
const shownHeigthOfGalleryBrands = galleryBrands.clientHeight
const btnMoreBrands = document.querySelector('#gallery__btn-more--brands')
const btnLessBrands = document.querySelector('#gallery__btn-less--brands')

btnMoreBrands.addEventListener('click', function () {
  galleryBrands.style.maxHeight = `${fullHeigthOfGalleryBrands}px`
  btnLessBrands.style.display = 'block'
  btnMoreBrands.style.display = 'none'
})

btnLessBrands.addEventListener('click', function () {
  galleryBrands.style.maxHeight = `${shownHeigthOfGalleryBrands}px`
  btnLessBrands.style.display = 'none'
  btnMoreBrands.style.display = 'block'
})

//  Button 'показать все' gallery technics
const technicsBrands = document.querySelector('.swiper-technics')
const fullHeigthOfGalleryTechincs = technicsBrands.scrollHeight
const shownHeigthOfGalleryTechincs = technicsBrands.clientHeight
const btnMoreTechnics = document.querySelector('#gallery__btn-more--technics')
const btnLessTechnics = document.querySelector('#gallery__btn-less--technics')

btnMoreTechnics.addEventListener('click', function () {
  technicsBrands.style.maxHeight = `${fullHeigthOfGalleryTechincs}px`
  btnLessTechnics.style.display = 'block'
  btnMoreTechnics.style.display = 'none'
})

btnLessTechnics.addEventListener('click', function () {
  technicsBrands.style.maxHeight = `${shownHeigthOfGalleryTechincs}px`
  btnLessTechnics.style.display = 'none'
  btnMoreTechnics.style.display = 'block'
})
