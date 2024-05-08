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
        var passw = $('#pass').val();
        var contrarepetir = $('#reset').val();

        if (user == '' || username == '' || indenty == '' || date == '' || email == '' || passw == '' || contrarepetir == ''){
            $('#message').html('LLenar los campos en blanco');
        } else {
            $.ajax(
                {
                    url: 'insertar.php' ,
                    method: 'POST' ,
                    data: {
                        Unombre: user,
                        Uapellido: username,
                        Udni: indenty,
                        Ufecha: date,
                        Ucorreo: email,
                        Ucontra: passw,
                        Urepetir: contrarepetir

                    },
                    success: function(data){
                        $('#message').html (data);
                        //$('#Mensaje').html ('Se Inserto Bien');
             
                        // $('#Registration').modal ('show');
                        // $('form').trigger ('reset')
                        // Mostrar_registro();
             
                        alert("Entro a la funcion");
                        alert(data);
                    }

            })
        }
    })
}