<?php
include __DIR__ . "/crud.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/x-www-form-urlencoded');

$crud = new CRUD;

if(isset($_POST['id'], $_POST['table_name']))
{
  error_log("required parameters not set in fileeee send_data.php \n", 3, LOG_FILE);
}

$id = sanitize_input($_POST['id']);
$table_name = sanitize_input($_POST['table_name']);

$crud->delete_data([$id], "id", $table_name, "i");

