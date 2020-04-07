
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
