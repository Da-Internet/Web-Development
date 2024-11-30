<nav class="navbar navbar-expand-lg navbar-light" style="color: black; background-color: yellow;">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Temu</span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.php">Inicio</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias</a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="Vehiculos.php">Vehículos</a></li>
            <li><a class="dropdown-item" href="Supermercado.php">Supermercado</a></li>
            <li><a class="dropdown-item" href="Tecnologia.php">Tecnología</a></li>
            <li><a class="dropdown-item" href="Electrodomesticos.php">Electrodomésticos</a></li>
            <li><a class="dropdown-item" href="Hogar.php">Hogar</a></li>
            <li><a class="dropdown-item" href="Moda.php">Moda</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu 1 </a>

          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">opcion 1</a></li>
            <li><a class="dropdown-item" href="#">opcion 2</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Opcion 3</a></li>
          </ul>

        </li>


      </ul>

      <ul class="nav navbar-nav navbar-right" style="font-size:16px; color: black;background-color:yellow">

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <?php echo strtoupper($rol . " / " . $nombre); ?> </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Perfil</a></li>
            <li><a class="dropdown-item" href="#">Historial de Compras</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Cerrar Sesion</a></li>
          </ul>
        </li>

      </ul>

    </div>
  </div>
</nav>