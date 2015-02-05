function loadPractice() {
    $(".wrapper").load("template_page.html", function() {
        $('#mn_' + phases[currentPhaseIndex].label).addClass('active');

        eleTitle = document.getElementById("title");
        title = document.createTextNode(phases[currentPhaseIndex].title);
        eleTitle.appendChild(title);

        eleDes = document.getElementById("description");
        des = document.createTextNode(phases[currentPhaseIndex].caption);
        eleDes.insertBefore(des, eleDes.childNodes[0]);

        $("#main_content").load("template_modal.html", function() {
            loadPracticeQns();
        });
    });

    $body.removeClass("loading");
}

var qnss = null;
var _selectType = null;
var qnssIndex = 1000;
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
                // { id, type, text, ans, labels, values, opt1, opt2 }
                qnssIndex = 0;
                generateQns(qnss[qnssIndex]);
            }
        }
        xmlhttp.open("GET", "json_question.php?type=MODAL" + selectType, true);
        xmlhttp.send();
    } else {
        qnssIndex += 1;
        if (qnssIndex < qnss.length) {
            generateQns(qnss[qnssIndex]);
        } else {
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

    var answerDiv = document.getElementById('answer');
    if (!answerDiv) {
        alert("cannot get answer div!");
        return;
    }
    answerDiv.innerHTML = ""; //reset content

    // text section
    var regex = /([\.,-\/#!?\^&\*;:{}=\-_`~()])/g; //regular expression for punctuations
    var punctuations = "\.,-\/#!?\^&\*;:{}=\-_`~()";
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
            if (j > 0) content += "&nbsp;";
            content += "<button class='clickable'>" + words[j] + "</button>";
        }
    }
    content += "</p>";
    textDiv.innerHTML += content;

    $('#text').on('click', '.clickable', highlight);

    // parsing the labels and values
    var labelArr = parsePara(qns.labels);
    var valueJSONArr = [];
    var valueStringArr = qns.values.split('|');
    valueJSONArr.push( parsePara(valueStringArr[0]) );
    valueJSONArr.push( parsePara(valueStringArr[1]) );

    questionDiv.innerHTML = populateModal(qns.type, labelArr, valueJSONArr, true, question_difficulty);

    //drag source
    content = "";
    for (i = 0; i < labelArr.length; i++) {
        content += "<div class='box_model'><div class='model" + i.toString() + "' id='model" + i.toString() + "' draggable='true' ondragstart='handleDragStart(event)' ondragend='handleDragEnd(event)'>";
        content += labelArr[i].text + "</div></div>";
    }
    dragDiv.innerHTML = content;

    //answer input
    content = 'Enter your answer :<input type="text" id="check" class="numInput" name="check" style="margin: 0 5px; height: 34px;">';
    content += "<button type='button' class='btn btn-success' onclick='checkanswer()'>Check Answer</button>";
    answerDiv.innerHTML = content;
}

function populateModal(type, labels, values, droppable, level) {
    // unifying the modal,
    // type: A1, A2, A3, S1, S2, M1, D1, D2
    // labels: %'labelText'&'scala number' %'labelText'&'scala number' %'labelText'&'scala number' ...
    // values: top line -> botton line
    // droppable, set the modal to be droppable or not
    // level: 0 show everything, 1 don't show values, 2, don't show labels

    var modalContent = "";

    //line and boxes
    //modalContent += "<div class='numberPlacing' id='drop_container'>";
    modalContent += "<div class='numberPlacing'>";
    for (i = 0; i < values[0].length; i++) {
        modalContent += "<div class='strech' style='width:" + (100 * eval(values[0][i].scala) ) + "%' align='center'>" + (level > 1 ? "<input class='numInput' id = 'para" + i + "'>" : values[0][i].text) + "</div>";
    }
    modalContent += "</div>"

    //Create arrow and line
    // modalContent += "<div class='horizontal_scala' id='drop_container'>";
    modalContent += "<div class='horizontal_scala'>";
    for (i = 0; i < values[0].length; i++) {
        modalContent += "<div class='strech' style='width:" + (100 * eval(values[0][i].scala) ) + "%'><div class='left_arrow'></div><div class='line'></div><div class='right_arrow'></div></div>";
    }
    modalContent += "</div>"

    modalContent += generateA1(labels, values, droppable, level);

    //Create arrow and line
    // modalContent += "<div class='horizontal_scala' id='drop_container'>";
    modalContent += "<div class='horizontal_scala'>";
    for (i = 0; i < values[1].length; i++) {
        modalContent += "<div class='strech' style='width:" + (100 * eval(values[1][i].scala) ) + "%'><div class='left_arrow'></div><div class='line'></div><div class='right_arrow'></div></div>";
    }
    modalContent += "</div>"

    modalContent += "<div class='numberPlacing'>";
    for (i = 0; i < values[1].length; i++) {
        modalContent += "<div class='strech' style='width:" + (100 * eval(values[1][i].scala) )+ "%' align='center'>" + (level > 1 ? "<input class='numInput' id = 'para" + i + "'>" : values[1][i].text) + "</div>";
    }
    modalContent += "</div>"

    return modalContent;
}

function generateA1(labels, values, droppable, level) {
    // there are two boxes for this modal
    var content = "";

    //Create box
    content += "<div class='horizontal' id='drop_container'>";
    for (i = 0; i < labels.length; i++) {
        content += "<div class='box' id='box" + i.toString() + "' style='width:" + (100 * eval(labels[i].scala) ) + "%' ondrop='handleDrop(event)' ondragover='handleDragOver(event)' ondragenter='handleDragEnter(event)' ondragleave='handleDragLeave(event)' >";

        if (level == 0) {
            content += "<div class='model" + i.toString() + "' id='model" + i.toString() + "' draggable='true' ondragstart='handleDragStart(event)' ondragend='handleDragEnd(event)'>";
            content += labels[i].text + "</div>"
        }

        content += "</div>";
    }
    content += "</div>"

    return content;
}

function highlight(e) {
    //var keywordDiv = document.getElementById('keywords');
    $(this).css('background-color', 'yellow');
    //logPractice("mouseClick", "highlight", currentQnsId, $(this).text(), 'null', getSQLTimeString(new Date()), 'null');
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

//var cols_ = document.querySelectorAll('#drop_container.box');
var dragSrcEl_ = null;
var dragTarEl_ = null;

function handleDragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.id);

    dragSrcEl_ = e.target;

    // this/e.target is the source node.
    e.target.addClassName('moving');

    //logPractice("mouseDrag", "drag", currentQnsId, e.target.textContent, 'null', getSQLTimeString(new Date()), 'null');
};

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault(); // Allows us to drop.
    }

    e.dataTransfer.dropEffect = 'move';

    return false;
};

