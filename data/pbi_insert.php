<?php
// Get conf data
include_once 'dbconf/dbconf.php';

$pbi_id = $_POST['pbiId'];
$pbi_descr = $_POST['pbiDescr'];

// Create connection
$conn = new mysqli($host, $user, $pwd, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$stmt = $conn->prepare("insert into pbi_list (pbi_id,pbi_descr) values (?,?)");
$stmt->bind_param('is', $pbi_id, $pbi_descr);

if ($stmt->execute()) {
    echo '{"success":"true"}';
} else {
	$error_code = $stmt->error;
	echo '{"success":"false","error_code":"'.$error_code.'"}';
}

mysqli_close($conn);
?>