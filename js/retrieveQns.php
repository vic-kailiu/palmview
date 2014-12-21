<?php
function retrieveQuestion(){
    $dbhost = 'mysql1.000webhost.com';
	$dbuser = 'a2047226_myuser';
	$dbpass = '5xxxxx';
	$conn = mysql_connect($dbhost, $dbuser, $dbpass);
	if(! $conn )
	{
	  die('Could not connect: ' . mysql_error());
	}

      mysql_select_db('a2047226_dip');//selectdatabase
 
      $sql = "Select * FROM QuestionDB where Type like 'A%'";
      $result = mysql_query($sql, $conn);


        $num_rows = mysql_num_rows($result);
        $random = rand (0, $num_rows-1);
        $count = 0;
        while($row = mysql_fetch_array($result)) 
        { 
            if($count == $random){
                $type = $row[1];
                $text = $row[2];
                $A = $row[3];
                $B = $row[4];
                $C = $row[5];
                $D = $row[6];
                $E = $row[7];
                $answer = $row[8];

                echo strip_tags($type);
                echo "<br><div id='abc'>";
                echo strip_tags($text);
                echo "</div><br>";
                echo strip_tags($A);
                echo strip_tags($B);
                echo strip_tags($C);
                echo strip_tags($D);
                echo strip_tags($E);
                echo strip_tags($answer);

            }
            $count = $count + 1;
        }
        $array = array($type,$text,$A,$B,$C,$D,$E,$answer);
        return $array;
    
}
retrieveQuestion();
?>						