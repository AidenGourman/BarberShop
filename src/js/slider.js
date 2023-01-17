     var swiper = new Swiper(".mySwiper", {
         speed: 700,
        centeredSlides: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        },
         loop: true,
});