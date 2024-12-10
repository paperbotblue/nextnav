<?php
include '../config.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

$id = $_POST['id'];

$conn->begin_transaction();

try {
  $sql = "SELECT email, feedback, created_at FROM feedback_request WHERE id = ?";
  $stmt = $conn->prepare($sql);
  if ($stmt === false) {
    throw new Exception("Error preparing SELECT statement: " . $conn->error);
  }

  $stmt->bind_param("i", $id); // 'i' indicates that $id is an integer
  $stmt->execute();
  $result = $stmt->get_result();

  if ($result->num_rows > 0) {
    // Fetch the data
    $row = $result->fetch_assoc();

    $insert_sql = "INSERT INTO accepted_feedback (email, feedback, created_at) 
                           VALUES (?, ?, ?)";
    $insert_stmt = $conn->prepare($insert_sql);
    if ($insert_stmt === false) {
      throw new Exception("Error preparing INSERT statement: " . $conn->error);
    }

    $insert_stmt->bind_param("sss", $row['email'], $row['feedback'], $row['created_at']);

    if ($insert_stmt->execute()) {
      $delete_sql = "DELETE FROM feedback_request WHERE id = ?";
      $delete_stmt = $conn->prepare($delete_sql);
      if ($delete_stmt === false) {
        throw new Exception("Error preparing DELETE statement: " . $conn->error);
      }

      $delete_stmt->bind_param("i", $id);

      if ($delete_stmt->execute()) {
        $conn->commit();
        echo "Record successfully moved and deleted.";
      } else {
        $conn->rollback();
        echo "Error deleting record: " . $conn->error;
      }
    } else {
      $conn->rollback();
      echo "Error inserting record: " . $conn->error;
    }
  } else {
    echo "No record found with ID $id.";
  }

  if ($stmt) $stmt->close();
  if ($insert_stmt) $insert_stmt->close();
  if ($delete_stmt) $delete_stmt->close();
  echo json_encode(['status' => 'success', 'message' => 'Form accepted']);
} catch (Exception $e) {
  $conn->rollback();
  echo json_encode(['status' => 'failed', 'message' => $e->getMessage()]);
}

?>
