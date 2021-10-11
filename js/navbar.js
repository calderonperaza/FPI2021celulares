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
$(document).ready(function () {
  $(".carousel").carousel();
});

function cerrarSidenav() {
  $(".sidenav").sidenav("close");
  
}
function cerrarModal2() {
  $("#modal2").modal("close");
  M.toast({ html: "Se ha cancelado la creacion del anuncio!" });
}
function guardarModal2() {
  $("#modal2").modal("close");
  M.toast({ html: "Anuncio creado con exito!" });
}
$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});
      