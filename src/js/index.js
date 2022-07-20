import '../scss/style.scss'
import './gallery-btn'
import './modals'

import Swiper, { Pagination } from 'swiper'

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)')

if (!mobile.matches) {
  swiper.forEach((el) => {
    el.destroy()
  })
}
