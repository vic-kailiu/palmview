<?php
$type = $_GET['type'];
include('conn.php');

try{
	$pstmt = $dbConn->prepare('SELECT qID, qnsType, qns, ans from `QUESTIONDB` WHERE `qnsType` like ? ORDER BY RAND( ) LIMIT 10');
	$pstmt->execute(array($type));
	$pstmt->bindColumn(1,$id);
	$pstmt->bindColumn(2,$qtype);
	$pstmt->bindColumn(3,$qns);
	$pstmt->bindColumn(4,$ans);
	$rc = $pstmt->rowCount();
}
catch (Exception $e) 
{
	echo '<p>error</p>';
	$fileName = basename($e->getFile(), ".php"); // Filename that trigger the exception
	$lineNumber = $e->getLine();                 // Line number that triggers the exception
	die("[$fileName][$lineNumber] Database error: " . $e->getMessage() . '<br />');
}

$outp = "[";

for($k=0;$k<$rc;$k++){
	$pstmt->fetch(PDO::FETCH_ASSOC);

	if ($k!=0) $outp .=',';

	$outp .= "{";
	$outp .= '"id":"'	.$id.	'", ';
	$outp .= '"type":"'.$qtype.	'", ';
	$outp .= '"qns":"'	.$qns.	'", ';
	$outp .= '"ans":"'	.$ans.	'"';
	$outp .="}";

}

$outp .="]";
echo($outp);
?>