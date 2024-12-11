<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');
//error_reporting(0);

$nombre_catalogo="300_Espalda";
$categoria="Espalda";

$catalogo = array();
array_push($catalogo, array("CL301","Dominadas con peso asistido"));
//array_push($catalogo, array("CL302","Aparato para remo horizontal biangular P/I"));
array_push($catalogo, array("CL303","Aparato para jalones sentado P/I"));
array_push($catalogo, array("CL304","Aparato para Hiperextension P/I"));
array_push($catalogo, array("CL305","Aparato para remo horizontal biangular P/L"));
array_push($catalogo, array("CL306","Aparato para jalones de espalda biangular P/L"));
array_push($catalogo, array("CL307","Aparato para remo 'T'"));
array_push($catalogo, array("CL308","Banco para Hiperextension"));
//array_push($catalogo, array("CL309","Aparato para jalones biangular P/I"));
array_push($catalogo, array("CL311","Aparato para remo al piso articulado P/L"));
array_push($catalogo, array("CL312","Aparato para jalones de espalda con mov Asistido P/L"));
array_push($catalogo, array("CL313","Remo horizontal movimiento asistido P/L"));/**/
array_push($catalogo, array("CL314","Aparato para jalones de espalda inclinadao biangular P/L"));

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