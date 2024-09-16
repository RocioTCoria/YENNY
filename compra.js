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
    const envio = 1
    const pago = 2
    var array  = window.location.href.split('?')
    var index = array.pop();
    var element =libros[index]
    var pago_value = array[pago]
    var envio_value = array[envio]
    var imagen = document.getElementById("imagen")
    var titulo = document.getElementById("titulo")
    var escritor = document.getElementById("escritor")
    var genero = document.getElementById("genero")
    var tapa = document.getElementById("tapa")
    var lugar = document.getElementById("lugar")
    var precio = document.getElementById("precio")
    var envio_id = document.getElementById("envio")
    var pago_id = document.getElementById("pago")
    if(imagen)
        imagen.src = element.foto
    if(titulo)
        titulo.textContent = element.titulo
    if(escritor)
        escritor.textContent = "Escritor: " + element.escritor
    if(genero)
        genero.textContent = "Genero:" + element.genero
    if(tapa)
        tapa.textContent = "tapa: " + element.tapa
    if(lugar)
        lugar.textContent = "Lugar: " + element.lugar
    if(precio)
        precio.innerHTML= "<b>" + element.precio + "</b>"
    if(pago_value && pago_id)
        pago_id.innerHTML= "<b>Tipo de pago: " + pago_value + "</b>"
    if(envio_value && envio_id)
        envio_id.innerHTML= "<b> Tipo de envio: " + envio_value + "</b>"
}

function detalle(){
    var index = window.location.href.split('?').pop()
    var id= false
    var pago = false
    var checkboxes_envio = document.querySelectorAll('#formEntrega input[type="checkbox"]');
    var checkboxes_pago = document.querySelectorAll('#formPago input[type="checkbox"]');
    checkboxes_envio.forEach((checkbox,index) => {
        if(checkbox.checked){
            id = checkbox.id
        }
    });
    checkboxes_pago.forEach((checkbox,index) => {
        if(checkbox.checked){
            pago = checkbox.id
        }
    });
    if(id && pago)
        window.location.href = "detallesCompra.html?"+ id + "?" + pago +"?" + index;
    else
        alert("debe seleccionar una opcion de envio y una forma de pago")
}

function volver(){
  var index = window.location.href.split('?').pop()
  window.location.href = "compra.html?"+index;
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

