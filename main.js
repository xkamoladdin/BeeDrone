const swiperBig = new Swiper('.swiperBig', {
    // Optional parameters

    loop: true,
    slidesPerView: 5,
    spaceBetween: 36,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
