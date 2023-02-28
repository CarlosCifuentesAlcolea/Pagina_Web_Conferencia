<?php
  define('THINKBETTER_HOST', 'localhost');
  define('THINKBETTER_DB_USUARIO', 'root');
  define('THINKBETTER_DB_PASSWORD', '123');
  define('THINKBETTER_DB_DATABASE', 'thinkbetter');

  $conn = new mysqli(THINKBETTER_HOST, THINKBETTER_DB_USUARIO, THINKBETTER_DB_PASSWORD, THINKBETTER_DB_DATABASE);

  if($conn->connect_error) {
    echo $conn->connect_error;
  }
