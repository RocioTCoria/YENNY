var propuestas = [{
  
    "escritor":"Jose",
    "Nombre":"Las tres tristes putas",
    "Estado":"Enviado"
},{
    "escritor":"Mono D. Lucy",
    "Nombre":"¿La libertad un tesoro?",
    "Estado":"Revision"
},{
    "escritor":"Gustavo Satorou",
    "Nombre":"La fuerza proviene de ti o de tu nombre",
    "Estado":"Aceptado"
},{
    "escritor":"Juan Carlos Bodoque",
    "Nombre":"No al chocolate",
    "Estado":"Enviado"
},{
    "escritor":"En-cubierto",
    "Nombre":"Cucharon: Misión imposible",
    "Estado":"Revision"
},{
    "escritor":"Cebolla",
    "Nombre":"Una mentira tras capas",
    "Estado":"Aceptado"
}]



window.onload = function () {
            var lista = document.getElementById("lista");

            for (let index = 0; index < propuestas.length; index++) {
                var elemento = document.createElement("li");

                var nombre = document.createElement("h3");
                nombre.textContent = propuestas[index].Nombre || "Título no disponible";
                nombre.classList.add("titulo");
                
                var escritor = document.createElement("p");
                escritor.textContent = "Autor: " + (propuestas[index].escritor || "Escritor no disponible");
                escritor.classList.add("escritor");
                
                var estado = document.createElement("p");

                if (propuestas[index].Estado == "Enviado") {
                    estado.textContent = "Enviado";
                    estado.style.color = "blue";
                }
                if (propuestas[index].Estado == "Revision") {
                    estado.textContent = "Revision";
                    estado.style.color = "red";
                }
                if (propuestas[index].Estado == "Aceptado") {
                    estado.textContent = "Aceptado";
                    estado.style.color = "green";
                }
              
                estado.classList.add("estado");

                var boton = document.createElement("a");
                boton.textContent = "Revisar";
                boton.href = "revisarLibro.html";
                boton.classList.add("boton");

                elemento.appendChild(nombre);
                elemento.appendChild(escritor);
                elemento.appendChild(estado);
                elemento.appendChild(boton);
                elemento.classList.add("Libros");
                
                lista.appendChild(elemento);
            }
        }