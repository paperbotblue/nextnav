<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/x-www-form-urlencoded');

require './config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if (isset($_POST['email']) && isset($_POST['feedback'])) {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $feedback = htmlspecialchars($_POST['feedback'], ENT_QUOTES, 'UTF-8');

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $stmt = $conn->prepare("INSERT INTO feedback_request (email, feedback) VALUES (?, ?)");
      $stmt->bind_param('ss', $email, $feedback);

      if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'Feedback submitted successfully.']);
      } else {
        echo json_encode(['status' => 'failed', 'message' => 'Failed to submit feedback.']);
      }

      $stmt->close();
    } else {
      echo json_encode(['status' => 'failed', 'message' => 'Invalid email format.']);
    }
  } else {
    echo json_encode(['status' => 'failed', 'message' => 'Email and feedback are required.' ]);
  }
}

$conn->close();
