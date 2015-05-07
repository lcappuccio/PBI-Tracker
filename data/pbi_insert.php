<?php
// Get conf data
include_once 'dbconf/dbconf.php';

// Create connection
$conn = new mysqli($host, $user, $pwd, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$stmt = $mysqli->prepare("insert into pbi_list (pbi_id,pbi_descr) values (?,?)");
$stmt->bind_param('is', $pbi_id, $pbi_descr);

if ($stmt->execute()) {
    echo '{"success":"true"}';
} else {
	echo '{"success":"false"}';
}

mysqli_close($conn);
?>