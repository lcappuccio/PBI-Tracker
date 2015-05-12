<?php
// Get conf data
include_once 'dbconf/dbconf.php';

$user_name = $_POST['userName'];
error_log("User name: ".$user_name);

// Create connection
$conn = new mysqli($host, $user, $pwd, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$stmt_update_last_login = $conn->prepare("update pbi_user set last_login = sysdate() where user_name = ?");
$stmt_update_last_login->bind_param('s', $user_name);

if ($stmt_update_last_login->execute()) {
    echo '{"success":"true"}';
} else {
	$error_code = $stmt_update_last_login->error;
	echo '{"success":"false","error_code":"'.$error_code.'"}';
}

mysqli_close($conn);
?>