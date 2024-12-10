<?php
include __DIR__ . "/crud.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: multipart/form-data');

$crud = new CRUD;
$uploadDir = __DIR__ . "/../project_images";


if (!isset($_POST['email'], $_POST['feedback'])) {
  error_log("required parameters not set in fileeee send_data.php \n", 3, LOG_FILE);
}
$email = $_POST['email'];
$sanitized_email = filter_var($email, FILTER_SANITIZE_EMAIL);
if (filter_var($sanitized_email, FILTER_VALIDATE_EMAIL)) {
  $feedback = sanitize_input($_POST['feedback']);

  $crud->send_data([$email, $feedback], "feedback_request", "email, feedback", "ss", "? ,?");
} else {
  echo "Invalid email address.";
}
