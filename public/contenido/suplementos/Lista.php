<?php
// Lista.php

// Asegúrate de que el archivo CSV esté en la ruta correcta
$csvFilePath = 'suplementos/01092015.csv';

// Verifica si el archivo existe
if (!file_exists($csvFilePath)) {
    die('El archivo CSV no existe.');
}

// Sirve el HTML
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Leer CSV</title>
</head>
<body>
    <h1>Datos del CSV</h1>
    <table id="dataTable">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            fetch('<?php echo $csvFilePath; ?>')
                .then(response => response.text())
                .then(text => processCSV(text))
                .catch(error => console.error('Error al cargar el archivo CSV:', error));
        });

        function processCSV(text) {
            const rows = text.split('\n');
            const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
            tableBody.innerHTML = ''; // Limpiar la tabla antes de agregar nuevos datos

            rows.forEach(row => {
                const cols = row.split(',');
                if (cols.length === 4) { // Asegurarse de que la fila tenga 4 columnas
                    const tr = document.createElement('tr');
                    cols.forEach(col => {
                        const td = document.createElement('td');
                        td.textContent = col.trim();
                        tr.appendChild(td);
                    });
                    tableBody.appendChild(tr);
                }
            });
        }
    </script>
</body>
</html>