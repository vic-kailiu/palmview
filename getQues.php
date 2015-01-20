<?php
$type = $_GET['type'];
include('conn.php');

try{
	$pstmt = $dbConn->prepare(
	'SELECT qID, qnsType, qns, ans from `QUESTIONDB` WHERE `qnsType` like ? ORDER BY  `QUESTIONDB`.`qID` ASC ');
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

// generate ramdom number within range
$numbers = range(0, $rc-1);
shuffle($numbers);
$seeds = array_slice($numbers, 0, 5);
sort($seeds);
$arrlength = count($seeds);

$outp = "[";

$index = 0;
for($k=0;$k<$rc;$k++){
	$pstmt->fetch(PDO::FETCH_ASSOC);

	if ($k == $seeds[$index]) {
		if ($index!=0)
			$outp .=',';

		$outp .= "{";
		$outp .= '"id":"'	.$id.	'", ';
		$outp .= '"type":"'.$qtype.	'", ';
		$outp .= '"qns":"'	.$qns.	'", ';
		$outp .= '"ans":"'	.$ans.	'"';
		$outp .="}";

		$index++;
	}

	if ($index >= $arrlength) {
		break;
	}
}

$outp .="]";
echo($outp);
?>