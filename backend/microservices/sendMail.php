<?php

require '../vendor/autoload.php';
require 'util_functions.php';
require 'config.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/x-www-form-urlencoded');

use Google\Client;
use Google\Service\Gmail;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $client = new Client();

        $client->setScopes(Gmail::GMAIL_SEND);
        setAccessToken($client, $token_path, $credential_path);
        $service = new Gmail($client);

        $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
        $email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
        $contact = isset($_POST['contact']) ? htmlspecialchars($_POST['contact']) : '';
        $message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : '';
        $profile = isset($_POST['profile']) ? htmlspecialchars($_POST['profile']) : '';


        if (!$name || !$email || !$contact || !$message || !$profile) {
            echo json_encode(['status' => 'failed', 'message' => 'Missing required form fields.']);
            exit;
        }

        $subject = "New Message from $name";

        $body = "Name: $name \n";
        $body .= "Email: $email \n";
        $body .= "Contact Number: $contact \n";
        $body .= "Profile: $profile \n";
        $body .= "Message: \n$message";

        $rawMessage = create_gmail_message(
            'paperbotblue@gmail.com',  // Recipient email
            'versaivps@gmail.com', // Sender email
            $subject,
            $body
        );

        $message = new Gmail\Message();
        $message->setRaw($rawMessage);

        $service->users_messages->send('me', $message);
        echo json_encode([
            'status' => 'success',
        ]);
    } catch (Exception $e) {
        echo json_encode([
            'status' => 'failed',
            'error' => $e->getMessage()
        ]);
    }
}
