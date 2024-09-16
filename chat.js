// El array original de libros
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

function mostrar(){
    var notificacion = document.getElementById("chatBox");
    var input = document.getElementById("chatInput")
    if (notificacion.style.display === "none" || notificacion.style.display === "") {
        notificacion.style.display = "block";
        input.style.display = "block";
    } else {
        notificacion.style.display = "none";
        input.style.display = "none";
    }
}


function enviarResp(){
    var texto = document.getElementById("chat")
    var box = document.getElementById("chatBox")
    var parrafo = document.createElement("p")
    parrafo.classList.add("person");
    parrafo.textContent =texto.value
    box.appendChild(parrafo)
    var parrafo = document.createElement("p")
    parrafo.classList.add("bot");
    
    switch(texto.value){
        case "1":
        parrafo.innerHTML ="Queremos informarte que actualmente se encuentra en proceso de revisión. Este proceso toma aproximadamente 5 días.</br>Agradecemos tu paciencia y comprensión.Si tienes alguna pregunta adicional, no dudes en contactarnos.<br><br>Tenes alguna otra consulta... <br><br> 1. ¿Cuanto tarda esta etapa? <br><br> 2. ¿Tengo que modificar algo en esta etapa? <br><br> 3. Quiero dar de baja mi proceso de revision."
        break;
        case "2":
        parrafo.innerHTML ="En este momento, no es necesario que realices ninguna acción adicional. Nuestro equipo está revisando tu libro y, si surge alguna necesidad o requerimiento, nos pondremos en contacto contigo directamente.</br>Agradecemos tu paciencia y comprensión.<br><br>Tenes alguna otra consulta... <br><br> 1. ¿Cuanto tarda esta etapa? <br><br> 2. ¿Tengo que modificar algo en esta etapa? <br><br> 3. Quiero dar de baja mi proceso de revision."
        break;
        case "3":
        parrafo.innerHTML = "Queremos informarte que hemos iniciado el proceso de baja según tu solicitud. Un operador se pondrá en contacto contigo en breve para proporcionarte más información y asistirte en lo que necesites.<br><br>Tenes alguna otra consulta... <br><br> 1. ¿Cuanto tarda esta etapa? <br><br> 2. ¿Tengo que modificar algo en esta etapa? <br><br> 3. Quiero dar de baja mi proceso de revision."
        default:
        parrafo.innerHTML = "Lamentablemente, no podemos responder a tu pregunta en este momento. Un operador se pondrá en contacto contigo pronto para ofrecerte la asistencia necesaria y resolver cualquier duda que puedas tener.<br><br>Tenes alguna otra consulta... <br><br> 1. ¿Cuanto tarda esta etapa? <br><br> 2. ¿Tengo que modificar algo en esta etapa? <br><br> 3. Quiero dar de baja mi proceso de revision."
        break;
    }
    box.appendChild(parrafo)
    box.scrollTop = box.scrollHeight;
    texto.value="";
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





