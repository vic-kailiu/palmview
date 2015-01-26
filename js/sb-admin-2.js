//$(function() {
//    $('#side-menu').metisMenu();
//});

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

// for each time the user hit the generate button, if the selecttype doesn't change and there is already a question set, then
// the system will just randome select question from the previously retrieved questions. otherwise, it will query to the server
// for more questions.
var qnss = null;
var currentQnss = null;
var _selecttype = null;
var qnssIndex = 1000;
var startTime = -1;
var session_difficulty = 2;
// 2 -- no hint
// 1 -- number marked
// 0 -- labeled
var question_difficulty = -1;

function generateQuestion() {
    //by now, every time the question is set back to the original difficulty
    question_difficulty = session_difficulty;
    var selecttype = document.getElementById('selecttype').value;

    if (qnss == null || _selecttype != selecttype) {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                qnss = JSON.parse(xmlhttp.responseText);
                qnssIndex = 0;
                currentQnss = qnss[qnssIndex];
                generate(currentQnss);
            }
        }
        xmlhttp.open("GET","getQues.php?type=MODAL"+selecttype,true);
        xmlhttp.send();
    }
    else {
        qnssIndex += 1;
        if (qnssIndex < qnss.length ) {
            currentQnss = qnss[qnssIndex];
            generate(currentQnss);
        }
        else {
            qnss = null;
            generateQuestion();
        }
    }

    _selecttype = selecttype;
}

var currentQnsId = -1;
var para;

