function formulario() {
     marca = document.getElementById("inputMarca").value.length;
     modelo = document.getElementById("inputModelo").value.length;
     pantalla = document.getElementById("inputPantalla").value.length;
     rom = document.getElementById("inputRom").value.length;
     ram = document.getElementById("inputRam").value.length;
     titulo = document.getElementById("tituloAnuncio").value.length;
     vendedor = document.getElementById("inputVendedor").value.length;
     telefono = document.getElementById("inputTelefono").value.length;
     descripcion = document.getElementById("textAreaDescripcion").value.length;
     descripcion2 = document.getElementById("textAreaDescripcion2").value.length;
     precio = document.getElementById("inputPrecio").value.length;    
     imagen = document.getElementById("subirImagenes").value.length;
     imagen2 = document.getElementById("subirImagenes2").value.length;
     radios = document.getElementsByTagName('input');
     radioSeleccionado = null;
     
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            // get value, set checked flag or do whatever you need to
            radioSeleccionado = radios[i].value;
        }
    }

    console.log(imagen2);

    if (descripcion == 0 || imagen2 == 0) {
        if (descripcion2 == 0 || imagen == 0) {
            swal({
                title: "Error!",
                text: "Faltan campos que llenar o son incorrectos!",
                icon: "warning",
            });
        } else {
            validarFormulario();
        }
    } else {
        validarFormulario();
    }
}


function validarFormulario() {
    if (marca == 0 || modelo == 0 || pantalla == 0 || rom == 0 || ram == 0 || titulo == 0 || vendedor == 0 || telefono == 0
        || precio == 0 || radioSeleccionado == null ) {
        swal({
            title: "Error!",
            text: "Faltan campos que llenar o son incorrectos!",
            icon: "warning",
        });
    } else {
        swal({
            title: "Éxito!",
            text: "El formulario se llenó correctamente!",
            icon: "success",
        });
        $('#nuevoModal').modal('hide')
    }
}

function cancelar() {
    $('#nuevoModal').modal('hide')
    limpiarFormulario();
}

function limpiarFormulario() {
    document.getElementById("#nuevoModal").reset();
  }
