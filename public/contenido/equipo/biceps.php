<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');

$nombre_catalogo = "700_Biceps";
$categoria = "Biceps";

$catalogo = [
    ["CL701", "Banco para Curl Scott"],
    ["CL702", "Aparato para bíceps agarre en 'Z' P/I"],
    ["CL703", "Aparato para bíceps agarre para mov. Sopino P/I"],
    ["CL704", "Aparato para bíceps agarre en 'V' P/L"],
    ["CL706", "Aparato para bíceps agarre ind. P/I"],
    ["CL707", "Aparato para bíceps mov. Asistido P/I"]
];

$alt = substr($nombre_catalogo, 4, strlen($nombre_catalogo));
?>

<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            <div class="bs-glyphicons">
                <ul class="bs-glyphicons-list">
                    <?php foreach ($catalogo as $equipo) { ?>
                    <li>
                        <div class="img-responsive">
                            <h4><?php echo htmlspecialchars($equipo[0], ENT_QUOTES, 'UTF-8'); ?></h4>
                            <p><?php echo htmlspecialchars($equipo[1], ENT_QUOTES, 'UTF-8'); ?></p>
                            <img class="img-responsive"
                                src="images/equipos/<?php echo htmlspecialchars($nombre_catalogo . "/" . $equipo[0], ENT_QUOTES, 'UTF-8'); ?>.jpg"
                                alt="<?php echo htmlspecialchars($alt, ENT_QUOTES, 'UTF-8'); ?>">
                            <div class="caption">
                                <button class="btn_agregar btn btn-info btn-sm"
                                    data-name="<?php echo htmlspecialchars($equipo[0], ENT_QUOTES, 'UTF-8'); ?>"
                                    data-target="<?php echo htmlspecialchars($categoria, ENT_QUOTES, 'UTF-8'); ?>">
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