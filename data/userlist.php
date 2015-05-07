<?php
// Get conf data
include_once 'dbconf/dbconf.php';

// Create connection
$conn = new mysqli($host, $user, $pwd, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "select user_id, user_name, user_active from pbi_user";
$result = $conn->query($sql);

// Print JSON
$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
print json_encode($rows);

error_log("size of ".sizeof($rows));

mysqli_close($conn);
?>