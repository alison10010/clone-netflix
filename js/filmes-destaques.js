  /* FILMES POPULARES */
window.onload = function () {
    var swiper = new Swiper(".destaqueSlide", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 10500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: false,
        },
      });
}; 

