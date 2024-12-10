<?php
require_once 'JWT.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $oldPassword = $_POST['old_password']; 
    $newPassword = $_POST['new_password']; 
    $email = "zebra@gmail.com";

    $checkQuery = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($checkQuery);
    
    if ($result->num_rows == 0) {
        echo json_encode(['success' => false, 'message' => 'User not found']);
        exit();
    }
    
    $user = $result->fetch_assoc();
    
    $oldPasswordHash = $user['password']; 
    
    // Verify the current password
    if (!password_verify($oldPassword, $oldPasswordHash)) {
        echo json_encode(['success' => false, 'message' => 'Invalid current password']);
        exit();
    }

    // Hash the new password
    $hashedPassword = password_hash($newPassword, PASSWORD_BCRYPT);

    $updateQuery = "UPDATE users SET password = '$hashedPassword' WHERE email = '$email'";

    if ($conn->query($updateQuery) === TRUE) {
        echo json_encode(['success' => true, 'message' => 'Password updated successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error updating password']);
    }
}
?>
