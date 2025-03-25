<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');

$nombre_catalogo = "800_Abdomen";
$categoria = "Abdomen";

$catalogo = array();

array_push($catalogo, array("CL801", "Aparato para doble crunch P/I"));
array_push($catalogo, array("CL802", "Aparato para contracción de abdomen con P/I."));
array_push($catalogo, array("CL803", "Aparato para contracción de abdomen P/L"));
array_push($catalogo, array("CL804", "Aparato para torso P/I"));
array_push($catalogo, array("CL806", "Tabla 'A' para crunches"));
array_push($catalogo, array("CL807", "Tabla 'AB' para crunches"));
array_push($catalogo, array("CL808", "Twister doble"));
array_push($catalogo, array("CL809", "Tabla para abdomen graduable AB"));
array_push($catalogo, array("CL810", "Tabla para contracción de abdomen P/L"));
array_push($catalogo, array("CL811", "Banco para contracción de abdomen y lev. de piernas"));
array_push($catalogo, array("CL812", "Estación de fondos y lev de piernas"));
array_push($catalogo, array("CL813", "Aparato para contracción circular de abdomen P/L"));

$alt = substr($nombre_catalogo, 4, strlen($nombre_catalogo));

?>

<div class="container-fluid">
    <!-- DESKTOP -->
    <div class="row hidden-sm hidden-xs">
        <div class="col-md-12">
            <div class="bs-glyphicons">
                <ul class="bs-glyphicons-list">
                    <?php foreach ($catalogo as $equipo) { ?>
                    <li>
                        <div class="img-responsive">
                            <h4><?php echo $equipo[0] ?></h4>
                            <p><?php echo $equipo[1] ?></p>
                            <img class="img-responsive"
                                src="images/equipos/<?php echo $nombre_catalogo . "/" . $equipo[0] ?>.jpg"
                                alt="<?php echo $alt ?>">
                            <div class="caption">
                                <button class="btn_agregar btn btn-info btn-sm" data-name="<?php echo $equipo[0] ?>"
                                    data-target="<?php echo $categoria ?>">
                                    Agregar a cotización <span class="glyphicon glyphicon-plus-sign"></span>
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

    <!-- MOVIL -->
    <div class="row visible-sm visible-xs">
        <div class="col-md-12">
            <div class="bs-glyphicons-movil">
                <ul class="bs-glyphicons-list-movil">
                    <?php foreach ($catalogo as $equipo) { ?>
                    <li>
                        <h4><?php echo $equipo[0] ?> </h4>
                        <p><?php echo $equipo[1] ?></p>
                        <img class="img-responsive"
                            src="images/equipos/<?php echo $nombre_catalogo . "/" . $equipo[0] ?>.jpg"
                            alt="<?php echo $alt ?>">
                        <button class="btn_agregar btn btn-info btn-sm" data-name="<?php echo $equipo[0] ?>"
                            data-target="<?php echo $categoria ?>">
                            Agregar a cotización <span class="glyphicon glyphicon-plus-sign"></span>
                        </button>
                        <button class="btn_detalles btn btn-sm">
                            <span class="glyphicon glyphicon-pencil"></span>
                        </button>
                    </li>
                    <?php } ?>
                </ul>
            </div>
        </div>
    </div>
</div>