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

        if (user == '' || email == ''){
            $('#message').html('LLenar los campos en blanco');
        } else {
            $.ajax(
                {
                    url: 'insertar.php' ,
                    method: 'POST' ,
                    data: {
                        nombre: user,
                        correo: email
                    },
                    success: function(data){

                    }

            })
        }
    })
}