<!DOCTYPE html>
<script type="text/javascript" src="\js\retrieveQns.php"></script>
<?php   
session_start();
define('DB_HOST', 'mysql1.000webhost.com'); 
define('DB_NAME', 'a2047226_dip'); 
define('DB_USER','a2047226_myuser');
define('DB_PASSWORD','5xxxxx'); 
$con=mysql_connect(DB_HOST,DB_USER,DB_PASSWORD) or die("Failed to connect to MySQL: " . mysql_error()); $db=mysql_select_db(DB_NAME,$con) 
or die("Failed to connect to MySQL: " . mysql_error()); 
 
 
//echo "'$_POST[txtFld]'";

 $name = $_SESSION["userName"];


		   $sql = "INSERT INTO studentinfo ".
			   "(Name, Nric, Time, TimeStamp, TypeOfQns, QuizResult) ".
			   "VALUES('$name','S1232323J','$_POST[txtFld]', NOW()+ INTERVAL 1 HOUR, 'Practice','$_POST[txtQnsID]')";
		  $retval = mysql_query( $sql, $con );
		  
		  $sql2 = "INSERT INTO Keyword ".
			   "(Name, Keywords, TimeStamp) ".
			   "VALUES('$name','$_POST[txtKeyword]',NOW()+ INTERVAL 1 HOUR)";
		  $retval2 = mysql_query( $sql2, $con );
?>

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
	<link href="css/buttons.css" type="text/css" rel="stylesheet">
        
    <!-- Custom styles for this template -->
    <link href="css/style.css" rel="stylesheet">
    <link href="css/style-responsive.css" rel="stylesheet">
	<!-- Custom CSS for questions -->
    <link href="css/questions.css" rel="stylesheet">
	<!-- Custom CSS -->
    <link href="css/sb-admin-2.css" rel="stylesheet">

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
                    <li><a class="logout" href="DIPlogin.php">Logout</a></li>
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
                          <li><a  href="DIPteaching.php">Video Guide</a></li>
                          <li class="active"><a  href="DIPpractice.php">Practice Questions</a></li>
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
          	<h3><i class="fa fa-angle-right"></i> Practice Questions</h3>
			<div style="position: relative;">
            <div style="position: absolute; top: 0; right: 10px;" >
			<a href="DIPlock_screen.php" class="btn btn-warning">Pause whatever I am doing</a></div>
            </div><br><br>
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
                                                <option value="">Random (+,-,x,/)</option>
                                                <option value="A">Addition (+)</option>
                                                <option value="S">Subtraction (-)</option>
                                                <option value="M">Multiplication (x)</option>
                                                <option value="D">Division (/)</option>
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
                <div class="col-sm-5">
                   <!-- <div name ="keyword" id="keywords"></div> -->
					
                </div>
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
			
					<script>function suba(){
					}
					</script>
		
			<form method="POST" action="http://dip.net63.net/dip/theme/DIPpractice.php">
			<a href="DIPteaching.php" class="btn btn-default">Back</a>
			<!--forward to next page (quiz)-->
			<a href="DIPquiz.php" class="btn btn-default">Next</a><br><br>
			<input type ="hidden" textarea id="visChangeText" name="txtFld" style="width:300px;height:100px"></textarea>
			<input type ="hidden" textarea id="keywords" name="txtKeyword" style="width:300px;height:100px"></textarea>
			<input type ="hidden" textarea id="QnsID" name="txtQnsID" style="width:300px;height:100px"></textarea>
			   <button id="submitt" onclick="suba()" style="visibility: hidden;">Submit Question</button>
			 </form>
			<?php
function retrieveQuestion(){
    $dbhost = 'mysql1.000webhost.com';
	$dbuser = 'a2047226_myuser';
	$dbpass = '5xxxxx';
	$conn = mysql_connect($dbhost, $dbuser, $dbpass);
	if(! $conn )
	{
	  die('Could not connect: ' . mysql_error());
	}

      mysql_select_db('a2047226_dip');//selectdatabase
 
      $sql = "Select * FROM QuestionDB";
      $result = mysql_query($sql, $conn);


        $num_rows = mysql_num_rows($result);
        $random = rand (0, $num_rows-1);
        $count = 0;
        while($row = mysql_fetch_array($result)) 
        { 
		        $QnsID = $row[0];
                $type = $row[1];
                $text = $row[2];
                $A = $row[3];
                $B = $row[4];
                $C = $row[5];
                $D = $row[6];
                $E = $row[7];
                $answer = $row[8];
                echo "<div id='rType$count' style='display: none';>";
                echo strip_tags($type);
                echo "</div>";
                echo "<div id='rText$count' style='display: none';>";
                echo strip_tags($text);
                echo "</div>";
                echo "<div id='rA$count' style='display: none';>";
                echo strip_tags($A);
                echo "</div>";
                echo "<div id='rB$count' style='display: none';>";
                echo strip_tags($B);
                echo "</div>";
                echo "<div id='rC$count' style='display: none';>";
                echo strip_tags($C);
                echo "</div>";
                echo "<div id='rD$count' style='display: none';>";
                echo strip_tags($D);
                echo "</div>";
                echo "<div id='rE$count' style='display: none';>";
                echo strip_tags($E);
                echo "</div>";
                echo "<div id='rAnswer$count' style='display: none';>";
                echo strip_tags($answer);
                echo "</div>";
				echo "<div id='rQnsID$count' style='display: none';>";
                echo strip_tags($QnsID);
                echo "</div>";
            
            $count = $count + 1;
        }
echo "<div id='rCount' style='display: none';>";
                echo strip_tags($count);
                echo "</div>";
        $array = array($type,$text,$A,$B,$C,$D,$E,$answer);
        return $array;
    
}
retrieveQuestion();
?>	
</font>
		</section><! --/wrapper -->
      </section><!-- /MAIN CONTENT -->

      <!--main content end-->
      <!--footer start-->
      <footer class="site-footer">
          <div class="text-center">
              2014 - Palm View Primary School 
              <a href="DIPpractice.php#" class="go-top">
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
    

	<script src="js/sb-admin-2.js"></script>

  <script>
      //custom select box

      $(function(){
          $('select.styled').customSelect();
      });

  </script>
		
  </body>
</html>
					