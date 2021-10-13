document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var elementos = document.querySelectorAll('.carousel');
    var instancia = M.Carousel.init(elementos);
    
  });
 
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
 
  

