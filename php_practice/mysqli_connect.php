<?php

DEFINE ('DB_USER', 'studentweb');
DEFINE ('DB_PASSWORD', 'dg68x9w1j21b');
DEFINE ('DB_HOST', 'localhost');
DEFINE ('DB_NAME', 'test3');

$dbc = mysqli_connect(DB_HOST, DB_NAME, DB_PASSWORD, DB_USER)
OR die('Could not connect to MySQL');

?>