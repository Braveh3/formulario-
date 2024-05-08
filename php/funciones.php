<?php

require_once('conexion.php');

function insertarRegistro()
{


//    echo 'Entro bien';

global $con;

$UserName= $_POST ['Uname'];
$UserEmail= $_POST ['Ucorreo'];
$UserApellido= $_POST ['Uapellido'];
$UserDni= $_POST ['Udni'];
$Userfecha= $_POST ['Ufecha'];
$UserContrasena= $_POST ['Ucontra'];
$UserRepetir= $_POST ['Urepetir'];


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