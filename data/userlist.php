<?php
// Get conf data
include_once 'dbconf/dbconf.php';

// Create connection
$conn = new mysqli($host, $user, $pwd, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "select USER_ID, USER_NAME, USER_ACTIVE from PBI_USER";
$result = $conn->query($sql);

// Print JSON
$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
print json_encode($rows);

mysqli_close($conn);
?>