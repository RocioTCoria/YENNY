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
    var originalLibros = [...libros];

    function mostrarLibros(librosFiltrados) {

        lista.innerHTML = ""; 
        librosFiltrados.forEach((libro,index) => {

            var elemento = document.createElement("li");
            var contiene = document.createElement("div");
            var soloimg = document.createElement("div");

            var titulo = document.createElement("h3");
            titulo.textContent = libro.titulo || "Título no disponible";
            titulo.classList.add("titulo");

            var escritor = document.createElement("p");
            escritor.textContent = (libro.escritor || "No disponible");
            escritor.classList.add("escritor");

            var genero = document.createElement("p");
            if (libro.genero) {
                genero.textContent = libro.genero;
                genero.classList.add("genero");
            }

            var precio = document.createElement("p");
            if (libro.precio) {
                precio.textContent = libro.precio;
                precio.classList.add("precio");
            }

            var img = document.createElement("img");
            img.src = libro.foto;
            img.alt = libro.titulo || "Imagen no disponible";
            img.classList.add("foto");

            var boton = document.createElement("a");
            boton.textContent = "Comprar";
            boton.href = "compra.html?"+index;
            boton.classList.add("boton");

            elemento.appendChild(titulo);
            elemento.appendChild(escritor);
            if (libro.genero) elemento.appendChild(genero);
            if (libro.precio) elemento.appendChild(precio);
            elemento.appendChild(boton);
            
            contiene.classList.add("Contenedor");
            contiene.appendChild(elemento);
            contiene.appendChild(soloimg);

            soloimg.classList.add("Imagensola");
            soloimg.appendChild(img);

            // Añadir la clase para estilos
            elemento.classList.add("Libros");
            lista.appendChild(contiene);
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

    
    mostrarLibros(originalLibros);

    document.getElementById("filtrar").addEventListener("click", filtrarLibros);

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

setTimeout(function() {

    document.getElementById('loading').classList.add('fade-out');
    
    
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('contenidoPrincipal').style.display = 'block';
    }, 200);
}, 3000);

