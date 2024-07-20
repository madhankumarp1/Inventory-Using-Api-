<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

include '../DB/dbconfig.php';

try {
    $stmt = $pdo->query('SELECT * FROM products');
    $products = $stmt->fetchAll();
    echo json_encode($products);
} catch (PDOException $e) {
    echo json_encode(['message' => 'Error: ' . $e->getMessage()]);
}
?>
