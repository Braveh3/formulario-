<?php

require_once('conexion.php');

function insertarRegistro()
{


//    echo 'Entro bien';

global $con;

$UserName= $_POST ['name'];
$UserEmail= $_POST ['correo'];
$UserApellido= $_POST ['apellido'];
$UserDni= $_POST ['dni'];
$Userfecha= $_POST ['fecha'];
$UserContrasena= $_POST ['contraseña'];
$UserRepetir= $_POST ['repetir'];


$query= "insert into datos (nombre, apellido, dni, correo, fecha_nacimiento, contraseña, repetir) values('$UserName', '$UserApellido', '$UserDni', '$UserEmail', str_to_date('$Userfecha', '%d/%m/%Y'), '$UserContrasena', '$UserRepetir')  ";

$result= mysqli_query($con,$query);

        if($result)
        {
            echo ' El registro se creo exitosamente';
        }
        else
        {
            echo 'Por favor chequear la Query';
        }




}





?>