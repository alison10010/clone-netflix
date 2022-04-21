  /* FILMES POPULARES */
window.onload = function () {
    var swiper = new Swiper(".filmesPopulares", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        370: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        540: {
        slidesPerView: 3,
        spaceBetween: 20,
        },
        752: {
        slidesPerView: 4,
        spaceBetween: 20,
        },
        880: {
        slidesPerView: 5,
        spaceBetween: 40,
        },
        1229: {
        slidesPerView: 7,
        spaceBetween: 50,
        },
    },
    });
}; 

