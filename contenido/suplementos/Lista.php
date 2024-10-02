<?php

    error_reporting(E_ALL);
    ini_set('display_errors', 'On');
    error_reporting(0);
    
    require 'PHPExcelReader/PHPExcelReader.php';

    $Reader = new PHPExcelReader('01092015.xls');
    foreach($Reader as $key => $row){
    ?>

    <div class="media hidden-sm hidden-xs">
        <div class="media-left">
            <img src="<?php echo "contenido/suplementos/Productos/thumbs/".$row[0] ?>.jpg">
        </div>
        <div class="media-body">
          <h4 class="media-heading"><?php echo $row[1] ?></h4>
          <p> <?php echo $row[2] ?> </p>
        </div>
    </div>
    
    <div class="media visible-sm visible-xs">
        
        
        
        <div class="text-center">
            <h4 class="media-heading"><?php echo $row[1] ?></h4>
            <img src="<?php echo "contenido/suplementos/Productos/thumbs/".$row[0] ?>.jpg">
        </div>
        <div class="media-body">
          <p> <?php echo $row[2] ?> </p>
        </div>
    </div>

        
    <?php

    }

?>

