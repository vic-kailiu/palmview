<?php   
  include('session.php');

  $sessionID = session_id();
  $userID = $_SESSION['id'];
?>
<!DOCTYPE html>
<html lang="en">
   <head>
    <script src="js/log.js"></script>
    <script>
      var log = new Array();
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
        //var timestamp;
        // Date() prototype does not provide native number padding - let's add a method:
        // Date.prototype.pad = function(integer) {
        //     var result;
        //     // Can't decide between ternary and slicing
        //     // result = ("0" + integer).slice(-2); 
        //     result = integer < 10 ? "0" + integer : integer;
        //     return result;
        //     };
      
       //  // Create a new Date() instance and add day, time and now properties
       //  timestamp = new Date();
        
       //  // Reorder the array entries to your own needs
       //  timestamp.day = [
       //      timestamp.pad(timestamp.getDate()),
       //      timestamp.pad(timestamp.getMonth() + 1), // getMonth() returns 0 to 11
       //      timestamp.getFullYear()
       //  ];
        
       //  timestamp.time = [
       //      timestamp.pad(timestamp.getHours()),
       //      timestamp.pad(timestamp.getMinutes()),
       //      timestamp.pad(timestamp.getSeconds())
       //  ];
      
       //  timestamp.now = timestamp.time.join("");
      
       // var txtFld = document.getElementById('visChangeText');
    
        if (isHidden()){
          log.push([<?php echo $userID;?>,16,getSQLTimeString(new Date()),'inactive','null','null','null','null','null','<?php echo $sessionID;?>']);
         // txtFld.value += "TimeOut: "+ timestamp.now+"\n";    
         // console.log("timeOff: "+timestamp.now);
        }
        else{
          log.push([<?php echo $userID;?>,16,getSQLTimeString(new Date()),'active','null','null','null','null','null','<?php echo $sessionID;?>']);
          // txtFld.value += "TimeIn: "+timestamp.now+"\n";
          // console.log("timeIn: "+timestamp.now);
        }   
      }
      
      function logEndActivity(){
        //log activity score
        //var cur = new Date();
        //var duration = 60*60*1000*(cur.getHours()-startTime.getHours())+60*1000*(cur.getMinutes()-startTime.getMinutes())+1000*(cur.getSeconds()-startTime.getSeconds())+(cur.getMilliseconds()-startTime.getMilliseconds());
        //log.push([<?php echo $userID;?>,<?php echo $phaseID?>,getSQLTimeString(new Date()),'stop','null','null',duration,'null','null','<?php echo $sessionID;?>']);
        logIntoServer(log);
        log = [];
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
      <link href="css/questions.css" rel="stylesheet">
  <!-- Custom CSS -->
    <link href="css/sb-admin-2.css" rel="stylesheet">
      <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
      <![endif]-->
   </head>
   <body onunload="logEndActivity()">
      <section id="container" >
         <!-- TOP BAR CONTENT & NOTIFICATIONS -->
         <!--header start-->
         <header class="header black-bg">
            <div class="sidebar-toggle-box">
               <div class="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
            </div>
            <!--logo start-->
            <a href="dashboard.php" class="logo"><b>SEEP</b></a>
            <!--logo end-->
            <div class="nav notify-row" id="top_menu">
               <!--  notification start -->
               <ul class="nav top-menu">
                  <!-- settings start -->
                  <li class="dropdown">
                     <a data-toggle="dropdown" class="dropdown-toggle" href="dashboard.php#">
                     <i class="fa fa-tasks"></i>
<!--                      <span class="badge bg-theme">4</span>-->
                      </a>
                     <ul class="dropdown-menu extended tasks-bar">
                        <div class="notify-arrow notify-arrow-green"></div>
                        <li>
                           <p class="green">You have no pending tasks</p>
                        </li>
                        <!-- <li>
                           <a href="teaching.php#">
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
                           <a href="practice.php#">
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
                           <a href="quiz.php#">
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
                           <a href="dashboard.php#">
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
                           <a href="todo_list.php#">See All Tasks</a>
                        </li> -->
                     </ul>
                  </li>
                  <!-- settings end -->
                  <!-- inbox dropdown start-->
                  <li id="header_inbox_bar" class="dropdown">
                     <a data-toggle="dropdown" class="dropdown-toggle" href="dashboard.php#">
                     <i class="fa fa-envelope-o"></i>
                     <!-- <span class="badge bg-theme">3</span> -->
                     </a>
                     <ul class="dropdown-menu extended inbox">
                        <div class="notify-arrow notify-arrow-green"></div>
                        <li>
                           <p class="green">You have no new messages</p>
                        </li>
                        <!-- <li>
                           <a href="dashboard.php#">
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
                           <a href="dashboard.php#">
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
                           <a href="dashboard.php#">
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
                           <a href="dashboard.php#">See all messages</a>
                        </li> -->
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
         <!-- MAIN SIDEBAR MENU -->
         <!--sidebar start-->
         <aside>
            <div id="sidebar"  class="nav-collapse ">
               <!-- sidebar menu start-->
               <ul class="sidebar-menu" id="nav-accordion">
                  <p class="centered"><a href="profile.php"><img src="img/friends/man.png" class="img-circle" width="60"></a></p>
                  <h5 class="centered"><?php echo $_SESSION["name"] ?></h5>
                  <li class="mt">
                     <a class="active" href="dashboard.php">
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
                        <li><a  href="calendar.php">Calendar</a></li>
                        <li><a  href="todo_list.php">Todo List</a></li>
                     </ul>
                  </li>
                  <li class="sub-menu">
                     <a  href="teaching.php">
                     <i class="fa fa-pencil"></i>
                     <span>Model Drawing - Tutorial</span>
                     </a>
                  </li>
                  <li class="sub-menu">
                     <a  href="practice.php">
                     <i class="fa fa-pencil"></i>
                     <span>Model Drawing - Practice</span>
                     </a>
                  </li>
                  <li class="sub-menu">
                     <a  href="quiz.php">
                     <i class="fa fa-pencil"></i>
                     <span>Model Drawing - Quiz</span>
                     </a>
                  </li>
                  <!-- <li class="sub-menu">
                     <a href="javascript:;" >
                     <i class="fa fa-pencil"></i>
                     <span>Model Drawing</span>
                     </a>
                     <ul class="sub">
                        <li><a  href="teaching.php">Video Guide</a></li>
                        <li><a  href="practice.php">Practice Questions</a></li>
                        <li><a  href="quiz.php">Quiz Questions</a></li>
                     </ul>
                  </li> -->
               </ul>
               <!-- sidebar menu end-->
            </div>
         </aside>
         <!--sidebar end-->
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
          <form method="POST" action="practice.php">
            <a href="teaching.php" class="btn btn-default">Back</a>
            <!--forward to next page (quiz)-->
            <a href="quiz.php" class="btn btn-default">Next</a><br><br>
            <input type ="hidden" textarea id="visChangeText" name="txtFld" style="width:300px;height:100px"></textarea>
            <input type ="hidden" textarea id="keywords" name="txtKeyword" style="width:300px;height:100px"></textarea>
            <input type ="hidden" textarea id="QnsID" name="txtQnsID" style="width:300px;height:100px"></textarea>
            <button id="submitt" onclick="suba()" style="visibility: hidden;">Submit Question</button>
          </form>
          
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
      <script src="js/jquery.js"></script>
      <script src="js/jquery-1.8.3.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script class="include" type="text/javascript" src="js/jquery.dcjqaccordion.2.7.js"></script>
      <script src="js/jquery.scrollTo.min.js"></script>
      <script src="js/jquery.nicescroll.js" type="text/javascript"></script>
      <script src="js/jquery.sparkline.js"></script>
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