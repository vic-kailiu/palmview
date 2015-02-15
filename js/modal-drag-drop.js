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
    e.dataTransfer.setData('text/plain', e.target.id);

    dragSrcEl_ = e.target;

    // this/e.target is the source node.
    e.target.addClassName('moving');

    logAction("mouseDrag", "drag", qnss[qnssIndex].id, e.target.textContent, 'null', 0, 'null');
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
        var data = e.dataTransfer.getData("text/plain");
        target = e.target;
        while (!target.classList.contains("box")) {
            target = target.parentNode;
        }
        if (target.childNodes.length > 0) {
            target.removeChild(target.childNodes[0])
        }
        cln = document.getElementById(data).cloneNode(true);
        cln.removeClassName('moving');

        logAction("mouseDrag", "drop", qnss[qnssIndex].id, dragSrcEl_.textContent, 
          ~~(target.id[target.id.length-1] == data[data.length-1]), 0, 'null');
        target.appendChild(cln);
    }

    return false;
};

function handleDragEnd(e) {
    // this/e.target is the source node.
    dragTarEl_ && dragTarEl_.removeClassName('over');
    e.target.removeClassName('moving');
};

// function drag(ev) {
//     ev.dataTransfer.setData("text/plain", ev.target.id);
//     logAction("mouseDrag", "drag", currentQnsId, ev.target.textContent, 'null', getSQLTimeString(new Date()), 'null');
// }

// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text/plain");
//     logAction("mouseDrag", "drop", currentQnsId, ev.target.textContent, ~~(ev.target.id[ev.target.id.length-1] == data[data.length-1]), getSQLTimeString(new Date()), 'null');
//     ev.target.appendChild(document.getElementById(data));
// }