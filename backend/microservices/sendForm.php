<?php

require '../vendor/autoload.php';
require 'util_functions.php';
require 'config.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: multipart/form-data');

use Google\Client;
use Google\Service\Gmail;
use Google\Service\Drive;
use Google\Service\Sheets;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  if (!isset($_FILES['file']) || !isset($_FILES['image'])) {
    echo json_encode(['status' => 'failed', 'message' => 'No file uploaded.']);
    exit;
  }

  $name = htmlspecialchars($_POST['name'] ?? '');
  $contact = htmlspecialchars($_POST['contact'] ?? '');
  $email = htmlspecialchars($_POST['email'] ?? '');

  if (!$name || !$contact || !$email ) {
    echo json_encode(['status' => 'failed', 'message' => 'Missing required form fields.']);
    exit;
  }

  $uploadDir = '../uploads/';
  $uploadedFile = $uploadDir . basename($_FILES['file']['name']);
  $uploadedImage = $uploadDir . basename($_FILES['image']['name']);

  // Save the file temporarily
  if (!move_uploaded_file($_FILES['file']['tmp_name'], $uploadedFile)) {
    echo json_encode(['status' => 'failed', 'message' => 'Failed to upload file.']);
    exit;
  }
  if (!move_uploaded_file($_FILES['image']['tmp_name'], $uploadedImage)) {
    echo json_encode(['status' => 'failed', 'message' => 'Failed to upload image.']);
    exit;
  }

  try {
    $uploadedFileDetails = uploadFileToDrive($uploadedFile, $_FILES['file']['name'], $token_path, $credential_path);
    $fileLink = $uploadedFileDetails->webViewLink;

    $uploadedImageDetails = uploadFileToDrive($uploadedImage, $_FILES['image']['name'], $token_path, $credential_path);
    $imageLink = $uploadedImageDetails->webViewLink;

    $values = [
      [date('Y-m-d H:i:s'), $name, $contact, $email,  $imageLink, $fileLink] // Add a timestamp for record-keeping
    ];

    // Add file details to Google Sheets
    addFileDetailsToSpreadsheet($values, $spreadsheetId, $token_path, $credential_path);

    sendMail($values, $token_path, $credential_path);

    // Clean up temporary file
    unlink($uploadedFile);
    unlink($uploadedImage);

    echo json_encode(['status' => 'success', 'message' => 'File uploaded and details added to spreadsheet.']);
  } catch (Exception $e) {

    echo json_encode(['status' => 'failed', 'message' => $e->getMessage()]);
  }
}


function uploadFileToDrive($filePath, $fileName, $token_path, $credential_path)
{
  try {
    $client = new Client();

    setAccessToken($client, $token_path, $credential_path);

    $client->setScopes(Drive::DRIVE_FILE);

    $service = new Drive($client);

    $fileMetadata = new Drive\DriveFile([
      'name' => $fileName
    ]);
    $content = file_get_contents($filePath);
    $file = $service->files->create($fileMetadata, [
      'data' => $content,
      'mimeType' => mime_content_type($filePath),
      'uploadType' => 'multipart',
      'fields' => 'id,webViewLink'
    ]);

    return $file;
  } catch (Exception $e) {
    echo json_encode([
      'status' => 'failed',
      'message' => $e->getMessage()
    ]);
  }
}

function sendMail($values, $token_path, $credential_path)
{
  try {
    $client = new Client();

    $client->setScopes(Gmail::GMAIL_SEND);
    setAccessToken($client, $token_path, $credential_path);
    $service = new Gmail($client);

    $subject = "New Message from {$values[0][1]}";
    $body = "Contact: {$values[0][2]} \n";
    $body .= "Email: {$values[0][3]} \n";
    $body .= "Photo Link: {$values[0][4]} \n";
    $body .= "Resume Link: {$values[0][5]}";

    $rawMessage = create_gmail_message(
      'hr@versai.in',  // Recipient email
      'versaivps@gmail.com', // Sender email
      $subject,
      $body
    );

    $message = new Gmail\Message();
    $message->setRaw($rawMessage);

    $service->users_messages->send('me', $message);
  } catch (Exception $e) {
    echo json_encode([
      'status' => 'failed',
      'message' => $e->getMessage()
    ]);
  }
}

function addFileDetailsToSpreadsheet($values, $spreadsheetId, $token_path, $credential_path)
{
  try {
    $client = new Client();

    $client->setScopes(Sheets::SPREADSHEETS);
    setAccessToken($client, $token_path, $credential_path);
    $service = new Sheets($client);

    $range = 'Sheet1!A1';
    $body = new Sheets\ValueRange(['values' => $values]);
    $params = ['valueInputOption' => 'RAW'];
    $result = $service->spreadsheets_values->append($spreadsheetId, $range, $body, $params);

    return $result;
  } catch (Exception $e) {
    echo json_encode([
      'status' => 'failed',
      'message' => $e->getMessage()
    ]);
  }
}

