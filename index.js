$(document).ready(function () {
    $('#filtros').sidenav({
        edge: "right"
    });
    $('#sidebar').sidenav();
    $('select').formSelect();
});


$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});