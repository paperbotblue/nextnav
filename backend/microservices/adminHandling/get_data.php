<?php
include '../config.php';

// Set headers for cross-origin requests and JSON response
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Check if the table name is passed in the POST request
if (!isset($_POST['table'])) {
    echo json_encode(["error" => "Table name is required"]);
    exit();
}

$table = $_POST['table'];

// Check if the table name is valid (you can add your own list of allowed table names for security)
$allowed_tables = ['feedback_request', 'accepted_feedback', 'users']; // Example of allowed table names
if (!in_array($table, $allowed_tables)) {
    echo json_encode(["error" => "Invalid table name"]);
    exit();
}

// Prepare the SQL query
$sql = "SELECT * FROM $table";

// Execute the query
if ($result = $conn->query($sql)) {
    $data = array();
    
    // Check if the query returns any rows
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    } else {
        $data = ["message" => "No records found"];
    }

    // Return the data as a JSON response
    echo json_encode($data);
    
    // Free result set (optional)
    $result->free();
} else {
    // If there is an error with the query execution
    echo json_encode(["error" => "Query execution failed", "message" => $conn->error]);
}

// Close the database connection
$conn->close();
?>
