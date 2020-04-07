
'use strict';

/* Q&A toggle-button */
document.addEventListener('DOMContentLoaded', function() {

  /* body visible */
  document.querySelector('header > .container').classList.add('visible');

  /* keyvisual title */
  const keyvisH2 = document.querySelector('.keyvisual-title > h2');
  const keyvisP = document.querySelector('.keyvisual-title > p');
  const keyvisButton = document.querySelector('.keyvisual-title > button');

  /* visible*/
  const keyvisAct = (elem) => elem.classList.add('active');

  keyvisAct(keyvisH2);
  keyvisAct(keyvisP);
  keyvisAct(keyvisButton);

  /* button hover transition */
  const keyvisHov = (elem) => {
    keyvisButton.style.transition = .5 + 's';
  };

  keyvisButton.addEventListener('mouseover', {elem: keyvisAct, handleEvent: keyvisHov});

  /* fa-plus-circle active */
  const plusButton = document.querySelector('.fa-plus-circle');
  const subList = document.querySelector('.category-sub-list');

  function togglesys(e) {
    e.preventDefault();
    //thisはaddEventListener関数に渡された第二引数
    this.elemButton.classList.toggle('active');
    this.elemlist.classList.toggle('active');
  }

  //引数のある関数をaddEventListener関数に渡す場合、{}(オブジェクトで渡す)
  plusButton.addEventListener('click', {elemButton: plusButton, elemlist: subList, handleEvent: togglesys});

/* modal-menu open */
  function modal() {
    const bodyFix = document.querySelector('.site-inner');
    const searchBox = document.querySelector('.search-box');
    const modalMenu = document.querySelector('.modal-menu');
    const modalContena = document.querySelector('.modal-menu > .container');
    const modalDt = document.querySelector('.modal-search-box > dt');
    const modalform = document.querySelector('input');
    const modalicon = document.querySelector('.fa-search');
    const closeButton = document.querySelector('.modal-close');

    /* sp-menu */
    const navMenuSp = document.querySelector('.nav-menu-sp');
    const menuButton = document.querySelector('.humburger-sp');
    const menuContena = document.querySelector('.nav-menu-sp > .container');
    const spMenuClose = document.querySelector('.btn-top');
    const spMenuClose2 = document.querySelector('.btn-under');

    /* both menu open */ /* reset scroll */
    function modalAdd(menu, contena, body) {
      if(!this.menu.classList.contains('open')) {
        this.menu.classList.add('open');
        this.contena.classList.add('open');
        this.body.classList.add('open');
        this.menu.scrollTo(0,0);
      }
    }

    function modalRemove(menu, contena, body) {
      if(this.menu.classList.contains('open')) {
        this.menu.classList.remove('open');
        this.contena.classList.remove('open');
        this.body.classList.remove('open');
      }
    }

    /* out of area click function */
    const outRem = (menu, contena, body) => {
      if(menu.classList.contains('open')) {
        menu.classList.remove('open');
        contena.classList.remove('open');
        body.classList.remove('open');
      }
    }

    /* modal-search out of area click */
    function targetClose(e) {
      if(e.target !== this.contena && e.target !== modalform && e.target !== modalicon && e.target !== modalDt) {
        outRem(this.menu, this.contena, this.body);
      }
    }

    /* sp-menu out of area click */
    function menuClose(e) {
      if(e.target === this.menu) {
        outRem(this.menu, this.contena, this.body);
      }
    }

    /* window resize */
    function resizeMenu() {
      outRem(this.menu, this.contena, this.body);
    }

    window.addEventListener('resize', {menu: navMenuSp, contena: menuContena, body: bodyFix, handleEvent: resizeMenu});

    /* modal-search Event */
    searchBox.addEventListener('click', {menu: modalMenu, contena: modalContena, body: bodyFix, handleEvent: modalAdd});
    closeButton.addEventListener('click', {menu: modalMenu, contena: modalContena, body: bodyFix, handleEvent: modalRemove});
    modalMenu.addEventListener('click', {menu: modalMenu, contena: modalContena, body: bodyFix, handleEvent: targetClose});

    /* sp-menu */
    menuButton.addEventListener('click', {menu: navMenuSp, contena: menuContena, body: bodyFix, handleEvent: modalAdd});
    spMenuClose.addEventListener('click', {menu: navMenuSp, contena: menuContena, body: bodyFix, handleEvent: modalRemove});
    spMenuClose2.addEventListener('click', {menu: navMenuSp, contena: menuContena, body: bodyFix, handleEvent: modalRemove});
    navMenuSp.addEventListener('click', {menu: navMenuSp, contena: menuContena, body: bodyFix, handleEvent: menuClose});

  }
  /* modal-start */
  modal();

  /* swiper */
  const swiperArea = document.querySelector('.swiper-area');

  swiperArea.classList.add('load');

  const mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 0,
    centeredSlides: true,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    paginationClickable: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },

    breakpoints: {
      1024: {
        slidesPerView: 4.8,
        centeredSlides: false,
        spaceBetween: 15,
        slidesOffsetBefore: 105,
        slidesOffsetAfter: 105
      },
      768: {
        slidesPerView: 5.1,
        centeredSlides: false,
        spaceBetween: 10,
        slidesOffsetBefore: 85,
        slidesOffsetAfter: 85
      }
    }

  });
});


