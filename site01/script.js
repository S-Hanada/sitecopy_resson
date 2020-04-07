
$(document).ready(function() {

    /* scroll top */
    $('.top-arrow').click(function() {
      $('body, html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });

  /* SP-menu */
  $(function() {
    $('.main-nav-sp').click(function() {
      if($(this).hasClass("active")){
        $(this).removeClass("active");
      } else {
        $(this).addClass("active");
      }
    });
  });
