<?php
// Get conf data
include_once 'dbconf/dbconf.php';

$pbi_id = $_POST['pbiId'];
$pbi_descr = $_POST['pbiDescr'];
$user_name = $_POST['userName'];

// Create connection
$conn = new mysqli($host, $user, $pwd, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$stmt_insert_pbi = $conn->prepare("insert into pbi_list (pbi_id,pbi_descr,pbi_insert_timestamp) values (?,?,sysdate())");
$stmt_insert_pbi->bind_param('is', $pbi_id, $pbi_descr);

$stmt_update_pbi = $conn->prepare("insert into pbi_updates (pbi_id,user_name,pbi_update_date) values (?,?,sysdate())");
$stmt_update_pbi->bind_param('is', $pbi_id, $pbi_descr);

if ($stmt_insert_pbi->execute() && $stmt_update_pbi->execute()) {
    echo '{"success":"true"}';
} else {
	$error_code = $stmt_insert_pbi->error;
	echo '{"success":"false","error_code":"'.$error_code.'"}';
}

mysqli_close($conn);
?>