/* scroll button visible */
document.addEventListener('DOMContentLoaded', function() {

  window.addEventListener('scroll', function() {
      const elem = document.querySelector('.top-button');
      const scrollCount = document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollCount > 200) {
        elem.classList.add('active');
      } else {
        elem.classList.remove('active');
      }
  });

  /* footer visible */
  function scrollfoot() {
    const footerItem = document.querySelector('footer > .container');
    const footerelem = footerItem.getBoundingClientRect().top + window.pageYOffset;
    const scrollCount = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollPos = scrollCount + (window.innerHeight - 200);
    if (scrollPos > footerelem) {
      footerItem.classList.add('visible');
    }
  }

  window.addEventListener('scroll', scrollfoot);

  /* acordion menu */
  const trigger = document.querySelectorAll('.toggle-block');

  for (var i = 0; i < trigger.length; i++) {
    trigger[i].addEventListener('click', function() {
      const tognext = this.nextElementSibling;
      const togchild = this.lastElementChild;
      if (tognext.classList.contains('active')) {
        tognext.classList.remove('active');
        togchild.classList.remove('fa-chevron-up');
      } else {
        tognext.classList.add('active');
        togchild.classList.add('fa-chevron-up');
      }

    });
  }

});

/* TOPに戻るボタン　*/
document.addEventListener('DOMContentLoaded', () => {

  function topButton(elmId, duration) {
    const topButton = document.querySelector(elmId);

    topButton.addEventListener('click', (e) => {

      e.preventDefault(); //ページ遷移キャンセル

      const begin = new Date() - 0;  //new Date()は減算のみミリ秒（数値に）
      const yOffset = window.pageYOffset;
      let timer = setInterval( () => {　 //無名関数
        let current = new Date() - begin; //スクロール時間を数値にし、測定
        if (current > duration) {
            clearInterval(timer);
            current = duration;
        }
        window.scrollTo(0, yOffset * (1 - current / duration))
      }, 10 );　//setIntervalの第二引数
    });
  }
    topButton('.top-button', 700); //関数呼び出し
});

/*
  const Ease = {
    easeInOut: t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1
  }

  const duration = 500;
  const smoothScrollTrigger = document.querySelector('.top-button');

  smoothScrollTrigger.addEventListener('click', function(e) {
    const href = smoothScrollTrigger.getAttribute('href');
    const scrollCount = document.documentElement.scrollTop || document.body.scrollTop;
    const targetElement = document.getElementById(href.replace('#', ''));
    if (targetElement) {

    }
  })
});
*/
