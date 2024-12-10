<?php

require('./config.php');

$emailnotempty = TRUE;
$emailvalidate = TRUE;
$emailnotduplicate = TRUE;
$passwordnotempty = TRUE;
$passwordmatch = TRUE;
$passwordvalidate = TRUE;
$captchavalidation = TRUE;

function sanitize($data)
{
    global $dbhandle;

    $data = trim($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    $data = mysqli_real_escape_string($dbhandle, $data);
    return $data;
}

if (!(isset($_POST["password"])) || !(isset($_POST["email"])) || !(isset($_POST["password1"]))) {
    error_log("login credentials not set\n", 3, "errors.log");
    exit;
}

$email = sanitize($_POST["email"]);
$password = sanitize($_POST["password"]);
$password1 = sanitize($_POST["password1"]);

$stmt = $dbhandle->prepare("SELECT `email` FROM `users` WHERE `email` = ?");

if (!$stmt) {
    error_log("cannot prepare statement for email duplication check\n", 3, "errors.log");
    exit;
}

// Bind the parameter to the prepared statement
$stmt->bind_param("s", $email); // "s" indicates a string

// Execute the statement
$stmt->execute();

// Bind the result
$stmt->bind_result($resultUsername);

// Fetch the result
if ($stmt->fetch()) {
    // A record for this email exists
    $emailnotduplicate = FALSE;
} else {
    // No records found
    $emailnotduplicate = TRUE;
}

// Close the statement
$stmt->close();


if ((!(ctype_alnum($password))) || ((strlen($password)) < 8)) {
    $passwordvalidate = FALSE;
    error_log("Password must be at least 8 characters and alphanumeric", 3, "errors.log");
} else {
    $passwordvalidate = TRUE;
}

if ($password == $password1) {
    $passwordmatch = TRUE;
} else {
    $passwordmatch = FALSE;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $emailvalidate = FALSE;
    error_log("Invalid email format: $email\n", 3, "errors.log");
} else {
    $emailvalidate = TRUE;
}

if (
    ($emailnotduplicate == TRUE)
    && ($passwordmatch == TRUE)
    && ($passwordvalidate == TRUE)
    && ($emailvalidate == TRUE)
) {

    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
    $stmt = $dbhandle->prepare("INSERT INTO `users` (`email`, `password`) VALUES (?, ?)");
    if ($stmt) {
        // Bind parameters to the prepared statement
        $stmt->bind_param("ss", $email, $hashedPassword); // "ss" indicates two string parameters

        // Execute the statement
        if ($stmt->execute()) {
            echo "User registered successfully!";
            header(sprintf("Location: %s", $loginpage_url));
        } else {
            echo "Error: " . $stmt->error;
            error_log("stmt execute error $stmt->error\n", 3, "errors.log");
            exit;   
        }

        // Close the statement
        $stmt->close();
    } else {
        echo "Error preparing statement: " . $dbhandle->error;
        error_log("Error preparing statement: $dbhandle->error\n", 3, "errors.log");
    }
    exit;
} else {
    error_log("cannot validate some stuff\n", 3, "errors.log");
}
$dbhandle->close();
?>
