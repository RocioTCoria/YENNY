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
            escritor.textContent = propuestasFiltradas[index].escritor || "Escritor no disponible";
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
            boton.classList.add("botonestado");

            elemento.appendChild(nombre);
            elemento.appendChild(escritor);
            elemento.appendChild(estado);
            elemento.appendChild(boton);
            elemento.classList.add("estadoLibros");

            lista.appendChild(elemento);
        }
    }

    // Renderiza todas las propuestas inicialmente
    renderizarPropuestas(propuestas);

    // Función para autocompletar mientras se escribe
    function autocompletar(inputId, sugerenciasId, tipo) {
        var input = document.getElementById(inputId);
        var sugerenciasDiv = document.getElementById(sugerenciasId);
        var valorInput = input.value.toLowerCase().trim();

        // Filtrar sugerencias basadas en el tipo (Nombre o escritor)
        var sugerencias = propuestas
            .map(libro => libro[tipo])
            .filter((valor, indice, arr) => valor.toLowerCase().includes(valorInput) && arr.indexOf(valor) === indice);

        // Mostrar las sugerencias debajo del campo de texto
        sugerenciasDiv.innerHTML = "";
        if (valorInput && sugerencias.length > 0) {
            sugerencias.forEach(sugerencia => {
                var div = document.createElement("div");
                div.textContent = sugerencia;
                div.addEventListener("click", function() {
                    input.value = sugerencia;
                    sugerenciasDiv.innerHTML = "";
                });
                sugerenciasDiv.appendChild(div);
            });
        }
    }

    // Evento input para mostrar las sugerencias mientras se escribe
    document.getElementById("idNombre").addEventListener("input", function() {
        autocompletar("idNombre", "sugerenciasNombre", "Nombre");
    });

    document.getElementById("idAutor").addEventListener("input", function() {
        autocompletar("idAutor", "sugerenciasAutor", "escritor");
    });

    // Evento click en el botón "Filtrar" para mostrar los resultados filtrados
    document.getElementById("filtrar").addEventListener("click", function() {
        var nombre = document.getElementById("idNombre").value.toLowerCase().trim();
        var autor = document.getElementById("idAutor").value.toLowerCase().trim();
        
        // Filtramos las propuestas según el nombre y el autor
        var propuestasFiltradas = propuestas.filter(libro =>
            (!nombre || libro.Nombre.toLowerCase().includes(nombre)) &&
            (!autor || libro.escritor.toLowerCase().includes(autor))
        );

        // Si no hay resultados, mostrar el pop-up
        if (propuestasFiltradas.length === 0) {
            mostrarPopUp();
        } else {
            renderizarPropuestas(propuestasFiltradas); // Mostrar solo las propuestas filtradas
        }
    });

    // Función para mostrar el pop-up
    function mostrarPopUp() {
        var popup = document.getElementById("popup");
        popup.style.display = "block";

        document.getElementById("cerrarPopup").addEventListener("click", function() {
            popup.style.display = "none";
        });
    }
}
