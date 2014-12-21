<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="Dashboard">
    <meta name="keyword" content="Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">

    <title>SEEP; Palm View Pri Online Portal (Teacher's Edition)</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <!--external css-->
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="js/bootstrap-datepicker/css/datepicker.css" />
    <link rel="stylesheet" type="text/css" href="js/bootstrap-daterangepicker/daterangepicker.css" />
        
    <!-- Custom styles for this template -->
    <link href="css/style1.css" rel="stylesheet">
    <link href="css/style-responsive.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>
  <?php
	if(isset($_POST['add']))
	{
 
 
       
	$dbhost = 'mysql1.000webhost.com';
	$dbuser = 'a2047226_myuser';
	$dbpass = '5xxxxx';
	$conn = mysql_connect($dbhost, $dbuser, $dbpass);
	if(! $conn )
	{
	  die('Could not connect: ' . mysql_error());
	}
 
	if(! get_magic_quotes_gpc() )
	{
            $questions = addslashes ($_POST['questions']);
	   $emp_name = addslashes ($_POST['emp_name']);
	   $Type= addslashes ($_POST['optionmodel']);
	}
	else
	{
           $questions =  $_POST['questions'];
	   $emp_name = $_POST['emp_name'];
	   $Type= $_POST['optionmodel'];
	}
 
	$emp_salary = $_POST['emp_salary'];
 
       mysql_select_db('a2047226_dip');//selectdatabase
 
      
       
      $title=  $_POST['title'];
      $code = $_POST['code'];
      $type = $_POST['type'];
      $answer = "";
      $A = "";
      $B = "";
      $C = "";
      $D = "";
      $E = "";
        

   
      $sql = "INSERT INTO TeachingGuide".
		   "(Type, Title,code) ".
		   "VALUES('$type','$title','$code')";
 
 
 
 
 
	$retval = mysql_query( $sql, $conn );
 
	if(! $retval )
	{
	  die('Could not enter data: ' . mysql_error());
	}
		echo "Entered data successfully press back to continue\n";
 
		mysql_close($conn);
	}
	else
	{
		?>
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
            <a href="Teacherdashboard.php" class="logo"><b>SEEP (Teacher's Edition)</b></a>
            <!--logo end-->
            <div class="nav notify-row" id="top_menu">
                <!--  notification start -->
                <ul class="nav top-menu">
                    
                    <!-- inbox dropdown start-->
                    <li id="header_inbox_bar" class="dropdown">
                        <a data-toggle="dropdown" class="dropdown-toggle" href="Teacherdashboard.php#">
                            <i class="fa fa-envelope-o"></i>
                            <span class="badge bg-theme">3</span>
                        </a>
                        <ul class="dropdown-menu extended inbox">
                            <div class="notify-arrow notify-arrow-green"></div>
                            <li>
                                <p class="green">You have 3 new messages</p>
                            </li>
                           <li>
                                <a href="Teacherdashboard.php#">
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
                                <a href="Teacherdashboard.php#">
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
                                <a href="Teacherdashboard.php#">
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
                                <a href="Teacherdashboard.php#">See all messages</a>
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
              
              	  <p class="centered"><a href="Teacherprofile.php"><img src="img/friends/fr-02.jpg" class="img-circle" width="60"></a></p>
              	  <h5 class="centered">Andy Khong</h5>
              	  	
                  <li class="mt">
                      <a href="Teacherdashboard.php">
                          <i class="fa fa-dashboard"></i>
                          <span>Dashboard</span>
                      </a>
                  </li>

                  

                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-book"></i>
                          <span>My Guide</span>
                      </a>
                      <ul class="sub">
                          <li><a  href="Teachercalendar.php">Calendar</a></li>
                          <li><a  href="Teachertodo_list.php">Todo List</a></li>
                      </ul>
                  </li>
                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-folder"></i>
                          <span>Students' Data</span>
                      </a>
                      <ul class="sub">
                          <li class="active"><a  href="Teacherstudentsprogress.php">Students' Progress</a></li>
                      </ul>
                  </li>
				  <li class="sub-menu">
                      <a class="active" href="javascript:;" >
                          <i class="fa fa-asterisk"></i>
                          <span>Create New Content </span>
                      </a>
                      <ul class="sub">
                          <li class="active"><a  href="Teacherteachingguide.php">Teaching Guide</a></li>
						  <li><a  href="Teacherpracticequestions.php">Practice Questions</a></li>
						  <li><a  href="Teacherquiz.php">Quiz</a></li>
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
     <form method="post" action="<?php $_PHP_SELF ?>">
       <!--main content start-->
      <section id="main-content">
          <section class="wrapper">
          	<h3><i class="fa fa-angle-right"></i> Create New Content</h3>
          	
          	<!-- BASIC FORM ELELEMNTS -->
          	<div class="row mt">
          		<div class="col-lg-12">
                  <div class="form-panel">
                  	  <h4 class="mb"><i class="fa fa-angle-right"></i> Teaching Guide</h4>
                      <form class="form-horizontal style-form" method="get">
                        <div class="form-group">
						<label class="col-sm-2 col-sm-2 control-label">Type of Model</label>
						<div class="btn-group">
						  <button type="button"    id="btn"   onclick="return a1_onclick('btn')" class="btn btn-default">Addition</button>
						  <button type="button"    id="btn1" onclick="return a1_onclick('btn1')"  class="btn btn-default">Subtraction</button>
						  <button type="button"   id="btn2" onclick="return a1_onclick('btn2')"  class="btn btn-default">Multiplication</button>
						  <button type="button"    id="btn3" onclick="return a1_onclick('btn3')"     class="btn btn-default">Division</button>
						</div>      				
      				                  <input type="hidden" type="text" name="type" id= "textb" class="form-control" placeholder="Value of 'c' (answer)">
						</div>
 						
      				    <br><br>
						  <div class="form-group">
                              <label class="col-sm-2 col-sm-2 control-label">Video Title</label>
                              <div class="col-sm-10">
                                 
								  <input type="text" name ="title" class="form-control">
                              </div>
                          </div>
                          <div class="form-group">
                              <label class="col-sm-2 col-sm-2 control-label">Embedded Video Code</label>
                              <div class="col-sm-10">
                                  <textarea  name ="code" class="form-control" rows="15"></textarea>
                                  <span class="help-block">Input the embedded code of the video from Youtube. Do not enter the url.</span>
                              </div>
                          </div>
						  
                                                   <input name="add" type="submit" id="add" value="Upload">
						  
                 
          	</form>
		</section><! --/wrapper -->
      </section><!-- /MAIN CONTENT -->

      <!--main content end-->
      <!--footer start-->
      <footer class="site-footer">
          <div class="text-center">
              2014 - Palm View Primary School 
              <a href="Teacherteachingguide.php#" class="go-top">
                  <i class="fa fa-angle-up"></i>
              </a>
          </div>
      </footer>
      <!--footer end-->
  </section>

    <!-- js placed at the end of the document so the pages load faster -->
    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script class="include" type="text/javascript" src="js/jquery.dcjqaccordion.2.7.js"></script>
    <script src="js/jquery.scrollTo.min.js"></script>
    <script src="js/jquery.nicescroll.js" type="text/javascript"></script>


    <!--common script for all pages-->
    <script src="js/common-scripts1.js"></script>

    <!--script for this page-->
    <script src="js/jquery-ui-1.9.2.custom.min.js"></script>

	<!--custom switch-->
	<script src="js/bootstrap-switch.js"></script>
	
	<!--custom tagsinput-->
	<script src="js/jquery.tagsinput.js"></script>
	
	<!--custom checkbox & radio-->
	
	<script type="text/javascript" src="js/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
	<script type="text/javascript" src="js/bootstrap-daterangepicker/date.js"></script>
	<script type="text/javascript" src="js/bootstrap-daterangepicker/daterangepicker.js"></script>
	
	<script type="text/javascript" src="js/bootstrap-inputmask/bootstrap-inputmask.min.js"></script>
	
	
	<script src="js/form-component.js"></script>    
    
    
  <script>
      //custom select box

     // document.getElementById("btn").onclick() =
      
    


    
     function a1_onclick(id) {
           if(id == "btn")
          {
              document.getElementById("textb").value="Addition";
          } 
          if(id == "btn1")
          {
              document.getElementById("textb").value="Subtraction";
          } 
          if(id == "btn2")
          {
              document.getElementById("textb").value="Multiplication";
          } 
          if(id == "btn3")
          {
              document.getElementById("textb").value="Division";
          } 
           
     }
      
      $(function(){
          $('select.styled').customSelect();
      });

  </script>
    <script>
      //select button for "type of model"

      $('body').on('click', '.btn-group button', function (e) {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    
    //do any other button related things
});

  </script>
                 <?php
                 echo "asdasdasd";
 
		}
		?>

  </body>
</html>