$(function() {

    $('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse')
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse')
        }

        height = (this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    })
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
        
        var selecttype = document.getElementById('selecttype').value;


//Text of the question
//Text of the question
	var textDiv = document.getElementById('text');
	if (!textDiv) {
		alert("cannot get text div!");
		return;
	}
var CountDiv = document.getElementById('rCount').innerHTML;
var x = Math.floor((Math.random() * CountDiv ) + 1);
for (i = 0; i < CountDiv; i++) { 
   if (i == x){
    var TypeDiv = document.getElementById('rType'+ i.toString()).innerHTML;
    if(selecttype == "" || (selecttype == "A" && (TypeDiv == "A1" || TypeDiv == "A2"))||(selecttype == "S" && (TypeDiv == "S1" || TypeDiv == "S2"))||(selecttype == "M" && TypeDiv == "M1")||(selecttype == "D" && (TypeDiv == "D1" || TypeDiv == "D2"))){
     var TextaDiv = document.getElementById('rText'+ i.toString()).innerHTML;
     var ADiv = document.getElementById('rA'+ i.toString()).innerHTML;
     var BDiv = document.getElementById('rB'+ i.toString()).innerHTML;
     var CDiv = document.getElementById('rC'+ i.toString()).innerHTML;
     var DDiv = document.getElementById('rD'+ i.toString()).innerHTML;
     var EDiv = document.getElementById('rE'+ i.toString()).innerHTML;
     var AnswerDiv = document.getElementById('rAnswer'+ i.toString()).innerHTML;
     var QnsIDDiv = document.getElementById('rQnsID'+ i.toString()).innerHTML;
     resultArray = Array(TypeDiv ,TextaDiv  ,ADiv ,BDiv ,CDiv ,DDiv ,EDiv ,AnswerDiv, QnsIDDiv );
     break;
    }
    else{
     resultArray = Array("" ,""  ,"","" ,"","","" ,"" ,"");
    }
   }

}




        
textDiv.innerHTML = "";
        var regex = /([\.,-\/#!?$%\^&\*;:{}=\-_`~()])/g; //regular expression for punctuations
	var punctuations = "\.,-\/#!?$%\^&\*;:{}=\-_`~()";
		var s = resultArray[1].replace(/(^\s*)|(\s*$)/gi,"");
		s = s.replace(/[ ]{2,}/gi," ");
		s = s.replace(/\n /,"\n");
		s = s.replace(regex,' $1'); //add space before punctuations for splitting
		words = s.split(" ");
		//write to html
		var content = "<p>";
		for (j = 0; j < words.length; j++) {
			if (punctuations.indexOf(words[j][0]) > -1) { // is a punctuation
				content += words[j];
			}
			else {
				content += "<button class='clickable'>" +words[j] + "</button>";
			}
		}
		content += "</p>";
		textDiv.innerHTML += content;
          
            //Keyword section
            var keywordDiv = document.getElementById('keywords');
            if (!keywordDiv) {
                    alert("cannot get keywords div!");
                    return;
            }
            keywordDiv.value = "";	//reset content
            //Question
            var questionDiv = document.getElementById('question');
            if (!questionDiv) {
                    alert("cannot get question div!");
                    return;
            }
            questionDiv.innerHTML = "";	//reset content
            var answerkey = "";
            if(resultArray[7] == "A")
            {
                answerkey = resultArray[2];
            }
            if(resultArray[7] == "B")
            {
                answerkey = resultArray[3];
            }
            if(resultArray[7] == "C")
            {
                answerkey = resultArray[4];
            }
            if(resultArray[0] == "A1"){
                //line and boxes
               var content ="<div class='numberPlacing' id='drop_container'>";
               for (i=0; i< 2; i++) {
                        var count = resultArray[2+i]/resultArray[4];
                        content += "<div class='strech' style='width:"+(100*count)+"%' align='center'>"+resultArray[2+i]+"</div>";
                       
                }
               content +="</div>"
               
               questionDiv.innerHTML += content;
               content ="<div class='horizontal' id='drop_container'>";
                 //Create arrow and line
                for (i=0; i< 2; i++) {
                        var count = resultArray[2+i]/resultArray[4];
                        content += "<div class='strech' style='width:"+(100*count)+"%'><img class='left_arrow' src='assets/images/leftA.png'><img class='line' src='assets/images/line.png'><img class='right_arrow' src='assets/images/rightA.png'></div>";
                       
                }
                content +="</div>"
                questionDiv.innerHTML += content;
                content= "<div class='horizontal' id='drop_container'>";
                //Create box
                for (i=0; i< 2; i++) {
                        var count = resultArray[2+i]/resultArray[4];
                        content += "<div class='box' id='box"+i.toString()+"' style='width:"+(100*count)+"%' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
                        
                }
                content +="</div>"
                var strech_arrow = "<div class='horizontal' id='boxno13'>";
                strech_arrow += "<div class='strech' style='width:"+100+"%'>";
                strech_arrow += "<img class='left_arrow' src='assets/images/leftA.png'>";
                strech_arrow += "<img class='line' src='assets/images/line.png'>";
                strech_arrow += "<img class='right_arrow' src='assets/images/rightA.png'>";
                strech_arrow += "</div></div>";
                questionDiv.innerHTML += content;
                questionDiv.innerHTML += strech_arrow;
                content ="<div class='numberPlacing' id='drop_container'>";
                content += "<div class='strech' style='width:"+100+"%' align='center'>?</div>";
                content +="</div>"
               
                questionDiv.innerHTML += content;
               
                //Drag_source
                var dragDiv = document.getElementById('drag_source');
                if (!dragDiv) {
                        alert("cannot get drag div!");
                        return;
                }
                dragDiv.innerHTML = "";	//reset content

                //boxes
                content= "<div class='horizontal' id='drag_container'>"
                for (i=0; i< 2; i++) {
                        var count = resultArray[2+i]/resultArray[4];
                        content += "<div class='box_model' style='width:"+(100*count)+"%'><div class='model"+i.toString()+"' id='model"+i.toString()+"' draggable='true' ondragstart='drag(event)'><div class='center_text'>";
                        content += resultArray[5+i]+"</div></div></div>";
                }
                content += "</div>"
                dragDiv.innerHTML += content;
                
       
            }
            
            
            
            //A2
            if(resultArray[0] == "A2"){
               //line and boxes
               var content ="<div class='numberPlacing' id='drop_container'>";
               var count = resultArray[2]/resultArray[4];
               content += "<div class='strech' style='width:"+(100*count)+"%' align='center'>"+resultArray[2]+"</div>";
               content +="</div>"
               questionDiv.innerHTML += content;
               content ="<div class='horizontal' id='drop_container'>";
               //Create arrow and line
                content += "<div class='strech' style='width:"+(100*count)+"%'><img class='left_arrow' src='assets/images/leftA.png'><img class='line' src='assets/images/line.png'><img class='right_arrow' src='assets/images/rightA.png'></div>";
               
                content +="</div>"
                questionDiv.innerHTML += content;
                content= "<div class='horizontal' id='drop_container'>";
                //Create box
                content += "<div class='box' id='box0' style='width:"+(100*count)+"%' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
                
                content +="</div>"
                
                count = resultArray[3]/resultArray[4];
                //2nd BOX
                content +="<div class='horizontal' id='drop_container'>";
                //Create box
                content += "<div class='box' id='box1' style='width:"+(100*count)+"%' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
                content +="</div>"
                //Create arrow and line
                content +="<div class='horizontal' id='drop_container'>";
                content += "<div class='strech' style='width:"+(100*count)+"%'><img class='left_arrow' src='assets/images/leftA.png'><img class='line' src='assets/images/line.png'><img class='right_arrow' src='assets/images/rightA.png'></div>";
                content +="</div>";
                content +="</div>";
                questionDiv.innerHTML += content;
                content ="<div class='numberPlacing' id='drop_container'>";
               
               content += "<div class='strech' style='width:"+(100*count)+"%' align='center'>"+resultArray[3]+"</div>";
               content +="</div>"
               questionDiv.innerHTML += content;
               
                //Drag_source
                var dragDiv = document.getElementById('drag_source');
                if (!dragDiv) {
                        alert("cannot get drag div!");
                        return;
                }
                dragDiv.innerHTML = "";	//reset content

                //boxes
                content= "<div class='horizontal' id='drag_container'>"
                for (i=0; i< 2; i++) {
                        var count = resultArray[2+i]/resultArray[4];
                        content += "<div class='box_model' style='width:"+(100*count)+"%'><div class='model"+i.toString()+"' id='model"+i.toString()+"' draggable='true' ondragstart='drag(event)'><div class='center_text'>";
                        content += resultArray[5+i]+"</div></div></div>";
                }
                content += "</div>"
                dragDiv.innerHTML += content;
                
       
            }
            if(resultArray[0] == "S1"){
                //line and boxes
               var content ="<div class='numberPlacing' id='drop_container'>";
               for (i=0; i< 2; i++) {
                        var count = resultArray[2+i]/resultArray[4];
                        if (resultArray[7] == "A" && i == 0 || resultArray[7] == "B" && i == 1){   
                            content += "<div class='strech' style='width:"+(100*count)+"%' align='center'>?</div>";
                        }
                        else{
                            content += "<div class='strech' style='width:"+(100*count)+"%' align='center'>"+resultArray[2+i]+"</div>";
                        }
                }
               content +="</div>"
               
               questionDiv.innerHTML += content;
               content ="<div class='horizontal' id='drop_container'>";
                 //Create arrow and line
                for (i=0; i< 2; i++) {
                        var count = resultArray[2+i]/resultArray[4];
                        content += "<div class='strech' style='width:"+(100*count)+"%'><img class='left_arrow' src='assets/images/leftA.png'><img class='line' src='assets/images/line.png'><img class='right_arrow' src='assets/images/rightA.png'></div>";
                       
                }
                content +="</div>"
                questionDiv.innerHTML += content;
                content= "<div class='horizontal' id='drop_container'>";
                //Create box
                for (i=0; i< 2; i++) {
                        var count = resultArray[2+i]/resultArray[4];
                        content += "<div class='box' id='box"+i.toString()+"' style='width:"+(100*count)+"%' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
                        
                }
                content +="</div>"
                var strech_arrow = "<div class='horizontal' id='boxno13'>";
                strech_arrow += "<div class='strech' style='width:"+100+"%'>";
                strech_arrow += "<img class='left_arrow' src='assets/images/leftA.png'>";
                strech_arrow += "<img class='line' src='assets/images/line.png'>";
                strech_arrow += "<img class='right_arrow' src='assets/images/rightA.png'>";
                strech_arrow += "</div></div>";
                questionDiv.innerHTML += content;
                questionDiv.innerHTML += strech_arrow;
                content ="<div class='numberPlacing' id='drop_container'>";
                content += "<div class='strech' style='width:"+100+"%' align='center'>"+resultArray[4]+"</div>";
                content +="</div>"
               
                questionDiv.innerHTML += content;
               
                //Drag_source
                var dragDiv = document.getElementById('drag_source');
                if (!dragDiv) {
                        alert("cannot get drag div!");
                        return;
                }
                dragDiv.innerHTML = "";	//reset content

                //boxes
                content= "<div class='horizontal' id='drag_container'>"
                for (i=0; i< 2; i++) {
                        var count = resultArray[2+i]/resultArray[4];
                        content += "<div class='box_model' style='width:"+(100*count)+"%'><div class='model"+i.toString()+"' id='model"+i.toString()+"' draggable='true' ondragstart='drag(event)'><div class='center_text'>";
                        content += resultArray[5+i]+"</div></div></div>";
                }
                content += "</div>"
                dragDiv.innerHTML += content;
                
            }
            if(resultArray[0] == "S2"){
               //line and boxes
               var content ="<div class='numberPlacing' id='drop_container'>";
               var count = 1;
               content += "<div class='strech' style='width:"+(100*count)+"%' align='center'>"+resultArray[2]+"</div>";
               content +="</div>"
               questionDiv.innerHTML += content;
               content ="<div class='horizontal' id='drop_container'>";
               //Create arrow and line
                content += "<div class='strech' style='width:"+(100*count)+"%'><img class='left_arrow' src='assets/images/leftA.png'><img class='line' src='assets/images/line.png'><img class='right_arrow' src='assets/images/rightA.png'></div>";
               
                content +="</div>"
                questionDiv.innerHTML += content;
                content= "<div class='horizontal' id='drop_container'>";
                //Create box
                content += "<div class='box' id='box0' style='width:"+(100*count)+"%' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
                
                content +="</div>"
                
                count = resultArray[3]/resultArray[2];
                //2nd BOX
                content +="<div class='horizontal' id='drop_container'>";
                //Create box
                content += "<div class='box' id='box1' style='width:"+(100*count)+"%' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
                content +="</div>"
                
                
                //Create arrow and line
                content +="<div class='horizontal' id='drop_container'>";
                content += "<div class='strech' style='width:"+(100*count)+"%'><img class='left_arrow' src='assets/images/leftA.png'><img class='line' src='assets/images/line.png'><img class='right_arrow' src='assets/images/rightA.png'></div>";
                 count = resultArray[4]/resultArray[2];
                 //Create arrow and line
                content += "<div class='strech' style='width:"+(100*count)+"%'><img class='left_arrow' src='assets/images/leftA.png'><img class='line' src='assets/images/line.png'><img class='right_arrow' src='assets/images/rightA.png'></div>";
                content +="</div>";
                content +="<div class='horizontal' id='drop_container'>";
                    if (resultArray[7] == "B"){
                        count = resultArray[3]/resultArray[2];
                        content += "<div class='strech' style='width:"+(100*count)+"%' align='center'>?</div>";
                         count = resultArray[4]/resultArray[2];
                        content += "<div class='strech' style='width:"+(100*count)+"%' align='center'>"+resultArray[4]+"</div>";
                    }
                    else{
                        
                        count = resultArray[3]/resultArray[2];
                        content += "<div class='strech' style='width:"+(100*count)+"%' align='center'>"+resultArray[3]+"</div>";
                        count = resultArray[4]/resultArray[2];
                        content += "<div class='strech' style='width:"+(100*count)+"%' align='center'>?</div>";
                    }
                 
               
                content +="</div>"
                
                questionDiv.innerHTML += content;
               
                //Drag_source
                var dragDiv = document.getElementById('drag_source');
                if (!dragDiv) {
                        alert("cannot get drag div!");
                        return;
                }
                dragDiv.innerHTML = "";	//reset content

                //boxes
                content= "<div class='horizontal' id='drag_container'>"
                        var count = 1
                        content += "<div class='box_model' style='width:"+(100*count)+"%'><div class='model0' id='model0' draggable='true' ondragstart='drag(event)'><div class='center_text'>";
                        content += resultArray[5]+"</div></div></div>";
                        count = resultArray[3]/resultArray[2];
                        content += "<div class='box_model' style='width:"+(100*count)+"%'><div class='model1' id='model1' draggable='true' ondragstart='drag(event)'><div class='center_text'>";
                        content += resultArray[6]+"</div></div></div>";
                content += "</div>"
                dragDiv.innerHTML += content; 
            }
            if(resultArray[0] == "M1"){
                
               var content ="<div class='numberPlacing' id='drop_container'>";
               content += "<div class='strech' style='width:"+(100/resultArray[4])+"%' align='center'>"+resultArray[2]+"</div>";
               content +="</div>"
               
               questionDiv.innerHTML += content;
               content ="<div class='horizontal' id='drop_container'>";
               content += "<div class='strech' style='width:"+(100/resultArray[4])+"%'><img class='left_arrow' src='assets/images/leftA.png'><img class='line' src='assets/images/line.png'><img class='right_arrow' src='assets/images/rightA.png'></div>";
                       
                
                content +="</div>"
                questionDiv.innerHTML += content;
                content= "<div class='horizontal' id='drop_container'>";
                //Create box
                for (i=0; i< resultArray[4]; i++) {
                        content += "<div class='box' id='box"+i.toString()+"' style='width:"+(100/resultArray[4])+"%' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
                        
                }
                content +="</div>"
                var strech_arrow = "<div class='horizontal' id='boxno13'>";
                strech_arrow += "<div class='strech' style='width:"+100+"%'>";
                strech_arrow += "<img class='left_arrow' src='assets/images/leftA.png'>";
                strech_arrow += "<img class='line' src='assets/images/line.png'>";
                strech_arrow += "<img class='right_arrow' src='assets/images/rightA.png'>";
                strech_arrow += "</div></div>";
                questionDiv.innerHTML += content;
                questionDiv.innerHTML += strech_arrow;
                content ="<div class='numberPlacing' id='drop_container'>";
                content += "<div class='strech' style='width:"+100+"%' align='center'>?</div>";
                content +="</div>"
               
                questionDiv.innerHTML += content;
               
                //Drag_source
                var dragDiv = document.getElementById('drag_source');
                if (!dragDiv) {
                        alert("cannot get drag div!");
                        return;
                }
                dragDiv.innerHTML = "";	//reset content

                //boxes
                content= "<div class='horizontal' id='drag_container'>"
                for (i=0; i< resultArray[4]; i++) {
                        content += "<div class='box_model' style='width:"+(100/resultArray[4])+"%'><div class='model0' id='model"+i.toString()+"' draggable='true' ondragstart='drag(event)'><div class='center_text'>";
                        content += (i+1).toString()+"</div></div></div>";
                }
                content += "</div>"
                dragDiv.innerHTML += content;
                
                
            }
            if(resultArray[0] == "D1"){
                 var content ="<div class='numberPlacing' id='drop_container'>";
               content += "<div class='strech' style='width:"+(100/resultArray[4])+"%' align='center'>?</div>";
               content +="</div>"
               
               questionDiv.innerHTML += content;
               content ="<div class='horizontal' id='drop_container'>";
               content += "<div class='strech' style='width:"+(100/resultArray[4])+"%'><img class='left_arrow' src='assets/images/leftA.png'><img class='line' src='assets/images/line.png'><img class='right_arrow' src='assets/images/rightA.png'></div>";
                       
                
                content +="</div>"
                questionDiv.innerHTML += content;
                content= "<div class='horizontal' id='drop_container'>";
                //Create box
                for (i=0; i< resultArray[4]; i++) {
                        content += "<div class='box' id='box"+i.toString()+"' style='width:"+(100/resultArray[4])+"%' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
                        
                }
                content +="</div>"
                var strech_arrow = "<div class='horizontal' id='boxno13'>";
                strech_arrow += "<div class='strech' style='width:"+100+"%'>";
                strech_arrow += "<img class='left_arrow' src='assets/images/leftA.png'>";
                strech_arrow += "<img class='line' src='assets/images/line.png'>";
                strech_arrow += "<img class='right_arrow' src='assets/images/rightA.png'>";
                strech_arrow += "</div></div>";
                questionDiv.innerHTML += content;
                questionDiv.innerHTML += strech_arrow;
                content ="<div class='numberPlacing' id='drop_container'>";
                content += "<div class='strech' style='width:"+100+"%' align='center'>"+resultArray[3]+"</div>";
                content +="</div>"
               
                questionDiv.innerHTML += content;
               
                //Drag_source
                var dragDiv = document.getElementById('drag_source');
                if (!dragDiv) {
                        alert("cannot get drag div!");
                        return;
                }
                dragDiv.innerHTML = "";	//reset content

                //boxes
                content= "<div class='horizontal' id='drag_container'>"
                for (i=0; i< resultArray[4]; i++) {
                        content += "<div class='box_model' style='width:"+(100/resultArray[4])+"%'><div class='model0' id='model"+i.toString()+"' draggable='true' ondragstart='drag(event)'><div class='center_text'>";
                        content += (i+1).toString()+"</div></div></div>";
                }
                content += "</div>"
                dragDiv.innerHTML += content;
                
            }
            if(resultArray[0] == "D2"){
               var content ="<div class='numberPlacing' id='drop_container'>";
               content += "<div class='strech' style='width:"+(100/resultArray[4])+"%' align='center'>"+resultArray[2]+"</div>";
               content +="</div>"
               
               questionDiv.innerHTML += content;
               content ="<div class='horizontal' id='drop_container'>";
               content += "<div class='strech' style='width:"+(100/resultArray[4])+"%'><img class='left_arrow' src='assets/images/leftA.png'><img class='line' src='assets/images/line.png'><img class='right_arrow' src='assets/images/rightA.png'></div>";
                       
                
                content +="</div>"
                questionDiv.innerHTML += content;
                content= "<div class='horizontal' id='drop_container'>";
                //Create box
                for (i=0; i< 2; i++) {
                        content += "<div class='box' id='box"+i.toString()+"' style='width:"+(100/resultArray[4])+"%' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";   
                }
                for(i=2;i< (resultArray[4]-1);i++){
                    content += "<div class='box_dotted' id='box"+i.toString()+"' style='width:"+(100/resultArray[4])+"%' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
                        
                }
                content += "<div class='box' id='box"+resultArray[4]+"' style='width:"+(100/resultArray[4])+"%' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
                     
                content +="</div>"
                var strech_arrow = "<div class='horizontal' id='boxno13'>";
                strech_arrow += "<div class='strech' style='width:"+100+"%'>";
                strech_arrow += "<img class='left_arrow' src='assets/images/leftA.png'>";
                strech_arrow += "<img class='line' src='assets/images/line.png'>";
                strech_arrow += "<img class='right_arrow' src='assets/images/rightA.png'>";
                strech_arrow += "</div></div>";
                questionDiv.innerHTML += content;
                questionDiv.innerHTML += strech_arrow;
                content ="<div class='numberPlacing' id='drop_container'>";
                content += "<div class='strech' style='width:"+100+"%' align='center'>"+resultArray[3]+"</div>";
                content +="</div>"
               
                questionDiv.innerHTML += content;
//Drag_source
                var dragDiv = document.getElementById('drag_source');
                if (!dragDiv) {
                        alert("cannot get drag div!");
                        return;
                }
                dragDiv.innerHTML = "";	//reset content
               
                
            }
            
            var s= '<input type="text" id="check" name="check">'; //Create one textbox as HTML
            document.getElementById("answer").innerHTML="Enter your answer :";
            document.getElementById("answer").innerHTML+=s + "  ";
            var btn = "<button type='button' class='btn btn-success' onclick='checkanswer("+answerkey+")'>Check Answer</button>";
            document.getElementById("answer").innerHTML+=btn;
                  
           }
function checkanswer(answerkey){
        var ck = document.getElementById("check").value;

        if (ck == answerkey){
            alert("CORRECT ANSWER!");
			document.getElementById("QnsID").value  = "QuestionID " + resultArray[8] + " : Correct" + "\n";
            document.getElementById("submitt").click();
        }
        else{
             alert("TOO BAD WRONG ANSWER! CORRECT ANSWER IS " + answerkey);
			 document.getElementById("QnsID").value  = "QuestionID " + resultArray[8] + " : Wrong" + "\n";
             document.getElementById("submitt").click();
        }
  
    }
function highlight(e) {
	var keywordDiv = document.getElementById('keywords');
        $(this).css('background-color','yellow');
	if (!keywordDiv) {
		alert("cannot get keywords div!");
		return;
	}
	keywordDiv.value += e.target.textContent + " "+"\n" ;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text/html", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/html");
    ev.target.appendChild(document.getElementById(data));
}

function registerEvents() {
	$('#text').on('click','.clickable', highlight);
}

registerEvents();									