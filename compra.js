var libros = [{
  
    "titulo":"Comentarios al Náucrato",
    "escritor":"Tomás Rebord",
    "genero":"Ficción moderna y contemporánea",
    "clave":"Naucrato, Rebord",
    "tapa": "Dura",
    "precio":"$ 23000",
    "lugar" : "Yenny santa fe",
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

    var index = window.location.href.split('?').pop()
    var element =libros[index]
    var imagen = document.getElementById("imagen")
    var titulo = document.getElementById("titulo")
    var escritor = document.getElementById("escritor")
    var genero = document.getElementById("genero")
    var tapa = document.getElementById("tapa")
    var lugar = document.getElementById("lugar")
    var precio = document.getElementById("precio")

    imagen.src = element.foto
    titulo.textContent = element.titulo
    escritor.textContent = "Escritor: " + element.escritor
    genero.textContent = "Genero:" + element.genero
    tapa.textContent = "tapa: " + element.tapa
    lugar.textContent = "Lugar: " + element.lugar
    precio.innerHTML= "<b>" + element.precio + "</b>"



}

function comprar(){
  alert("su compra se proceso con exito")
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

