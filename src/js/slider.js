import Swiper from 'swiper/bundle';

export const certificatesSlider = new Swiper('.certificates__slider', {
    navigation: {
        nextEl: '.certificates__slider-btn-next',
        prevEl: '.certificates__slider-btn-prev'
    },
    effect: 'coverflow',
    slidesPerView: 1,
    spaceBetween: 5,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        pauseOnMouseEnter: true
    },
    loop: true,
    speed: 1000,
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 15,
        }
    },
});

export const technologiesSlider = new Swiper('.technologies__slider', {
    navigation: {
        nextEl: '.technologies__arrow-next',
        prevEl: '.technologies__arrow-prev'
    },
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        pauseOnMouseEnter: true
    },
    loop: true,
    speed: 1000,
    breakpoints: {
        992: {
            slidesPerView: 5,
        },
        768: {
            slidesPerView: 4,
        }
        ,
        576: {
            slidesPerView: 2,
        }
    },
});

export const reviewsSlider = new Swiper('.reviews__slider', {
    navigation: {
        nextEl: '.reviews__arrow-next',
        prevEl: '.reviews__arrow-prev'
    },
    slidesPerView: 1,
    spaceBetween: 5,
    // centeredSlides: true,
    autoplay: {
        delay: 3500,
        pauseOnMouseEnter: true
    },
    loop: true,
    speed: 1000,
    // breakpoints: {
    //     1000: {
    //         slidesPerView: 4,
    //     },
    //     600: {
    //         slidesPerView: 2,
    //     }
    // },
});