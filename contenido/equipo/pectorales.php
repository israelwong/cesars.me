<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');
//error_reporting(0);

$nombre_catalogo="400_Pectorales";
$categoria="Pectorales";

$catalogo = array();
array_push($catalogo, array("CL401","Aparato Peck Deck P/I"));
array_push($catalogo, array("CL402","Aparato Peck Fly P/I"));
array_push($catalogo, array("CL403","Aparato Cross Over con doble tiro de poleas 4 P/I"));
array_push($catalogo, array("CL405","Banco inclinado articulado para pectorales P/L"));
array_push($catalogo, array("CL409","Press Pectoral sentado horizontal biangular P/L"));
array_push($catalogo, array("CL410","Press Pectoral sentado inclinado biangular P/L"));
array_push($catalogo, array("CL411","Press Pectoral sentado declinado biangular P/L"));
array_push($catalogo, array("CL412","Banco horizontal para pectorales"));
array_push($catalogo, array("CL413","Banco inclinado para pectorales"));
array_push($catalogo, array("CL414","Banco declinado para pectorales"));
//array_push($catalogo, array("CL415","Aparato para pectorales Pull Over P/L"));
//array_push($catalogo, array("CL416","Press Pectoral horizontal biangular Lx P/L"));
array_push($catalogo, array("CL418","Press pectorales inclinado mov. Asistido P/L"));
array_push($catalogo, array("CL419","Press pectorales horizontal mov. Asistido P/L"));
array_push($catalogo, array("CL420","Banco horizontal biangular para pectorales P/L C/Rotulas"));

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