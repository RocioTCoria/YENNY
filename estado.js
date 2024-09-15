var propuestas = [
    {
        "escritor": "Jose",
        "Nombre": "Las tres tristes putas",
        "Estado": "Enviado"
    },
    {
        "escritor": "Mono D. Lucy",
        "Nombre": "¿La libertad un tesoro?",
        "Estado": "Revision"
    },
    {
        "escritor": "Gustavo Satorou",
        "Nombre": "La fuerza proviene de ti o de tu nombre",
        "Estado": "Aceptado"
    },
    {
        "escritor": "Juan Carlos Bodoque",
        "Nombre": "No al chocolate",
        "Estado": "Enviado"
    },
    {
        "escritor": "En-cubierto",
        "Nombre": "Cucharon: Misión imposible",
        "Estado": "Revision"
    },
    {
        "escritor": "Cebolla",
        "Nombre": "Una mentira tras capas",
        "Estado": "Aceptado"
    }
];

window.onload = function () {
    var lista = document.getElementById("lista");
    var botonFiltrar = document.getElementById("filtrar");

    // Función para renderizar las propuestas
    function renderizarPropuestas(propuestasFiltradas) {
        lista.innerHTML = ''; // Limpia la lista existente

        for (let index = 0; index < propuestasFiltradas.length; index++) {
            var elemento = document.createElement("li");

            var nombre = document.createElement("h3");
            nombre.textContent = propuestasFiltradas[index].Nombre || "Título no disponible";
            nombre.classList.add("titulo");

            var escritor = document.createElement("p");
            escritor.textContent = "Autor: " + (propuestasFiltradas[index].escritor || "Escritor no disponible");
            escritor.classList.add("escritor");

            var estado = document.createElement("p");

            if (propuestasFiltradas[index].Estado == "Enviado") {
                estado.textContent = "Enviado";
                estado.style.color = "blue";
            }
            if (propuestasFiltradas[index].Estado == "Revision") {
                estado.textContent = "Revision";
                estado.style.color = "red";
            }
            if (propuestasFiltradas[index].Estado == "Aceptado") {
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

    // Renderiza todas las propuestas inicialmente
    renderizarPropuestas(propuestas);

    // Evento de filtrado
    botonFiltrar.onclick = function () {
        var filtroNombre = document.getElementById("idNombre").value.toLowerCase();
        var filtroAutor = document.getElementById("idAutor").value.toLowerCase();
        var filtroGenero = document.getElementById("idGenero").value.toLowerCase();
        var filtroClave = document.getElementById("idClave").value.toLowerCase();

        var propuestasFiltradas = propuestas.filter(function (propuesta) {
            var coincideNombre = propuesta.Nombre.toLowerCase().includes(filtroNombre);
            var coincideAutor = propuesta.escritor.toLowerCase().includes(filtroAutor);
            var coincideGenero = !filtroGenero || propuesta.Nombre.toLowerCase().includes(filtroGenero);
            var coincideClave = !filtroClave || propuesta.Nombre.toLowerCase().includes(filtroClave);

            return coincideNombre && coincideAutor && coincideGenero && coincideClave;
        });

        renderizarPropuestas(propuestasFiltradas);
    };
}
