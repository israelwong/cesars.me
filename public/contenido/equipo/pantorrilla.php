<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');

$nombre_catalogo = "100_Pantorrilla";
$categoria = "Pantorrilla";

$catalogo = [
    ["CL101", "Aparato para pantorrilla sentado P/L"],
    ["CL102", "Aparato para pantorrilla, de pie con 100 Kg."],
    ["CL103", "Aparato para pantorrilla tipo Donkey inclinado P/L"],
    ["CL104", "Aparato para pantorrilla sentado P/I"],
    ["CL105", "Aparato para tibiales P/L"], /* ACTUALIZA FOTOGRAFÍA */
    ["CL106", "Aparato para pantorrilla AD P/L"]
];

$alt = substr($nombre_catalogo, 4, strlen($nombre_catalogo));

function generateItemHtml($equipo, $nombre_catalogo, $alt, $categoria) {
    return '
    <li>
        <div class="img-responsive">
            <h4>' . htmlspecialchars($equipo[0]) . '</h4>
            <p>' . htmlspecialchars($equipo[1]) . '</p>
            <img class="img-responsive" src="images/equipos/' . htmlspecialchars($nombre_catalogo . "/" . $equipo[0]) . '.jpg" alt="' . htmlspecialchars($alt) . '">
            <div class="caption">
                <button class="btn_agregar btn btn-info btn-sm" data-name="' . htmlspecialchars($equipo[0]) . '" data-target="' . htmlspecialchars($categoria) . '">
                    Agregar a cotizacion <span class="glyphicon glyphicon-plus-sign"></span>
                </button>
                <button class="btn_detalles btn btn-sm">
                    <span class="glyphicon glyphicon-pencil"></span>
                </button>
            </div>
        </div>
    </li>';
}

?>

<div class="container-fluid">
    <div class="row hidden-sm hidden-xs">
        <div class="col-md-12">
            <div class="bs-glyphicons">
                <ul class="bs-glyphicons-list">
                    <?php foreach ($catalogo as $equipo) {
                        echo generateItemHtml($equipo, $nombre_catalogo, $alt, $categoria);
                    } ?>
                </ul>
            </div>
        </div>
    </div>

    <div class="row visible-sm visible-xs">
        <div class="col-md-12">
            <div class="bs-glyphicons-movil">
                <ul class="bs-glyphicons-list-movil">
                    <?php foreach ($catalogo as $equipo) {
                        echo generateItemHtml($equipo, $nombre_catalogo, $alt, $categoria);
                    } ?>
                </ul>
            </div>
        </div>
    </div>
</div>