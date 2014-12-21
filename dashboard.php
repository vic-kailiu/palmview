<?php
 
// Inialize session
session_start();
 
// Check, if username session is NOT set then this page will jump to login page
if (!isset($_SESSION['username'])) {
header('Location: DIPlogin.php');
}
  
//echo $_SESSION["userName"];
define('DB_HOST', 'mysql1.000webhost.com'); 
define('DB_NAME', 'a2047226_dip'); 
define('DB_USER','a2047226_myuser');
define('DB_PASSWORD','5xxxxx'); 
$con=mysql_connect(DB_HOST,DB_USER,DB_PASSWORD) or die("Failed to connect to MySQL: " . mysql_error()); $db=mysql_select_db(DB_NAME,$con) 
or die("Failed to connect to MySQL: " . mysql_error()); 

?>



<!DOCTYPE html>
<html lang="en">
  <head>
  
  <script>

function getHiddenProp(){
    var prefixes = ['webkit','moz','ms','o'];
    
    // if 'hidden' is natively supported just return it
    if ('hidden' in document) return 'hidden';
    
    // otherwise loop over all the known prefixes until we find one
    for (var i = 0; i < prefixes.length; i++){
        if ((prefixes[i] + 'Hidden') in document) 
            return prefixes[i] + 'Hidden';
    }
    // otherwise it's not supported
    return null;
}

function isHidden() {
    var prop = getHiddenProp();
    if (!prop) return false;
    
    return document[prop];
}

var visProp = getHiddenProp();
if (visProp) {
  var evtname = visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
  document.addEventListener(evtname, visChange);
}

function visChange() {
  var timestamp;

// Date() prototype does not provide native number padding - let's add a method:
Date.prototype.pad = function(integer) {
    var result;
    // Can't decide between ternary and slicing
    // result = ("0" + integer).slice(-2); 
    result = integer < 10
                ? "0" + integer
                : integer;
    return result;
};

// Create a new Date() instance and add day, time and now properties
timestamp = new Date();

// Reorder the array entries to your own needs
timestamp.day = [
    timestamp.pad(timestamp.getDate()),
    timestamp.pad(timestamp.getMonth() + 1), // getMonth() returns 0 to 11
    timestamp.getFullYear()
];

timestamp.time = [
    timestamp.pad(timestamp.getHours()),
    timestamp.pad(timestamp.getMinutes()),
    timestamp.pad(timestamp.getSeconds())
];

timestamp.now = timestamp.time.join("");

   var txtFld = document.getElementById('visChangeText');

   if (txtFld) {
      if (isHidden()){
         txtFld.value += "TimeOut: "+ timestamp.now+"\n";		 
		 console.log("timeOff: "+timestamp.now);
		 }
      else{
		txtFld.value += "TimeIn: "+timestamp.now+"\n";
		console.log("timeIn: "+timestamp.now);
		}
      }
}

