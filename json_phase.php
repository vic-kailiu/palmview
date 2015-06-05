<?php
$type = $_GET['type'];
include('conn.php');

try{
$pstmt = $dbConn->prepare(
'SELECT phaseId, title, label, caption, contentType, para1, para2, para3 from `PHASE_TRY` where 1 ORDER BY `PHASE_TRY`.`phaseId` ASC ');
$pstmt->execute(array($type));
$pstmt->bindColumn(1,$phaseId);
$pstmt->bindColumn(2,$title);
$pstmt->bindColumn(3,$label);
$pstmt->bindColumn(4,$caption);
$pstmt->bindColumn(5,$contentType);
$pstmt->bindColumn(6,$para1);
$pstmt->bindColumn(7,$para2);
$pstmt->bindColumn(8,$para3);
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

if ($k != 0)
    $outp .=',';

$outp .= "{";
$outp .= '"id":"' .$phaseId. '", ';
$outp .= '"title":"'.$title. '", ';
$outp .= '"label":"'.$label. '", ';
$outp .= '"caption":"'  .$caption.  '", ';
$outp .= '"contentType":"'  .$contentType.  '", ';
$outp .= '"para1":"'  .$para1.  '", ';
$outp .= '"para2":"'  .$para2.  '", ';
$outp .= '"para3":"'  .$para3.  '"';
$outp .="}";
}

$outp .="]";
echo( json_encode($outp) ) ;
?>