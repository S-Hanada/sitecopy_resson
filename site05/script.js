
'use strict';

/* Q&A toggle-button */
document.addEventListener('DOMContentLoaded', function() {

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


document.addEventListener('DOMContentLoaded', function() {

  const elem = document.querySelector('.top-button');

  /* scroll button visible */
  window.addEventListener('scroll', function() {
      const scrollCount = document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollCount > 200) {
        elem.classList.add('active');
      } else {
        elem.classList.remove('active');
      }
  }, false);

  /* scroll button footer wait */
  window.addEventListener('scroll', () => {
      const elem = document.querySelector('.top-button');
      const docHeight = document.body.clientHeight;
      const scrollCount = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollPos = document.documentElement.clientHeight + scrollCount;
      const footerHeight = document.querySelector('footer').clientHeight;
      if (docHeight - scrollPos <= footerHeight) {
        elem.style.position = 'absolute';
        elem.style.bottom = footerHeight + 20 + 'px';
        elem.style.transition = 'initial';
      } else {
        elem.style.position = 'fixed';
        elem.style.bottom = 20 + 'px';
      }
      // console.log(scrollCount);
  });


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

/*humberger menu */
jQuery(function() {

  const navSp = $('.nav-sp');

  $('.hum-menu-sp').on('click', function() {
    navSp.slideToggle();
    return false;
  });
  $('body').on('click', function(e) {
    if(!$(e.target).closest('.nav-sp').length) {
      navSp.slideUp();
    }
  });
});

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