function handleDragEnter(e) {
    e.target.addClassName('over');
    dragTarEl_ = e.target;
};

function handleDragLeave(e) {
    // this/e.target is previous target element.
    e.target.removeClassName('over');
};

function handleDrop(e) {
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

        // logPractice("mouseDrag", "drop", currentQnsId, dragSrcEl_.textContent, 
        //   ~~(target.id[target.id.length-1] == data[data.length-1]), getSQLTimeString(new Date()), 'null');
        target.appendChild(cln);
    }

    return false;
};

function handleDragEnd(e) {
    // this/e.target is the source node.
    dragTarEl_ && dragTarEl_.removeClassName('over');
    e.target.removeClassName('moving');
};

function drag(ev) {
    ev.dataTransfer.setData("text/html", ev.target.id);
    //logPractice("mouseDrag", "drag", currentQnsId, ev.target.textContent, 'null', getSQLTimeString(new Date()), 'null');
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/html");
    //logPractice("mouseDrag", "drop", currentQnsId, ev.target.textContent, ~~(ev.target.id[ev.target.id.length-1] == data[data.length-1]), getSQLTimeString(new Date()), 'null');
    ev.target.appendChild(document.getElementById(data));
}

function parsePara(str) {
    var JSONArr = [];
    var Arr = str.split("&");
    for (i = 0; i < Arr.length; i++) {
        node = {};
        item = Arr[i].split("%");
        node['text'] = item[0];
        node['scala'] = item[1];

        JSONArr.push(node);
    }

    return JSONArr;
}