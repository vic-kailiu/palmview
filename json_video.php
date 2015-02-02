<?php
$type = $_GET['type'];
include('conn.php');

try{
$pstmt = $dbConn->prepare(
'SELECT title, videoID from `VIDEO` where 1 ORDER BY `VIDEO`.`order` ASC ');
$pstmt->execute(array($type));
$pstmt->bindColumn(1,$title);
$pstmt->bindColumn(2,$videoID);
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
$outp .= '"title":"'.$title. '", ';
$outp .= '"videoID":"'  .$videoID.  '"';
$outp .="}";
}

$outp .="]";
echo( $outp ) ;
?>