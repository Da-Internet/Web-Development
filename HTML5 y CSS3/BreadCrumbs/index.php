<?php
/*session_start();*/
$rol = "Alumno"; //$_SESSION['rol'];
$nombre = "Diego Alberto Canto Ricardez"; //$_SESSION['nombre'];*/
?>
<!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" href="bootstrap5/css/bootstrap.min.css">
  <script src="bootstrap5/js/bootstrap.min.js"></script>
  <script>
    $(document).on('click', '.dropdown-menu', function(e) {
      e.stopPropagation();
    });
  </script>
</head>

<body>

  <div class="container">
    <?php include('menu801.php') ?>

    <nav aria-label="breadcrumb">

      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Inicio</li>
      </ol>

    </nav>

    <h1>Inicio</h1>

  </div>
  
</body>

</html>