function myFun()
  {
  var timestamp;

// Date() prototype does not provide native number padding - let's add a method:
Date.prototype.pad = function(integer) {
    var result;
    // Can't decide between ternary and slicing
    // result = ("0" + integer).slice(-2); 
    result = integer < 10
                ? "0" + integer
                : integer;

    return result;
};

// Create a new Date() instance and add day, time and now properties
timestamp = new Date();

// Reorder the array entries to your own needs
timestamp.day = [
    timestamp.pad(timestamp.getDate()),
    timestamp.pad(timestamp.getMonth() + 1), // getMonth() returns 0 to 11
    timestamp.getFullYear()
];

timestamp.time = [
    timestamp.pad(timestamp.getHours()),
    timestamp.pad(timestamp.getMinutes()),
    timestamp.pad(timestamp.getSeconds())
];

timestamp.now = timestamp.time.join("");
//timestamp.now = timestamp.day.join("") + timestamp.time.join(""); //can have date too

console.log("Time Start: "+timestamp.now);
}
</script>
  
  
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="Dashboard">
    <meta name="keyword" content="Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">

    <title>SEEP; Palm View Pri Online Portal</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <!--external css-->
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="css/zabuto_calendar.css">
    <link rel="stylesheet" type="text/css" href="js/gritter/css/jquery.gritter.css" />
    <link rel="stylesheet" type="text/css" href="lineicons/style.css">   
	<link href="css/buttons.css" type="text/css" rel="stylesheet">
    
    <!-- Custom styles for this template -->
    <link href="css/style.css" rel="stylesheet">
    <link href="css/style-responsive.css" rel="stylesheet">

    <script src="js/chart-master/Chart.js"></script>
    
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

  <section id="container" >
      <!-- **********************************************************************************************************************************************************
      TOP BAR CONTENT & NOTIFICATIONS
      *********************************************************************************************************************************************************** -->
      <!--header start-->
      <header class="header black-bg">
              <div class="sidebar-toggle-box">
                  <div class="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
              </div>
            <!--logo start-->
            <a href="DIPdashboard.php" class="logo"><b>SEEP</b></a>
            <!--logo end-->
            <div class="nav notify-row" id="top_menu">
                <!--  notification start -->
                <ul class="nav top-menu">
                    <!-- settings start -->
                    <li class="dropdown">
                        <a data-toggle="dropdown" class="dropdown-toggle" href="DIPdashboard.php#">
                            <i class="fa fa-tasks"></i>
                            <span class="badge bg-theme">4</span>
                        </a>
                        <ul class="dropdown-menu extended tasks-bar">
                            <div class="notify-arrow notify-arrow-green"></div>
                            <li>
                                <p class="green">You have 4 pending tasks</p>
                            </li>
                            <li>
                                <a href="DIPteaching.php#">
                                    <div class="task-info">
                                        <div class="desc">Video Guide</div>
                                        <div class="percent">85%</div>
                                    </div>
                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%">
                                            <span class="sr-only">85% Complete (success)</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="DIPpractice.php#">
                                    <div class="task-info">
                                        <div class="desc">Practice Questions</div>
                                        <div class="percent">60%</div>
                                    </div>
                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                                            <span class="sr-only">60% Complete (warning)</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="DIPquiz.php#">
                                    <div class="task-info">
                                        <div class="desc">Quiz Questions</div>
                                        <div class="percent">20%</div>
                                    </div>
                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                                            <span class="sr-only">20% Complete (Important)</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="DIPdashboard.php#">
                                    <div class="task-info">
                                        <div class="desc">Review Model Drawing</div>
                                        <div class="percent">70%</div>
                                    </div>
                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%">
                                            <span class="sr-only">70% Complete (Important)</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="external">
                                <a href="DIPtodo_list.php#">See All Tasks</a>
                            </li>
                        </ul>
                    </li>
                    <!-- settings end -->
                    <!-- inbox dropdown start-->
                    <li id="header_inbox_bar" class="dropdown">
                        <a data-toggle="dropdown" class="dropdown-toggle" href="DIPdashboard.php#">
                            <i class="fa fa-envelope-o"></i>
                            <span class="badge bg-theme">3</span>
                        </a>
                        <ul class="dropdown-menu extended inbox">
                            <div class="notify-arrow notify-arrow-green"></div>
                            <li>
                                <p class="green">You have 3 new messages</p>
                            </li>
                           <li>
                                <a href="DIPdashboard.php#">
                                    <span class="photo"><img alt="avatar" src="img/friends/fr-02.jpg"></span>
                                    <span class="subject">
                                    <span class="from">Andy Khong</span>
                                    <span class="time">Just now</span>
                                    </span>
                                    <span class="message">
                                        Please do your homework.
                                    </span>
                                </a>
                            </li>
							                            <li>
                                <a href="DIPdashboard.php#">
                                    <span class="photo"><img alt="avatar" src="img/ny.jpg"></span>
                                    <span class="subject">
                                    <span class="from">Cheryl</span>
                                    <span class="time">25 mins.</span>
                                    </span>
                                    <span class="message">
                                        Hi, how is everything?
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="DIPdashboard.php#">
                                    <span class="photo"><img alt="avatar" src="img/friends/fr-11.jpg"></span>
                                    <span class="subject">
                                    <span class="from">Palm View Admin</span>
                                    <span class="time">40 mins.</span>
                                    </span>
                                    <span class="message">
                                     You are allowed to cheat in exams.
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="DIPdashboard.php#">See all messages</a>
                            </li>
                        </ul>
                    </li>
                    <!-- inbox dropdown end -->
                </ul>
                <!--  notification end -->
            </div>
            <div class="top-menu">
            	<ul class="nav pull-right top-menu">
                    <li><a class="logout" href="logout.php">Logout</a></li>
            	</ul>
            </div>
        </header>
      <!--header end-->
      
      <!-- **********************************************************************************************************************************************************
      MAIN SIDEBAR MENU
      *********************************************************************************************************************************************************** -->
      <!--sidebar start-->
      <aside>
          <div id="sidebar"  class="nav-collapse ">
              <!-- sidebar menu start-->
              <ul class="sidebar-menu" id="nav-accordion">
              
              	  <p class="centered"><a href="DIPprofile.php"><img src="img/friends/man.png" class="img-circle" width="60"></a></p>
              	  <h5 class="centered"><?php echo $_SESSION["userName"] ?></h5>
              	  	
                  <li class="mt">
                      <a class="active" href="DIPdashboard.php">
                          <i class="fa fa-dashboard"></i>
                          <span>Dashboard</span>
                      </a>
                  </li>

                  

                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-book"></i>
                          <span>My Student Guide</span>
                      </a>
                      <ul class="sub">
                          <li><a  href="DIPcalendar.php">Calendar</a></li>
                          <li><a  href="DIPtodo_list.php">Todo List</a></li>
                      </ul>
                  </li>
                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-pencil"></i>
                          <span>Model Drawing</span>
                      </a>
                      <ul class="sub">
                          <li><a  href="DIPteaching.php">Video Guide</a></li>
                          <li><a  href="DIPpractice.php">Practice Questions</a></li>
                          <li><a  href="DIPquiz.php">Quiz Questions</a></li>
                      </ul>
                  </li>
	
                  

              </ul>
              <!-- sidebar menu end-->
          </div>
      </aside>
      <!--sidebar end-->
      <!-- **********************************************************************************************************************************************************
      MAIN CONTENT
      *********************************************************************************************************************************************************** -->
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
					  			<p>Edit your settings here</p>
                  		</div>
                  		<div class="col-md-2 col-sm-2 box0">
                  			<div class="box1">
					  			<img src="smallicons/briefcase.png" style="width:80px;height:80px">
					  			<h3>Files</h3>
                  			</div>
					  			<p>4 New files are uploaded</p>
                  		</div>
                  		<div class="col-md-2 col-sm-2 box0">
                  			<div class="box1">
					  			<img src="smallicons/open-letter.png" style="width:80px;height:80px">
					  			<h3>Mail</h3>
                  			</div>
					  			<p>You have 23 unread messages in your inbox.</p>
                  		</div>
                  		<div class="col-md-2 col-sm-2 box0">
                  			<div class="box1">
					  			<img src="smallicons/bookshelf.png" style="width:80px;height:80px">
					  			<h3>Notes</h3>
                  			</div>
					  			<p>You have 2 new notes.</p>
                  		</div>
                  		<div class="col-md-2 col-sm-2 box0">
                  			<div class="box1">
					  			<img src="smallicons/rocket.png" style="width:80px;height:80px">
					  			<h3>Talk!</h3>
                  			</div>
					  			<p>Discuss your views with fellow friends!</p>
                  		</div>
                  	
                  	</div><!-- /row mt -->	
                  
                      
                      <div class="row mt">
                      <!-- LEARNING PEDAGOGY PANELS -->
                      	<div class="col-md-4 col-sm-4 mb">
                      		<div class="content-panel pn">
								<div id="blog-bg">
									<div class="blog-title">OUR PEDAGOGY</div>
								</div>
								<div class="blog-text">
									<p>Palm View believes in children's potential for learning given the right environment and nurturing.
									Learn how students are taught by clicking <a href="http://www.palmviewpri.moe.edu.sg/cos/o.x?c=/wbn/pagetree&func=view&rid=1159396">here</a>.</p>
								</div>
							</div>

                      	</div><!-- /col-md-4-->
                      	

                      	<div class="col-md-4 col-sm-4 mb">
                      		
                      			<div class="content-panel pn">
								<div id="blog1-bg">
									<div class="badge badge-popular">POPULAR</div>
									<div class="blog-title">JELLYDAD HERO</div>
								</div>
								<div class="blog1-text">
									<p>Our game of the month is Jellydad Hero. Enhance your critical thinking skills by playing it 
								  <a href="http://www.mathplayground.com/logic_jellydad_hero.html">here</a>.</p>
								</div>
							</div>
                      		
                      	</div><!-- /col-md-4 -->
                      	
						<div class="col-md-4 mb">
							<!-- WHITE PANEL - TOP USER -->
							<div class="content-panel pn">
								
								<div id="blog2-bg">
									<div class="blog-title">MODEL DRAWING</div>
								</div>
								<div class="blog2-text">
									<p>Learn how to tackle various model drawing questions 
								  <a href="DIPteaching.php">here</a>.</p>
								</div>
							
							</div>
						</div><!-- /col-md-4 -->
                      	

                    </div><!-- /row -->
                    
               
					
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
					</div><!-- /row -->	
					
                  </div><!-- /col-lg-9 END SECTION MIDDLE -->
                  
                  
      <!-- **********************************************************************************************************************************************************
      RIGHT SIDEBAR CONTENT
      *********************************************************************************************************************************************************** -->                  
                  
                  <div class="col-lg-3 ds">
                    <!--COMPLETED ACTIONS DONUTS CHART-->
						<h3>NOTIFICATIONS</h3>
                                        
                      <!-- First Action -->
                      <div class="desc">
                      	<div class="thumb">
                      		<span class="badge bg-theme"><i class="fa fa-clock-o"></i></span>
                      	</div>
                      	<div class="details">
                      		<p><muted>2 Minutes Ago</muted><br/>
                      		   <a href="#">Prof. Andy Khong</a> published 2 learning materials.<br/>
                      		</p>
                      	</div>
                      </div>
                      <!-- Second Action -->
                      <div class="desc">
                      	<div class="thumb">
                      		<span class="badge bg-theme"><i class="fa fa-clock-o"></i></span>
                      	</div>
                      	<div class="details">
                      		<p><muted>3 Hours Ago</muted><br/>
                      		   <a href="#">Cheryl Seow</a> sent you a message.<br/>
                      		</p>
                      	</div>
                      </div>
                      


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
                        </div><!-- / calendar -->
                      
                  </div><!-- /col-lg-3 -->
              </div><! --/row -->
          </section>
      </section>

      <!--main content end-->
      <!--footer start-->
      <footer class="site-footer">
          <div class="text-center">
              2014 - Palm View Primary School
              <a href="DIPdashboard.php#" class="go-top">
                  <i class="fa fa-angle-up"></i>
              </a>
          </div>
      </footer>
      <!--footer end-->
  </section>

    <!-- js placed at the end of the document so the pages load faster -->
    <script src="js/jquery.js"></script>
    <script src="js/jquery-1.8.3.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script class="include" type="text/javascript" src="js/jquery.dcjqaccordion.2.7.js"></script>
    <script src="js/jquery.scrollTo.min.js"></script>
    <script src="js/jquery.nicescroll.js" type="text/javascript"></script>
    <script src="js/jquery.sparkline.js"></script>


    <!--common script for all pages-->
    <script src="js/common-scripts.js"></script>
    
    <script type="text/javascript" src="js/gritter/js/jquery.gritter.js"></script>
    <script type="text/javascript" src="js/gritter-conf.js"></script>

    <!--script for this page-->
    <script src="js/sparkline-chart.js"></script>    
	<script src="js/zabuto_calendar.js"></script>	
	
	<script type="text/javascript">
        $(document).ready(function () {
        var unique_id = $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'Moblie Learning Update',
            // (string | mandatory) the text inside the notification
            text: 'SEEP app is now available on iOS and Google Play. Click <b>here</b> to download app.',
            // (string | optional) the image to display on the left
            image: 'assets/img/friends/fr-09.jpg',
            // (bool | optional) if you want it to fade out on its own or just sit there
            sticky: true,
            // (int | optional) the time you want it to be alive for before fading out
            time: '',
            // (string | optional) the class name you want to apply to that specific message
            class_name: 'my-sticky-class'
        });

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
                ajax: {
                    url: "show_data.php?action=1",
                    modal: true
                },
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