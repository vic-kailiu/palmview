function loadPractice() {
    $(".wrapper").load("template_page.html", function() {
        $('#mn_' + phases[currentPhaseIndex].label).addClass('active');

        eleTitle = document.getElementById("title");
        title = document.createTextNode(phases[currentPhaseIndex].title);
        eleTitle.appendChild(title);

        eleDes = document.getElementById("description");
        des = document.createTextNode(phases[currentPhaseIndex].caption);
        eleDes.insertBefore(des, eleDes.childNodes[0]);

        switch (phases[currentPhaseIndex].para1) {
            case 'MODAL_MCQ':   $("#main_content").load("template_modal_mcq.html",  function() {  loadModalMCQ(); });   break;
            case 'MODAL':       $("#main_content").load("template_modal.html",      function() {  loadModal(); });      break;
            case 'MCQ':         $("#main_content").load("template_mcq.html",        function() {  loadMCQ(); });        break;
            case 'QUIZ':        $("#main_content").load("template_quiz.html",       function() {  loadQuiz(); });       break;
        }
    });
    $body.removeClass("loading");
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
        modalContent += "<div class='strech' style='width:" + (100 * eval(values[0][i].scala) ) + "%' align='center'>" + (level > 1 ? "<input class='numInput' id = 'para_l0_" + i + "'>" : values[0][i].text) + "</div>";
    }
    modalContent += "</div>"

    //Create arrow and line
    // modalContent += "<div class='horizontal_scala' id='drop_container'>";
    modalContent += "<div class='horizontal_scala'>";
    for (i = 0; i < values[0].length; i++) {
        modalContent += "<div class='strech' style='width:" + (100 * eval(values[0][i].scala) ) + "%'><div class='left_arrow'></div><div class='line'></div><div class='right_arrow'></div></div>";
    }
    modalContent += "</div>"

    //Question Modal
    switch(type) {
        case "MODAL_A1": modalContent += generateAS1(labels, values, droppable, level); break;
        case "MODAL_A2": modalContent += generateAS2(labels, values, droppable, level); break;
        case "MODAL_A3": modalContent += generateAS1(labels, values, droppable, level); break;
        case "MODAL_S1": modalContent += generateAS1(labels, values, droppable, level); break;
        case "MODAL_S2": modalContent += generateAS2(labels, values, droppable, level); break;
        case "MODAL_M1": modalContent += generateMD1(labels[0]); break;
        case "MODAL_D1": modalContent += generateMD1(labels[0]); break;
        case "MODAL_D2": modalContent += generateMD2(); break;
    }

    //Create arrow and line
    // modalContent += "<div class='horizontal_scala' id='drop_container'>";
    modalContent += "<div class='horizontal_scala'>";
    for (i = 0; i < values[1].length; i++) {
        modalContent += "<div class='strech' style='width:" + (100 * eval(values[1][i].scala) ) + "%'><div class='left_arrow'></div><div class='line'></div><div class='right_arrow'></div></div>";
    }
    modalContent += "</div>"

    modalContent += "<div class='numberPlacing'>";
    for (i = 0; i < values[1].length; i++) {
        modalContent += "<div class='strech' style='width:" + (100 * eval(values[1][i].scala) )+ "%' align='center'>" + (level > 1 ? "<input class='numInput' id = 'para_l1_" + i + "'>" : values[1][i].text) + "</div>";
    }
    modalContent += "</div>"

    return modalContent;
}

function generateAS1(labels, values, droppable, level) {
    // there are two boxes for this modal
    var content = "";

    //Create box
    content += "<div class='horizontal' id='drop_container'>";
    for (i = 0; i < labels.length; i++) {
        content += "<div class='box' id='box" + i.toString() + "' style='width:" + (100 * eval(labels[i].scala) ) + "%' " 
                    + (droppable? "ondrop='handleDrop(event)' ondragover='handleDragOver(event)' ondragenter='handleDragEnter(event)' ondragleave='handleDragLeave(event)' >"
                                    : ">" );

        if (level == 0) {
            content += "<div class='model" + i.toString() + "' id='model" + i.toString() + "' "
                    + (droppable? "draggable='true' ondragstart='handleDragStart(event)' ondragend='handleDragEnd(event)'>"
                                    : ">" );
            content += labels[i].text + "</div>"
        }

        content += "</div>";
    }
    content += "</div>"

    return content;
}

function generateAS2(labels, values, droppable, level) {
    // there are two boxes for this modal
    var content = "";

    //Create box
    var count = 0;
    content += "<div class='horizontal' id='drop_container'>";
    for (i = 0; i < labels.length; i++) {
        if (labels[i].text == 'dotted') {
            content += '<div class="box" style="border: 0px;border-right: 2px dashed black;margin-top: -5px;height: 65px;float: right;margin-bottom: -25px;margin-right: 1px;"></div>';
            continue;
        }

        if (labels[i].text == 'br') {
            content += "<br>";
            continue;
        }

        content += "<div class='box' id='box" + count + "' style='width:" + (100 * eval(labels[i].scala) ) + "%' "
                    + (droppable? "ondrop='handleDrop(event)' ondragover='handleDragOver(event)' ondragenter='handleDragEnter(event)' ondragleave='handleDragLeave(event)' >"
                                : ">");

        if (level == 0) {
            content += "<div class='model" + count + "' id='model" + count + "' "
                    + (droppable? "draggable='true' ondragstart='handleDragStart(event)' ondragend='handleDragEnd(event)'>"
                                : ">");
            content += labels[i].text + "</div>"
        }

        content += "</div>";
        count++;
    }
    content += "</div>"

    return content;
}

function generateMD1(label) {
    // there are label boxes for this modal
    var content = "";

    //Create box
    content += "<div class='horizontal' id='drop_container'>";
    for (i = 0; i < label.scala; i++) {
        content += "<div class='box filled' style='width:" + (100 / label.scala ) + "%'></div>";
    }
    content += "</div>"

    return content;
}

function generateMD2() {
    var content = "";

    //Create box
    content += "<div class='horizontal' id='drop_container'>";
        content += "<div class='box filled' style='width:20%'></div>";
        content += "<div class='box filled' style='width:20%'></div>";
        content += "<div class='box dotted' style='width:40%'></div>";
        content += "<div class='box filled' style='width:20%'></div>";
    content += "</div>"

    return content;
}

function highlight(e) {
    //var keywordDiv = document.getElementById('keywords');
    $(this).css('background-color', 'yellow');
    logAction("mouseClick", "highlight", qnss[qnssIndex].id, $(this).text(), 'null', 0, 'null');
    /*if (!keywordDiv) {
        alert("cannot get keywords div!");
        return;
    }
    keywordDiv.value += e.target.textContent + " " + "\n";*/
}

function parsePara(str) {
    var JSONArr = [];
    var Arr = str.split('&');
    for (i = 0; i < Arr.length; i++) {
        node = {};
        item = Arr[i].split("%");
        node['text'] = item[0];
        node['scala'] = item[1];

        JSONArr.push(node);
    }

    return JSONArr;
}