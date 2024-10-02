<?php

$nombre=$_GET['nombre'];
$telefono=$_GET['telefono'];
$email=$_GET['email'];
$msg=$_GET['msg'];
$tot_eq=$_GET['tot_eq'];
$listado = $_GET["listado"];

if($email=="") return;

$asunto = "Cesars: Cotizar Equipos";

//para el envío en formato HTML
$headers = "MIME-Version: 1.0\r\nContent-type: text/html; charset=iso-8859-1\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

//dirección del remitente
$headers .= "From: Cotizar Equipos <".$email.">\r\n";
        
//direcci—n de respuesta, si queremos que sea distinta que la del remitente
$headers .= "Reply-To: ".$email." \r\n";

$salida='';
$salida.= '<p>ASUNTO: COTIZAR EQUIPOS</p><br/>';
$salida.= '<p>Nombre: '.utf8_decode($nombre).'<p>';
$salida.= '<p>Tel.: '.utf8_decode($telefono).'<p>';
$salida.= '<p>Correo electrónico.: '.utf8_decode($email).'<p>';
$salida.= '<p>Mensaje: '.utf8_decode($msg).'<br>';
$salida.= '<p>Total de equipos a cotizar: '.$tot_eq.'<br>';
$salida.= '<p>Modelos a cotizar: '.$listado.'<br>';

//mail('ing.israel.wong@gmail.com',$asunto,$salida,$headers);
mail('juliotonic@hotmail.com',$asunto,$salida,$headers);
//echo true;

?>
