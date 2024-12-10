<?php

$username = "root";
$password = "123";
$hostname = "localhost";
$database = "user_data";

$domain = "http://localhost:3000/";

$length_salt = 15;

$maxfailedattempt = 5;

$sessiontimeout = 180;

$dbhandle = mysqli_connect($hostname, $username, $password)
    or die("Unable to connect to MySQL");
$selected = mysqli_select_db($dbhandle, $database)
    or die("Could not select $database");
$loginpage_url = $domain . 'login.html';
$forbidden_url = $domain . 'securelogin/403forbidden.php';
?>