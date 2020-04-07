/* swiper */
  const mySwiper = new Swiper('.swiper-container', {
    direction: 'horizonal',
    loop: true,

    pagination: {
      el: 'swiper-pagination'
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
