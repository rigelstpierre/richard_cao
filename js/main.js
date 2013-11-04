$( document ).ready(function() {

  $('#weddings').click(function() {
    $('.wedding').fadeIn();
    $('.portraights, .family').fadeOut();
  });

  $('#portraights').click(function() {
    $('.portraights').fadeIn();
    $('.wedding, .family').fadeOut();
  });

  $('#family').click(function() {
    $('.family').fadeIn();
    $('.portraights, .wedding').fadeOut();
  });

  $('#contact').click(function() {
    if ($(this).hasClass('contact-active')){
      $(this).removeClass('contact-active');
      $('.contact').fadeOut();
    }
    else{
      $(this).addClass('contact-active');
      $('.contact').fadeIn();
    }
   });
});
