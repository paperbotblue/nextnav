<?php

function create_gmail_message($to, $from, $subject, $body)
{
  $rawMessage = "From: <$from>\r\n";
  $rawMessage .= "To: <$to>\r\n";
  $rawMessage .= "Subject: $subject\r\n";
  $rawMessage .= "MIME-Version: 1.0\r\n";
  $rawMessage .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
  $rawMessage .= $body;

  return strtr(base64_encode($rawMessage), ['+' => '-', '/' => '_', '=' => '']);
}

function setAccessToken($client, $token_path, $credential_path) 
{
  $client->setAuthConfig($credential_path);

  if (file_exists($token_path)) {
    $accessToken = json_decode(file_get_contents($token_path), true);
    $client->setAccessToken($accessToken);
  }

  if ($client->isAccessTokenExpired()) {
    $client->fetchAccessTokenWithRefreshToken($client->getRefreshToken());
    file_put_contents($token_path, json_encode($client->getAccessToken()));
  }
}


