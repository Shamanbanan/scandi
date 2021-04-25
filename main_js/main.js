const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
spaceBetween: 10,
slidesPerView:1,

    // Navigation arrows
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });