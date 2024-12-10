<?php

// Include your database configuration
require('./config.php');

session_start(); // Start the session

// Initialize flags
$emailnotempty = TRUE;
$emailvalidate = TRUE;
$passwordnotempty = TRUE;



function sanitize($data)
{
    global $dbhandle;

    $data = trim($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    $data = mysqli_real_escape_string($dbhandle, $data);
    return $data;
}

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if (!(isset($_POST["email"])) || !(isset($_POST["password"]))) {
        error_log("Missing login credentials", 3, "login_error.log");
        exit;
    }

    // Sanitize and assign inputs
    $email = sanitize($_POST["email"]);
    $password = sanitize($_POST["password"]);

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailvalidate = FALSE;
        error_log("Invalid email format: $email", 3, "login_error.log");
    }

    // If inputs are valid
    if ($emailvalidate) {

        // Prepare the SQL query to fetch user by email
        $stmt = $dbhandle->prepare("SELECT `id`, `email`, `password` FROM `users` WHERE `email` = ?");
        
        if (!$stmt) {
            error_log("Error preparing statement: $dbhandle->error", 3, "login_error.log");
            echo "Internal server error. Please try again later.";
            exit;
        }

        // Bind the email parameter and execute the query
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();

        // If user exists
        if ($stmt->num_rows > 0) {

            // Bind the result variables
            $stmt->bind_result($userId, $userEmail, $userHashedPassword);

            // Fetch the user data
            $stmt->fetch();

            // Verify password
            if (password_verify($password, $userHashedPassword)) {
                // Password matches, user is authenticated
                $_SESSION['user_id'] = $userId;
                $_SESSION['user_email'] = $userEmail;
                
                // Redirect to the user dashboard or home page
                header("Location: welcome.html");
                exit;
            } else {
                // Password does not match
                error_log("Invalid password attempt for email: $email", 3, "login_error.log");
                echo "Invalid email or password.";
                exit;
            }
        } else {
            // No such user exists
            error_log("No user found with email: $email", 3, "login_error.log");
            echo "Invalid email or password.";
            exit;
        }

        // Close the statement
        $stmt->close();
    } else {
        echo "Invalid input or empty fields.";
    }
} else {
    echo "Invalid request method.";
}

?>
