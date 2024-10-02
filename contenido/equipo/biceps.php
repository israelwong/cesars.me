<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');
//error_reporting(0);

$nombre_catalogo="700_Biceps";
$categoria="Biceps";

$catalogo = array();
array_push($catalogo, array("CL701","Banco para Curl Scott"));
array_push($catalogo, array("CL702","Aparato para bíceps agarre en 'Z' P/I"));
array_push($catalogo, array("CL703","Aparato para bíceps agarre para mov. Sopino P/I"));/**/
array_push($catalogo, array("CL704","Aparato para bíceps agarre en 'V' P/L"));
array_push($catalogo, array("CL706","Aparato para bíceps agarre ind. P/I"));
array_push($catalogo, array("CL707","Aparato para bíceps mov. Asistido P/I"));

$alt = substr($nombre_catalogo, 4, strlen($nombre_catalogo));
?>

<div class="container-fluid">
    <div class="row hidden-sm hidden-xs">
        <div class="col-md-12">
            <div class="bs-glyphicons"> 
                <ul class="bs-glyphicons-list"> 
                <?php foreach ($catalogo as $equipo){ ?>
                    
                    <li> 
                        <div class="img-responsive">
                            <h4><?php echo $equipo[0] ?> </h4>
                            <p><?php echo $equipo[1] ?></p>
                            <img class="img-responsive" src="images/equipos/<?php echo $nombre_catalogo."/".$equipo[0]?>.jpg" alt="<?php echo $alt ?>">
                            <div class="caption">
                                <button class="btn_agregar btn btn-info btn-sm" data-name="<?php echo $equipo[0] ?>" data-target="<?php echo $categoria ?>">
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
    
    <div class="row visible-sm visible-xs">
        <div class="col-md-12">
            <div class="bs-glyphicons-movil"> 
                <ul class="bs-glyphicons-list-movil"> 
                <?php foreach ($catalogo as $equipo){ ?>
                    
                    <li> 
                        <h4><?php echo $equipo[0] ?> </h4>
                        <p><?php echo $equipo[1] ?></p>
                        <img class="img-responsive" src="images/equipos/<?php echo $nombre_catalogo."/".$equipo[0]?>.jpg" alt="<?php echo $alt ?>">
                        <button class="btn_agregar btn btn-info btn-sm" data-name="<?php echo $equipo[0] ?>" data-target="<?php echo $categoria ?>">
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