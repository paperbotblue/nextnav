<?php
require_once 'JWT.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $email = "y@gmail.com";
    $password = "123456789";

    // Check if the user already exists
    $checkQuery = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($checkQuery);

    if ($result->num_rows > 0) {
        echo json_encode(['success' => false, 'message' => 'User already exists']);
        exit();
    }

    // Insert new user
    $insertQuery = "INSERT INTO users (email, password) VALUES ('$email', '$password')";
    if ($conn->query($insertQuery) === TRUE) {
        echo json_encode(['success' => true, 'message' => 'User registered successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error occurred during registration']);
    }
}
?>
