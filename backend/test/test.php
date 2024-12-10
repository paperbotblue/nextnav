<?php


require 'config.php'; // Include database connection

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize and validate inputs
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $password = $_POST['password'] ?? ''; // Manually sanitize or validate later as needed

    if ($email && $password) {
        // Hash the password (for security)
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Insert data into the database
        $stmt = $pdo->prepare("INSERT INTO users (email, password) VALUES (:email, :password)");
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $hashedPassword);

        if ($stmt->execute()) {
            echo "User data saved successfully!";
        } else {
            echo "Error saving data.";
        }
    } else {
        echo "Invalid input. Please fill in all fields.";
    }
} else {
    echo "Invalid request method.";
}
?>


