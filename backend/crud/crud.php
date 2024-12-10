<?php

include_once __DIR__ . '/utils/config.php';

class CRUD
{
  public $db_conn;

  public function __construct()
  {
    $this->db_conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($this->db_conn->connect_error) {
      error_log("Unable to connect to mysql \n" . $this->db_conn->connect_error, 3, LOG_FILE);
    }
  }

  public function execute_querry($querry, $param, $identifire)
  {
    $stmt = $this->db_conn->prepare($querry);
    if ($stmt === false) {
      error_log("Error preparing querry statement: $querry\n" . $this->db_conn->error, 3, LOG_FILE);
      return false;
    }
    $stmt->bind_param($param, ...$identifire);

    if (!$stmt->execute()) {
      error_log("Unable to execute stmt statement: $querry \n $stmt->error \n", 3, LOG_FILE);
      return false;
    }

    if (stripos($querry, "SELECT") === 0) {
      $result = $stmt->get_result();
      $data = [];
      while ($row = $result->fetch_assoc()) {
        $data[] = $row;
      }
      return $data;
    }
    return true;
  }

  public function send_data($identifire, $table_name, $attributes, $param, $param_string)
  {
    $querry = "INSERT INTO $table_name ($attributes) VALUES ($param_string)";
    return $this->execute_querry($querry, $param, $identifire);
  }

  public function receive_data($identifire, $identifire_attribute, $attributes, $table_name, $param)
  {
    $querry = "SELECT $attributes  FROM  $table_name  WHERE  $identifire_attribute = ?";
    return $this->execute_querry($querry, $param, $identifire);
  }

  public function receive_table($attributes, $table_name)
  {
    $querry = "SELECT $attributes FROM $table_name";
    $result = $this->db_conn->query($querry);
    $data = array();
    while ($row = $result->fetch_assoc()) {
      $data[] = $row;
    }
    return $data;
  }

  public function delete_data($identifire, $identifire_attribute, $table_name, $param)
  {
    $querry = "DELETE FROM $table_name WHERE $identifire_attribute = ?";
  error_log("required parameters not set in fileeee send_data.php $querry\n", 3, LOG_FILE);
    return $this->execute_querry($querry, $param, $identifire);
  }
  public function alter_data() 
  {
    //yet to be implementes
  }

  public function __destruct()
  {
    if (isset($this->db_conn)) {
      $this->db_conn->close();
    }
  }
};
