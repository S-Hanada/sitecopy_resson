
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
