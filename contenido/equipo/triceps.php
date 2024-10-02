<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');
//error_reporting(0);

$nombre_catalogo="600_Triceps";
$categoria="Triceps";

$catalogo = array();
array_push($catalogo, array("CL601","Aparato para tríceps sentado P/I"));
array_push($catalogo, array("CL602","Aparato para triceps para Fondos P/I")); /* ACTUALIZAR FOTO */
array_push($catalogo, array("CL603","Aparato para tríceps sentado articulado P/I"));
array_push($catalogo, array("CL604","Aparato para tríceps para fondos P/L"));
array_push($catalogo, array("CL605","Aparato para triceps para Fondos movimiento asistido peso libre"));/*agregado*/
array_push($catalogo, array("CL606","Aparato para extension de triceps P/L"));/**/
array_push($catalogo, array("CL607","Aparato para triceps para fondos mov. asistido P/L"));



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