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
       
      $sql = " SELECT QuestionID FROM QuestionDB";
      $result = mysql_query($sql, $conn);

      
      $lastid=0;
      if(! $result )
     {
            die('Could not get data: ' . mysql_error());
     }
     
      while($row = mysql_fetch_array($result , MYSQL_ASSOC))
     {
          if($lastid <= $row['QuestionID'])
          {
               $lastid = $row['QuestionID'];
           }
          //echo "QuestionID :{$row['QuestionID']}  <br> ".
        //"--------------------------------<br>";
     } 
      
      $answer = "";
      $A = "";
      $B = "";
      $C = "";
      $D = "";
      $E = "";
        echo "entered bfor the if loop";
         

      if($_POST['optionmodel'] ==  "A1")
      {
         $A = $_POST['A1vala_ansc'];
         $B = $_POST['A1valb_ansc'];
         $C = $_POST['A1valc_ansc'];
         $D = $_POST['A1vald_ansc'];
         $E = $_POST['A1vale_ansc'];

         $answer="C";

         //echo "enteres A1";
     }

      if($_POST['optionmodel'] ==  "A2")
      {
         $A = $_POST['A2vala_ansc'];
          $B = $_POST['A2valb_ansc'];
          $C = $_POST['A2valc_ansc'];
          $D = $_POST['A2vald_ansc'];
         $E = $_POST['A2vale_ansc'];

         $answer="C";
         // echo "enteres A2";
     }
     if($_POST['optionmodel'] ==  "S1")
      {
         if($_POST['optionsRadios'] == "option1a")
         {
           $A = $_POST['S1vala_ansa'];
           $B = $_POST['S1valb_ansa'];
           $C = $_POST['S1valc_ansa'];
           $D = $_POST['S1vald_ansa'];
           $E = $_POST['S1vale_ansa'];
           $answer="A";
          }
         if($_POST['optionsRadios'] == "option2b")
         {
           $A = $_POST['S1vala_ansb'];
           $B = $_POST['S1valb_ansb'];
           $C = $_POST['S1valc_ansb'];
           $D = $_POST['S1vald_ansb'];
           $E = $_POST['S1vale_ansb'];
           $answer="B";
          }
         
         // echo "enteres S1";
     }
     if($_POST['optionmodel'] ==  "S2")
      {
         if($_POST['optionsRadios'] == "option1b")
         {
           $A = $_POST['S2vala_ansb'];
           $B = $_POST['S2valb_ansb'];
           $C = $_POST['S2valc_ansb'];
           $D = $_POST['S2vald_ansb'];
           $E = $_POST['S2vale_ansb'];
           $answer="B";
          }
         if($_POST['optionsRadios'] == "option2c")
         {
           $A = $_POST['S2vala_ansc'];
           $B = $_POST['S2valb_ansc'];
           $C = $_POST['S2valc_ansc'];
           $D = $_POST['S2vald_ansc'];
           $E = $_POST['S2vale_ansc'];
           $answer="C";
          }
         
          //echo "enteres S2";
     }
      if($_POST['optionmodel'] ==  "M1")
      {
         $A = $_POST['M1vala_ansb'];
         $B = $_POST['M1valb_ansb'];
         $C = $_POST['M1valc_ansb'];
         $D = "";
         $E = "";

         $answer="B";

         //echo "enteres M1";
     }
     if($_POST['optionmodel'] ==  "D1")
      {
         $A = $_POST['D1vala_ansa'];
         $B = $_POST['D1valb_ansa'];
         $C = $_POST['D1valc_ansa'];
         $D = "";
         $E = "";

         $answer="A";

        // echo "enteres D1";
     }
     if($_POST['optionmodel'] ==  "D2")
      {
         $A = $_POST['D2vala_ansc'];
         $B = $_POST['D2valb_ansc'];
         $C = $_POST['D2valc_ansc'];
         $D = "";
         $E = "";

         $answer="C";

        // echo "enteres D1";
     }
      $sql = "INSERT INTO QuestionDB".
		   "(QuestionID,Type, Question,A,B,C,D,E,Answer) ".
		   "VALUES($lastid+1,'$Type','$questions','$A','$B','$C','$D','$E','$answer')";

	
 
	
 
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
                          <li><a  href="Teacherteachingguide.php">Teaching Guide</a></li>
						  <li class="active"><a  href="Teacherpracticequestions.php">Practice Questions</a></li>
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
          <section class="wrapper site-min-height">
          	<h3><i class="fa fa-angle-right"></i> Create New Content</h3>
          	
          	<!-- BASIC FORM ELELEMNTS -->
          	<div class="row mt">
          		<div class="col-lg-12">
                  <div class="form-panel">
                  	  <h4 class="mb"><i class="fa fa-angle-right"></i> Practice Questions</h4>
                      <form class="form-horizontal style-form" method="get">
                        <div class="form-group">
						<label class="col-sm-2 col-sm-2 control-label">Type of Model Question</label>
						<div class="btn-group">
						  <button type="button" class="btn btn-default" id="additionbutton" >Addition</button>
						  <button type="button" class="btn btn-default" id="subtractionbutton" >Subtraction</button>
						  <button type="button" class="btn btn-default" id="multiplicationbutton" >Multiplication</button>
						  <button type="button" class="btn btn-default" id="divisionbutton" >Division</button>
						</div>      				
      				
						</div>
 						
      				    <br><br>
						  <!-- Textarea to type in question -->
                          <div class="form-group" id="formquestion" style="display: none">
                              <label class="col-sm-2 col-sm-2 control-label" >Question</label>
                              <div class="col-sm-10">
                                  <textarea class="form-control" name="questions" rows="10"></textarea>
                                  <span class="help-block">Type in your question.</span>
                              </div>
                          </div>
						  
						  
						  
						  
						  
						  <!-- After clicking Addition button -->
						   <div class="form-group" id="viewmodeladdition" style="display: none">
                              <label class="col-sm-2 col-sm-2 control-label">View of Model</label>
                              <div class="col-sm-10">
								  <input type="radio" value =A1 name="optionmodel" id="additionA1" /><img id="modelA1" src="img/portfolio/modelA1.png" style="display: none"/>
								  <input type="radio" value =A2 name="optionmodel" id="additionA2" /><img id="modelA2" src="img/portfolio/modelA2.png" style="display: none"/>
                              </div>
                          </div>
						  
						  <!-- After clicking Subtraction button -->
						  <div class="form-group" id="viewmodelsubtraction" style="display: none">
                              <label class="col-sm-2 col-sm-2 control-label">View of Model</label>
                              <div class="col-sm-10">
								  <input type="radio" value =S1 name="optionmodel" id="subtractionS1"/><img id="modelS1" src="img/portfolio/modelS1.png" style="display: none"/>
								  <input type="radio" value =S2 name="optionmodel" id="subtractionS2"/><img id="modelS2" src="img/portfolio/modelS2.png" style="display: none"/>
                              </div>
                          </div>
						  
						  <!-- After clicking Multiplication button -->
						  <div class="form-group" id="viewmodelmultiplication" style="display: none">
                              <label class="col-sm-2 col-sm-2 control-label">View of Model</label>
                              <div class="col-sm-10">
								  <input type="radio" value =M1 name="optionmodel" id="multiplicationM1"/><img id="modelM1" src="img/portfolio/modelM1.png" style="display: none"/>
                              </div>
                          </div>
						  
						  
						  <!-- After clicking Division button -->
						  <div class="form-group" id="viewmodeldivision" style="display: none">
                              <label class="col-sm-2 col-sm-2 control-label">View of Model</label>
                              <div class="col-sm-10">
								  <input type="radio" value =D1 name="optionmodel" id="divisionD1"/><img id="modelD1" src="img/portfolio/modelD1.png" style="display: none"/>
								  <input type="radio" value =D2 name="optionmodel" id="divisionD2"/><img id="modelD2" src="img/portfolio/modelD2.png" style="display: none"/>
                              </div>
                          </div>
						  
						
						  




							 <!-- Indicate which value is unknown(Type A1) -->
						  <div class="form-group" id="valueunknownaddition1" style="display: none">
                              <label class="col-sm-2 col-sm-2 control-label" >Value to be solved</label>
                              <div class="col-sm-10">
                                  <div class="radio">
										<label>
											<input type="radio" name="optionsRadios" id="optionA11" value="option1">
											c
									</label>
									</div>
							 </div>
                          </div>
						  
						  <!-- Indicate which value is unknown(Type A2) -->
						  <div class="form-group" id="valueunknownaddition2" style="display: none">
                              <label class="col-sm-2 col-sm-2 control-label" >Value to be solved</label>
                              <div class="col-sm-10">
                                  <div class="radio">
										<label>
											<input type="radio" name="optionsRadios" id="optionA21" value="option1">
											c
									</label>
									</div>
							 </div>
                          </div>
						  
						  <!-- Indicate which value is unknown(Type S1) -->
						  <div class="form-group" id="valueunknownsubtraction1" style="display: none">
                              <label class="col-sm-2 col-sm-2 control-label" >Value to be solved</label>
                              <div class="col-sm-10">
                                  <div class="radio">
										<label>
											<input type="radio" name="optionsRadios" id="optionS11" value="option1a">
											a
									</label>
									</div>
									<div class="radio">
										<label>
											<input type="radio" name="optionsRadios" id="optionS12" value="option2b">
											b
									</label>
									</div>
							 </div>
                          </div>
						  
						  <!-- Indicate which value is unknown(Type S2) -->
						  <div class="form-group" id="valueunknownsubtraction2" style="display: none">
                              <label class="col-sm-2 col-sm-2 control-label" >Value to be solved</label>
                              <div class="col-sm-10">
                                  <div class="radio">
										<label>
											<input type="radio" name="optionsRadios" id="optionS21" value="option1b">
											b
									</label>
									</div>
								  <div class="radio">
									<label>
											<input type="radio" name="optionsRadios" id="optionS22" value="option2c">
											c
									</label>
									</div>
									</div>
							 </div>
							 
							 <!-- Indicate which value is unknown(Type M1) -->
						  <div class="form-group" id="valueunknownmultiplication1" style="display: none">
                              <label class="col-sm-2 col-sm-2 control-label" >Value to be solved</label>
                              <div class="col-sm-10">
                                  <div class="radio">
										<label>
											<input type="radio" name="optionsRadios" id="optionM11" value="option1">
											b
									</label>
									</div>
									
								</div>
							 </div>
							 
							 
							 <!-- Indicate which value is unknown(Type D1) -->
						  <div class="form-group" id="valueunknowndivision1" style="display: none">
                              <label class="col-sm-2 col-sm-2 control-label" >Value to be solved</label>
                              <div class="col-sm-10">
                                  <div class="radio">
										<label>
											<input type="radio" name="optionsRadios" id="optionD11" value="option1">
											a
									</label>
									</div>
						
									</div>
							 </div>
							 
							 <!-- Indicate which value is unknown(Type D2) -->
						  <div class="form-group" id="valueunknowndivision2" style="display: none">
                              <label class="col-sm-2 col-sm-2 control-label" >Value to be solved</label>
                              <div class="col-sm-10">
                                  <div class="radio">
										<label>
											<input type="radio" name="optionsRadios" id="optionD21" value="option1">
											c
									</label>
									</div>
								  
									</div>
							 </div>
						  
						  <!-- After clicking unknown, fill in the rest of the values (after clicking A11)-->
						  <div class="form-group" id="valueA11" style="display: none">
                              <label class="col-sm-2 col-sm-2 control-label" >Insert values and labels</label>
                              <div class="col-sm-10">
                                  
								  <div class="col-sm-4">

                                                           
                                  <input type="text" name="A1vala_ansc" class="form-control" placeholder="Value of 'a'" >
									</div><br><br><br>
								  <div class="col-sm-4">
                                  <input type="text" name="A1valb_ansc" class="form-control" placeholder="Value of 'b'">
									</div><br><br><br>
								  <div class="col-sm-4">
                                  <input type="text" name="A1valc_ansc" class="form-control" placeholder="Value of 'c' (answer)">
									</div><br><br><br>
									<div class="col-sm-4">
                                  <input type="text" name="A1vald_ansc" class="form-control" placeholder="Label of 'd'">
									</div><br><br><br>
									<div class="col-sm-4">
                                  <input type="text" name="A1vale_ansc" class="form-control" placeholder="Label of 'e'">
									</div><br><br><br>
								  
								</div>
							 </div>
							 
							 <!-- After clicking unknown, fill in the rest of the values (after clicking A21)-->
						  <div class="form-group" id="valueA21" style="display: none">
                              <label class="col-sm-2 col-sm-2 control-label" >Insert values and labels</label>
                              <div class="col-sm-10">
                                  
								  <div class="col-sm-4">
                                  <input type="text" name="A2vala_ansc" class="form-control" placeholder="Value of 'a'">
									</div><br><br><br>
								  <div class="col-sm-4">
                                  <input type="text" name="A2valb_ansc" class="form-control" placeholder="Value of 'b'">
									</div><br><br><br>
								  <div class="col-sm-4">
                                  <input type="text" name="A2valc_ansc" class="form-control" placeholder="Value of 'c' (answer)">
									</div><br><br><br>
									<div class="col-sm-4">
                                  <input type="text" name="A2vald_ansc" class="form-control" placeholder="Label of 'd'">
									</div><br><br><br>
									<div class="col-sm-4">
                                  <input type="text" name="A2vale_ansc" class="form-control" placeholder="Label of 'e'">
									</div><br><br><br>
								  
								</div>
							 </div>
							 
							  <!-- After clicking unknown, fill in the rest of the values (after clicking S11)-->
						  <div class="form-group" id="valueS11" style="display: none">
                              <label class="col-sm-2 col-sm-2 control-label" >Insert values and labels</label>
                              <div class="col-sm-10">
                                  
								  <div class="col-sm-4">
                                  <input type="text" name="S1vala_ansa" class="form-control" placeholder="Value of 'a' (answer)">
									</div><br><br><br>
								  <div class="col-sm-4">
                                  <input type="text" name="S1valb_ansa" class="form-control" placeholder="Value of 'b'">
									</div><br><br><br>
								  <div class="col-sm-4">
                                  <input type="text" name="S1valc_ansa" class="form-control" placeholder="Value of 'c'">
									</div><br><br><br>
									<div class="col-sm-4">
                                  <input type="text" name="S1vald_ansa" class="form-control" placeholder="Label of 'd'">
									</div><br><br><br>
									<div class="col-sm-4">
                                  <input type="text" name="S1vale_ansa" class="form-control" placeholder="Label of 'e'">
									</div><br><br><br>
								  
								</div>
							 </div>
							 
							 <!-- After clicking unknown, fill in the rest of the values (after clicking S12)-->
						  <div class="form-group" id="valueS12" style="display: none">
                              <label class="col-sm-2 col-sm-2 control-label" >Insert values and labels</label>
                              <div class="col-sm-10">
                                  
								  <div class="col-sm-4">
                                  <input type="text" name="S1vala_ansb" class="form-control" placeholder="Value of 'a'">
									</div><br><br><br>
								  <div class="col-sm-4">
                                  <input type="text" name="S1valb_ansb" class="form-control" placeholder="Value of 'b'(answer) ">
									</div><br><br><br>
									<div class="col-sm-4">
                                  <input type="text" name="S1valc_ansb" class="form-control" placeholder="Value of 'c' ">
									</div><br><br><br>
									<div class="col-sm-4">
                                  <input type="text" name="S1vald_ansb" class="form-control" placeholder="Label of 'd'">
									</div><br><br><br>
									<div class="col-sm-4">
                                  <input type="text" name="S1vale_ansb" class="form-control" placeholder="Label of 'e'">
									</div><br><br><br>
								  
								</div>
							 </div>
						  
						  
						   <!-- After clicking unknown, fill in the rest of the values (after clicking S21)-->
						  <div class="form-group" id="valueS21" style="display: none">
                              <label class="col-sm-2 col-sm-2 control-label" >Insert values and labels</label>
                              <div class="col-sm-10">
                                  
								  <div class="col-sm-4">
                                  <input type="text" name="S2vala_ansb" class="form-control" placeholder="Value of 'a'">
									</div><br><br><br>
									<div class="col-sm-4">
                                  <input type="text" name="S2valb_ansb" class="form-control" placeholder="Value of 'b' (answer)">
									</div><br><br><br>
								  <div class="col-sm-4">
                                  <input type="text" name="S2valc_ansb" class="form-control" placeholder="Value of 'c'">
									</div><br><br><br>
									<div class="col-sm-4">
                                  <input type="text" name="S2vald_ansb" class="form-control" placeholder="Label of 'd'">
									</div><br><br><br>
									<div class="col-sm-4">
                                  <input type="text" name="S2vale_ansb" class="form-control" placeholder="Label of 'e'">
									</div><br><br><br>
								  
								</div>
							 </div>
							 
							 <!-- After clicking unknown, fill in the rest of the values (after clicking S22)-->
						  <div class="form-group" id="valueS22" style="display: none">
                              <label class="col-sm-2 col-sm-2 control-label" >Insert values and labels</label>
                              <div class="col-sm-10">
                                  
								  <div class="col-sm-4">
                                  <input type="text" name="S2vala_ansc" class="form-control" placeholder="Value of 'a'">
									</div><br><br><br>
								  <div class="col-sm-4">
                                  <input type="text" name="S2valb_ansc" class="form-control" placeholder="Value of 'b'">
									</div><br><br><br>
									<div class="col-sm-4">
                                  <input type="text" name="S2valc_ansc" class="form-control" placeholder="Label of 'c' (answer)">
									</div><br><br><br>
									<div class="col-sm-4">
                                  <input type="text" name="S2vald_ansc" class="form-control" placeholder="Label of 'd'">
									</div><br><br><br>
									<div class="col-sm-4">
                                  <input type="text" name="S2vale_ansc" class="form-control" placeholder="Label of 'e'">
									</div><br><br><br>
								  
								</div>
							 </div>
							 
							 <!-- After clicking unknown, fill in the rest of the values (after clicking M11)-->
						  <div class="form-group" id="valueM11" style="display: none">
                              <label class="col-sm-2 col-sm-2 control-label" >Insert values and labels</label>
                              <div class="col-sm-10">
                                  
								  <div class="col-sm-4">
                                  <input type="text" name="M1vala_ansb" class="form-control" placeholder="Value of 'a'">
									</div><br><br><br>
									<div class="col-sm-4">
                                  <input type="text" name="M1valb_ansb" class="form-control" placeholder="Value of 'b' (answer)">
									</div><br><br><br>
								  <div class="col-sm-4">
                                  <input type="text" name="M1valc_ansb" class="form-control" placeholder="Value of 'c'">
									</div><br><br><br>
								  
								</div>
							 </div>
							 
							  <!-- After clicking unknown, fill in the rest of the values (after clicking D11)-->
						  <div class="form-group" id="valueD11" style="display: none">
                              <label class="col-sm-2 col-sm-2 control-label" >Insert values and labels</label>
                              <div class="col-sm-10">
                                  
								  <div class="col-sm-4">
                                  <input type="text" name="D1vala_ansa" class="form-control" placeholder="Value of 'a' (answer)">
									</div><br><br><br>
								  <div class="col-sm-4">
                                  <input type="text" name="D1valb_ansa" class="form-control" placeholder="Value of 'b'">
									</div><br><br><br>
								  <div class="col-sm-4">
                                  <input type="text" name="D1valc_ansa" class="form-control" placeholder="Value of 'c'">
									</div><br><br><br>
								  
								</div>
							 </div>
						  
						   <!-- After clicking unknown, fill in the rest of the values (after clicking D21)-->
						  <div class="form-group" id="valueD21" style="display: none">
                              <label class="col-sm-2 col-sm-2 control-label" >Insert values and labels</label>
                              <div class="col-sm-10">
                                  
								  <div class="col-sm-4">
                                  <input type="text" name="D2vala_ansc" class="form-control" placeholder="Value of 'a'">
									</div><br><br><br>
								  <div class="col-sm-4">
                                  <input type="text" name="D2valb_ansc" class="form-control" placeholder="Value of 'b'">
									</div><br><br><br>
								  <div class="col-sm-4">
                                  <input type="text" name="D2valc_ansc" class="form-control" placeholder="Value of 'c' (answer)">
									</div><br><br><br>
								  
								</div>
							 </div>
						  
						  
						  
						  
						  
							 
							 
                        
						  
						  <!-- Upload button -->
						
                              
                              <div class="col-sm-12">
                                 

      
                                          <input name="add" type="submit" id="add" value="Upload">

							  </div>
							
				
				<div class="row mt">
                      <div class="col-lg-6">
                          <div class="">
							  <h4><i class=""></i> </h4>
                              <div class="panel-body text-center">
                                  <canvas id="" height="30" width="400"></canvas>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-6">
                          <div class="">
							  <h4><i class=""></i> </h4>
                              <div class="panel-body text-center">
                                  <canvas id="" height="30" width="400"></canvas>
                              </div>
                          </div>
                      </div>
                  </div>
          	</form>
		</section><! --/wrapper -->
      </section><!-- /MAIN CONTENT -->

      <!--main content end-->
      <!--footer start-->
      <footer class="site-footer">
          <div class="text-center">
              2014 - Palm View Primary School 
              <a href="Teacherpracticequestions.php#" class="go-top">
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
	<script src="js/newcontent.js"></script>
	

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
    
    

    <script type="text/javascript">
      $(function() {
        
          
      });

  </script>

		<?php
                 echo "asdasdasd";
                   
		}
		?>

  </body>
</html>			