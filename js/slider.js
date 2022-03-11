import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

export function slider() {
    const swiper = new Swiper(".swiper", {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

    })
}