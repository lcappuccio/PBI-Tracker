<?php
// Get conf data
include_once 'dbconf/dbconf.php';

$pbi_id = $_GET['pbiId'];

// Create connection
$conn = new mysqli($host, $user, $pwd, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = $conn->prepare("select user_name, pbi_update_date from pbi_updates where pbi_id = ? order by pbi_update_date desc");
$sql->bind_param('i', $pbi_id);
$sql->execute();
$result = $sql->get_result();
// Print JSON
$rows = array();
while($row = $result->fetch_array(MYSQLI_ASSOC)) {
    array_push($rows, $row);
}
print json_encode($rows);

mysqli_close($conn);
?>