var libros = [{

    "titulo":"Comentarios al Náucrato",
    "escritor":"Tomás Rebord",
    "genero":"Ficción moderna y contemporánea",
    "tapa": "Dura",
    "precio":"$ 23000",
    "lugar" : "Yenny santa fe",
    "foto":"https://cdn.glitch.global/c415df93-26cd-4cff-ae62-bb4aeac5282a/9789504985921%201.png?v=1717872699992"
},
{
    "titulo":"DUNE",
    "escritor":"Frank Herbert",
    "genero":"Ciencia ficción",
    "tapa": "Dura",
    "precio": "$100.000",
    "lugar" : "Av. Corrientes 3247",
    "foto":"https://cdn.glitch.global/c415df93-26cd-4cff-ae62-bb4aeac5282a/0c00cbb74142643771a16065636dd0e3%201.png?v=1717876011623"
},    
{
    "titulo": "Boku no Hero",
    "escritor": "Kōhei Horikoshi",
    "genero": "Novela",
    "tapa": "Dura",
    "precio": "$28.000",
    "lugar" : "Yenny santa fe",
    "foto": "img/Sin título-1.png"
},
{
    "titulo": "Autobiografía de un Yogui",
    "escritor": "ParamaHansa Yogananda",
    "genero": "Biografía",
    "tapa": "Dura",
    "precio": "$200.000",
    "lugar" : "Av. Corrientes 3247",
    "foto": "https://cdn.glitch.global/c415df93-26cd-4cff-ae62-bb4aeac5282a/sfsgg.png?v=1717885013444"
},
{
    "titulo": "La Lección de August",
    "escritor": "Raquel Palacio",
    "genero": "Novela",
    "tapa": "Dura",
    "precio": "$50.000",
    "lugar" : "Av. Corrientes 3247",
    "foto": "img/leccion.png"
},
{
    "titulo": "Una Apuesta de Amor",
    "escritor": "Lynn Painter",
    "genero": "Novela",
    "tapa": "Dura",
    "precio": "$25.500",
    "lugar" : "Yenny santa fe",
    "foto": "img/apuesta.png"
},
{
    "titulo": "Los Tres Chanchitos",
    "escritor": "Joseph Jacobs",
    "genero": "Infantil",
    "tapa": "Dura",
    "precio": "$6000",
    "lugar" : "Av. Corrientes 3247",
    "foto": "img/los3chanchitos.jpg"
},
{
    "titulo": "Dumbo",
    "escritor": "Helen Aberson",
    "genero": "Infantil",
    "tapa": "Dura",
    "precio": "$8000",
    "lugar" : "Yenny santa fe",
    "foto": "img/dumbo.jpg"
}
];

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
        escritor.textContent = element.escritor
    if(genero)
        genero.textContent = "Género: " + element.genero
    if(tapa)
        tapa.textContent = "Tapa: " + element.tapa
    if(lugar)
        lugar.textContent = "Lugar: " + element.lugar
    if(precio)
        precio.innerHTML= element.precio
    if(pago_value && pago_id)
        pago_id.innerHTML= "Tipo de pago: " + pago_value
    if(envio_value && envio_id)
        envio_id.innerHTML= "Tipo de envio: " + envio_value
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

function confirma() {

    alert("Su compra se ha realizado. ¡Disfrute su libro!")
}
