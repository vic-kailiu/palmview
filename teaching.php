<?php
  include( 'session.php');
  $sessionID = session_id();
  $userID = $_SESSION['id'];
  $phaseID = 17;

try{
  $pstmt = $dbConn->prepare(
  'SELECT * FROM  `VIDEO` ORDER BY  `VIDEO`.`order` ASC ');
  $pstmt->execute();
  $pstmt->bindColumn(1,$t);
  $pstmt->bindColumn(2,$id);
  $pstmt->bindColumn(3,$order);
  $rc = $pstmt->rowCount();

  $titles = [];
  $keys = [];
  for($i=0;$i<$rc;$i++){
    $pstmt->fetch(PDO::FETCH_ASSOC);
    array_push($titles, $t);
    array_push($keys, $id);
  }
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
      <script>
        var player = new Array();
        // 2. This code loads the IFrame Player API code asynchronously.
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 
        function onYouTubeIframeAPIReady() {
          //smelly way
          <?php
            for($i=0;$i<$rc;$i++){
              echo 'player.push( new YT.Player("player'.$i.'" ,{ videoId:"'.$keys[$i].'", events: {"onStateChange": onPlayerStateChange} }));';
              echo "\r\n";
            }
          ?>
          // for(i = 0; i < <?php echo $rc ?> ; i++) {
          //   player.push( new YT.Player("player"+i, {
          //   videoId: "M7lc1UVf-VE",
          //   events: {
          //     "onStateChange": onPlayerStateChange
          //   }
          // }) );
          // }
        }

        var initialStartTime = -1;

        function onPlayerStateChange(event) {
          switch(event.data) {
            case YT.PlayerState.PLAYING:
              if (initialStartTime < 0)
                initialStartTime = new Date();

              log.push([<?php echo $userID;?>,<?php echo $phaseID?>,getSQLTimeString(new Date()),'mouseClick','null','video_start','null',event.target.B.videoData.video_id, event.target.getCurrentTime(),'<?php echo $sessionID;?>']);
              break;
            case YT.PlayerState.PAUSED:
              log.push([<?php echo $userID;?>,<?php echo $phaseID?>,getSQLTimeString(new Date()),'mouseClick','null','video_pause','null',event.target.B.videoData.video_id, event.target.getCurrentTime(),'<?php echo $sessionID;?>']);
              break;
            case YT.PlayerState.ENDED:
              var cur = new Date();
              var duration = 60*60*1000*(cur.getHours()-initialStartTime.getHours())+60*1000*(cur.getMinutes()-initialStartTime.getMinutes())+1000*(cur.getSeconds()-initialStartTime.getSeconds())+(cur.getMilliseconds()-initialStartTime.getMilliseconds());

              log.push([<?php echo $userID;?>,<?php echo $phaseID?>,getSQLTimeString(new Date()),'mouseClick','null','video_end',duration,event.target.B.videoData.video_id, 'null','<?php echo $sessionID;?>']);
              break;
          }
        }
      </script>

   </head>
   <body onload="logStartActivity()" onunload="logEndActivity()">
      <section id="container" >
        <?php include('comm_frame.html'); ?>
         
        <!--MAIN CONTENT-->
        <!--main content start-->
        <section id="main-content">
          <section class="wrapper site-min-height">
            <h3><i class="fa fa-angle-right"></i> Video Guide</h3>
            <div style="position: relative;">
              <div style="position: absolute; top: 0; right: 10px;" >
                <a href="lock_screen.php" class="btn btn-warning">Pause whatever I am doing</a>
              </div>
            </div>
            <br><br>
            <div class="row mt">
              <div class="col-lg-12">
                <p>
                  Please watch the following videos about model drawing then head on to the practice questions. <br>
                </p>
              </div>
            </div>
            <?php
              for($i=0;$i<$rc;$i++){
                echo '<div class="showback"><h4><i class="fa fa-angle-right"></i> '.$titles[$i].'</h4>';
                echo '<div class="embed-responsive embed-responsive-16by9"><div class="embed-responsive-item" id="player'.$i.'"></div></div></div>';
              }
            ?>
            <br><br><br>
            <a href="practice.php" class="btn btn-default">Next</a>
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
      <?php include('comm_js.html'); ?>
      <!--script for this page-->
      <script>
      $(document).ready(function () {
            $('#mn_teaching').addClass('active')
            return false;
         });
      //custom select box
      // $(function(){
      //     $('select.styled').customSelect();
      // });
      </script>
   </body>
</html>