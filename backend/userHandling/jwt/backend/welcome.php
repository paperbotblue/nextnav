<?php
require_once 'JWT.php';

$headers = apache_request_headers();
if (isset($headers['Authorization'])) {
    $authHeader = $headers['Authorization'];
    $token = str_replace('Bearer ', '', $authHeader);

    $jwt = new JWT();
    try {
        // Decode the JWT token
        $decoded = $jwt->decode($token);

        // Access the user's email from the decoded token
        $email = $decoded['body']['email'];

        // Fetch user data from the database (optional)
        $checkQuery = "SELECT * FROM users WHERE email = '$email'";
        $result = $conn->query($checkQuery);
        if ($result->num_rows == 0) {
            echo json_encode(['success' => false, 'message' => 'User not found']);
            exit();
        }

        $user = $result->fetch_assoc();
        echo json_encode(['success' => true, 'message' => 'Welcome ' . $user['email']]);
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => 'Invalid or expired token']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Authorization token is required']);
}
?>