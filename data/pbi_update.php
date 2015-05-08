<?php
// Get conf data
include_once 'dbconf/dbconf.php';

$pbi_id = $_POST['pbiId'];
$pbi_descr = $_POST['pbiDescr'];
$pbi_done_documentation = $_POST['pbiDocumentation'];
$pbi_done_merge = $_POST['pbiDoneMerge'];
$pbi_done_validation_po = $_POST['pbiDoneValidationPO'];
$pbi_deployable = $_POST['pbiDeployable'];
$pbi_deployed = $_POST['pbiDeployed'];
$user_name = $_POST['userName'];

// Create connection
$conn = new mysqli($host, $user, $pwd, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$stmt_update_pbi = $conn->prepare("update pbi_list set pbi_descr = ?, pbi_done_documentation = ?, pbi_done_merge = ?, pbi_done_validation_po = ?, pbi_deployable = ?, pbi_deployed = ? where pbi_id = ?");
$stmt_update_pbi->bind_param('siiiiii', $pbi_descr, $pbi_done_documentation, $pbi_done_merge, $pbi_done_validation_po, $pbi_deployable, $pbi_deployed, $pbi_id);

$stmt_log_update = $conn->prepare("insert into pbi_updates (pbi_id,user_name,pbi_update_date) values (?,?,sysdate())");
$stmt_log_update->bind_param('is', $pbi_id, $user_name);

if ($stmt_update_pbi->execute() && $stmt_log_update->execute()) {
    echo '{"success":"true"}';
} else {
	$error_code = $stmt_update_pbi->error;
	echo '{"success":"false","error_code":"'.$error_code.'"}';
}

mysqli_close($conn);
?>