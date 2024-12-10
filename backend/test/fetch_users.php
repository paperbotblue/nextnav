<?php
header('Content-Type: application/json');

// Database connection parameters
$host = 'localhost';
$dbname = 'user_data';
$username = 'root';
$password = '123';

// Create a MySQLi connection
$conn = mysqli_connect($host, $username, $password, $dbname);

// Check connection
if (!$conn) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed: ' . mysqli_connect_error()]);
    exit();
}

// Query the database
$query = "SELECT * FROM users";
$result = mysqli_query($conn, $query);

if ($result) {
    $users = mysqli_fetch_all($result, MYSQLI_ASSOC);

    // Output JSON
    echo json_encode($users);
} else {
    // Send error response in JSON format
    http_response_code(500);
    echo json_encode(['error' => 'Query failed: ' . mysqli_error($conn)]);
}

// Close the connection
mysqli_close($conn);
?>
