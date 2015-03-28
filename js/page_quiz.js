function loadQuizPage() {
    var win = window.open('http://dip.net63.net/dip/theme/DIPquiz.php', '_blank');
    win.focus();
    // $(".wrapper").load("template_page.html", function() {
    //     $('#mn_' + phases[currentPhaseIndex].label).addClass('active');

    //     eleTitle = document.getElementById("title");
    //     title = document.createTextNode(phases[currentPhaseIndex].title);
    //     eleTitle.appendChild(title);

    //     eleDes = document.getElementById("description");
    //     des = document.createTextNode(phases[currentPhaseIndex].caption);
    //     eleDes.insertBefore(des, eleDes.childNodes[0]);

    //     $("#main_content").load("template_quiz.html", function() {  loadQuiz(); });
    // });
    $body.removeClass("loading");
}