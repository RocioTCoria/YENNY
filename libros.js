var libros = [
    {
        "titulo": "Comentarios al Náucrato",
        "escritor": "Tomás Rebord",
        "genero": "Ficción moderna y contemporánea",
        "clave": "Náucrato, Rebord",
        "foto": "https://cdn.glitch.global/c415df93-26cd-4cff-ae62-bb4aeac5282a/9789504985921%201.png?v=1717872699992"
    },
    {
        "titulo": "DUNE",
        "escritor": "Frank Herbert",
        "genero": "Ciencia ficción",
        "clave": "Paul Atreides, Herbert",
        "foto": "https://cdn.glitch.global/c415df93-26cd-4cff-ae62-bb4aeac5282a/0c00cbb74142643771a16065636dd0e3%201.png?v=1717876011623"
    },
    {
        "titulo": "Y por amor y guerrabajo el sol guaraní",
        "escritor": "Gloria V. Casañas",
        "genero": "Novela",
        "clave": "Casañas",
        "foto": "https://cdn.glitch.global/c415df93-26cd-4cff-ae62-bb4aeac5282a/hhhh.png?v=1717884998174"
    },
    {
        "titulo": "Autobiografía de un Yogui",
        "escritor": "ParamaHansa Yogananda",
        "genero": "Biografía",
        "clave": "Yogui",
        "foto": "https://cdn.glitch.global/c415df93-26cd-4cff-ae62-bb4aeac5282a/sfsgg.png?v=1717885013444"
    }
];

window.onload = function() {
    var lista = document.getElementById("lista");
    var originalLibros = [...libros];

    function mostrarLibros(librosFiltrados) {
        lista.innerHTML = "";
        librosFiltrados.forEach(libro => {
            var elemento = document.createElement("li");

            var titulo = document.createElement("h3");
            titulo.textContent = libro.titulo || "Título no disponible";
            titulo.classList.add("titulo");

            var escritor = document.createElement("p");
            escritor.textContent = "Escritor: " + (libro.escritor || "No disponible");
            escritor.classList.add("escritor");

            var genero = document.createElement("p");
            if (libro.genero) {
                genero.textContent = "Género: " + libro.genero;
                genero.classList.add("genero");
            }

            var palabrasClave = document.createElement("p");
            if (libro.clave) {
                palabrasClave.textContent = "Palabras clave: " + libro.clave;
                palabrasClave.classList.add("palabras-clave");
            }

            var img = document.createElement("img");
            img.src = libro.foto;
            img.alt = libro.titulo || "Imagen no disponible";
            img.classList.add("foto");

            // Botón "Comprar"
            var boton = document.createElement("a");
            boton.textContent = "Comprar";
            boton.href = "compra.html";
            boton.classList.add("boton");

            // Botón "Estatus"
            var botonEstatus = document.createElement("a");
            botonEstatus.href = "statusWriter.html";
            var botonInterno = document.createElement("button");
            botonInterno.id = "estatus";
            botonInterno.textContent = "Estatus";
            botonEstatus.appendChild(botonInterno);

            // Añadir elementos al contenedor
            elemento.appendChild(titulo);
            elemento.appendChild(escritor);
            if (libro.genero) elemento.appendChild(genero);
            if (libro.clave) elemento.appendChild(palabrasClave);
            elemento.appendChild(boton); // Botón "Comprar"
            elemento.appendChild(botonEstatus); // Botón "Estatus"
            elemento.appendChild(img); // Imagen

            // Añadir la clase para estilos
            elemento.classList.add("Libros");
            lista.appendChild(elemento);
        });
    }

    function filtrarLibros() {
        var nombre = document.getElementById("idNombre").value.toLowerCase().trim();
        var autor = document.getElementById("idAutor").value.toLowerCase().trim();
        var genero = document.getElementById("idGenero").value.toLowerCase().trim();
        var clave = document.getElementById("idClave").value.toLowerCase().trim();

        var librosFiltrados = originalLibros.filter(libro => {
            return (!nombre || libro.titulo.toLowerCase().includes(nombre)) &&
                   (!autor || libro.escritor.toLowerCase().includes(autor)) &&
                   (!genero || libro.genero.toLowerCase().includes(genero)) &&
                   (!clave || libro.clave.toLowerCase().includes(clave));
        });

        mostrarLibros(librosFiltrados);
    }

    // Mostrar todos los libros al cargar la página
    mostrarLibros(originalLibros);

    // Añadir evento al botón de filtrar
    document.getElementById("filtrar").addEventListener("click", filtrarLibros);
};
