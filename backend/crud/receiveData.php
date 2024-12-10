<?php
include __DIR__ . "/crud.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/x-www-form-urlencoded');
$crud = new CRUD;

if (!isset($_POST['table_name'], $_POST['table_name1'], $_POST['table_name2'], $_POST['table_name3'])) {
  error_log("required parameters not set in fileeee receive_data.php \n", 3, LOG_FILE);
}

$feedback_request = sanitize_input($_POST['table_name']);
$feedback_accepted = sanitize_input($_POST['table_name1']);
$ongoing_projects = sanitize_input($_POST['table_name2']);
$completed_projects = sanitize_input($_POST['table_name3']);


$allowed_tables = ["feedback_request", "feedback_accepted", "ongoing_projects", "completed_projects"];
if (!in_array($feedback_request, $allowed_tables) || !in_array($feedback_accepted, $allowed_tables)) {
  error_log("Invalid table name(s) provided in receive_data.php\n", 3, LOG_FILE);
  exit;
}

$feedback_request_data = $crud->receive_table("id ,email, feedback", $feedback_request);
$feedback_accepted_data = $crud->receive_table("id ,email, feedback", $feedback_accepted);

$attributes = "id, project_name, project_details, location, consultant, owner, image_link_2, image_link_3, image_link_4, image_link_5, image_link_6";
$ongoing_projects_data = $crud->receive_table($attributes, $ongoing_projects);
$completed_projects_data = $crud->receive_table($attributes, $completed_projects);

$formatted_ongoing_data = formate_data($ongoing_projects_data);
$formatted_completed_data = formate_data($completed_projects_data);


$data = [
  "feedback_request_data" => $feedback_request_data,
  "feedback_accepted_data" => $feedback_accepted_data,
  "ongoing_projects_data" => $formatted_ongoing_data,
  "completed_projects_data" => $formatted_completed_data
];

echo json_encode($data);

function formate_data($data)
{
  $formattedProjects = [];

  foreach ($data as $project) {
    $formattedProject = [
      'id' => $project['id'],
      'name' => $project['project_name'],
      'location' => $project['location'],
      'owner' => $project['owner'],
      'consultant' => $project['consultant'],
      'description' => $project['project_details'],
      'images' => []
    ];

    for ($i = 1; $i <= 6; $i++) {
      $imageKey = "image_link_$i";

      if (!empty($project[$imageKey])) {
        $formattedProject['images'][] = [
          'id' => $i - 1,
          'src' => $project[$imageKey]
        ];
      }
    }

    $formattedProjects[] = $formattedProject;
  }
  return $formattedProjects;
}
