<?php
// Get conf data
include_once 'dbconf/dbconf.php';

// Create connection
$conn = new mysqli($host, $user, $pwd, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "select pbi_id, pbi_descr, pbi_done_documentation, pbi_done_merge, pbi_done_validation_po, pbi_deployable, pbi_deployed from pbi_list";
$result = $conn->query($sql);
// Print JSON
$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}

print json_encode($rows);

mysqli_close($conn);
?>