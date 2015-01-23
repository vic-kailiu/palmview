<?php   
  include('session.php');

  $sessionID = session_id();
  $userID = $_SESSION['id'];
  $phaseID = 19;

  try{
    $pstmt = $dbConn->prepare(
    'SELECT qns,ans,opt1,opt2,opt3,opt4,qID FROM QUESTIONDB WHERE phaseID = 2 ORDER BY RAND() LIMIT 10;');
    $pstmt->execute(array($phaseID));
    $pstmt->bindColumn(1,$q);
    $pstmt->bindColumn(2,$a);
    $pstmt->bindColumn(3,$opt1);
    $pstmt->bindColumn(4,$opt2);
    $pstmt->bindColumn(5,$opt3);
    $pstmt->bindColumn(6,$opt4);
    $pstmt->bindColumn(7,$id);
    $rc = $pstmt->rowCount();
  } 
  catch (Exception $e) 
  {
    echo '<p>error</p>';
    $fileName = basename($e->getFile(), ".php"); // Filename that trigger the exception
    $lineNumber = $e->getLine();         // Line number that triggers the exception
    die("[$fileName][$lineNumber] Database error: " . $e->getMessage() . '<br />');
  }

?>
<!DOCTYPE html>
<html lang="en">
   <head>
      <title>SEEP; Palm View Pri Online Portal</title>
      <?php include('comm_header.html'); ?>
      <link href="css/questions.css" rel="stylesheet">
      <link href="css/sb-admin-2.css" rel="stylesheet">
   </head>
   <body onload="logStartActivity()" onunload="logEndActivity()">
      <section id="container" >
        <?php include('comm_frame.html'); ?>
        
        <!--MAIN CONTENT-->
        <!--main content start-->
        <section id="main-content">
          <section class="wrapper site-min-height">
            <h3><i class="fa fa-angle-right"></i> Practice Questions</h3>
            <div style="position: relative;">
              <div style="position: absolute; top: 0; right: 10px;" >
                <a href="DIPlock_screen.php" class="btn btn-warning">Pause whatever I am doing</a>
              </div>
            </div>
            <br><br>
            <div class="row mt">
              <div class="col-lg-12">
                <p>
                  We have previously watched videos about different types of model drawing.<br>
                  Now, let us get into practice mode.<br>
                  Click on the button below to generate practice questions, let's go!<br><br><br>
                </p>
              </div>
            </div>
                
  <!--                 <div class="row">
                    <div class="col-lg-12">
                      <button type="button" class="btn btn-success" onclick="generateQuestion()">Generate Question</button>                               
                      <select id="selecttype" class="btn btn-theme dropdown-toggle">
                        <option value="%">Random (+,-,x,/)</option>
                        <option value="_A%">Addition (+)</option>
                        <option value="_S%">Subtraction (-)</option>
                        <option value="_M%">Multiplication (x)</option>
                        <option value="_D%">Division (/)</option>
                      </select>
                    </div>
                  </div> -->
                  <!-- For Question Text and Keywords -->
            <font face="varela round" size="3" color="black">
            <div class="row" style="margin: 0;">
            <?php
              for($i=0;$i<$rc;$i++){
                $pstmt->fetch(PDO::FETCH_ASSOC);
                echo '<div class="questions" id="question'.$i.'"><p><b>Q'.($i+1).'</b> '.$q.'<span><img class="tickcross" style="display:none"></span></p>';
                echo '<input type="hidden" id="a'.$id.'" value="'.$a.'"></input>';
                echo '<input type="hidden" value="'.$id.'"></input>';
                if(strlen($opt1)>0){
                  echo '<ol><input type="radio" name="q'.$id.'" id="q'.$id.'_1" onclick="logMCQ(event)" value="'.$opt1.'">'.$opt1.'</input></ol>';
                }
                if(strlen($opt2)>0){
                  echo '<ol><input type="radio" name="q'.$id.'" id="q'.$id.'_2" onclick="logMCQ(event)" value="'.$opt2.'">'.$opt2.'</input></ol>';
                }
                if(strlen($opt3)>0){
                  echo '<ol><input type="radio" name="q'.$id.'" id="q'.$id.'_3" onclick="logMCQ(event)" value="'.$opt3.'">'.$opt3.'</input></ol>';
                }
                if(strlen($opt4)>0){
                  echo '<ol><input type="radio" name="q'.$id.'" id="q'.$id.'_4" onclick="logMCQ(event)" value="'.$opt4.'">'.$opt4.'</input></ol>';
                }
                echo '</div><br>';
              }
            ?>
            </div>
                  <!-- /.row -->
            <!--back to previous page (teaching)-->
            <div>
              <a href="teaching.php" class="btn btn-default">Back</a>
              <!--forward to next page (quiz)-->
              <a href="quiz.php" class="btn btn-default">Next</a><br><br>
            </div>
            </font>
          </section>
          <!--/wrapper -->
        </section>
        
        <!-- /MAIN CONTENT -->
        <!--main content end-->
        <!--footer start-->
        <footer class="site-footer">
          <div class="text-center">
             2014 - Palm View Primary School
             <a href="teaching.php#" class="go-top">
             <i class="fa fa-angle-up"></i>
             </a>
          </div>
        </footer>
        <!--footer end-->
      </section>
      <!-- js placed at the end of the document so the pages load faster -->
      <?php include('comm_js.html'); ?>

      <script src="js/sb-admin-2.js"></script>
      <script>
        $(document).ready(function () {
          $('#mn_practice').addClass('active');
          return false;
        });

        //custom select box
        // $(function(){
        //     $('select.styled').customSelect();
        // });

      function logMCQ(event){
        //`studentID`,`phaseID`,`time`,`actionType`,`correct`,`action`,`duration`,`target1`,`target2`
        var target = event.currentTarget.id;
        var questionID = target.substring(1,target.length-2);
        var choice = target.substring(target.length-1,target.length);
        var correct = document.getElementById('a'+questionID).value == event.currentTarget.value? 1:0;
        log.push([<?php echo $userID;?>,<?php echo $phaseID?>,getSQLTimeString(new Date()),'mouseClick',correct,'mcq_select','null',questionID,choice,'<?php echo $sessionID;?>']);
      }
      </script>
   </body>
</html>