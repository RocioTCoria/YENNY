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

var status_act = false
var sub_status = false

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
    if(texto.value.trim() != ""){
        var status = {
            "1" : "entregado",
            "2" : "revision",
            "3" : "correcciones",
            "4" : "feedback",
            "5" : "aprobado"
        }

        if(!status_act){
            status_act = status[texto.value] 
        }else{
            sub_status = texto.value
        }

        console.log(status_act)
        
        switch(status_act){
            case "entregado":
                if(!sub_status){
                    parrafo.innerHTML ='Tu libro ha sido entregado. Ahora, ¿cómo te gustaría continuar?<br><ul><li>¿Cuándo se revisará mi libro?</li><li>¿Puedo hacer cambios mientras está entregado?</li><li>¿Qué ocurre después de la entrega?</li><li>Volver al menu principal</li></ul>'
                }else{
                    switch(sub_status){
                        case "1":
                            parrafo.innerHTML ='Una vez que tu libro esté entregado, el equipo comenzará a revisarlo según el orden de llegada. El proceso puede tardar entre 3 y 7 días hábiles.'
                            break;
                        case "2":
                            parrafo.innerHTML ='No puedes hacer cambios mientras tu libro está entregado. Si necesitas hacer alguna modificación, debes esperar a que pase a la fase de "Correcciones".'
                            break;
                        case "3":
                            parrafo.innerHTML ='Después de la entrega, el equipo de revisión verificará que tu libro cumpla con las pautas de la plataforma. Si todo está en orden, pasará a la siguiente fase: "En revisión".'
                            break;
                        case "4":
                            sub_status = false
                            status_act = false
                            parrafo.innerHTML ='<p >¡Hola! Estoy aquí para ayudarte con el proceso de publicación de tu libro. A continuación, te presento las opciones disponibles. ¿Cómo deseas continuar? </p><ul><li>Entregado</li><li>En revision</li><li>Correcciones</li><li>Feedback</li><li>Aprobado</li></ul>'
                            break;
                            default:
                            parrafo.innerHTML = "Debes ingresar una opcion valida."
                            break;

                    }
                }
            
            break;
            case "revision":
            if(!sub_status){
                    parrafo.innerHTML ='Tu libro está en revisión. A continuación, ¿qué te gustaría saber?<br><ul><li>¿Cuánto tiempo tomará la revisión de mi libro?</li><li>¿Qué revisan exactamente?</li><li>¿Qué pasa si no aprueban mi libro?</li><li>Volver al menu principal</li></ul>'
                }else{
                    switch(sub_status){
                        case "1":
                            parrafo.innerHTML ='La revisión puede tomar entre 3 a 10 días, dependiendo de la carga de trabajo y la complejidad del contenido.'
                            break;
                        case "2":
                            parrafo.innerHTML ='El equipo revisa aspectos como la calidad del contenido, la ortografía, la estructura y el cumplimiento de las políticas de publicación.'
                            break;
                        case "3":
                            parrafo.innerHTML ='Si tu libro no es aprobado, recibirás comentarios detallados sobre los problemas encontrados. Podrás hacer los cambios necesarios y luego enviarlo nuevamente para su revisión.'
                            break;
                        case "4":
                            sub_status = false
                            status_act = false
                            parrafo.innerHTML ='<p >¡Hola! Estoy aquí para ayudarte con el proceso de publicación de tu libro. A continuación, te presento las opciones disponibles. ¿Cómo deseas continuar? </p><ul><li>Entregado</li><li>En revision</li><li>Correcciones</li><li>Feedback</li><li>Aprobado</li></ul>'
                            break;
                            default:
                            parrafo.innerHTML = "Debes ingresar una opcion valida."
                            break;

                    }
                }
            break;
            case "correcciones":
            if(!sub_status){
                    parrafo.innerHTML ='Estás en la fase de correcciones. ¿Cómo puedo ayudarte?<br><ul><li>¿Qué tipo de correcciones puedo hacer?</li><li>¿Tengo un límite de tiempo para hacer las correcciones?</li><li>¿Cómo sabré que mis correcciones fueron aceptadas?</li><li>Volver al menu principal</li></ul>'
                }else{
                    switch(sub_status){
                        case "1":
                            parrafo.innerHTML =' Puedes corregir errores de ortografía, gramática, estilo, o modificar partes del contenido que no cumplan con las pautas de la plataforma.'
                            break;
                        case "2":
                            parrafo.innerHTML ='Tienes un plazo de 7 días para enviar las correcciones. Si no lo haces dentro de ese tiempo, el libro podría volver a la fase de "Entregado".'
                            break;
                        case "3":
                            parrafo.innerHTML ='Una vez enviadas las correcciones, el equipo hará una nueva revisión y te notificará si tu libro pasa a la fase de "Feedback" o si necesitas hacer más ajustes.'
                            break;
                        case "4":
                            sub_status = false
                            status_act = false
                            parrafo.innerHTML ='<p >¡Hola! Estoy aquí para ayudarte con el proceso de publicación de tu libro. A continuación, te presento las opciones disponibles. ¿Cómo deseas continuar? </p><ul><li>Entregado</li><li>En revision</li><li>Correcciones</li><li>Feedback</li><li>Aprobado</li></ul>'
                            break;
                            default:
                            parrafo.innerHTML = "Debes ingresar una opcion valida."
                            break;

                    }
                }
            break;
        case "feedback":
            if(!sub_status){
                    parrafo.innerHTML ='Has recibido feedback sobre tu libro. ¿Qué más te gustaría saber?<br><ul><li>¿Cómo puedo mejorar mi libro según el feedback recibido?</li><li>¿Puedo rechazar el feedback y seguir adelante con la publicación?</li><li>¿Cuánto tiempo tengo para implementar el feedback?</li><li>Volver al menu principal</li></ul>'
                }else{
                    switch(sub_status){
                        case "1":
                            parrafo.innerHTML =' El feedback te indicará áreas específicas de mejora. Te sugerimos que revises tanto el contenido como la estructura y realices las modificaciones necesarias.'
                            break;
                        case "2":
                            parrafo.innerHTML ='El feedback no es obligatorio, pero si decides no hacer los cambios recomendados, tu libro podría no ser aprobado.'
                            break;
                        case "3":
                            parrafo.innerHTML ='Tienes un plazo de 5 a 10 días para implementar el feedback. Después de ese tiempo, el libro será revisado nuevamente.'
                            break;
                        case "4":
                            sub_status = false
                            status_act = false
                            parrafo.innerHTML ='<p >¡Hola! Estoy aquí para ayudarte con el proceso de publicación de tu libro. A continuación, te presento las opciones disponibles. ¿Cómo deseas continuar? </p><ul><li>Entregado</li><li>En revision</li><li>Correcciones</li><li>Feedback</li><li>Aprobado</li></ul>'
                            break;
                            default:
                            parrafo.innerHTML = "Debes ingresar una opcion valida."
                            break;

                    }
                }
            break;
        case "aprobado":
            if(!sub_status){
                    parrafo.innerHTML ='¡Felicidades! Tu libro ha sido aprobado. Ahora, ¿qué necesitas saber?<br><ul><li>¿Cómo se publica mi libro?</li><li>¿Cuándo estará disponible para los lectores?</li><li>¿Puedo hacer cambios después de la aprobación?</li><li>Volver al menu principal</li></ul>'
                }else{
                    switch(sub_status){
                        case "1":
                            parrafo.innerHTML ='Una vez aprobado, tu libro será publicado en la plataforma y estará disponible para su compra o descarga según las opciones que hayas seleccionado.'
                            break;
                        case "2":
                            parrafo.innerHTML ='Generalmente, tu libro estará disponible para los lectores dentro de las 24 a 48 horas siguientes a su aprobación.'
                            break;
                        case "3":
                            parrafo.innerHTML ='Una vez que tu libro ha sido aprobado y publicado, podrás hacer actualizaciones, pero deberán ser revisadas nuevamente por el equipo.'
                            break;
                        case "4":
                            sub_status = false
                            status_act = false
                            parrafo.innerHTML ='<p >¡Hola! Estoy aquí para ayudarte con el proceso de publicación de tu libro. A continuación, te presento las opciones disponibles. ¿Cómo deseas continuar? </p><ul><li>Entregado</li><li>En revision</li><li>Correcciones</li><li>Feedback</li><li>Aprobado</li></ul>'
                            break;
                            default:
                            parrafo.innerHTML = "Debes ingresar una opcion valida."
                            break;

                    }
                }
            break;
            default:
            parrafo.innerHTML = "Lamentablemente, no podemos responder a tu pregunta en este momento. Un operador se pondrá en contacto contigo pronto para ofrecerte la asistencia necesaria y resolver cualquier duda que puedas tener.<br><br>Tenes alguna otra consulta... <br><br> 1. ¿Cuanto tarda esta etapa? <br><br> 2. ¿Tengo que modificar algo en esta etapa? <br><br> 3. Quiero dar de baja mi proceso de revision."
            break;
        }
        
    }else{
        parrafo.innerHTML ='Debes ingresar una opcion valida'
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





