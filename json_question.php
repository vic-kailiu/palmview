<?php
$type = $_GET['type'];
include('conn.php');

try{
	$pstmt = $dbConn->prepare('SELECT qID, qnsType, qns, ans, opt1, opt2, opt3, opt4 from `QUESTIONDB` WHERE `qID` =326');
//	$pstmt = $dbConn->prepare('SELECT qID, qnsType, qns, ans, opt1, opt2, opt3, opt4 from `QUESTIONDB` WHERE `qnsType` like ? ORDER BY RAND( ) LIMIT 10');
	$pstmt->execute(array($type));
	$pstmt->bindColumn(1,$id);
	$pstmt->bindColumn(2,$qtype);
	$pstmt->bindColumn(3,$qns);
	$pstmt->bindColumn(4,$ans);
	$pstmt->bindColumn(5,$labels);
	$pstmt->bindColumn(6,$values);
	$pstmt->bindColumn(7,$opt1);
	$pstmt->bindColumn(8,$opt2);
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
	$outp .= '"id":"'		.$id.		'", ';
	$outp .= '"type":"'		.$qtype.	'", ';
	$outp .= '"text":"'		.$qns.		'", ';
	$outp .= '"ans":"'		.$ans.		'", ';
	$outp .= '"labels":"'	.$labels.	'", ';
	$outp .= '"values":"'	.$values.	'", ';
	$outp .= '"opt1":"'		.$opt1.		'", ';
	$outp .= '"opt2":"'		.$opt2.		'"';
	$outp .="}";

}

$outp .="]";
echo($outp);
?>