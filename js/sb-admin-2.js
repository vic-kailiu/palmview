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

function generateQuestion() {
    var selecttype = document.getElementById('selecttype').value;
    //Text of the question
    //Text of the question
    var textDiv = document.getElementById('text');
    if (!textDiv) {
        alert("cannot get text div!");
        return;
    }
    //var CountDiv = document.getElementById('rCount').innerHTML;

    if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var foo = xmlhttp.responseText;
            var foooo = 1;
        }
    }
    xmlhttp.open("GET","getQues.php?type=MODAL-A1",true);
    xmlhttp.send();
}

function checkanswer(answerkey) {
    var ck = document.getElementById("check").value;
    if (ck == answerkey) {
        alert("CORRECT ANSWER!");
        document.getElementById("QnsID").value = "QuestionID " + resultArray[8] + " : Correct" + "\n";
        document.getElementById("submitt").click();
    } else {
        alert("TOO BAD WRONG ANSWER! CORRECT ANSWER IS " + answerkey);
        document.getElementById("QnsID").value = "QuestionID " + resultArray[8] + " : Wrong" + "\n";
        document.getElementById("submitt").click();
    }
}

function highlight(e) {
    var keywordDiv = document.getElementById('keywords');
    $(this).css('background-color', 'yellow');
    if (!keywordDiv) {
        alert("cannot get keywords div!");
        return;
    }
    keywordDiv.value += e.target.textContent + " " + "\n";
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
    $('#text').on('click', '.clickable', highlight);
}
registerEvents();