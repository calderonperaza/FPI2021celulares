$(document).ready(function () {
  $(".sidenav").sidenav();
});

$(document).ready(function () {
  $("select").formSelect();
});

$(document).ready(function () {
  $(".tooltipped").tooltip();
});

$(".dropdown-trigger").dropdown();

$(document).ready(function () {
  $(".collapsible").collapsible();
});

$(document).ready(function () {
  $(".modal").modal();
});

$(".chips").chips();

$(function () {
  $("#rateYo").rateYo({
    rating: 4.0,
  });
});
$(function () {
  $("#rateYo2").rateYo({
    rating: 4.0,
  });
});
$(function () {
  $("#rateYo3").rateYo({
    rating: 4.0,
  });
});
$(function () {
  $("#rateYo4").rateYo({
    rating: 4.0,
  });
});
$(function () {
  $("#rateYo5").rateYo({
    rating: 4.0,
  });
});
$(function () {
  $("#rateYo6").rateYo({
    rating: 4.0,
  });
});
$(function () {
  $("#rateYo7").rateYo({
    rating: 4.0,
  });
});
$(function () {
  $("#rateYo8").rateYo({
    rating: 4.0,
  });
});
$(function () {
  $("#rateYo9").rateYo({
    rating: 4.0,
  });
});

$(document).ready(function () {
  $("input#input_text, textarea#textarea2").characterCounter();
});

$("#textarea1").val("Descripción breve...");
M.textareaAutoResize($("#textarea1"));

$(".dropify").dropify();

function cerrarModal() {
  $("#modal1").modal("close");
  M.toast({ html: "Se ha cancelado la creacion del anuncio!" });
}

function guardarModal() {
  $("#modal1").modal("close");
  M.toast({ html: "Anuncio creado con exito!" });
}

function cerrarSidenav() {
  $(".sidenav").sidenav("close");
}

$(document).ready(function () {
  $(".collapsible").collapsible();
});

function cerrarModal2() {
  $("#modal2").modal("close");
  M.toast({ html: "Se ha cancelado la creacion del anuncio!" });
}

function guardarModal2() {
  $("#modal2").modal("close");
  M.toast({ html: "Anuncio creado con exito!" });
}

function guardarCompra() {
  M.toast({ html: "Compra agregada al carrito!" });
}

$(document).ready(function () {
  $(".carousel").carousel({ fullWidth: true, indicators: true });
});

window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider"), {
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    dots: ".dots",
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
  });
});
