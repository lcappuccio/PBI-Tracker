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

// Create connection
$conn = new mysqli($host, $user, $pwd, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$stmt = $conn->prepare("update pbi_list set pbi_descr = ?, pbi_done_documentation = ?, pbi_done_merge = ?, pbi_done_validation_po = ?, pbi_deployable = ?, pbi_deployed = ? where pbi_id = ?");
$stmt->bind_param('siiiiii', $pbi_descr, $pbi_done_documentation, $pbi_done_merge, $pbi_done_validation_po, $pbi_deployable, $pbi_deployed, $pbi_id);

if ($stmt->execute()) {
    echo '{"success":"true"}';
} else {
	$error_code = $stmt->error;
	echo '{"success":"false","error_code":"'.$error_code.'"}';
}

mysqli_close($conn);
?>