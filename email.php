<?php

$nombre = $_GET['nombre'];
$telefono = $_GET['telefono'];
$email = $_GET['email'];
$msg = $_GET['msg'];

if ($email == "") return;

$asunto = "WEB Cesars";

//para el envío en formato HTML
$headers = "MIME-Version: 1.0\r\nContent-type: text/html; charset=iso-8859-1\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

//dirección del remitente
$headers .= "From: CSS <" . $email . ">\r\n";

//direcci—n de respuesta, si queremos que sea distinta que la del remitente
$headers .= "Reply-To: " . $email . " \r\n";

$salida = '';
$salida .= '<p>Nombre: ' . mb_convert_encoding($nombre, 'ISO-8859-1', 'UTF-8') . '<p>';
$salida .= '<p>Tel.: ' . mb_convert_encoding($telefono, 'ISO-8859-1', 'UTF-8') . '<p>';
$salida .= '<p>Correo electrónico.: ' . mb_convert_encoding($email, 'ISO-8859-1', 'UTF-8') . '<p>';
$salida .= '<p>Mensaje: ' . mb_convert_encoding($msg, 'ISO-8859-1', 'UTF-8') . '<br>';

//mail('ing.israel.wong@gmail.com',$asunto,$salida,$headers);
mail('cesaraseprof@hotmail.com', $asunto, $salida, $headers);
//echo true;