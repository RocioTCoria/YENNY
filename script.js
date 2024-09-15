var usuarios = [

{
    "mail":"jose@gmail.com",
    "contraseña":"123",
    "rol":1

},
{
    "mail":"Rocio@gmail.com",
    "contraseña":"123",
    "rol":2

} ,
{
    "mail":"camilap@gmail.com",
    "contraseña":"123",
    "rol":2

},
{
    "mail":"camimansilo@gmail.com",
    "contraseña":"123",
    "rol":2
}

]

function Ingresar(){
    var mail = document.getElementById("floatingInput").value;
    var contraseña = document.getElementById("floatingPassword").value;
    var login = document.getElementById("login");
    var Error = document.getElementById("emailError");
    var Error2 = document.getElementById("contraseñaError");

    if (mail.includes('@')) {

        Error.style.display = 'none';

    } else {

        Error.style.display = 'block';
    }

    if (contraseña.length<1) {

        Error2.style.display = 'none';

    } else {

        Error2.style.display = 'block';
    }

    for (let index = 0; index < usuarios.length; index++) {
        if (usuarios[index].contraseña == contraseña && usuarios[index].mail ==  mail  ) {
            if (usuarios[index].rol==1) {
                login.setAttribute('action' , 'pagautor.html')
            }
            if (usuarios[index].rol==2) {
                login.setAttribute('action' , 'pagempleado.html')
            }
            login.submit();
            return; 
        }
        
    }

}

// register.html //

function Registro() {

    var nombreR= document.getElementById("firstName").value;
    var apellidoR = document.getElementById("lastName").value;
    var mailregistro = document.getElementById("floatingInput").value;
    var contraseñaR = document.getElementById("floatingPassword");

    var Errorregistro = document.getElementById("emailError");
    var ErrorG = document.getElementById("errorGeneral");

    var RegistroValido = true;

    if (mailregistro.includes('@')) { 

        Errorregistro.style.display = 'none';

    } else {

        Errorregistro.style.display = 'block';
    }

    if (nombreR === "" || apellidoR === "" || mailregistro === "" || contraseñaR === "") {  // "" esta vacio; || (significa OR) si alguno de los campos esta vacio el resultado es true.
        
        ErrorG.style.display = 'block';
        RegistroValido = false; // como el campo es true y esta vacio, necesitamos que sean completados por lo tanto salta el mensaje

    } else {

        ErrorG.style.display = 'none';
    }

    if (RegistroValido) {
        window.location.href = "pagautor.html";
    }
}

