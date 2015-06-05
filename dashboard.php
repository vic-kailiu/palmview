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
      <?php include('dialog.html'); ?>
   </head>
   <body onload="logStartActivity()" onunload="logEndActivity()">
      <section id="container" >
         <?php include('comm_frame.html'); ?>
         <!-- MAIN CONTENT -->
         <!--main content start-->
         <section id="main-content">
            <section class="wrapper site-min-height"/>
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
         <!-- Loading Modal, Place at bottom of page -->
         <div class="modal">
           <div class="item" />
         </div>
         <!--footer end-->
      </section>
      <div id="dialog_parent" title="Attention" style="display:none; padding:10px; overflow: hidden;">
        <img src="images/withparent.png" style="float: left; width: 60%; margin-right: 10px;">Is your parent sitting beside you?
      </div>
      <script src="js/common-scripts.js"></script>
      <script type="application/javascript">
         dialog = $( "#dialog_parent" ).dialog({
          width: 400,
          height: 350,
          modal: true,
        draggable: false,
          closeOnEscape: false,
          open: function(event, ui) {
             $(".ui-dialog-titlebar-close").hide(); 
           },
          buttons: {
            'Yes': function() {
              logAction('mouseClick', 'with_parent', true, 'null', 'null', 0, 'null');
              $(this).dialog('destroy').remove(); 
            },
            'No': function() {
              logAction('mouseClick', 'with_parent', false, 'null', 'null', 0, 'null');
              $(this).dialog('destroy').remove(); 
            }
          }
         });
         dialog.bind('dialogclose', function(event) {
           logAction('mouseClick', 'with_parent', 'null', 'null', 'null', 0, 'null');
         });
      </script>
   </body>
</html>