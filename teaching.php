<!DOCTYPE html>
<html lang="en">
  <head>
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
	<link href="css/buttons.css" type="text/css" rel="stylesheet">
        
    <!-- Custom styles for this template -->
    <link href="css/style.css" rel="stylesheet">
    <link href="css/style-responsive.css" rel="stylesheet">

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
                        <a data-toggle="dropdown" class="dropdown-toggle" href="index.html#">
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
                        <a data-toggle="dropdown" class="dropdown-toggle" href="index.html#">
                            <i class="fa fa-envelope-o"></i>
                            <span class="badge bg-theme">3</span>
                        </a>
                        <ul class="dropdown-menu extended inbox">
                            <div class="notify-arrow notify-arrow-green"></div>
                            <li>
                                <p class="green">You have 3 new messages</p>
                            </li>
                            <li>
                                <a href="index.html#">
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
                                <a href="index.html#">
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
                                <a href="index.html#">
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
                                <a href="index.html#">See all messages</a>
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
              	  <h5 class="centered">Alex Tan</h5>
              	  	
                  <li class="mt">
                      <a href="DIPdashboard.php">
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
                      <a class="active" href="javascript:;" >
                          <i class="fa fa-pencil"></i>
                          <span>Model Drawing</span>
						
                      </a>
                      <ul class="sub">
                          <li class="active"><a  href="DIPteaching.php">Video Guide</a></li>
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
          <section class="wrapper site-min-height">
          	<h3><i class="fa fa-angle-right"></i> Video Guide</h3>
			<div style="position: relative;">
            <div style="position: absolute; top: 0; right: 10px;" >
			<a href="DIPlock_screen.php" class="btn btn-warning">Pause whatever I am doing</a></div>
            </div><br><br>
          	<div class="row mt">
          		<div class="col-lg-12">
          		<p>
				Please watch the following videos about model drawing then head on to the practice questions. <br>
				</p>
          		</div>
          	</div>
                <div class="showback">
      			<h4><i class="fa fa-angle-right"></i> Model Drawing- <i>Method</i></h4>
					<!-- 16:9 aspect ratio -->
					<div class="embed-responsive embed-responsive-16by9">
						<iframe class="embed-responsive-item" src="http://www.youtube.com/embed/Jx9mtdx-7aQ" frameborder="0" allowfullscreen></iframe>
					</div>


	<?php
                         function studentProgress(){
                           $dbhost = 'mysql1.000webhost.com';
	                $dbuser = 'a2047226_myuser';
	                $dbpass = '5xxxxx';
	                  $conn = mysql_connect($dbhost, $dbuser, $dbpass);
	                if(! $conn )
	             {
	                       die('Could not connect: ' . mysql_error());
	             }
 
                   mysql_select_db('a2047226_dip');//selectdatabase
 
                  $sql = "Select * FROM TeachingGuide";
                  $result = mysql_query($sql, $conn);
 
 

 
                 $count = 1;
                while($row = mysql_fetch_array($result)) 
               { 
                      $type = $row[0];
                      $title = $row[1];
                      $code = $row[2];

                      
                       
                       echo "</div>";
                       echo "<div class='showback'>";
                       echo "<h4>";
                       echo strip_tags($title);
                      
                       echo "-";
                       echo strip_tags($type);
                       echo "</h4>";
                       echo "<div class='embed-responsive embed-responsive-16by9'>"; 
                       echo "<iframe class='embed-responsive-item' src='";
                       echo strip_tags($code);
                       echo "' frameborder='0' allowfullscreen></iframe>";
                       echo "</div>";
                       echo "</div>";
                       
                       
                         
                      
                       
                       
               
 
                     $count = $count+1;
 
 
             }       

     }
     studentProgress();
 
?>	



			
			</div>
			


        

			<br><br><br>
			
			<a href="DIPpractice.php" class="btn btn-default">Next</a>
			

			
			
		</section><! --/wrapper -->
      </section><!-- /MAIN CONTENT -->

      <!--main content end-->
      <!--footer start-->
      <footer class="site-footer">
          <div class="text-center">
              2014 - Palm View Primary School 
              <a href="DIPteaching.php#" class="go-top">
                  <i class="fa fa-angle-up"></i>
              </a>
          </div>
      </footer>
      <!--footer end-->
  </section>

    <!-- js placed at the end of the document so the pages load faster -->
    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery-ui-1.9.2.custom.min.js"></script>
    <script src="js/jquery.ui.touch-punch.min.js"></script>
    <script class="include" type="text/javascript" src="js/jquery.dcjqaccordion.2.7.js"></script>
    <script src="js/jquery.scrollTo.min.js"></script>
    <script src="js/jquery.nicescroll.js" type="text/javascript"></script>


    <!--common script for all pages-->
    <script src="js/common-scripts.js"></script>

    <!--script for this page-->
    
  <script>
      //custom select box

      $(function(){
          $('select.styled').customSelect();
      });

  </script>

  </body>
</html>	