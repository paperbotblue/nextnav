<?php
require_once 'JWT.php';


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $email = $conn->real_escape_string($data['email']);
    $password = $data['password'];

    $checkQuery = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($checkQuery);

    if ($result->num_rows == 0) {
        echo json_encode(['success' => false, 'message' => 'User not found']);
        exit();
    }

    $user = $result->fetch_assoc();

    if (!password_verify($password, $user['password'])) {
        echo json_encode(['success' => false, 'message' => 'Invalid credentials']);
        exit();
    }

    $jwt = new JWT();
    $payload = [
        'email' => $email,
        'iat' => time(),
        'exp' => time() + 3600
    ];
    $token = $jwt->encode($payload);
    echo json_encode(['success' => true, 'token' => $token]);
}
?>