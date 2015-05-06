<?php
// Get conf data
include_once '../dbconf/dbconf.php';

// Create connection to Oracle
$conn = oci_connect($user, $pwd, $host, $charset);
if (!$conn) {
	$e = oci_error();  // For oci_execute errors pass the statement handle
	print htmlentities($e['message']);
	print "\n<pre>\n";
	print htmlentities($e['sqltext']);
	printf("\n%".($e['offset']+1)."s", "^");
	print  "\n</pre>\n";
}
// Define query
//$query = 	'select reascdid,reascddsc from reasoncodes
//where reascdid > 3 and reascdid in (53,58,103,104,105,106,107,108) group by reascdid,reascddsc union all 
//select 1,\'Head Quarter Promotion\' from dual order by 2 asc';            

$query = 
'select stuff from table order by whatever asc';

// Create statement
$stmt = oci_parse($conn, $query);
// Execute the query
$r = oci_execute($stmt);
if (!$r) {
	$e = oci_error($stmt);  // For oci_execute errors pass the statement handle
	print htmlentities($e['message']);
	print "\n<pre>\n";
	print htmlentities($e['sqltext']);
	printf("\n%".($e['offset']+1)."s", "^");
	print  "\n</pre>\n";
}
// Get total cols + rows
// $ncols = oci_num_fields($stmt);
$nrows = oci_fetch_all ($stmt,$res, null, null, OCI_FETCHSTATEMENT_BY_ROW + OCI_NUM);

// Debug stuff
// echo sizeof($res);
// print_r($res);
// print_r(array_keys($res));
// print_r(array_values($res));

// Print JSON
echo "{records:[";
for ($i = 0; $i < sizeof($res); $i++) {
	echo '{';
	for ($j = 0; $j < sizeof($res[$i]); $j++) {
		echo '"'.oci_field_name($stmt, $j+1).'":'.'"'.$res[$i][$j].'"';
		if ($j < sizeof($res[$i])-1) {
			echo ',';
		}
	}
	if ($i < sizeof($res)-1) {
		echo '},';
	} else {
		echo '}';
	}
}

echo "]}";

// Close all
oci_free_statement($stmt);
oci_close($conn);
?>