function loadPractice() {
	$(".wrapper").load("template_page.html", function() {
        $('#mn_'+phases[currentPhaseIndex].label).addClass('active');

        eleTitle = document.getElementById("title");
        title = document.createTextNode(phases[currentPhaseIndex].title);
        eleTitle.appendChild(title);

        eleDes = document.getElementById("description");
        des = document.createTextNode(phases[currentPhaseIndex].caption);
        eleDes.insertBefore(des, eleDes.childNodes[0]);

        $("#main_content").load("template_modal.html", function() {
        
        });
    });

    $body.removeClass("loading");
}

var qnss = null;
var _selectType = null;
var qnssIndex = -1;
var startTime = -1;
var session_difficulty = 2;
// 2 -- no hint
// 1 -- number marked
// 0 -- labeled
var question_difficulty = -1;
// load question from DB
// for each time the user hit the generate button, if the selecttype doesn't change and there is already a question set, then
// the system will just randome select question from the previously retrieved questions. otherwise, it will query to the server
// for more questions.
function loadPracticeQns() {
    //by now, every time the question is set back to the original difficulty
    question_difficulty = session_difficulty;
    var selectType = document.getElementById('selectType').value;

    if (qnss == null || _selectType != selectType) {
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
                // { id, type, text, ans, lables, values, ops1, ops2 }
                qnssIndex = 0;
                generateQns(qnss[qnssIndex]);
            }
        }
        xmlhttp.open("GET","getQues.php?type=MODAL"+selectType,true);
        xmlhttp.send();
    }
    else {
        qnssIndex += 1;
        if (qnssIndex < qnss.length ) {
            generateQns(qnss[qnssIndex]);
        }
        else {
            qnss = null;
            loadPracticeQns();
        }
    }

    _selectType = selectType;
}

function generateQns(qns) {
    // clear content
    var textDiv = document.getElementById('text');
    if (!textDiv) {
        alert("cannot get text div!");
        return;
    }
    textDiv.innerHTML = "";

    var questionDiv = document.getElementById('modal');
    if (!questionDiv) {
        alert("cannot get modal div!");
        return;
    }
    questionDiv.innerHTML = ""; //reset content

    var dragDiv = document.getElementById('drag_source');
    if (!dragDiv) {
        alert("cannot get drag div!");
        return;
    }
    dragDiv.innerHTML = ""; //reset content

    // text section
    var regex = /([\.,-\/#!?$%\^&\*;:{}=\-_`~()])/g; //regular expression for punctuations
    var punctuations = "\.,-\/#!?$%\^&\*;:{}=\-_`~()";
    var s = qns.text.replace(/(^\s*)|(\s*$)/gi, "");
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
    textDiv.innerHTML += content;

    
}