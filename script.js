document.addEventListener('DOMContentLoaded', function() {
    
    /**
     * Inicializando SideNav
     */
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    /**
     * Inicializando select
     */
     var elems1 = document.querySelectorAll('select');
     var instances2 = M.FormSelect.init(elems1);


    /**
     * imprimiento cards
     */
    var phones = document.getElementById('phones');
    var elementos ='';
    for (var i = 0; i < 9; i++) {
      elementos+='<div class="card col s3 offset-s1 rounded0">\
                  <div class="card-image waves-effect waves-block waves-light">\
                    <img class="activator" src="images/s21.jpg" height="250">\
                  </div>\
                  <div class="card-content">\
                    <span class="card-title activator grey-text text-darken-4">SmartPhone <a class="btn-floating btn-small waves-effect waves-light red right"><i class="material-icons">add_shopping_cart</i></a></span>\
                    <p><a href="#">Mas información</a></p>\
                  </div>\
                  <div class="card-reveal">\
                    <span class="card-title grey-text text-darken-4">smartPhone<i class="material-icons right">close</i></span>\
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>\
                  </div>\
                </div>'
    }

    phones.innerHTML=elementos;
  });