function generate(qns) {
    //Text of the question
    var textDiv = document.getElementById('text');
    if (!textDiv) {
        alert("cannot get text div!");
        return;
    }
    textDiv.innerHTML = "";

/*    //Keyword section
    var keywordDiv = document.getElementById('keywords');
    if (!keywordDiv) {
        alert("cannot get keywords div!");
        return;
    }
    keywordDiv.value = ""; //reset content*/

    var questionDiv = document.getElementById('question');
    if (!questionDiv) {
        alert("cannot get question div!");
        return;
    }
    questionDiv.innerHTML = ""; //reset content

    //Drag_source
    var dragDiv = document.getElementById('drag_source');
    if (!dragDiv) {
        alert("cannot get drag div!");
        return;
    }
    dragDiv.innerHTML = ""; //reset content

    //decode qns
    var qnsArr = qns.qns.split("&");
    currentQnsId = qns.id;
    para = new Array();
    para[0] = qnsArr[1];
    para[1] = qnsArr[2];
    para[2] = qnsArr[3];
    //qnsArr[0] text
    //qnsArr[1,2,3] para
    //qnsArr[4,5] lable
    //qnsArr[6]    additional para

    // text section
    var regex = /([\.,-\/#!?$%\^&\*;:{}=\-_`~()])/g; //regular expression for punctuations
    var punctuations = "\.,-\/#!?$%\^&\*;:{}=\-_`~()";
    var s = qnsArr[0].replace(/(^\s*)|(\s*$)/gi, "");
    s = s.replace(/[ ]{2,}/gi, " ");
    s = s.replace(/\n /, "\n");
    s = s.replace(regex, ' $1'); //add space before punctuations for splitting
    words = s.split(" ");
    //write to html
    var content = "<p>";
    for (j = 0; j < words.length; j++) {
        if (punctuations.indexOf(words[j][0]) > -1) { // is a punctuation
            content += words[j];
        } else {
            content += "<button class='clickable'>" + words[j] + "</button>";
        }
    }
    content += "</p>";
    var textDiv = document.getElementById('text');
    if (!textDiv) {
        alert("cannot get text div!");
        return;
    }
    textDiv.innerHTML += content;

    //Question
    switch(qns.type) {
        case "MODAL_A1": generateA1(qnsArr); break;
        case "MODAL_A2": generateA2(qnsArr); break;
        case "MODAL_S1": generateS1(qnsArr); break;
        case "MODAL_S2": generateS2(qnsArr); break;
        case "MODAL_M1": generateM1(qnsArr); break;
        case "MODAL_M2": generateM2(qnsArr); break;
        case "MODAL_D1": generateD1(qnsArr); break;
        case "MODAL_D2": generateD2(qnsArr); break;
    }

    var s = '<input type="text" id="check" name="check">'; //Create one textbox as HTML
    document.getElementById("answer").innerHTML = "Enter your answer :";
    document.getElementById("answer").innerHTML += s + "  ";
    var btn = "<button type='button' class='btn btn-success' onclick='checkanswer(" + qns.ans + ")'>Check Answer</button>";
    document.getElementById("answer").innerHTML += btn;

    qns.id = -1;
    loadScript();
    startTime = new Date();
    logPractice('mouseClick', 'qnsStart', currentQnsId, 'null', 'null', getSQLTimeString(startTime), 'null');
}

function generateA1(qnsArr) {
    var questionDiv = document.getElementById('question');
            if (!questionDiv) {
                alert("cannot get question div!");
                return;
            }
            questionDiv.innerHTML = ""; //reset content

    //line and boxes
    var content = "<div class='numberPlacing' id='drop_container'>";
    for (i = 0; i < 2; i++) {
        var count = qnsArr[1 + i] / qnsArr[3];
        content += "<div class='strech' style='width:" + (100 * count) + "%' align='center'>" 
        + (question_difficulty > 1? "<input class='numInput' id = 'para" + i + "'>" : qnsArr[1 + i] ) + "</div>";
    }
    content += "</div>"
    questionDiv.innerHTML += content;
    content = "<div class='horizontal' id='drop_container'>";
    //Create arrow and line
    for (i = 0; i < 2; i++) {
        var count = qnsArr[1 + i] / qnsArr[3];
        content += "<div class='strech' style='width:" + (100 * count) + "%'><img class='left_arrow' src='images/leftA.png'><img class='line' src='images/line.png'><img class='right_arrow' src='images/rightA.png'></div>";
    }
    content += "</div>"
    questionDiv.innerHTML += content;
    content = "<div class='horizontal' id='drop_container'>";
    //Create box
    for (i = 0; i < 2; i++) {
        var count = qnsArr[1 + i] / qnsArr[3];
        content += "<div class='box' id='box" + i.toString() + "' style='width:" + (100 * count) 
        + "%' ondrop='handleDrop(event)' ondragover='handleDragOver(event)' ondragenter='handleDragEnter(event)' ondragleave='handleDragLeave(event)' >";

        if (question_difficulty == 0) {
            content += "<div class='model" + i.toString() + "' id='model" + i.toString() 
                    + "' draggable='true' ondragstart='handleDragStart(event)' ondragend='handleDragEnd(event)'>";
            content += qnsArr[4 + i] + "</div>"
        }

        content +="</div>";
    }
    content += "</div>"
    var strech_arrow = "<div class='horizontal' id='boxno13'>";
    strech_arrow += "<div class='strech' style='width:" + 100 + "%'>";
    strech_arrow += "<img class='left_arrow' src='images/leftA.png'>";
    strech_arrow += "<img class='line' src='images/line.png'>";
    strech_arrow += "<img class='right_arrow' src='images/rightA.png'>";
    strech_arrow += "</div></div>";
    questionDiv.innerHTML += content;
    questionDiv.innerHTML += strech_arrow;
    content = "<div class='numberPlacing' id='drop_container'>";
    content += "<div class='strech' style='width:" + 100 + "%' align='center'>"
                + (question_difficulty > 1? "<input class='numInput'>" : "?" ) +"</div>";
    content += "</div>"
    questionDiv.innerHTML += content;
    //Drag_source
    var dragDiv = document.getElementById('drag_source');
    if (!dragDiv) {
        alert("cannot get drag div!");
        return;
    }
    dragDiv.innerHTML = ""; //reset content
    //boxes
    content = "<div class='horizontal' id='drag_container'>"
    for (i = 0; i < 2; i++) {
        var count = qnsArr[1 + i] / qnsArr[3];
        content += "<div class='box_model' style='width:" + (100 * count) + "%'><div class='model" + i.toString() + "' id='model" + i.toString() 
                + "' draggable='true' ondragstart='handleDragStart(event)' ondragend='handleDragEnd(event)'>";
        content += qnsArr[4 + i] + "</div></div>";
    }
    content += "</div>"
    dragDiv.innerHTML += content;
}

function generateA2(qnsArr) {
    var questionDiv = document.getElementById('question');
            if (!questionDiv) {
                alert("cannot get question div!");
                return;
            }
    //line and boxes
    var content = "<div class='numberPlacing' id='drop_container'>";
    var count = qnsArr[1] / qnsArr[3];
    content += "<div class='strech' style='width:" + (100 * count) + "%' align='center'>" + qnsArr[1] + "</div>";
    content += "</div>"
    questionDiv.innerHTML += content;
    content = "<div class='horizontal' id='drop_container'>";
    //Create arrow and line
    content += "<div class='strech' style='width:" + (100 * count) + "%'><img class='left_arrow' src='images/leftA.png'><img class='line' src='images/line.png'><img class='right_arrow' src='images/rightA.png'></div>";
    content += "</div>"
    questionDiv.innerHTML += content;
    content = "<div class='horizontal' id='drop_container'>";
    //Create box
    content += "<div class='box' id='box0' style='width:" + (100 * count) + "%' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
    content += "</div>"
    count = qnsArr[2] / qnsArr[3];
    //2nd BOX
    content += "<div class='horizontal' id='drop_container'>";
    //Create box
    content += "<div class='box' id='box1' style='width:" + (100 * count) + "%' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
    content += "</div>"
        //Create arrow and line
    content += "<div class='horizontal' id='drop_container'>";
    content += "<div class='strech' style='width:" + (100 * count) + "%'><img class='left_arrow' src='images/leftA.png'><img class='line' src='images/line.png'><img class='right_arrow' src='images/rightA.png'></div>";
    content += "</div>";
    content += "</div>";
    questionDiv.innerHTML += content;
    content = "<div class='numberPlacing' id='drop_container'>";
    content += "<div class='strech' style='width:" + (100 * count) + "%' align='center'>" + qnsArr[2] + "</div>";
    content += "</div>"
    questionDiv.innerHTML += content;
    //Drag_source
    var dragDiv = document.getElementById('drag_source');
    if (!dragDiv) {
        alert("cannot get drag div!");
        return;
    }
    dragDiv.innerHTML = ""; //reset content
    //boxes
    content = "<div class='horizontal' id='drag_container'>"
    for (i = 0; i < 2; i++) {
        var count = qnsArr[1 + i] / qnsArr[3];
        content += "<div class='box_model' style='width:" + (100 * count) + "%'><div class='model" + i.toString() + "' id='model" + i.toString() + "' draggable='true' ondragstart='drag(event)'><div class='center_text'>";
        content += qnsArr[4 + i] + "</div></div></div>";
    }
    content += "</div>"
    dragDiv.innerHTML += content;   
}

function generateS1(qnsArr) {
    var questionDiv = document.getElementById('question');
    if (!questionDiv) {
        alert("cannot get question div!");
        return;
    }
    questionDiv.innerHTML = ""; //reset content

   //line and boxes
    var content = "<div class='numberPlacing' id='drop_container'>";
    for (i = 0; i < 2; i++) {
        var count = qnsArr[1 + i] / qnsArr[3];
        if (qnsArr[6] == "A" && i == 0 || qnsArr[6] == "B" && i == 1) {
            content += "<div class='strech' style='width:" + (100 * count) + "%' align='center'>?</div>";
        } else {
            content += "<div class='strech' style='width:" + (100 * count) + "%' align='center'>" + qnsArr[1 + i] + "</div>";
        }
    }
    content += "</div>"
    questionDiv.innerHTML += content;
    content = "<div class='horizontal' id='drop_container'>";
    //Create arrow and line
    for (i = 0; i < 2; i++) {
        var count = qnsArr[1 + i] / qnsArr[3];
        content += "<div class='strech' style='width:" + (100 * count) + "%'><img class='left_arrow' src='images/leftA.png'><img class='line' src='images/line.png'><img class='right_arrow' src='images/rightA.png'></div>";
    }
    content += "</div>"
    questionDiv.innerHTML += content;
    content = "<div class='horizontal' id='drop_container'>";
    //Create box
    for (i = 0; i < 2; i++) {
        var count = qnsArr[1 + i] / qnsArr[3];
        content += "<div class='box' id='box" + i.toString() + "' style='width:" + (100 * count) + "%' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
    }
    content += "</div>"
    var strech_arrow = "<div class='horizontal' id='boxno13'>";
    strech_arrow += "<div class='strech' style='width:" + 100 + "%'>";
    strech_arrow += "<img class='left_arrow' src='images/leftA.png'>";
    strech_arrow += "<img class='line' src='images/line.png'>";
    strech_arrow += "<img class='right_arrow' src='images/rightA.png'>";
    strech_arrow += "</div></div>";
    questionDiv.innerHTML += content;
    questionDiv.innerHTML += strech_arrow;
    content = "<div class='numberPlacing' id='drop_container'>";
    content += "<div class='strech' style='width:" + 100 + "%' align='center'>" + qnsArr[3] + "</div>";
    content += "</div>"
    questionDiv.innerHTML += content;
    //Drag_source
    var dragDiv = document.getElementById('drag_source');
    if (!dragDiv) {
        alert("cannot get drag div!");
        return;
    }
    dragDiv.innerHTML = ""; //reset content
    //boxes
    content = "<div class='horizontal' id='drag_container'>"
    for (i = 0; i < 2; i++) {
        var count = qnsArr[1 + i] / qnsArr[3];
        content += "<div class='box_model' style='width:" + (100 * count) + "%'><div class='model" + i.toString() + "' id='model" + i.toString() + "' draggable='true' ondragstart='drag(event)'><div class='center_text'>";
        content += qnsArr[4 + i] + "</div></div></div>";
    }
    content += "</div>"
    dragDiv.innerHTML += content;
}

function generateS2(qnsArr) {
    var questionDiv = document.getElementById('question');
            if (!questionDiv) {
                alert("cannot get question div!");
                return;
            }
    //line and boxes
    var content = "<div class='numberPlacing' id='drop_container'>";
    var count = 1;
    content += "<div class='strech' style='width:" + (100 * count) + "%' align='center'>" + qnsArr[1] + "</div>";
    content += "</div>"
    questionDiv.innerHTML += content;
    content = "<div class='horizontal' id='drop_container'>";
    //Create arrow and line
    content += "<div class='strech' style='width:" + (100 * count) + "%'><img class='left_arrow' src='images/leftA.png'><img class='line' src='images/line.png'><img class='right_arrow' src='images/rightA.png'></div>";
    content += "</div>"
    questionDiv.innerHTML += content;
    content = "<div class='horizontal' id='drop_container'>";
    //Create box
    content += "<div class='box' id='box0' style='width:" + (100 * count) + "%' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
    content += "</div>"
    count = qnsArr[2] / qnsArr[1];
    //2nd BOX
    content += "<div class='horizontal' id='drop_container'>";
    //Create box
    content += "<div class='box' id='box1' style='width:" + (100 * count) + "%' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
    content += "</div>"
    //Create arrow and line
    content += "<div class='horizontal' id='drop_container'>";
    content += "<div class='strech' style='width:" + (100 * count) + "%'><img class='left_arrow' src='images/leftA.png'><img class='line' src='images/line.png'><img class='right_arrow' src='images/rightA.png'></div>";
    count = qnsArr[3] / qnsArr[1];
    //Create arrow and line
    content += "<div class='strech' style='width:" + (100 * count) + "%'><img class='left_arrow' src='images/leftA.png'><img class='line' src='images/line.png'><img class='right_arrow' src='images/rightA.png'></div>";
    content += "</div>";
    content += "<div class='horizontal' id='drop_container'>";
    if (qnsArr[6] == "B") {
        count = qnsArr[2] / qnsArr[1];
        content += "<div class='strech' style='width:" + (100 * count) + "%' align='center'>?</div>";
        count = qnsArr[3] / qnsArr[1];
        content += "<div class='strech' style='width:" + (100 * count) + "%' align='center'>" + qnsArr[3] + "</div>";
    } else {
        count = qnsArr[2] / qnsArr[1];
        content += "<div class='strech' style='width:" + (100 * count) + "%' align='center'>" + qnsArr[2] + "</div>";
        count = qnsArr[3] / qnsArr[1];
        content += "<div class='strech' style='width:" + (100 * count) + "%' align='center'>?</div>";
    }
    content += "</div>"
    questionDiv.innerHTML += content;
    //Drag_source
    var dragDiv = document.getElementById('drag_source');
    if (!dragDiv) {
        alert("cannot get drag div!");
        return;
    }
    dragDiv.innerHTML = ""; //reset content
    //boxes
    content = "<div class='horizontal' id='drag_container'>"
    var count = 1
    content += "<div class='box_model' style='width:" + (100 * count) + "%'><div class='model0' id='model0' draggable='true' ondragstart='drag(event)'><div class='center_text'>";
    content += qnsArr[4] + "</div></div></div>";
    count = qnsArr[2] / qnsArr[1];
    content += "<div class='box_model' style='width:" + (100 * count) + "%'><div class='model1' id='model1' draggable='true' ondragstart='drag(event)'><div class='center_text'>";
    content += qnsArr[5] + "</div></div></div>";
    content += "</div>"
    dragDiv.innerHTML += content;
}

function generateM1(qnsArr) {
    var questionDiv = document.getElementById('question');
            if (!questionDiv) {
                alert("cannot get question div!");
                return;
            }
    var content = "<div class='numberPlacing' id='drop_container'>";
    content += "<div class='strech' style='width:" + (100 / qnsArr[3]) + "%' align='center'>" + qnsArr[1] + "</div>";
    content += "</div>"
    questionDiv.innerHTML += content;
    content = "<div class='horizontal' id='drop_container'>";
    content += "<div class='strech' style='width:" + (100 / qnsArr[3]) + "%'><img class='left_arrow' src='images/leftA.png'><img class='line' src='images/line.png'><img class='right_arrow' src='images/rightA.png'></div>";
    content += "</div>"
    questionDiv.innerHTML += content;
    content = "<div class='horizontal' id='drop_container'>";
    //Create box
    for (i = 0; i < qnsArr[3]; i++) {
        content += "<div class='box' id='box" + i.toString() + "' style='width:" + (100 / qnsArr[3]) + "%' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
    }
    content += "</div>"
    var strech_arrow = "<div class='horizontal' id='boxno13'>";
    strech_arrow += "<div class='strech' style='width:" + 100 + "%'>";
    strech_arrow += "<img class='left_arrow' src='images/leftA.png'>";
    strech_arrow += "<img class='line' src='images/line.png'>";
    strech_arrow += "<img class='right_arrow' src='images/rightA.png'>";
    strech_arrow += "</div></div>";
    questionDiv.innerHTML += content;
    questionDiv.innerHTML += strech_arrow;
    content = "<div class='numberPlacing' id='drop_container'>";
    content += "<div class='strech' style='width:" + 100 + "%' align='center'>?</div>";
    content += "</div>"
    questionDiv.innerHTML += content;
    //Drag_source
    var dragDiv = document.getElementById('drag_source');
    if (!dragDiv) {
        alert("cannot get drag div!");
        return;
    }
    dragDiv.innerHTML = ""; //reset content
    //boxes
    content = "<div class='horizontal' id='drag_container'>"
    for (i = 0; i < qnsArr[3]; i++) {
        content += "<div class='box_model' style='width:" + (100 / qnsArr[3]) + "%'><div class='model0' id='model" + i.toString() + "' draggable='true' ondragstart='drag(event)'><div class='center_text'>";
        content += (i + 1).toString() + "</div></div></div>";
    }
    content += "</div>"
    dragDiv.innerHTML += content;
}

function generateD1(qnsArr) {
    var questionDiv = document.getElementById('question');
            if (!questionDiv) {
                alert("cannot get question div!");
                return;
            }
    var content = "<div class='numberPlacing' id='drop_container'>";
    content += "<div class='strech' style='width:" + (100 / qnsArr[3]) + "%' align='center'>?</div>";
    content += "</div>"
    questionDiv.innerHTML += content;
    content = "<div class='horizontal' id='drop_container'>";
    content += "<div class='strech' style='width:" + (100 / qnsArr[3]) + "%'><img class='left_arrow' src='images/leftA.png'><img class='line' src='images/line.png'><img class='right_arrow' src='images/rightA.png'></div>";
    content += "</div>"
    questionDiv.innerHTML += content;
    content = "<div class='horizontal' id='drop_container'>";
    //Create box
    for (i = 0; i < qnsArr[3]; i++) {
        content += "<div class='box' id='box" + i.toString() + "' style='width:" + (100 / qnsArr[3]) + "%' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
    }
    content += "</div>"
    var strech_arrow = "<div class='horizontal' id='boxno13'>";
    strech_arrow += "<div class='strech' style='width:" + 100 + "%'>";
    strech_arrow += "<img class='left_arrow' src='images/leftA.png'>";
    strech_arrow += "<img class='line' src='images/line.png'>";
    strech_arrow += "<img class='right_arrow' src='images/rightA.png'>";
    strech_arrow += "</div></div>";
    questionDiv.innerHTML += content;
    questionDiv.innerHTML += strech_arrow;
    content = "<div class='numberPlacing' id='drop_container'>";
    content += "<div class='strech' style='width:" + 100 + "%' align='center'>" + qnsArr[2] + "</div>";
    content += "</div>"
    questionDiv.innerHTML += content;
    //Drag_source
    var dragDiv = document.getElementById('drag_source');
    if (!dragDiv) {
        alert("cannot get drag div!");
        return;
    }
    dragDiv.innerHTML = ""; //reset content
    //boxes
    content = "<div class='horizontal' id='drag_container'>"
    for (i = 0; i < qnsArr[3]; i++) {
        content += "<div class='box_model' style='width:" + (100 / qnsArr[3]) + "%'><div class='model0' id='model" + i.toString() + "' draggable='true' ondragstart='drag(event)'><div class='center_text'>";
        content += (i + 1).toString() + "</div></div></div>";
    }
    content += "</div>"
    dragDiv.innerHTML += content;
}

function generateD2(qnsArr) {
    var questionDiv = document.getElementById('question');
            if (!questionDiv) {
                alert("cannot get question div!");
                return;
            }
    var content = "<div class='numberPlacing' id='drop_container'>";
    content += "<div class='strech' style='width:" + (100 / qnsArr[3]) + "%' align='center'>" + qnsArr[1] + "</div>";
    content += "</div>"
    questionDiv.innerHTML += content;
    content = "<div class='horizontal' id='drop_container'>";
    content += "<div class='strech' style='width:" + (100 / qnsArr[3]) + "%'><img class='left_arrow' src='images/leftA.png'><img class='line' src='images/line.png'><img class='right_arrow' src='images/rightA.png'></div>";
    content += "</div>"
    questionDiv.innerHTML += content;
    content = "<div class='horizontal' id='drop_container'>";
    //Create box
    for (i = 0; i < 2; i++) {
        content += "<div class='box' id='box" + i.toString() + "' style='width:" + (100 / qnsArr[3]) + "%' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
    }
    for (i = 2; i < (qnsArr[3] - 1); i++) {
        content += "<div class='box_dotted' id='box" + i.toString() + "' style='width:" + (100 / qnsArr[3]) + "%' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
    }
    content += "<div class='box' id='box" + qnsArr[3] + "' style='width:" + (100 / qnsArr[3]) + "%' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
    content += "</div>"
    var strech_arrow = "<div class='horizontal' id='boxno13'>";
    strech_arrow += "<div class='strech' style='width:" + 100 + "%'>";
    strech_arrow += "<img class='left_arrow' src='images/leftA.png'>";
    strech_arrow += "<img class='line' src='images/line.png'>";
    strech_arrow += "<img class='right_arrow' src='images/rightA.png'>";
    strech_arrow += "</div></div>";
    questionDiv.innerHTML += content;
    questionDiv.innerHTML += strech_arrow;
    content = "<div class='numberPlacing' id='drop_container'>";
    content += "<div class='strech' style='width:" + 100 + "%' align='center'>" + qnsArr[2] + "</div>";
    content += "</div>"
    questionDiv.innerHTML += content;
    //Drag_source
    var dragDiv = document.getElementById('drag_source');
    if (!dragDiv) {
        alert("cannot get drag div!");
        return;
    }
    dragDiv.innerHTML = ""; //reset content
}

function loadScript() {
  $("input").change(function(event){
    if (event.target.id == "check") {
        logPractice("keyPres", "answer", currentQnsId, event.currentTarget.value, 'null', getSQLTimeString(new Date()), 'null');
    }
    else {
        correct = false;
        if (event.target.id.indexOf("0") >= 0)
            correct = (event.currentTarget.value == para[0]);
        if (event.target.id.indexOf("1") >= 0)
            correct = (event.currentTarget.value == para[1]);
        correct = ~~ correct;
        logPractice("keyPres", "label", currentQnsId, event.currentTarget.value, correct, getSQLTimeString(new Date()), 'null');
    }
  });
}

function checkanswer(answerkey) {
    var ck = document.getElementById("check").value;
    var cur = new Date();
    var duration = 60*60*1000*(cur.getHours()-startTime.getHours())+60*1000*(cur.getMinutes()-startTime.getMinutes())+1000*(cur.getSeconds()-startTime.getSeconds())+(cur.getMilliseconds()-startTime.getMilliseconds());
    if (ck == answerkey) {
        logPractice("submission", 'null', currentQnsId, 'null', 1, getSQLTimeString(cur), duration);
        $('<div/>').html('CORRECT ANSWER! Want to practice more? ').dialog({
          resizable: false,
          height:180,
          modal: true,
          buttons: {
            "Next Question": function() {
              generateQuestion();
              $( this ).dialog( "close" );
            },
            Cancel: function() {
              $( this ).dialog( "close" );
            }
          }
        });
    } else {
        logPractice("submission", 'null', currentQnsId, 'null', 0, getSQLTimeString(cur), duration);
         $('<div/>').html('WRONG ANSWER! Want to ... ').dialog({
          resizable: false,
          modal: true,
          buttons: {
            "Try Again": function() {
              $( this ).dialog( "close" );
              //generate(currentQnss);
            },
            "Make it easier": function() {
              if (question_difficulty > 0) question_difficulty -= 1;
              currentQnss.id = currentQnsId;    // recover the id of current question
              generate(currentQnss);
              ( this ).dialog( "close" );
            },
            "Next Question": function() {
                generateQuestion();
                $( this ).dialog( "close" );
            }
          }
        });
    }
}

function highlight(e) {
    //var keywordDiv = document.getElementById('keywords');
    $(this).css('background-color', 'yellow');
    logPractice("mouseClick", "highlight", currentQnsId, $(this).text(), 'null', getSQLTimeString(new Date()), 'null');
    /*if (!keywordDiv) {
        alert("cannot get keywords div!");
        return;
    }
    keywordDiv.value += e.target.textContent + " " + "\n";*/
}

function allowDrop(ev) {
    ev.preventDefault();
}

// Using this polyfill for safety.
Element.prototype.hasClassName = function(name) {
  return new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)").test(this.className);
};

Element.prototype.addClassName = function(name) {
  if (!this.hasClassName(name)) {
    this.className = this.className ? [this.className, name].join(' ') : name;
  }
};

Element.prototype.removeClassName = function(name) {
  if (this.hasClassName(name)) {
    var c = this.className;
    this.className = c.replace(new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)", "g"), "");
  }
};

  var cols_ = document.querySelectorAll('#drop_container.box');
  var dragSrcEl_ = null;
  var dragTarEl_ = null;

  handleDragStart = function(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.id);

    dragSrcEl_ = e.target;

    // this/e.target is the source node.
    e.target.addClassName('moving');

    logPractice("mouseDrag", "drag", currentQnsId, e.target.textContent, 'null', getSQLTimeString(new Date()), 'null');
  };

  handleDragOver = function(e) {
    if (e.preventDefault) {
      e.preventDefault(); // Allows us to drop.
    }

    e.dataTransfer.dropEffect = 'move';

    return false;
  };

  handleDragEnter = function(e) {
    e.target.addClassName('over');
    dragTarEl_ = e.target;
  };

  handleDragLeave = function(e) {
    // this/e.target is previous target element.
    e.target.removeClassName('over');
  };

  handleDrop = function(e) {
    // this/e.target is current target element.
    if (e.stopPropagation) {
      e.stopPropagation(); // stops the browser from redirecting.
    }

    // Don't do anything if we're dropping on the same column we're dragging.
    if (dragSrcEl_ != e.target) {
      //dragSrcEl_.innerHTML = this.innerHTML;
      var data = e.dataTransfer.getData("text/html");
      target = e.target;
      while (!target.classList.contains("box")) {
        target = target.parentNode;
      }
      if (target.childNodes.length > 0) {
        target.removeChild(target.childNodes[0])  
      }
      cln = document.getElementById(data).cloneNode(true);
      cln.removeClassName('moving');

      logPractice("mouseDrag", "drop", currentQnsId, dragSrcEl_.textContent, 
        ~~(target.id[target.id.length-1] == data[data.length-1]), getSQLTimeString(new Date()), 'null');
      target.appendChild(cln);
      //e.target.innerHTML = e.dataTransfer.getData('text/html');
    }

    return false;
  };

  handleDragEnd = function(e) {
    // this/e.target is the source node.
      dragTarEl_ && dragTarEl_.removeClassName('over');
      e.target.removeClassName('moving');
  };

function drag(ev) {
    ev.dataTransfer.setData("text/html", ev.target.id);
    logPractice("mouseDrag", "drag", currentQnsId, ev.target.textContent, 'null', getSQLTimeString(new Date()), 'null');
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/html");
    logPractice("mouseDrag", "drop", currentQnsId, ev.target.textContent, ~~(ev.target.id[ev.target.id.length-1] == data[data.length-1]), getSQLTimeString(new Date()), 'null');
    ev.target.appendChild(document.getElementById(data));
}

function registerEvents() {
    $('#text').on('click', '.clickable', highlight);
}
registerEvents();