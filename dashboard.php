<?php
   include( 'session.php'); 

   $sessionID = session_id();
   $userID = $_SESSION['id'];
?>
<!DOCTYPE html>
<html lang="en">
   <head>
      <title>SEEP; Palm View Pri Online Portal</title>
      <?php include('comm_header.html'); ?>
      <?php include('comm_js.html'); ?>
   </head>
   <body onload="logStartActivity()" onunload="logEndActivity()">
      <section id="container" >
         <?php include('comm_frame.html'); ?>
         <!-- MAIN CONTENT -->
         <!--main content start-->
         <section id="main-content">
            <section class="wrapper"/>
         </section>
         <!--main content end-->
         <!--footer start-->
         <footer class="site-footer">
            <div class="text-center">
               2014 - Palm View Primary School
               <a href="dashboard.php#" class="go-top">
               <i class="fa fa-angle-up"></i>
               </a>
            </div>
         </footer>
         <!--footer end-->
      </section>
      <script type="application/javascript">
         $(document).ready(function () {
            loadDashboard();
         });
      </script>
   </body>
</html>