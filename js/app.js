$(document).ready(function(){
    $('.sidenav').sidenav();
  });       
  $(document).ready(function(){
    $('select').formSelect();
  });
  $('.dropdown-trigger').dropdown({
    closeOnClick: false,
    coverTrigger:false
  });

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });