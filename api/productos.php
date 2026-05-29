<?php


header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once __DIR__ . '/../config/db.php';

try {
    $pdo = obtenerConexion();

    $categoria = $_GET['categoria'] ?? 'todos';

    if ($categoria === 'todos') {
        $stmt = $pdo->query("SELECT * FROM productos");
    } else {
        $stmt = $pdo->prepare("SELECT * FROM productos WHERE categoria = ?");
        $stmt->execute([$categoria]);
    }

    $productos = $stmt->fetchAll();

    
    foreach ($productos as &$p) {
        $p['tallas']  = $p['tallas']  ? json_decode($p['tallas'])  : [];
        $p['colores'] = $p['colores'] ? json_decode($p['colores']) : [];
        $p['enOferta'] = (bool)$p['enOferta'];
        $p['precio']   = (float)$p['precio'];
        $p['precioOriginal'] = $p['precioOriginal'] ? (float)$p['precioOriginal'] : null;
    }

    echo json_encode(['ok' => true, 'productos' => $productos]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => $e->getMessage()]);
}