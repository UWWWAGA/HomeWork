var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
});

