document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var elementos = document.querySelectorAll('.carousel');
    var instancia = M.Carousel.init(elementos);
    var elemento = document.querySelectorAll('select');
    var instancias = M.FormSelect.init(elemento);
    
  });
 
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
 
  

