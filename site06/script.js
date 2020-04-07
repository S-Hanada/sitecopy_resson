
'use strict';

/* Read All DOMcontent */
document.addEventListener('DOMContentLoaded', function() {

/* Q&A toggle-button */
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

  /* toggle Move active */
  function toggleMove(button, active1, active2) {
    button.addEventListener('click', function() {
      this.classList.toggle('active');
      active1.classList.toggle('active');
      active2.classList.toggle('active');
    });
  }

  /* humburger-menu */
  const humMenu = document.querySelector('.hum-menu');
  const actMenu = document.querySelector('.nav-menu-sp');
  const actBody = document.querySelector('body')

  toggleMove(humMenu, actMenu, actBody);

  /* window resize */
  function resizeMenu() {
    if(actMenu.classList.contains('active')) {
        humMenu.classList.remove('active');
        actMenu.classList.remove('active');
        actBody.classList.remove('active');
    }
  }

  window.addEventListener('resize', resizeMenu);

/* scroll button visible */
  window.addEventListener('scroll', function() {
      const elem = document.querySelector('.top-button');
      const scrollCount = document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollCount > 200) {
        elem.classList.add('active');
      } else {
        elem.classList.remove('active');
      }
  });

/* serachBox toggle */
  const searchBox = document.getElementById('search-box');
  const elemBody = document.querySelector('body');

  function searchEv() {
    if(!searchBox.classList.contains('active')) {
      searchBox.classList.add('active');
    }
    elemBody.addEventListener('click', e => {
      if(e.target !== searchBox) {
        searchBox.classList.remove('active');
      }
    });
  }

  searchBox.addEventListener('click', searchEv);

/* TOPに戻るボタン　*/
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
