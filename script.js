document.addEventListener('DOMContentLoaded', function() {
    
    /**
     * Inicializando SideNav
     */
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    /**
     * Nav
     */
    var nav = document.getElementById('nav');
    var navbar='<nav class="color0">\
                    <div class="nav-wrapper">\
                      <a href="index.html" class="brand-logo truncate hide-on-med-and-down" style="padding: 1px 1.5px;"><span class="material-icons">smartphone</span> Tienda Cellphone</a>\
                      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>\
                      <!----------------------------------------Search para movil----------------------------------------->\
                      <div class="container hide-on-large-only">\
                        <form class="row">\
                          <div class="input-field col s9">\
                            <input id="search-movil" class="header-search-input lighten-2 white" id="search" type="text" class="validate"\
                              placeholder="Search..." />\
                          </div>\
                          <a class=" btn-floating btn-small waves-effect waves-light color5"><i\
                            class="material-icons">search</i></a>\
                        </form>\
                      </div>\
                      <ul id="nav-mobile" class="right hide-on-med-and-down">\
                        <!----------------------------------------Search----------------------------------------->\
                        <li>\
                            <form class="row">\
                                <div class="input-field col s10">\
                                  <input id="search" class="header-search-input lighten-2 white" id="search" type="text" class="validate"\
                                    placeholder="Search..." />\
                                </div>\
                                <a class=" btn-floating btn-medium waves-effect waves-light color5"><i\
                                  class="material-icons">search</i></a>\
                              </form>\
                        </li>\
                        <li><a href="index.html">Inicio</a></li>\
                        <li><a href="estadisticas.html">Estadísticas</a></li>\
                        <li> <a href="nuevo.html" class="btn-floating btn-small waves-effect waves-light color5"><i class="material-icons">add</i></a></li>\
                        <li><a href="#"><span class="material-icons">add_shopping_cart</span></a></li>\
                      </ul>\
                    </div>\
                </nav>';
    
    nav.innerHTML=navbar;

    /**
     * Sidenav
     */

    var sidenav = document.getElementById('mobile-demo');
    var sidebar='<li><a href="index.html">Inicio</a></li>\
                  <li><a href="estadisticas.html">Estadísticas</a></li>\
                  <li><a href="nuevo.html"><span class="material-icons">add_circle</span></a></li>\
                  <li><a href="#"><span class="material-icons">add_shopping_cart</span></a></li>';
    
    sidenav.innerHTML=sidebar;
    
    /**
     * Footer
     */

    var footer = document.getElementById('footer');
    var foot='<div class="container ">\
                <div class="row ">\
                  <div class="col l6 s12">\
                    <h5 class="white-text">Tienda Cellphone</h5>\
                    <p class="grey-text text-lighten-4">The best online store to be in constant communication.</p>\
                  </div>\
                  <div class="col l4 offset-l2 s12">\
                    <h5 class="white-text">Social media</h5>\
                    <ul>\
                      <li><a class="grey-text text-lighten-3" href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>\
                      <li><a class="grey-text text-lighten-3" href="https://www.facebook.com"><i class="fab fa-facebook"></i></a></li>\
                      <li><a class="grey-text text-lighten-3" href="https://www.twitter.com"><i class="fab fa-twitter"></i></a></li>\
                    </ul>\
                  </div>\
                </div>\
              </div>\
              <div class="footer-copyright">\
                <div class="container ">\
                © 2021 Copyright\
                <a class="grey-text text-lighten-4 right" href="#!">More </a>\
                </div>\
              </div>';

    
    footer.innerHTML=foot;

    /**
     * Inicializando select
     */
     var elems1 = document.querySelectorAll('select');
     var instances2 = M.FormSelect.init(elems1);

     /**
      * Inicializando modal
      */

      var elemsModal = document.querySelectorAll('.modal');
      var instancesModal = M.Modal.init(elemsModal);

    /**
     * Inicializando carrusel
     */
    var elemslider = document.querySelectorAll('.slider');
    var instancesslider = M.Slider.init(elemslider);
   
       
    /**
     * imprimiento cards
     */

    var phones = document.getElementById('phones');
    if (phones!==null) {
      var elementos ='';
      for (var i = 0; i < 12; i++) {
        elementos+='<div class="card col s12 m6 l2 rounded0" id="tarjeta">\
                      <div class="card-image waves-effect waves-block waves-light">\
                        <img class="activator" src="images/s21.jpg" height="250">\
                      </div>\
                      <div class="card-content col s12">\
                        <span class="card-title activator grey-text text-darken-4">SmartPhone <a class="btn-floating btn-small waves-effect waves-light red right"><i class="material-icons">add_shopping_cart</i></a></span>\
                        <p><a href="#">Mas información</a></p>\
                      </div>\
                      <div class="card-reveal">\
                        <span class="card-title grey-text text-darken-4">smartPhone<i class="material-icons right">close</i></span>\
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>\
                        <a href="detalle.html">Mas detalles</a>\
                      </div>\
                    </div>'
      }

      phones.innerHTML=elementos;
    }

    
  });