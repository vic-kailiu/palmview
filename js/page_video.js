 var player;

 function loadVideo() {
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      videos = JSON.parse(xmlhttp.responseText)
      
      eleSelect = document.getElementById("selectVideo");

      for (i = 0; i<videos.length; i++) {
        eleOption = document.createElement("option");
        eleOption.value = videos[i].videoID;
        videoTitle = document.createTextNode(videos[i].title);
        eleOption.appendChild(videoTitle);
        eleSelect.appendChild(eleOption);
      }

      // player
      player && player.destroy;
      if (youtubeAPIReady) {
        createPlayer();
        initialStart = false;
        $body.removeClass("loading");
      } else {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        tag.id = "iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }
    }
  }

  $(".wrapper").load("template_page.html", function() {
    $('#mn_'+phases[currentPhaseIndex].label).addClass('active');

    eleTitle = document.getElementById("title");
    title = document.createTextNode(phases[currentPhaseIndex].title);
    eleTitle.appendChild(title);

    eleDes = document.getElementById("description");
    des = document.createTextNode(phases[currentPhaseIndex].caption);
    eleDes.insertBefore(des, eleDes.childNodes[0]);

    $("#main_content").load("template_video.html", function() {
      xmlhttp.open("GET","json_video.php",true);
      xmlhttp.send();
    });
  });
 }

var initialStart = false;
var youtubeAPIReady = 0;

function onYouTubeIframeAPIReady() {
  createPlayer();

  initialStart = false;
  youtubeAPIReady = 1;
  $body.removeClass("loading");
}

function createPlayer() {
  player = new YT.Player('player', {
    videoId: document.getElementById("selectVideo").value,
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange(event) {
  switch(event.data) {
    case YT.PlayerState.PLAYING:
      if (!initialStart) {
        initialStart = true;
        logAction('mouseClick', 'video_start', 
                  event.target.B.videoData.video_id, event.target.getCurrentTime(),
                  'null', -1, event.target.B.videoData.video_id);
      } else {
        logAction('mouseClick', 'video_start', 
                  event.target.B.videoData.video_id, event.target.getCurrentTime(),
                  'null', 0, 'null');
      }
      break;
    case YT.PlayerState.PAUSED:
      logAction('mouseClick', 'video_pause', 
                  event.target.B.videoData.video_id, event.target.getCurrentTime(),
                  'null', -1, event.target.B.videoData.video_id);
      break;
    case YT.PlayerState.ENDED:
      logAction('mouseClick', 'video_end', 
                  event.target.B.videoData.video_id, 'null',
                  'null', 1, event.target.B.videoData.video_id);

      $('<div/>').html('Tutorial Complete, well done! Want to go to next one? ').dialog({
        resizable: false,
        width: 350,
        height:180,
        modal: true,
        buttons: {
          "Play Again": function() {
            player.playVideo();
            $( this ).dialog( "close" );
          },
          "Next Video": function() {
            eleSelect = document.getElementById("selectVideo");
            selectIndex = eleSelect.options.selectedIndex + 1;
            if (selectIndex < eleSelect.options.length) {
              eleSelect.value = eleSelect.options[selectIndex].value;
              onVideoSelectChange();
            }
            $( this ).dialog( "close" );
          },
          Cancel: function() {
            $( this ).dialog( "close" );
          }
        }
      });

      break;
  }
}

function onVideoSelectChange() {
  player.destroy();
  createPlayer();

  initialStart = false;
}