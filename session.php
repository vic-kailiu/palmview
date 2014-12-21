<?php
include('conn.php');
session_start();// Starting Session
// Storing Session
$user_check=$_SESSION['name'];
// SQL Query To Fetch Complete Information Of User
try{
    $pstmt = $dbConn->prepare('(SELECT StudentName as Name from STUDENT WHERE StudentName = ?)');
    $pstmt->execute(array($user_check));
    $pstmt->bindColumn(1,$name);
    $pstmt->fetch(PDO::FETCH_ASSOC);
  }
catch (Exception $e) {
	echo '<p>error</p>';
	$fileName = basename($e->getFile(), ".php"); // Filename that trigger the exception
	$lineNumber = $e->getLine();                 // Line number that triggers the exception
	die("[$fileName][$lineNumber] Database error: " . $e->getMessage() . '<br />');
}

if (!isset($name)) {
	header('Location:index_login.php');	 // Redirecting To Home Page
}
?>