<?php

require_once('../mysqli_connect.php');

$query = "SELECT first_name, last_name, FROM students";

$response = @mysqli_query($dbc, $query);

if($response) {
    while($row = mysqli_fetch_array($response)) {
        $row[first_name] . 
        $row[last_name] .  
    }
}
?>