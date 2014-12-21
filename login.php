<?php
session_start(); // Starting Session
$error=''; // Variable To Store Error Message
if (empty($_POST['user']) || empty($_POST['pass']))
{
  echo "<script type='text/javascript'>alert('SORRY... YOU ENTERD WRONG ID AND PASSWORD... PLEASE RETRY...');location.href='index_login.php'</script>";
}
else
{
  $user = $_POST['user'];
  $pw = $_POST['pass'];

  include('conn.php');
  try{
    $pstmt = $dbConn->prepare(
    '(SELECT StudentID as ID, StudentName as Name, "student" as Type from STUDENT 
    WHERE StudentName = ? AND StudentPW = ?)
    UNION ALL 
    (SELECT TeacherID as ID,TeacherName as Name, "teacher" as Type FROM TEACHER 
    WHERE TeacherName = ? AND TeacherPW = ?)');
    $pstmt->execute(array($user, $pw, $user, $pw));
    $pstmt->bindColumn(1,$id);
    $pstmt->bindColumn(2,$name);
    $pstmt->bindColumn(3,$type);
    $pstmt->fetch(PDO::FETCH_ASSOC);
  }
  catch (Exception $e) 
  {
    echo '<p>error</p>';
    $fileName = basename($e->getFile(), ".php"); // Filename that trigger the exception
    $lineNumber = $e->getLine();                 // Line number that triggers the exception
    die("[$fileName][$lineNumber] Database error: " . $e->getMessage() . '<br />');
  }
  $_SESSION['id']=$id;
  $_SESSION['type']=$type;
  $_SESSION['name']=$name;

  //echo "<p>type: ".$type;
  if($type == 'student' )
  {
    header('Location: dashboard.php');
  }
  else if ($type == 'teacher')
  {
    header('Location: teacher_dashboard.php'); 
  }
  else
  {
    echo "<script type='text/javascript'>alert('SORRY... YOU ENTERD WRONG ID AND PASSWORD... PLEASE RETRY...');location.href='index_login.php'</script>";
  }
}
?>
