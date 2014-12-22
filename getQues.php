<?php
$q = intval($_GET['q']);
include('conn.php');

try{
	$pstmt = $dbConn->prepare(
	'(SELECT qns, ans from QUESTIONDB 
	WHERE qID = ?)');
	$pstmt->execute(array($q));
	$pstmt->bindColumn(1,$qns);
	$pstmt->bindColumn(2,$ans);
	$pstmt->fetch(PDO::FETCH_ASSOC);
}
catch (Exception $e) 
{
	echo '<p>error</p>';
	$fileName = basename($e->getFile(), ".php"); // Filename that trigger the exception
	$lineNumber = $e->getLine();                 // Line number that triggers the exception
	die("[$fileName][$lineNumber] Database error: " . $e->getMessage() . '<br />');
}

$outp = "[{";
$outp .= ' "qns":" '.$qns.' ", ';
$outp .= ' "ans":" '.$ans.' ", ';
$outp .="}]";

echo($outp);
?>