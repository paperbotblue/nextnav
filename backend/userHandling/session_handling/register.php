<?php

require('./config.php');

$usernamenotempty = TRUE;
$usernamevalidate = TRUE;
$usernamenotduplicate = TRUE;
$passwordnotempty = TRUE;
$passwordmatch = TRUE;
$passwordvalidate = TRUE;
$captchavalidation = TRUE;
echo("hehr");


if ((isset($_POST["password"])) && (isset($_POST["username"])) && (isset($_POST["password1"]))) {

    function sanitize($data) {
        global $dbhandle;

        $data = trim($data);
        $data = htmlspecialchars($data);
        $data = mysqli_real_escape_string($dbhandle,$data);
        return $data;
    }

    $username = sanitize($_POST["username"]);
    $password = sanitize($_POST["password"]);
    $password1 = sanitize($_POST["password1"]);

//validate username

    if (empty($username)) {
        $usernamenotempty = FALSE;
    } else {
        $usernamenotempty = TRUE;
    }

    if ((!(ctype_alnum($username))) || ((strlen($username)) > 11)) {
        $usernamevalidate = FALSE;
    } else {
        $usernamevalidate = TRUE;
    }

    if (!($fetch = mysqli_fetch_array(mysqli_query($dbhandle, "SELECT `username` FROM `authentication` WHERE `username`='$username'")))) {
//no records for this user in the MySQL database
        $usernamenotduplicate = TRUE;
    } else {
        $usernamenotduplicate = FALSE;
    }
    echo("hehr");

//validate password

    if (empty($password)) {
        $passwordnotempty = FALSE;
    } else {
        $passwordnotempty = TRUE;
    }

    if ((!(ctype_alnum($password))) || ((strlen($password)) < 8)) {
        $passwordvalidate = FALSE;
    } else {
        $passwordvalidate = TRUE;
    }

    if ($password == $password1) {
        $passwordmatch = TRUE;
    } else {
        $passwordmatch = FALSE;
    }

    if (($usernamenotempty == TRUE)
        && ($usernamevalidate == TRUE)
        && ($usernamenotduplicate == TRUE)
        && ($passwordnotempty == TRUE)
        && ($passwordmatch == TRUE)
        && ($passwordvalidate == TRUE)
        && ($captchavalidation == TRUE)) {

        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
        mysqli_query($dbhandle , "INSERT INTO `authentication` (`username`, `password`) VALUES ('$username', '$hashedpassword')") or die(mysqli_error($dbhandle));
        header(sprintf("Location: %s", $loginpage_url));
        exit;
    }
    else {

    }
}

?>