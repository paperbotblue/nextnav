<?php
session_start();
include 'db.php'; // Include the database connection file

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    // Check if user exists and the password matches
    if ($user && $password === $user['password']) { // In real-world, use password_verify
        // Store user data in the session
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        $_SESSION['logged_in_time'] = time(); // Store login time

        // Redirect to the dashboard
        header("Location: dashboard.php");
        exit;
    } else {
        // Invalid credentials
        echo "Invalid username or password.";
    }

    // Close the connection
    $stmt->close();
    $conn->close();
}
?>
