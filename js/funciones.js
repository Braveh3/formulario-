$(document).ready(function(){
    // alert ("HOLA"); 
    Insertar_registro();
    // Mostrar_registro();
    // Obtener_registr();
    // Actualizar_registro();
    // Eliminar_registro();
})

function Insertar_registro(){
    $(document).on("click",'#funka',function(){
        var user = $('#nombre').val();
        var username = $('#apellido').val();
        var indenty = $('#dni').val();
        var date = $('fecha').val();
        var email = $('#correo').val();
        var passw = $('#contraseña').val();

        if (user == '' || username == '' || indenty == '' || date == '' || email == '' || passw == ''){
            $('#message').html('LLenar los campos en blanco');
        } else {
            $.ajax(
                {
                    url: 'insertar.php' ,
                    method: 'POST' ,
                    data: {
                        nombre: user,
                        apellido: username,
                        dni: indenty,
                        fecha: date,
                        correo: email,
                        contraseña: passw
                    },
                    success: function(data){
                        // Handle the server response here
                    }

            })
        }
    })
}