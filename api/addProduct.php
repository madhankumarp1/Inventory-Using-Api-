<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

include '../DB/dbconfig.php';

$data = json_decode(file_get_contents('php://input'), true);
$name = $data['name'];
$quantity = $data['quantity'];

try {
    $stmt = $pdo->prepare('INSERT INTO products (name, quantity) VALUES (?, ?)');
    if ($stmt->execute([$name, $quantity])) {
        echo json_encode(['message' => 'Product added successfully']);
        http_response_code(201); // Created
    } else {
        echo json_encode(['message' => 'Unable to add product']);
        http_response_code(500); // Internal Server Error
    }
} catch (PDOException $e) {
    echo json_encode(['message' => 'Error: ' . $e->getMessage()]);
    http_response_code(500); // Internal Server Error
}
?>
