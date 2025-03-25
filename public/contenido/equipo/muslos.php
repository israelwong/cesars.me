<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');

$nombre_catalogo = "200_Muslos";
$categoria = "Muslos";

$catalogo = array(
    array("CL201", "Rack para sentadillas"),
    array("CL202", "Banco para Sissy Squat"),
    array("CL203", "Aparato para sentadilla perfecta P/L"),
    array("CL206", "Aparato para Hack Squat articulado P/L"),
    array("CL209", "Press de pierna deslizable con baleros lin. P/I"),
    array("CL210", "Press de pierna articulado inclinado P/L"),
    array("CL211", "Press de pierna articulado Sentado P/L"),
    array("CL212", "Aparato para extensión de piernas P/I"),
    array("CL213", "Aparato para extensión de piernas mov. Ind. P/L"),
    array("CL214", "Aparato para Curl femoral acostado P/I"),
    array("CL215", "Aparato para Curl femoral sentado P/I"),
    array("CL216", "Aparato para Curl femoral inclinado P/I"),
    array("CL217", "Aparato para contraccion de glúteos P/I"),
    array("CL218", "Aparato para glúteo posc. patada con baleros lin. P/I"),
    array("CL219", "Aparato para aductores P/I"),
    array("CL220", "Aparato para abductores P/I"),
    array("CL221", "Aparato para aductores-abductores. P/I"),
    array("CL223", "Aparato para Hack Squat articulado P/I"),
    array("CL224", "Aparato para curl femoral acostado peso libre"),
    array("CL225", "Aparato para press de pierna isolateral P/L"),
    array("CL226", "Aparato para extension de piernas P/L"),
    array("CL227", "Aparato para press de pierna horizontal articulado P/L"),
    array("CL228", "Aparato para press de pierna 45° plataforma artic. P/L"),
    array("CL229", "Aparato para Curl femoral sentado P/L"),
    array("CL230", "Aparato para Curl Femoral inclinado P/L"),
    array("CL232", "Aparato para extension de piernas mov. Asistido P/I"),
    array("CL233", "Contractor de glúteo horizontal invertido Mov. Asistido P/I"),
    array("CL234", "Hack Squat inclinado con Ruedas de Nylamid P/L"),
    array("CL236", "Prensa vertical"),
    array("CL237", "Aparato para gluteo posición patada inveertido balero lineal"),
    array("CL238", "Aparato para curl femoral sentado movimiento asistido peso includo"),
    array("CL239", "Contractor de gluteo elevación de cadera"),
    array("CL240", "Sentadilla con arnes"),
    array("CL241", "Press de pierna horizontal con movimiento asistido"),
    array("CL242", "Press de pierna isolateral inclinado"),
    array("CL243", "Press de pierna 45º Isolataral con plataforma articulada peso libre")
);

$alt = substr($nombre_catalogo, 4, strlen($nombre_catalogo));
?>

<div class="container-fluid">
    <div class="row hidden-sm hidden-xs">
        <div class="col-md-12">
            <div class="bs-glyphicons">
                <ul class="bs-glyphicons-list">
                    <?php foreach ($catalogo as $equipo) { ?>
                    <li>
                        <div class="img-responsive">
                            <h4><?php echo htmlspecialchars($equipo[0]); ?></h4>
                            <p><?php echo htmlspecialchars($equipo[1]); ?></p>
                            <img class="img-responsive"
                                src="images/equipos/<?php echo htmlspecialchars($nombre_catalogo . "/" . $equipo[0]); ?>.jpg"
                                alt="<?php echo htmlspecialchars($alt); ?>">
                            <div class="caption">
                                <button class="btn_agregar btn btn-info btn-sm"
                                    data-name="<?php echo htmlspecialchars($equipo[0]); ?>"
                                    data-target="<?php echo htmlspecialchars($categoria); ?>">
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

    <div class="row visible-sm visible-xs">
        <div class="col-md-12">
            <div class="bs-glyphicons-movil">
                <ul class="bs-glyphicons-list-movil">
                    <?php foreach ($catalogo as $equipo) { ?>
                    <li>
                        <h4><?php echo htmlspecialchars($equipo[0]); ?></h4>
                        <p><?php echo htmlspecialchars($equipo[1]); ?></p>
                        <img class="img-responsive"
                            src="images/equipos/<?php echo htmlspecialchars($nombre_catalogo . "/" . $equipo[0]); ?>.jpg"
                            alt="<?php echo htmlspecialchars($alt); ?>">
                        <button class="btn_agregar btn btn-info btn-sm"
                            data-name="<?php echo htmlspecialchars($equipo[0]); ?>"
                            data-target="<?php echo htmlspecialchars($categoria); ?>">
                            Agregar a cotizacion <span class="glyphicon glyphicon-plus-sign"></span>
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