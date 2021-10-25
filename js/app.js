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


  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

  btnCrear = document.getElementById('crear').addEventListener('click',()=>{
    alert('Anuncio Guardado');
    setTimeout(() => {
      location.href="http://localhost:5500"
    }, 3000);
      
  })