<?php
session_start();
require_once __DIR__ . '/config/db.php';


if (isset($_GET['action']) && $_GET['action'] === 'logout') {
    unset($_SESSION['usuario']);
    unset($_SESSION['carrito']);
    session_destroy();
    header("Location: index.php");
    exit;
}


$error_login = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['email'], $_POST['password'])) {
    $email    = trim($_POST['email']);
    $password = trim($_POST['password']);

    try {
        $pdo  = obtenerConexion();
        $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE email = ? LIMIT 1");
        $stmt->execute([$email]);
        $usuario = $stmt->fetch();

        if ($usuario && $usuario['password'] === $password) {
            $_SESSION['usuario'] = [
                'id'     => $usuario['id'],
                'nombre' => $usuario['nombre'],
                'email'  => $usuario['email'],
                'avatar' => $usuario['avatar'],
            ];
            if (!isset($_SESSION['carrito'])) {
                $_SESSION['carrito'] = [];
            }
            header("Location: index.php");
            exit;
        } else {
            $error_login = "Correo o contraseña incorrectos.";
        }
    } catch (Exception $e) {
        $error_login = "Error de conexión. Intenta de nuevo.";
    }
}


$productos = [];
try {
    $pdo  = obtenerConexion();
    $stmt = $pdo->query("SELECT * FROM productos");
    foreach ($stmt->fetchAll() as $p) {
        $p['tallas']         = $p['tallas']         ? json_decode($p['tallas'],  true) : [];
        $p['colores']        = $p['colores']         ? json_decode($p['colores'], true) : [];
        $p['enOferta']       = (bool)$p['enOferta'];
        $p['precio']         = (float)$p['precio'];
        $p['precioOriginal'] = $p['precioOriginal']  ? (float)$p['precioOriginal'] : null;
        $productos[] = $p;
    }
} catch (Exception $e) {
   
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?= htmlspecialchars($titulo ?? 'Elite Moda') ?></title>

    <!-- CSS -->
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

    <!-- FONT AWESOME -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body>

    <?php include 'views/navbar.phtml'; ?>
    <?php include 'views/login.phtml'; ?>
    <?php include 'includes/hero.phtml'; ?>
    <?php include 'views/productos.phtml'; ?>
    <?php include 'includes/footer.phtml'; ?>
    <?php include 'views/carrito.phtml'; ?>

    <div id="views-toast">
        <div class="toast" id="toast"></div>
    </div>

    <?php include 'views/modal-producto.phtml'; ?>
    <?php include 'views/modal-alerta.phtml'; ?>
    <?php include 'views/templates.phtml'; ?>

    <!-- JAVASCRIPT -->
    <script src="assets/js/database.js"></script>
    <script src="assets/js/ui.js"></script>
    <script src="assets/js/sesion.js"></script>
    <script src="assets/js/carrito.js"></script>
    <script src="assets/js/catalogo.js"></script>
    <script src="assets/js/audio.js"></script>


    <script>
       
        productos = <?= json_encode(array_values($productos)) ?>;

        
        usuarioActual = <?= isset($_SESSION['usuario']) ? json_encode($_SESSION['usuario']) : 'null' ?>;

        // Carrito de sesión
        carrito = <?= isset($_SESSION['carrito']) ? json_encode(array_values($_SESSION['carrito'])) : '[]' ?>;
    </script>

    <script>
        document.addEventListener("DOMContentLoaded", () => {

            if (usuarioActual) {
                if (typeof uiMostrarSesionActiva === "function") {
                    uiMostrarSesionActiva(usuarioActual);
                }
            }

            if (typeof renderizarProductos === "function") {
                renderizarProductos(productos);
            }

            if (typeof iniciarAudio === "function") {
                iniciarAudio();
            }

            if (typeof actualizarBadge === "function") {
                actualizarBadge();
            }

            <?php if (!empty($error_login)): ?>
                if (typeof abrirLogin === "function") {
                    abrirLogin();
                    if (typeof uiMostrarErrorLogin === "function") {
                        uiMostrarErrorLogin(<?= json_encode($error_login) ?>);
                    }
                }
            <?php endif; ?>

        });

        function irAProductos() {
            const seccion = document.getElementById("productos");
            if (seccion) seccion.scrollIntoView({ behavior: "smooth" });
        }
    </script>

</body>
</html>