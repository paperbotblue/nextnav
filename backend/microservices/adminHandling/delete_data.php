<?php

include "../config.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

if (isset($_POST['id'] ,$_POST['table'])) {
    $id = $_POST['id'];  
    $table = $_POST['table'];

    // Prepare a delete query with a placeholder for the ID
    $stmt = $conn->prepare("DELETE FROM $table WHERE id = ?");
    
    // Bind the ID parameter to the prepared statement
    $stmt->bind_param("i", $id);  // "i" means the parameter is an integer

    // Execute the prepared statement
    if ($stmt->execute()) {
        echo "Record with ID $id deleted successfully.";
    } else {
        echo "Error deleting record: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
} else {
    echo "ID parameter not set.";
}

// Close the connection
$conn->close();
?>
