<?php
include __DIR__ . "/crud.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: multipart/form-data');

$crud = new CRUD;
$uploadDir = __DIR__ . "/../project_images";


if ($_POST['table_name'] == 'feedback_request') {
  if (!isset($_POST['id'])) {
    error_log("required parameters not set in fileeee send_data.php \n", 3, LOG_FILE);
  }
  $id = sanitize_input($_POST['id']);
  $data = $crud->receive_data([$id], "id", "email, feedback, created_at", "feedback_request", "i");
  $crud->send_data([$data[0]["email"], $data[0]["feedback"], $data[0]["created_at"]], "feedback_accepted", "email, feedback, created_at", "sss", "? ,? ,?");
  $crud->delete_data([$id], "id", "feedback_request", "i");
  
} else if ($_POST['table_name'] == 'completed_projects' || $_POST['table_name'] == 'ongoing_projects') {

  $table_name = sanitize_input($_POST['table_name']);
  $project_name = sanitize_input($_POST['projectName']);
  $project_details = sanitize_input($_POST['projectDetails']);
  $location = sanitize_input($_POST['location']);
  $consultant = sanitize_input($_POST['consultant']);
  $owner = sanitize_input($_POST['owner']);
  $id = sanitize_input($_POST['id']);

  $imagePaths = [];

  for ($i = 1; $i <= 6; $i++) {
    $imageKey = "image$i";

    if (isset($_FILES[$imageKey]) && $_FILES[$imageKey]['error'] === UPLOAD_ERR_OK) {
      $fileTmpPath = $_FILES[$imageKey]['tmp_name'];
      $fileName = $_FILES[$imageKey]['name'];
      $destPath = $uploadDir . "/" . basename($fileName);

      if (move_uploaded_file($fileTmpPath, $destPath)) {
        $imagePaths[] = $destPath;
      } else {
        error_log("unable to move file to $destPath \n", 3, LOG_FILE);
      }
    } else {
      error_log("unable to get file no. $i \n", 3, LOG_FILE);
    }
  }
  $id = sanitize_input($_POST['id']);
  if($id != '')
  {
    $crud->delete_data([$id], "id", $table_name, "i");

    $attributes = "id, project_name, project_details, location, consultant, owner,image_link_1, image_link_2, image_link_3, image_link_4, image_link_5, image_link_6";
    $paramString = "?,?,?,?,?,?,?,?,?,?,?,?";
    $param = "isssssssssss";
    $identifire = [
      $id,
      $project_name,
      $project_details,
      $location,
      $consultant,
      $owner,
      $imagePaths[0],
      $imagePaths[1],
      $imagePaths[2],
      $imagePaths[3],
      $imagePaths[5],
      $imagePaths[4]
    ];
  } else {
    $attributes = "project_name, project_details, location, consultant, owner,image_link_1, image_link_2, image_link_3, image_link_4, image_link_5, image_link_6";
    $paramString = "?,?,?,?,?,?,?,?,?,?,?";
    $param = "sssssssssss";
    $identifire = [
      $project_name,
      $project_details,
      $location,
      $consultant,
      $owner,
      $imagePaths[0],
      $imagePaths[1],
      $imagePaths[2],
      $imagePaths[3],
      $imagePaths[5],
      $imagePaths[4]
    ];
  }



  $insertResult = $crud->send_data($identifire, $table_name, $attributes, $param, $paramString);
}
