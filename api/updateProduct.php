<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: POST, GET'); 
header('Access-Control-Allow-Headers: Content-Type'); 

include '../DB/dbconfig.php';

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data)) {
    $productName = $data['productName'] ?? null;
    $productQuantity = $data['productQuantity'] ?? null;
    $recipient = $data['Recipient'] ?? null;

  
    if (empty($productName) || empty($productQuantity) || empty($recipient)) {
        echo json_encode(["error" => "Missing required fields"]);
        exit();
    }

    try {
        // Update inventory
        $updateInventorySql = "UPDATE products SET quantity = quantity - :quantity WHERE name = :name";
        $stmt = $pdo->prepare($updateInventorySql);
        $stmt->execute(['quantity' => $productQuantity, 'name' => $productName]);

        // Insert recipient 
        $insertRecipientSql = "INSERT INTO recipients (name, quantity ,product) VALUES (:name, :quantity ,:product)";
        $stmt = $pdo->prepare($insertRecipientSql);
        $stmt->execute(['name' => $recipient, 'quantity' => $productQuantity , 'product' => $productName]);

        echo json_encode(["message" => "Inventory updated and recipient recorded successfully"]);
    } catch (Exception $e) {
        echo json_encode(["error" => "Transaction failed: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["error" => "Invalid input data"]);
}
?>
