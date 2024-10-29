var libros = [
    {
        "titulo": "Comentarios al Náucrato",
        "escritor": "Tomás Rebord",
        "genero": "Ficción moderna y contemporánea",
        "precio": "$10.000",
        "foto": "https://cdn.glitch.global/c415df93-26cd-4cff-ae62-bb4aeac5282a/9789504985921%201.png?v=1717872699992"
    },
    {
        "titulo": "DUNE",
        "escritor": "Frank Herbert",
        "genero": "Ciencia ficción",
        "precio": "$100.000",
        "foto": "https://cdn.glitch.global/c415df93-26cd-4cff-ae62-bb4aeac5282a/0c00cbb74142643771a16065636dd0e3%201.png?v=1717876011623"
    },
    {
        "titulo": "Boku no Hero",
        "escritor": "Kōhei Horikoshi",
        "genero": "Novela",
        "precio": "$28.000",
        "foto": "img/Sin título-1.png"
    },
    {
        "titulo": "Autobiografía de un Yogui",
        "escritor": "ParamaHansa Yogananda",
        "genero": "Biografía",
        "precio": "$200.000",
        "foto": "https://cdn.glitch.global/c415df93-26cd-4cff-ae62-bb4aeac5282a/sfsgg.png?v=1717885013444"
    },
    {
        "titulo": "La Lección de August",
        "escritor": "Raquel Palacio",
        "genero": "Novela",
        "precio": "$50.000",
        "foto": "img/leccion.png"
    },
    {
        "titulo": "Una Apuesta de Amor",
        "escritor": "Lynn Painter",
        "genero": "Novela",
        "precio": "$25.500",
        "foto": "img/apuesta.png"
    }
];

window.onload = function() {
    var lista = document.getElementById("lista");
    var originalLibros = [...libros]; // Copia del array original
    var librosFiltrados = originalLibros; // Para almacenar los libros filtrados temporalmente

    // Función para mostrar los libros en la lista
    function mostrarLibros(librosAMostrar) {
        lista.innerHTML = ""; // Limpiar la lista
        librosAMostrar.forEach((libro, index) => {
            var elemento = document.createElement("li");
            var contiene = document.createElement("div");
            var soloimg = document.createElement("div");

            var titulo = document.createElement("h3");
            titulo.textContent = libro.titulo || "Título no disponible";
            titulo.classList.add("titulo");

            var escritor = document.createElement("p");
            escritor.textContent = libro.escritor || "No disponible";
            escritor.classList.add("escritor");

            var genero = document.createElement("p");
            genero.textContent = libro.genero || "Género no disponible";
            genero.classList.add("genero");

            var precio = document.createElement("p");
            precio.textContent = libro.precio || "Precio no disponible";
            precio.classList.add("precio");

            var img = document.createElement("img");
            img.src = libro.foto;
            img.alt = libro.titulo || "Imagen no disponible";
            img.classList.add("foto");

            var boton = document.createElement("a");
            boton.textContent = "Comprar";
            boton.href = "compra.html?" + index;
            boton.classList.add("boton");

            elemento.appendChild(titulo);
            elemento.appendChild(escritor);
            elemento.appendChild(genero);
            elemento.appendChild(precio);
            elemento.appendChild(boton);

            contiene.classList.add("Contenedor");
            contiene.appendChild(elemento);
            contiene.appendChild(soloimg);

            soloimg.classList.add("Imagensola");
            soloimg.appendChild(img);

            elemento.classList.add("Libros");
            lista.appendChild(contiene);
        });
    }

    // Función para autocompletar mientras se escribe
    function autocompletar(inputId, sugerenciasId, tipo) {
        var input = document.getElementById(inputId);
        var sugerenciasDiv = document.getElementById(sugerenciasId);
        var valorInput = input.value.toLowerCase().trim();

        // Filtrar sugerencias basadas en el tipo (titulo o escritor)
        var sugerencias = originalLibros
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

    // Mostrar todos los libros inicialmente
    mostrarLibros(originalLibros);

    // Evento input para mostrar las sugerencias mientras se escribe
    document.getElementById("idNombre").addEventListener("input", function() {
        autocompletar("idNombre", "sugerenciasNombre", "titulo");
    });

    document.getElementById("idAutor").addEventListener("input", function() {
        autocompletar("idAutor", "sugerenciasAutor", "escritor");
    });

    // Evento click en el botón "Filtrar" para mostrar los resultados filtrados
    document.getElementById("filtrar").addEventListener("click", function() {
        var nombre = document.getElementById("idNombre").value.toLowerCase().trim();
        var autor = document.getElementById("idAutor").value.toLowerCase().trim();
        var genero = document.getElementById("idGenero").value;

        librosFiltrados = originalLibros.filter(libro =>
            (!nombre || libro.titulo.toLowerCase().includes(nombre)) &&
            (!autor || libro.escritor.toLowerCase().includes(autor)) &&
            (!genero || libro.genero === genero)
        );

        if (librosFiltrados.length === 0) {
            mostrarPopUp();
        } else {
            mostrarLibros(librosFiltrados); // Mostrar solo los libros filtrados al hacer clic
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
    // PANTALLA CERRAR SESION

    document.getElementById("Inicio").addEventListener("click", function() {
        document.getElementById("avisodesesion").style.display = "block";
    });
    
    document.getElementById("positivo").addEventListener("click", function() {
        window.location.href = "usuario.html";
    });
    
    document.getElementById("negativo").addEventListener("click", function() {
        document.getElementById("avisodesesion").style.display = "none";
    });
};



// Función para mostrar y ocultar la notificación
function Aviso() {
    var notificacion = document.getElementById("notificacion");
    if (notificacion.style.display === "none" || notificacion.style.display === "") {
        notificacion.style.display = "block";
    } else {
        notificacion.style.display = "none";
    }


}

// ANIMACIÓN

setTimeout(function() {

    document.getElementById('loading').classList.add('fade-out');
    
    
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('contenidoPrincipal').style.display = 'block';
    }, 200);
}, 3000);

