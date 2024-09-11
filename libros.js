var libros = [{
  
    "titulo":"Comentarios al Náucrato",
    "escritor":"Tomás Rebord",
    "genero":"Ficción moderna y contemporánea",
    "clave":"Naucrato, Rebord",
    "foto":"https://cdn.glitch.global/c415df93-26cd-4cff-ae62-bb4aeac5282a/9789504985921%201.png?v=1717872699992"
},{
    "titulo":"DUNE",
    "escritor":"Frank Herbert",
    "genero":"Ciencia ficción",
    "clave":"Paul Atreides, Hebert",
    "foto":"https://cdn.glitch.global/c415df93-26cd-4cff-ae62-bb4aeac5282a/0c00cbb74142643771a16065636dd0e3%201.png?v=1717876011623"
},{
    "titulo":"Y por amor y guerrabajo el sol guaraní",
    "escritor":"Gloria V. Casañas",
    "genero":"Novela",
    "clave":"Casañas",
    "foto":"https://cdn.glitch.global/c415df93-26cd-4cff-ae62-bb4aeac5282a/hhhh.png?v=1717884998174"
},{
    "titulo":"Autobiagrafía de un Yogui",
    "escritor":"ParamaHansa Yogananda",
    "genero":"Biografía",
    "clave":"Yogui",
    "foto":"https://cdn.glitch.global/c415df93-26cd-4cff-ae62-bb4aeac5282a/sfsgg.png?v=1717885013444"
}]



window.onload = function(){

    var lista = document.getElementById("lista");
    for (let index = 0; index < libros.length; index++) { // variable "index" valor 0 | "libros.length" devuelve el número de elementos en el array "libros" | "index++"" incrementa el valor de index en 1
        var elemento = document.createElement("li");
        
        var titulo = document.createElement("h3");
        titulo.textContent = libros[index].titulo || "Título no disponible"; // libros[index].titulo: Esto accede al titulo del objeto que se encuentra en la posición index del array libros.
        titulo.classList.add("titulo");                                // la doble linea (||) es para agregar informacion en el caso de que no exista ese contenido, null, undefined
    
        var escritor = document.createElement("p");
        escritor.textContent = "Escritor: " + (libros[index].escritor || "No disponible");
        escritor.classList.add("escritor");
    
        var genero = document.createElement("p");
        if (libros[index].genero) {
            genero.textContent = "Género: " + libros[index].genero;
            genero.classList.add("genero");
        }
    
        var palabrasClave = document.createElement("p");
        if (libros[index].clave) {
            palabrasClave.textContent = "Palabras clave: " + libros[index].clave;
            palabrasClave.classList.add("palabras-clave");
        }
    
        var img = document.createElement("img");
        img.src = libros[index].foto;
        img.alt = libros[index].titulo || "Imagen no disponible";
        img.classList.add("foto");
    
        
        var boton = document.createElement("a");
       boton.textContent="Comprar";
       boton.href="compra.html";
       boton.classList.add("boton");
       
       elemento.appendChild(titulo);
       elemento.appendChild(escritor);
       if (libros[index].genero) elemento.appendChild(genero);
       if (libros[index].clave) elemento.appendChild(palabrasClave);
       elemento.appendChild(boton);
       elemento.appendChild(img);
    
       elemento.classList.add("Libros");
       lista.appendChild(elemento);
}


}

function Aviso() {

        var notificacion = document.getElementById("notificacion");
        if (notificacion.style.display === "none" || notificacion.style.display === "") {

                notificacion.style.display = "block";

        } 
        else {

                notificacion.style.display = "none";
            }
        }

// COMPRA.HTML //

window.onload = function() {
    var btn = document.getElementById("agregarDomicilioBtn");
    if (btn) {  
        btn.addEventListener("click", function() {
            console.log("Botón presionado");
            var domicilioForm = document.getElementById("formDomicilio");

            if (domicilioForm.style.display === "none" || domicilioForm.style.display === "") {
                domicilioForm.style.display = "block";
            } else {
                domicilioForm.style.display = "none";
            }
        });
    }
};


function UnaVez(clickedId) {

    var checkboxes = document.querySelectorAll('#formEntrega input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        if (checkbox.id !== clickedId) {

            checkbox.disabled = document.getElementById(clickedId).checked;
        }
    });
}

function Otravez(clickedId) {

    var checkboxes = document.querySelectorAll('#formPago input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        if (checkbox.id !== clickedId) {

            checkbox.disabled = document.getElementById(clickedId).checked;
        }
    });
}
