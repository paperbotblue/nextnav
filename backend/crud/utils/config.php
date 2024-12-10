<?php
define("DB_HOST",'localhost');
define("DB_NAME",'user_data');
define("DB_USER",'root');
define("DB_PASS",'123');
define("LOG_FILE", __DIR__ . "/error.log");


define("IS_EMPTY", 0);


function sanitize_input($input)
{

  $input = trim($input);
  $input = preg_replace('/[^a-zA-Z0-9_]/', '', $input);
  $input = stripslashes($input);
  $input = substr($input, 0, 64);

  return $input;
}