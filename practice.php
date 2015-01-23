<?php   
  include('session.php');

  $sessionID = session_id();
  $userID = $_SESSION['id'];
  $phaseID = 18;
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
              <font face="varela round" size="4" color="black">
                <div class="row">
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
                </div>
                <!-- For Question Text and Keywords -->
                <div class="row">
                  <!-- Question Text-->
                  <div class="col-sm-5">
                    <h4 id="questionId">Question:</h4>
                    <div id="text"></div>
                  </div>
                  <!-- Keywords -->
                  <!-- <div class="col-sm-5">
                    <div name ="keyword" id="keywords" />
                  </div> -->
                </div>
                <!-- /.row -->
                <!-- For Question -->
                <div class="row">
                  <!-- Question-->
                  <div class="col-sm-5" id="question">
                  </div>
                  <!-- Drag Source -->
                  <div class="col-sm-5" id="drag_source">
                  </div>
                </div>
                <!-- /.row -->
                <div id="answer"></div>
            </div>
          </div>
          <!--back to previous page (teaching)-->
          <br><br><br><br>
          <script>
            function suba(){}
          </script>
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

        function logPractice(actType, act, tar1, tar2, correct, time, duration) {
          log && log.push([<?php echo $userID;?>,<?php echo $phaseID?>, time, actType, correct,act, duration, tar1, tar2,'<?php echo $sessionID;?>']);
        }
      </script>
   </body>
</html>