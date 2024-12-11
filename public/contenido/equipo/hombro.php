<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');
//error_reporting(0);

$nombre_catalogo="500_Hombro";
$categoria="Hombro";

$catalogo = array();
array_push($catalogo, array("CL501","Banco con plataforma para hombro"));
array_push($catalogo, array("CL503","Aparato para deltoides sentado P/I"));
array_push($catalogo, array("CL504","Aparato para hombros, articulado P/L"));
array_push($catalogo, array("CL505","Aparato para hombros sentado biangular. P/L"));
array_push($catalogo, array("CL506","Aparato para hombros biangular con 2 P/I")); /* ACTUALIZA FOTO */
array_push($catalogo, array("CL507","Aparato para hombros biangular mov. Asistido P/L"));

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