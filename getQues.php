<?php
$type = "MODAL_A1";
include('conn.php');

try{
	$pstmt = $dbConn->prepare(
	'SELECT qID, qns, ans from `QUESTIONDB` WHERE `qnsType` = ? ORDER BY  `QUESTIONDB`.`qID` ASC ');
	$pstmt->execute(array($type));
	$pstmt->bindColumn(1,$id);
	$pstmt->bindColumn(2,$qns);
	$pstmt->bindColumn(3,$ans);
	$rc = $pstmt->rowCount();
}
catch (Exception $e) 
{
	echo '<p>error</p>';
	$fileName = basename($e->getFile(), ".php"); // Filename that trigger the exception
	$lineNumber = $e->getLine();                 // Line number that triggers the exception
	die("[$fileName][$lineNumber] Database error: " . $e->getMessage() . '<br />');
}

$q = rand (1, $rc);
for (int i = 1; i<=$q; i++)
	$pstmt->fetch(PDO::FETCH_ASSOC);

$outp = "[{";
$outp .= ' "id":" '.$id.' ", ';
$outp .= ' "qns":" '.$qns.' ", ';
$outp .= ' "ans":" '.$ans.' ", ';
$outp .="}]";

echo($outp);
?>