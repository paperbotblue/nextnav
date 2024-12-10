<?php
$username = "root";
$password = "123";
$hostname = "localhost";
$database = "user_data";

$conn = new mysqli($hostname, $username, $password, $database);

if ($conn->connect_error) {
    die(json_encode(['status' => 'failed', 'message' => 'Connection failed: ' . $conn->connect_error]));
}

$domain = "http://localhost:3000/";

$length_salt = 15;

$maxfailedattempt = 5;

$sessiontimeout = 180;

$dbhandle = mysqli_connect($hostname, $username, $password)
    or die("Unable to connect to MySQL");
$selected = mysqli_select_db($dbhandle, $database)
    or die("Could not select $database");

$credential_path = '../secrets/credentials.json';
$token_path = '../secrets/token.json';
$spreadsheetId = '1XgQZvdz_tIQ6e4ApFp1fx-QXayHbCiMhsD4GyX6_eyM';
