<!DOCTYPE html>
<html lang="en">
   <head>
      <title>SEEP; Palm View Pri Online Portal</title>
      <?php include('comm_header.html'); ?>
   </head>
   <body>
      <section id="container" >
         <?php include('comm_frame.html'); ?>
         <!-- **********************************************************************************************************************************************************
            MAIN CONTENT
            *********************************************************************************************************************************************************** -->
         <!--main content start-->
         <section id="main-content">
            <section class="wrapper site-min-height">
               <h3><i class="fa fa-angle-right"></i> Quiz Questions</h3>
               <div style="position: relative;">
                  <div style="position: absolute; top: 0; right: 10px;" >
                     <a href="DIPlock_screen.php" class="btn btn-warning">Pause whatever I am doing</a>
                  </div>
               </div>
               <br><br>
               <div class="row mt">
                  <div class="col-lg-12">
                     <br><br>
                     <!-- DISMISSABLE ALERT -->
                     <div class="alert alert-warning alert-dismissable">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                        <strong>Note:</strong> Please make sure you have done the practice questions before attempting the quiz.
                     </div>
                     <p>
                        We are able to get a much better understanding of tackling various modelling questions.<br>
                        It time to get get a good grasp of your understanding regarding model drawing.<br>
                        This quiz consists of <b>10 questions</b>.<br>
                        Click on the button below to start, all the best!<br><br><br>
                     </p>
                  </div>
               </div>
               <div id="button">
                  <button type="button" class="btn btn-success" id="startbutton">Start Quiz</button> <a href="DIPpractice.php" class="btn btn-default">Back</a>
               </div>
               <div class="row mt" id="drawing1" style="display: none">
                  <div class="col-lg-12" >
                     <style>
                        #container { position: relative; }
                        #imageView { border: 1px solid #000; }
                        #imageTemp { position: absolute; top: 1px; left: 1px; }
                     </style>
                     <font face="varela round" size="4" color="black"> During a recycling competition, Hafiz collected 70 used water bottles.<br>
                     Shi Wei collected 16 fewer used water bottles than Hafiz.<br>
                     How many used water bottles did Shi Wei collect?</font>
                     <p>
                        <label>
                           <font face="varela round" size="4" color="green"> Drawing tool: 
                           <select id="dtool1">
                              <option value="rect">Rectangle</option>
                              <option value="pencil">Pencil</option>
                              <option value="eraser">Eraser</option>
                           </select>
                        </label>
                     </p>
                     <div id="container">
                        <canvas id="imageView" width="800" height="700">
                        </canvas>
                     </div>
                     <br>
                     <font face="varela round" size="4" color="black">Shi Wei collected<input type="text" id="ans1" >used water bottles.</font>
                     <button type="button" class="btn btn-default" id="nextbutton" style="display: block">Next</button>
                  </div>
               </div>
               <div class="row mt" id="drawing2"  style="display: none">
                  <div class="col-lg-12" >
                     <style>
                        #container { position: relative; }
                        #imageView2 { border: 1px solid #000; }
                        #imageTemp { position: absolute; top: 1px; left: 1px; }
                     </style>
                     <font face="varela round" size="4" color="black"> Shop A sold 212 toy cars.<br>
                     Shop B sold 88 more toy cars than Shop A.<br>
                     How many toy cars did Shop B sell?</font>
                     <p>
                        <label>
                           <font face="varela round" size="4" color="green"> Drawing tool: 
                           <select id="dtool2">
                              <option value="rect">Rectangle</option>
                              <option value="pencil">Pencil</option>
                              <option value="eraser">Eraser</option>
                           </select>
                        </label>
                     </p>
                     <div id="container">
                        <canvas id="imageView2" width="800" height="700">
                        </canvas>
                     </div>
                     <br>
                     <font face="varela round" size="4" color="black">Shop B sold<input type="text" name="txtJob" id="ans2">toy cars.</font>
                     <button type="button" class="btn btn-default" id="nextbutton2" style="display: block" >Next</button>
                  </div>
               </div>
               <div class="row mt" id="drawing3" style="display: none">
                  <div class="col-lg-12" >
                     <style>
                        #container { position: relative; }
                        #imageView3 { border: 1px solid #000; }
                        #imageTemp { position: absolute; top: 1px; left: 1px; }
                     </style>
                     <font face="varela round" size="4" color="black"> There are 195 children at a museum.<br>
                     85 of them are girls.<br>
                     How many boys are there?</font>
                     <p>
                        <label>
                           <font face="varela round" size="4" color="green"> Drawing tool: 
                           <select id="dtool3">
                              <option value="rect">Rectangle</option>
                              <option value="pencil">Pencil</option>
                              <option value="eraser">Eraser</option>
                           </select>
                        </label>
                     </p>
                     <div id="container">
                        <canvas id="imageView3" width="800" height="700">
                        </canvas>
                     </div>
                     <br>
                     <font face="varela round" size="4" color="black">There are<input type="text" name="txtJob" id="ans3">boys.</font>
                     <button type="button" class="btn btn-default" id="nextbutton3" style="display: block" >Next</button>
                  </div>
               </div>
               <div class="row mt" id="drawing4" style="display: none">
                  <div class="col-lg-12">
                     <style>
                        #container { position: relative; }
                        #imageView4 { border: 1px solid #000; }
                        #imageTemp { position: absolute; top: 1px; left: 1px; }
                     </style>
                     <font face="varela round" size="4" color="black"> There are 34 guppies in a fish tank.<br>
                     5 of them died.<br>
                     How many guppies are alive?</font>
                     <p>
                        <label>
                           <font face="varela round" size="4" color="green"> Drawing tool: 
                           <select id="dtool4">
                              <option value="rect">Rectangle</option>
                              <option value="pencil">Pencil</option>
                              <option value="eraser">Eraser</option>
                           </select>
                        </label>
                     </p>
                     <div id="container">
                        <canvas id="imageView4" width="800" height="700">
                        </canvas>
                     </div>
                     <br>
                     <font face="varela round" size="4" color="black"><input type="text" name="txtJob" id="ans4">guppies are alive.</font>
                     <button type="button" class="btn btn-default" id="nextbutton4" style="display: block" >Next</button>
                  </div>
               </div>
               <div class="row mt" id="drawing5" style="display: none">
                  <div class="col-lg-12">
                     <style>
                        #container { position: relative; }
                        #imageView5 { border: 1px solid #000; }
                        #imageTemp { position: absolute; top: 1px; left: 1px; }
                     </style>
                     <font face="varela round" size="4" color="black"> There are 5 plates of food.<br>
                     Each plate has 3 pies.<br>
                     How many pies are ther altogether?</font>
                     <p>
                        <label>
                           <font face="varela round" size="4" color="green"> Drawing tool: 
                           <select id="dtool5">
                              <option value="rect">Rectangle</option>
                              <option value="pencil">Pencil</option>
                              <option value="eraser">Eraser</option>
                           </select>
                        </label>
                     </p>
                     <div id="container">
                        <canvas id="imageView5" width="800" height="700">
                        </canvas>
                     </div>
                     <br>
                     <font face="varela round" size="4" color="black">There are<input type="text" name="txtJob" id="ans5">pies altogether.</font>
                     <button type="button" class="btn btn-default" id="nextbutton5" style="display: block" >Next</button>
                  </div>
               </div>
               <div class="row mt" id="drawing6" style="display: none">
                  <div class="col-lg-12">
                     <style>
                        #container { position: relative; }
                        #imageView6 { border: 1px solid #000; }
                        #imageTemp { position: absolute; top: 1px; left: 1px; }
                     </style>
                     <font face="varela round" size="4" color="black"> Judy saves $10 in 5 days.<br>
                     She saves an equal amount of money every day.<br>
                     How much does she save each day?</font>
                     <p>
                        <label>
                           <font face="varela round" size="4" color="green"> Drawing tool: 
                           <select id="dtool6">
                              <option value="rect">Rectangle</option>
                              <option value="pencil">Pencil</option>
                              <option value="eraser">Eraser</option>
                           </select>
                        </label>
                     </p>
                     <div id="container">
                        <canvas id="imageView6" width="800" height="700">
                        </canvas>
                     </div>
                     <br>
                     <font face="varela round" size="4" color="black">She saves $<input type="text" name="txtJob" id="ans6">each day.</font>
                     <button type="button" class="btn btn-default" id="nextbutton6" style="display: block" >Next</button>
                  </div>
               </div>
               <div class="row mt" id="drawing7" style="display: none">
                  <div class="col-lg-12">
                     <style>
                        #container { position: relative; }
                        #imageView7 { border: 1px solid #000; }
                        #imageTemp { position: absolute; top: 1px; left: 1px; }
                     </style>
                     <font face="varela round" size="4" color="black"> Sam saves $3 each day.<br>
                     How many days does he need to save to have $18?</font>
                     <p>
                        <label>
                           <font face="varela round" size="4" color="green"> Drawing tool: 
                           <select id="dtool7">
                              <option value="rect">Rectangle</option>
                              <option value="pencil">Pencil</option>
                              <option value="eraser">Eraser</option>
                           </select>
                        </label>
                     </p>
                     <div id="container">
                        <canvas id="imageView7" width="800" height="700">
                        </canvas>
                     </div>
                     <br>
                     <font face="varela round" size="4" color="black">He needs to save for<input type="text" name="txtJob" id="ans7">days to have $18.</font>
                     <button type="button" class="btn btn-default" id="nextbutton7" style="display: block" >Next</button>
                  </div>
               </div>
               <div class="row mt" id="drawing8" style="display: none">
                  <div class="col-lg-12">
                     <style>
                        #container { position: relative; }
                        #imageView8 { border: 1px solid #000; }
                        #imageTemp { position: absolute; top: 1px; left: 1px; }
                     </style>
                     <font face="varela round" size="4" color="black"> A cake costs $2.<br>
                     How much does 3 cakes cost?</font>
                     <p>
                        <label>
                           <font face="varela round" size="4" color="green"> Drawing tool: 
                           <select id="dtool8">
                              <option value="rect">Rectangle</option>
                              <option value="pencil">Pencil</option>
                              <option value="eraser">Eraser</option>
                           </select>
                        </label>
                     </p>
                     <div id="container">
                        <canvas id="imageView8" width="800" height="700">
                        </canvas>
                     </div>
                     <br>
                     <font face="varela round" size="4" color="black">3 cakes cost $<input type="text" name="txtJob" id="ans8">.</font>
                     <button type="button" class="btn btn-default" id="nextbutton8" style="display: block" >Next</button>
                  </div>
               </div>
               <div class="row mt" id="drawing9" style="display: none">
                  <div class="col-lg-12">
                     <style>
                        #container { position: relative; }
                        #imageView9 { border: 1px solid #000; }
                        #imageTemp { position: absolute; top: 1px; left: 1px; }
                     </style>
                     <font face="varela round" size="4" color="black"> There are 18 pupils in a class.<br>
                     They are grouped into 3 groups.
                     How many pupils are there in each group?</font>
                     <p>
                        <label>
                           <font face="varela round" size="4" color="green"> Drawing tool: 
                           <select id="dtool9">
                              <option value="rect">Rectangle</option>
                              <option value="pencil">Pencil</option>
                              <option value="eraser">Eraser</option>
                           </select>
                        </label>
                     </p>
                     <div id="container">
                        <canvas id="imageView9" width="800" height="700">
                        </canvas>
                     </div>
                     <br>
                     <font face="varela round" size="4" color="black">There are<input type="text" name="txtJob" id="ans9">pupils in each group.</font>
                     <button type="button" class="btn btn-default" id="nextbutton9" style="display: block" >Next</button>
                  </div>
               </div>
               <div class="row mt" id="drawing10" style="display: none">
                  <div class="col-lg-12">
                     <style>
                        #container { position: relative; }
                        #imageView10 { border: 1px solid #000; }
                        #imageTemp { position: absolute; top: 1px; left: 1px; }
                     </style>
                     <div>
                        <font face="varela round" size="4" color="black"> John has 12 pencils.<br>
                        He has 5 fewer pens than pencils.<br>
                        4 pens are out of ink.<br>
                        How many pens are not out of ink?</font>
                        <p>
                           <label>
                              <font face="varela round" size="4" color="green"> Drawing tool: 
                              <select id="dtool10">
                                 <option value="rect">Rectangle</option>
                                 <option value="pencil">Pencil</option>
                                 <option value="eraser">Eraser</option>
                              </select>
                           </label>
                        </p>
                        <div id="container">
                           <canvas id="imageView10" width="800" height="700">
                           </canvas>
                        </div>
                        <br>
                        <font face="varela round" size="4" color="black"><input type="text" name="txtJob" id="ans10">pens are not out of ink.</font><br>
                        <button type="button" class="btn btn-danger" id="finishbutton" style="display: block" >Finish</button>
                        <script>function suba(){
                           }
                        </script>
                        <form method="POST" action="http://dip.net63.net/dip/theme/DIPquiz.php">
                           <a href="DIPteaching.php" class="btn btn-default">Back</a>
                           <!--forward to next page (quiz)-->
                           <a href="DIPquiz.php" class="btn btn-default">Next</a><br><br>
                           <input type ="hidden" textarea id="visChangeText" name="txtFld" style="width:300px;height:100px"></textarea>
                           <input type ="hidden" textarea id="correctwrong" name="txtCorrectWrong" style="width:300px;height:100px"></textarea>
                           <input type ="hidden" textarea id="timeStop" name="txtTimeStop" style="width:300px;height:100px"></textarea>
                           <input type ="hidden" textarea id="score" name="txtMark" style="width:300px;height:100px"></textarea>
                           <button style="visibility: hidden;" id="submitt" onclick="suba()">Submit Question</button>
                        </form>
                     </div>
                  </div>
               </div>
            </section>
         </section>
         <!-- /MAIN CONTENT -->
         <!--main content end-->
         <!--footer start-->
         <footer class="site-footer">
            <div class="text-center">
               2014 - Palm View Primary School 
               <a href="DIPquiz.php#" class="go-top">
               <i class="fa fa-angle-up"></i>
               </a>
            </div>
         </footer>
         <!--footer end-->
      </section>
      <!-- js placed at the end of the document so the pages load faster -->
      <?php include('comm_js.html'); ?>
      <!--script for this page-->  
      <script>
        $(document).ready(function () {
          $('#mn_quiz').addClass('active');
          return false;
        });
         // //custom select box
         
         // $(function(){
         //     $('select.styled').customSelect();
         // });
         
      </script>
      <script src="js/example4.js"></script>
      <input  textarea id="draw1" name="savedraw" ></textarea>
      <input type ="hidden" textarea id="draw2" name="savedraw" ></textarea>
      <input type ="hidden" textarea id="draw3" name="savedraw" ></textarea>
      <input type ="hidden" textarea id="draw4" name="savedraw" ></textarea>
      <input type ="hidden" textarea id="draw5" name="savedraw" ></textarea>
      <input type ="hidden" textarea id="draw6" name="savedraw" ></textarea>
      <input type ="hidden" textarea id="draw7" name="savedraw" ></textarea>
      <input type ="hidden" textarea id="draw8" name="savedraw" ></textarea>
      <input type ="hidden" textarea id="draw9" name="savedraw" ></textarea>
      <input type ="hidden" textarea id="draw10" name="savedraw" ></textarea>
   </body>
</html>