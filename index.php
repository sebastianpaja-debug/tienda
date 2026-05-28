<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Elite Moda</title>
 
  <link rel="stylesheet" href="assets/css/variables.css">
  <link rel="stylesheet" href="assets/css/base.css">
  <link rel="stylesheet" href="assets/css/carrito.css">
  <link rel="stylesheet" href="assets/css/footer.css">
  <link rel="stylesheet" href="assets/css/hero.css">
  <link rel="stylesheet" href="assets/css/login.css">
  <link rel="stylesheet" href="assets/css/modal.css">
  <link rel="stylesheet" href="assets/css/navbar.css">
  <link rel="stylesheet" href="assets/css/productos.css">
  <link rel="stylesheet" href="assets/css/responsive.css">
  <link rel="stylesheet" href="assets/css/toast.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
 
<body>
 
  <div id="views-navbar"></div>
  <div id="views-login"></div>
  <div id="includes-hero"></div>
  <div id="views-productos"></div>
  <div id="includes-footer"></div>
  <div id="views-carrito"></div>
  <div id="views-toast"><div class="toast" id="toast"></div></div>
  <div id="views-modal-producto"></div>
  <div id="views-modal-alerta"></div>
  <div id="views-templates"></div>
 
  <script src="assets/js/database.js"></script>
  <script src="assets/js/ui.js"></script>
  <script src="assets/js/sesion.js"></script>
  <script src="assets/js/carrito.js"></script>
  <script src="assets/js/catalogo.js"></script>
  <script src="assets/js/audio.js"></script>
 
  <script>
    // Carga los archivos parciales e inicializa los scripts
    const parciales = [
      { id: "views-navbar",         src: "views/navbar.phtml" },
      { id: "views-login",          src: "views/login.phtml" },
      { id: "includes-hero",           src: "includes/hero.phtml" },
      { id: "views-productos",      src: "views/productos.phtml" },
      { id: "includes-footer",         src: "includes/footer.phtml" },
      { id: "views-carrito",        src: "views/carrito.phtml" },
      { id: "views-modal-producto", src: "views/modal-producto.phtml" },
      { id: "views-modal-alerta",   src: "views/modal-alerta.phtml" },
      { id: "views-templates",      src: "views/templates.phtml" },
    ];
 
    Promise.all(
      parciales.map(p =>
        fetch(p.src)
          .then(r => r.text())
          .then(html => { document.getElementById(p.id).innerHTML = html; })
      )
    ).then(() => {
    renderizarProductos(obtenerProductos());
    iniciarAudio();
    });
    
 
    function irAProductos() {
      document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
    }
  </script>
 
</body>
</html>