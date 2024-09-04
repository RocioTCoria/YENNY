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

    for (let index = 0; index < usuarios.length; index++) {
        if (usuarios[index].contraseña = contraseña && usuarios[index].mail ==  mail  ) {
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
    alert("Error");

}

// Error de Inicio de Sesion //

function Ingresar () {

    var faltantearroba = document.getElementById("floatingInput").value;

    if (faltantearroba) {

        
    }
}



