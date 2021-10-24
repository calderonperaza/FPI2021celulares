function ajustarTamanio() {
    var panelDerecho = document.getElementById("colderecha");
    var tamanioder = panelDerecho.clientWidth
    var x = document.getElementById("colizquierda");
    if (tamanioder <= 599) {
        $("#colizquierda > div").detach()
        .appendTo('#canvasizquierda');
        x.style.display = "none";
    }
    if (tamanioder>599){
        $("#canvasizquierda > div").detach()
        .appendTo('#colizquierda');
        x.style.display = "block";
    }
}