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

      <script src="js/chart-master/Chart.js"></script>

   </head>
   <body onunload="logEndActivity()">
      <section id="container" >
         <?php include('comm_frame.html'); ?>

         <!-- MAIN CONTENT -->
         <!--main content start-->
         <section id="main-content">
            <section class="wrapper">
               <div class="row">
                  <div class="col-lg-9 main-chart">
                     <div class="row mtbox">
                        <div class="col-md-2 col-sm-2 col-md-offset-1 box0">
                           <div class="box1">
                              <img src="smallicons/flag.png" style="width:80px;height:80px">
                              <h3>Settings</h3>
                           </div>
                           <p>We will implement it soon!</p>
                        </div>
                        <div class="col-md-2 col-sm-2 box0">
                           <div class="box1">
                              <img src="smallicons/briefcase.png" style="width:80px;height:80px">
                              <h3>Files</h3>
                           </div>
                           <p>We will implement it soon!</p>
                        </div>
                        <div class="col-md-2 col-sm-2 box0">
                           <div class="box1">
                              <img src="smallicons/open-letter.png" style="width:80px;height:80px">
                              <h3>Mail</h3>
                           </div>
                           <p>We will implement it soon!</p>
                        </div>
                        <div class="col-md-2 col-sm-2 box0">
                           <div class="box1">
                              <img src="smallicons/bookshelf.png" style="width:80px;height:80px">
                              <h3>Notes</h3>
                           </div>
                           <p>We will implement it soon!</p>
                        </div>
                        <div class="col-md-2 col-sm-2 box0">
                           <div class="box1">
                              <img src="smallicons/rocket.png" style="width:80px;height:80px">
                              <h3>Talk!</h3>
                           </div>
                           <p>We will implement it soon!</p>
                        </div>
                     </div>
                     <!-- /row mt -->  
                     <div class="row mt">
                        <!-- LEARNING PEDAGOGY PANELS -->
                        <div class="col-md-4 col-sm-4 mb">
                           <div class="content-panel pn">
                              <div id="blog-bg">
                                 <div class="blog-title">OUR PEDAGOGY</div>
                              </div>
                              <div class="blog-text">
                                 <p>Palm View believes in children's potential for learning given the right environment and nurturing.
                                    Learn how students are taught by clicking <a href="http://www.palmviewpri.moe.edu.sg/cos/o.x?c=/wbn/pagetree&func=view&rid=1159396">here</a>.
                                 </p>
                              </div>
                           </div>
                        </div>
                        <!-- /col-md-4-->
                        <div class="col-md-4 col-sm-4 mb">
                           <div class="content-panel pn">
                              <div id="blog1-bg">
                                 <div class="badge badge-popular">POPULAR</div>
                                 <div class="blog-title">JELLYDAD HERO</div>
                              </div>
                              <div class="blog1-text">
                                 <p>Our game of the month is Jellydad Hero. Enhance your critical thinking skills by playing it 
                                    <a href="http://www.mathplayground.com/logic_jellydad_hero.php">here</a>.
                                 </p>
                              </div>
                           </div>
                        </div>
                        <!-- /col-md-4 -->
                        <div class="col-md-4 mb">
                           <!-- WHITE PANEL - TOP USER -->
                           <div class="content-panel pn">
                              <div id="blog2-bg">
                                 <div class="blog-title">MODEL DRAWING</div>
                              </div>
                              <div class="blog2-text">
                                 <p>Learn how to tackle various model drawing questions 
                                    <a href="teaching.php">here</a>.
                                 </p>
                              </div>
                           </div>
                        </div>
                        <!-- /col-md-4 -->
                     </div>
                     <!-- /row --> 
                     <div class="row mt">
                        <!--CUSTOM CHART START -->
                        <div class="border-head">
                           <h3>MY RESULTS</h3>
                        </div>
                        <div class="custom-bar-chart">
                           <ul class="y-axis">
                              <li><span>100</span></li>
                              <li><span>80</span></li>
                              <li><span>60</span></li>
                              <li><span>40</span></li>
                              <li><span>20</span></li>
                              <li><span>0</span></li>
                           </ul>
                           <div class="bar">
                              <div class="title">Quiz 1</div>
                              <div class="value tooltips" data-original-title="85" data-toggle="tooltip" data-placement="top">85%</div>
                           </div>
                           <div class="bar ">
                              <div class="title">Quiz 2</div>
                              <div class="value tooltips" data-original-title="50" data-toggle="tooltip" data-placement="top">50%</div>
                           </div>
                           <div class="bar ">
                              <div class="title">Quiz 3</div>
                              <div class="value tooltips" data-original-title="60" data-toggle="tooltip" data-placement="top">60%</div>
                           </div>
                           <div class="bar ">
                              <div class="title">CA Assessment 1</div>
                              <div class="value tooltips" data-original-title="45" data-toggle="tooltip" data-placement="top">45%</div>
                           </div>
                           <div class="bar">
                              <div class="title">Quiz 4</div>
                              <div class="value tooltips" data-original-title="32" data-toggle="tooltip" data-placement="top">32%</div>
                           </div>
                           <div class="bar ">
                              <div class="title">Assignment 1</div>
                              <div class="value tooltips" data-original-title="62" data-toggle="tooltip" data-placement="top">62%</div>
                           </div>
                           <div class="bar">
                              <div class="title">Assignment 2</div>
                              <div class="value tooltips" data-original-title="75" data-toggle="tooltip" data-placement="top">75%</div>
                           </div>
                        </div>
                        <!--custom chart end-->
                     </div>
                     <!-- /row --> 
                  </div>
                  <!-- /col-lg-9 END SECTION MIDDLE -->
                  <!-- RIGHT SIDEBAR CONTENT-->                  
                  <div class="col-lg-3 ds">
                     <!--COMPLETED ACTIONS DONUTS CHART-->
                     <h3>NOTIFICATIONS</h3>
                     <div class="desc">
                        <div class="thumb">
                           <span class="badge bg-theme"><i class="fa fa-clock-o"></i></span>
                        </div>
                        <div class="details"><p><muted>No More Notifications</muted></p></div>
                     </div>
                     <!-- Action 
                     <div class="desc">
                        <div class="thumb">
                           <span class="badge bg-theme"><i class="fa fa-clock-o"></i></span>
                        </div>
                        <div class="details">
                           <p>
                              <muted>2 Minutes Ago</muted>
                              <br/>
                              <a href="#">Prof. Andy Khong</a> published 2 learning materials.<br/>
                           </p>
                        </div>
                     </div>
                     <div class="desc">
                        <div class="thumb">
                           <span class="badge bg-theme"><i class="fa fa-clock-o"></i></span>
                        </div>
                        <div class="details">
                           <p>
                              <muted>3 Hours Ago</muted>
                              <br/>
                              <a href="#">Cheryl Seow</a> sent you a message.<br/>
                           </p>
                        </div>
                     </div> -->
                     <!-- CALENDAR-->
                     <div id="calendar" class="mb">
                        <div class="panel green-panel no-margin">
                           <div class="panel-body">
                              <div id="date-popover" class="popover top" style="cursor: pointer; disadding: block; margin-left: 33%; margin-top: -50px; width: 175px;">
                                 <div class="arrow"></div>
                                 <h3 class="popover-title" style="disadding: none;"></h3>
                                 <div id="date-popover-content" class="popover-content"></div>
                              </div>
                              <div id="my-calendar"></div>
                           </div>
                        </div>
                     </div>
                     <!-- / calendar -->
                  </div>
                  <!-- /col-lg-3 -->
               </div>
               <!--/row -->
            </section>
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
      <!-- js placed at the end of the document so the pages load faster -->
      <?php include('comm_js.html'); ?>

      <!--script for this page-->
      <script src="js/sparkline-chart.js"></script>    
      <script src="js/zabuto_calendar.js"></script>    
      
      <script type="text/javascript">
         $(document).ready(function () {
            $('#mn_dashboard').addClass('active')
            /*var unique_id = $.gritter.add({
                // (string | mandatory) the heading of the notification
                title: 'Moblie Learning Update',
                // (string | mandatory) the text inside the notification
                text: 'SEEP app is now available on iOS and Google Play. Click <b>here</b> to download app.',
                // (string | optional) the image to display on the left
                image: 'img/friends/fr-09.jpg',
                // (bool | optional) if you want it to fade out on its own or just sit there
                sticky: true,
                // (int | optional) the time you want it to be alive for before fading out
                time: '',
                // (string | optional) the class name you want to apply to that specific message
                class_name: 'my-sticky-class'
            });*/
            return false;
         });
      </script>
      <script type="application/javascript">
         $(document).ready(function () {
             $("#date-popover").popover({html: true, trigger: "manual"});
             $("#date-popover").hide();
             $("#date-popover").click(function (e) {
                 $(this).hide();
             });
         
             $("#my-calendar").zabuto_calendar({
                 action: function () {
                     return myDateFunction(this.id, false);
                 },
                 action_nav: function () {
                     return myNavFunction(this.id);
                 },
                 // ajax: {
                 //     url: "show_data.php?action=1",
                 //     modal: true
                 // },
                 legend: [
                     {type: "text", label: "Special event", badge: "00"},
                     {type: "block", label: "Regular event", }
                 ]
             });
         });
                 
         function myNavFunction(id) {
             $("#date-popover").hide();
             var nav = $("#" + id).data("navigation");
             var to = $("#" + id).data("to");
             console.log('nav ' + nav + ' to: ' + to.month + '/' + to.year);
         }
      </script>
   </body>
</html>