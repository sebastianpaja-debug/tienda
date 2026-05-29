<?php


header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once __DIR__ . '/../config/db.php';

session_start();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Método no permitido']);
    exit;
}

$datos = json_decode(file_get_contents('php://input'), true);
$email    = trim($datos['email']    ?? '');
$password = trim($datos['password'] ?? '');

if (!$email || !$password) {
    echo json_encode(['ok' => false, 'error' => 'Completa todos los campos']);
    exit;
}

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

        echo json_encode([
            'ok'      => true,
            'usuario' => $_SESSION['usuario']
        ]);

    } else {
        echo json_encode(['ok' => false, 'error' => 'Correo o contraseña incorrectos']);
    }

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => $e->getMessage()]);
}