$(document).ready(function () {
    $(".sidenav").sidenav();


/*         let menus = document.getElementsByClassName("sidenav-trigger");
      for (let i = 0; i < menus.length; i++) {
        menus[i].addEventListener("click", capturar);
      }

      function capturar() {
        if (this.id == "filtro") {
          $(".sidenav").sidenav({ edge: "left",closeOnClick  : true,
  draggable     : true });
          
        } else if (this.id == "menuinicio") {
          $(".sidenav").sidenav({ edge: "right",closeOnClick  : true,
  draggable     : true});
        }
      } */ 
    });
    $(document).ready(function () {
      $("select").formSelect();
    });
    $(document).ready(function () {
      $(".modal").modal();
    });
    $(document).ready(function () {
      var elems = document.querySelectorAll(".modal");
      var instances = M.Modal.init(elems, {
        onOpenEnd: initCarouselModal,
      });

      function initCarouselModal() {
        var elems = document.querySelectorAll(".carousel");
        var instances = M.Carousel.init(elems, { fullWidth: true });
        instances[0].set(2);
      }
    });

    $(document).ready(function(){
        $('.carousel').carousel();
      });    