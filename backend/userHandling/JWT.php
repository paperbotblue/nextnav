<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/x-www-form-urlencoded');

define("DB_HOST",'localhost');
define("DB_NAME",'user_data');
define("DB_USER",'root');
define("DB_PASS",'123');
define("LOG_FILE", __DIR__ . "/error.log");

$servername = "localhost";
$username = "root";
$password = "123";
$dbname = "user_data";
$conn = new mysqli($servername, $username, $password, $dbname);

function sanitize_input($input)
{

  $input = trim($input);
  $input = preg_replace('/[^a-zA-Z0-9_]/', '', $input);
  $input = stripslashes($input);
  $input = substr($input, 0, 64);

  return $input;
}

class JWT
{
    private string $signing_key;

    public function __construct()
    {
        $this->signing_key = 'askajsdflkjasdljk29348740239740aksdjfbakj3986724';
        if (!$this->signing_key) {
            throw new Exception("Signing key is not set.");
        }
    }

    public function encode(array $payload): string
    {
        if (isset($payload['password'])) {
            $payload['password'] = password_hash($payload['password'], PASSWORD_BCRYPT);
        }

        $payload['exp'] = time() + 3600;

        $header = [
            "alg" => "HS512",
            "typ" => "JWT"
        ];

        $encodedHeader = $this->base64UrlEncode(json_encode($header));
        $encodedPayload = $this->base64UrlEncode(json_encode($payload));

        $signature = hash_hmac('sha512', "$encodedHeader.$encodedPayload", $this->signing_key, true);
        $encodedSignature = $this->base64UrlEncode($signature);

        return "{$encodedHeader}.{$encodedPayload}.{$encodedSignature}";
    }

    public function decode(string $token): ?array
    {
        $tokenParts = explode('.', $token);

        if (count($tokenParts) !== 3) {
            throw new Exception("Invalid token format.");
        }

        list($encodedHeader, $encodedPayload, $providedSignature) = $tokenParts;
        
        $header = json_decode($this->base64UrlDecode($encodedHeader), true);
        $payload = json_decode($this->base64UrlDecode($encodedPayload), true);
        $signature = $this->base64UrlDecode($providedSignature);

        if ($header === null || $payload === null) {
            throw new Exception("Invalid JSON in token.");
        }

        if (isset($payload['exp']) && time() > $payload['exp']) {
            throw new Exception("Token has expired.");
        }

        $validSignature = hash_hmac('sha512', "$encodedHeader.$encodedPayload", $this->signing_key, true);
        if (!hash_equals($signature, $validSignature)) {
            throw new Exception("Invalid signature.");
        }

        return [
            'header' => $header,
            'body' => $payload
        ];
    }

    public function verifyPassword(string $password, string $hashedPassword): bool
    {
        return password_verify($password, $hashedPassword);
    }

    public function hashPassword(string $password): string
    {
        return password_hash($password, PASSWORD_BCRYPT);
    }

    public function verifySignature(string $token): bool
    {
        $tokenParts = explode('.', $token);
        if (count($tokenParts) !== 3) {
            return false;
        }

        list($encodedHeader, $encodedPayload, $providedSignature) = $tokenParts;

        // Verify the signature using HMAC SHA512
        $validSignature = hash_hmac('sha512', "$encodedHeader.$encodedPayload", $this->signing_key, true);
        $signature = $this->base64UrlDecode($providedSignature);

        return hash_equals($signature, $validSignature);
    }

    private function base64UrlEncode(string $data): string
    {
        return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
    }

    private function base64UrlDecode(string $data): string
    {
        return base64_decode(strtr($data, '-_', '+/'));
    }

    public function getSigningKey(): string
    {
        return $this->signing_key;
    }
}
