function goToCarga(){
	window.location.href = 'cargarLibro.html'
}

function goToCheck(){
	window.location.href = 'revisarLibro.html'
}

function goToStatusEditor(){
	window.location.href = 'status.html'
}

function goToStatusWriter(){
	window.location.href='statusWriter.html'	
}

function cargarLibro(event){
    event.preventDefault();
    alert("su libro fue cargado exitosamente")
    return goToStatusWriter();
}

// Función para mostrar y ocultar la notificación
function Aviso() {
    var notificacion = document.getElementById("notificacion");
    if (notificacion.style.display === "none" || notificacion.style.display === "") {
        notificacion.style.display = "block";
    } else {
        notificacion.style.display = "none";
    }


}