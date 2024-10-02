<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');
//error_reporting(0);

$nombre_catalogo="200_Muslos";
$categoria="Muslos";

$catalogo = array();
array_push($catalogo, array("CL201","Rack para sentadillas"));
array_push($catalogo, array("CL202","Banco para Sissy Squat"));
array_push($catalogo, array("CL203","Aparato para sentadilla perfecta P/L"));
array_push($catalogo, array("CL206","Aparato para Hack Squat articulado P/L"));
array_push($catalogo, array("CL209","Press de pierna deslizable con baleros lin. P/I"));
array_push($catalogo, array("CL210","Press de pierna articulado inclinado P/L"));
array_push($catalogo, array("CL211","Press de pierna articulado Sentado P/L"));
array_push($catalogo, array("CL212","Aparato para extensión de piernas P/I"));/**/
array_push($catalogo, array("CL213","Aparato para extensión de piernas mov. Ind. P/L"));
array_push($catalogo, array("CL214","Aparato para Curl femoral acostado P/I"));
array_push($catalogo, array("CL215","Aparato para Curl femoral sentado P/I"));/**/
array_push($catalogo, array("CL216","Aparato para Curl femoral inclinado P/I"));
array_push($catalogo, array("CL217","Aparato para contraccion de glúteos P/I"));
array_push($catalogo, array("CL218","Aparato para glúteo posc. patada con baleros lin. P/I"));
array_push($catalogo, array("CL219","Aparato para aductores P/I"));
array_push($catalogo, array("CL220","Aparato para abductores P/I"));
array_push($catalogo, array("CL221","Aparato para aductores-abductores. P/I"));
array_push($catalogo, array("CL223","Aparato para Hack Squat articulado P/I"));
array_push($catalogo, array("CL224","Aparato para curl femoral acostado peso libre"));
//array_push($catalogo, array("CL224","Aparato para Curl femoral acostado P/L"));
array_push($catalogo, array("CL225","Aparato para press de pierna isolateral P/L"));
array_push($catalogo, array("CL226","Aparato para extension de piernas P/L"));
array_push($catalogo, array("CL227","Aparato para press de pierna horizontal articulado P/L"));
array_push($catalogo, array("CL228","Aparato para press de pierna 45° plataforma artic. P/L"));
array_push($catalogo, array("CL229","Aparato para Curl femoral sentado P/L"));
array_push($catalogo, array("CL230","Aparato para Curl Femoral inclinado P/L"));
array_push($catalogo, array("CL232","Aparato para extension de piernas mov. Asistido P/I"));/**/
array_push($catalogo, array("CL233","Contractor de glúteo horizontal invertido Mov. Asistido P/I"));
array_push($catalogo, array("CL234","Hack Squat inclinado con Ruedas de Nylamid P/L"));/**/
//array_push($catalogo, array("CL235","Banco P/gluteo Posición patada invertido Ruedas Nylamid"));
array_push($catalogo, array("CL236","Prensa vertical"));/**/
array_push($catalogo, array("CL237","Aparato para gluteo posición patada inveertido balero lineal"));/**/
array_push($catalogo, array("CL238","Aparato para curl femoral sentado movimiento asistido peso includo"));
array_push($catalogo, array("CL239","Contractor de gluteo elevación de cadera"));
array_push($catalogo, array("CL240","Sentadilla con arnes"));/**/
array_push($catalogo, array("CL241","Press de pierna horizontal con movimiento asistido"));/*  ACTUALIZA FOTOGRAFÍA*/
array_push($catalogo, array("CL242","Press de pierna isolateral inclinado"));/**/
array_push($catalogo, array("CL243","Press de pierna 45º Isolataral con plataforma articulada peso libre"));

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