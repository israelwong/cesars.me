<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');
//error_reporting(0);

$nombre_catalogo="900_Varios";
$categoria="Varios";

$catalogo = array();
//array_push($catalogo, array("CL901","Estación de fondos y levantamiento de piernas"));
array_push($catalogo, array("CL902","Banco multiusos con respaldo ajustable"));
array_push($catalogo, array("CL903","Banco multiusos horizontal"));
array_push($catalogo, array("CL904","Banco a 90 grados para hombro"));
array_push($catalogo, array("CL905","Banco inclinado para bíceps"));
array_push($catalogo, array("CL906","Banco inclinado para cristos"));
array_push($catalogo, array("CL909","Rack con 30 mancuernas de 1 - 40 Kg."));
array_push($catalogo, array("CL910","Rack para discos olímpicos"));
array_push($catalogo, array("CL912","Barra olímpica semi-profesional"));
array_push($catalogo, array("CL913","Barra olímpica en 'Z'"));
array_push($catalogo, array("CL914","Jaula de 9 estaciones con accesorios y 600 Kg."));
array_push($catalogo, array("CL915","Disco olímpico de 2.5, 5, 10, 15, 20 Kg ($ x Kg)"));
array_push($catalogo, array("CL918","Multigym 16 estaciones"));
array_push($catalogo, array("CL919","Banco peso muerto"));
array_push($catalogo, array("CL920","Soporte para barra olimpica y 'Z'"));
array_push($catalogo, array("CL921","Aparato smith doble accion"));
array_push($catalogo, array("CL922","Aparato multifuncional P/L"));
array_push($catalogo, array("CL923","Escalera sin fin"));
array_push($catalogo, array("CL924","Eliptica PRECOR"));
array_push($catalogo, array("CL925","Corredora life fitness 95TI"));
array_push($catalogo, array("CL927","Eliptica PRECOR AMT"));

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