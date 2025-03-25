<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');
//error_reporting(0);

$nombre_catalogo = "500_Hombro";
$categoria = "Hombro";

$catalogo = array(
    array("CL501", "Banco con plataforma para hombro"),
    array("CL503", "Aparato para deltoides sentado P/I"),
    array("CL504", "Aparato para hombros, articulado P/L"),
    array("CL505", "Aparato para hombros sentado biangular. P/L"),
    array("CL506", "Aparato para hombros biangular con 2 P/I"), /* ACTUALIZA FOTO */
    array("CL507", "Aparato para hombros biangular mov. Asistido P/L")
);

$alt = htmlspecialchars(substr($nombre_catalogo, 4, strlen($nombre_catalogo)), ENT_QUOTES, 'UTF-8');
?>

<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            <div
                class="bs-glyphicons <?php echo (strpos($_SERVER['HTTP_USER_AGENT'], 'Mobile') !== false) ? 'bs-glyphicons-movil' : ''; ?>">
                <ul
                    class="bs-glyphicons-list <?php echo (strpos($_SERVER['HTTP_USER_AGENT'], 'Mobile') !== false) ? 'bs-glyphicons-list-movil' : ''; ?>">
                    <?php foreach ($catalogo as $equipo) { 
                    $equipo_code = htmlspecialchars($equipo[0], ENT_QUOTES, 'UTF-8');
                    $equipo_desc = htmlspecialchars($equipo[1], ENT_QUOTES, 'UTF-8');
                ?>
                    <li>
                        <div class="img-responsive">
                            <h4><?php echo $equipo_code; ?> </h4>
                            <p><?php echo $equipo_desc; ?></p>
                            <img class="img-responsive"
                                src="images/equipos/<?php echo $nombre_catalogo . "/" . $equipo_code; ?>.jpg"
                                alt="<?php echo $alt; ?>">
                            <div class="caption">
                                <button class="btn_agregar btn btn-info btn-sm" data-name="<?php echo $equipo_code; ?>"
                                    data-target="<?php echo $categoria; ?>">
                                    Agregar a cotizacion <span class="glyphicon glyphicon-plus-sign"></span>
                                </button>
                                <button class="btn_detalles btn btn-sm">
                                    <span class="glyphicon glyphicon-pencil"></span>
                                </button>
                            </div>
                        </div>
                    </li>
                    <?php } ?>
                </ul>
            </div>
        </div>
    </div>
</div>