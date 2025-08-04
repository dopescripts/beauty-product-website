const swiper = new Swiper('.product-collection .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    
    // If we need pagination
    pagination: {
        type: 'fraction',
        clickable: true,
        el: '.product-collection .swiper-pagination-fraction',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.custom-button-next',
        prevEl: '.custom-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});

const swiper2 = new Swiper('.testimonial-swiper .swiper ', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        type: 'progressbar',
        draggable: true,
    },
    breakpoints: {

        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },

        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 10
        },

        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 10
        },

        // when window width is >= 1024px
        1024: {
            slidesPerView: 4,
            spaceBetween: 10
        }
    }
});