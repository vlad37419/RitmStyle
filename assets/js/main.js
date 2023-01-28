function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.746785, 37.577606],
        zoom: 14,
    });

    var myPlacemark = new ymaps.Placemark([55.746785, 37.577606], {}, {
        iconLayout: 'default#image',
    });

    myMap.geoObjects.add(myPlacemark);
}

document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('body');

    // reviews slider
    const checkReviewsSlider = document.querySelectorAll('.reviews__slider');

    if (checkReviewsSlider.length > 0) {
        const promoSlider = new Swiper('.reviews__slider', {
            spaceBetween: 0,
            touchRatio: 1,
            slidesPerView: 3,
            centeredSlides: true,
            loop: true,
            speed: 200,
            slideToClickedSlide: true,
            pagination: {
                el: '.reviews__pagination',
                type: 'bullets',
                clickable: true,
            },

            breakpoints: {
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  autoHeight: true,
                },
                1400: {
                    slidesPerView: 3,
                }
              }
        });
    }

    // burger menu
    const menuBurgerOpen = document.querySelector('.header__burger');
    const headerWrapper = document.querySelector('.header__wrapper');

    menuBurgerOpen.addEventListener('click', function() {
        body.classList.toggle('lock');
        menuBurgerOpen.classList.toggle('active');
        headerWrapper.classList.toggle('active');
    });

    ymaps.ready(init);
});