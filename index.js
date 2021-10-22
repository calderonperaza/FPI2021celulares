
function ajustarTamanio() {
    var panelDerecho = document.getElementById("columnader");
    var tamanioder = panelDerecho.clientWidth
    var x = document.getElementById("columnaizq");
    if (tamanioder <= 599) {
        $("#columnaizq > div").detach()
        .appendTo('#canvasizquierda');
        x.style.display = "none";
    }
    if (tamanioder>599){
        $("#canvasizquierda > div").detach()
        .appendTo('#columnaizq');
        x.style.display = "block";
    }
}
