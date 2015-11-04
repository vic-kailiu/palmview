 var player;
 var videos;
 var _current_video_index;

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
      json_videos = JSON.parse(xmlhttp.responseText);
      videos = new Array();

      videoList = phases[currentPhaseIndex].para1.split(',');
      videoList.forEach(function(entry){
        videos.push(json_videos[eval(entry)-1]);
      });
      
      eleNav = document.getElementById("selectVideo");

      for (i = 0; i<videos.length; i++) {
        eleLi = document.createElement("li");
        eleA = document.createElement("a");
        eleA.value = i;//videos[i].videoID;
        eleA.href = "#"
        eleA.onclick = onSelectVideo;
        eleA.innerHTML = videos[i].title;
        eleLi.appendChild(eleA);
        eleNav.appendChild(eleLi);
      }

      eleNav.childNodes[0].className = "active";

      // var index;
      // if (pageViewed < 2 && sessionStorage)
      //   index = sessionStorage.getItem('progress');

      // if (index > 0)
      //   _current_video_index = index;
      // else
        _current_video_index = 0;

      // player
      player && player.destroy;
      if (youtubeAPIReady) {
        var index;
        if (pageViewed < 2 && sessionStorage)
          index = eval(sessionStorage.getItem('progress'));

        if (index > 0)
          changeVideo(index);
        else
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
  var index;
  if (pageViewed < 2 && sessionStorage)
    index = eval(sessionStorage.getItem('progress'));

  if (index > 0)
    changeVideo(index);
  else
    createPlayer();

  initialStart = false;
  youtubeAPIReady = 1;
  $body.removeClass("loading");
}

function createPlayer() {
  sessionStorage && sessionStorage.setItem('progress', _current_video_index);

  player = new YT.Player('player', {
    videoId: videos[_current_video_index].videoID,
    playerVars: {rel:0},
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange(event) {
  var videoID = event.target.getVideoData().video_id;
  switch(event.data) {
    case YT.PlayerState.PLAYING:
      if (!initialStart) {
        initialStart = true;
        logAction('mouseClick', 'video_start', 
                  videoID, event.target.getCurrentTime(),
                  'null', -1, videoID);
      } else {
        logAction('mouseClick', 'video_start', 
                  videoID, event.target.getCurrentTime(),
                  'null', 0, 'null');
      }
      break;
    case YT.PlayerState.PAUSED:
      logAction('mouseClick', 'video_pause', 
                  videoID, event.target.getCurrentTime(),
                  'null', -1, videoID);
      break;
    case YT.PlayerState.ENDED:
      logAction('mouseClick', 'video_end', 
                  videoID, 'null',
                  'null', 1, videoID);

      updateOverallProgress(currentPhaseIndex+1);

      if (_current_video_index == videos.length - 1) {
        $('<div/>').html('All tutorials completed, well done! Want to go to next activity? ').dialog({
          resizable: false,
          width: 350,
          height:180,
          modal: true,
        draggable: false,
          closeOnEscape: false,
          open: function(event, ui) {
             $(".ui-dialog-titlebar-close").hide(); 
           },
          buttons: {
            "Next Activity": function() {
              logAction('mouseClick', 'video_next_phaes', 
                        videos[_current_video_index].videoID, currentPhaseIndex+1, 'null', 0, 'null');
              switchToPage(currentPhaseIndex+1);

              $(this).dialog('destroy').remove();
              //$( this ).dialog( "close" );
            },
            "Play Again": function() {
              logAction('mouseClick', 'video_replay', 
                        videos[_current_video_index].videoID, 'null', 'null', 0, 'null');
              player.playVideo();
              $(this).dialog('destroy').remove();
              //$( this ).dialog( "close" );
            },
            Cancel: function() {
              logAction('mouseClick', 'video_stop', 
                        videos[_current_video_index].videoID, 'null', 'null', 0, 'null');
              $(this).dialog('destroy').remove();
              //$( this ).dialog( "close" );
            }
          }
        });
      } else {
        $('<div/>').html('Tutorial completed, well done! Want to go to next one? ').dialog({
          resizable: false,
          width: 350,
          height:180,
          modal: true,
          closeOnEscape: false,
          open: function(event, ui) {
             $(".ui-dialog-titlebar-close").hide(); 
           },
          buttons: {
            "Next Video": function() {
              logAction('mouseClick', 'video_select', 
                        videos[_current_video_index].videoID, videos[_current_video_index+1].videoID, 'null', 0, 'null');
              eleSelect = document.getElementById("selectVideo");
              eleSelect.childNodes[_current_video_index].className = "";
              _current_video_index++;
              eleSelect.childNodes[_current_video_index].className = "active";
              fireVideoSelectChange();

              $(this).dialog('destroy').remove();
              //$( this ).dialog( "close" );
            },
            "Play Again": function() {
              logAction('mouseClick', 'video_replay', 
                        videos[_current_video_index].videoID, 'null', 'null', 0, 'null');
              player.playVideo();
              $(this).dialog('destroy').remove();
              //$( this ).dialog( "close" );
            },
            Cancel: function() {
              logAction('mouseClick', 'video_stop', 
                        videos[_current_video_index].videoID, 'null', 'null', 0, 'null');
              $(this).dialog('destroy').remove();
              //$( this ).dialog( "close" );
            }
          }
        });
      }
      break;
  }
}

function onSelectVideo(e) {
  if (e) {
    var target = e.srcElement || e.target;
    if (target && target.value != null)
      changeVideo(target.value);
  }
}

function changeVideo(index) {
  eleSelect = document.getElementById("selectVideo");
    eleSelect.childNodes[_current_video_index].className = "";

    var previousVideo;
    if (videos && videos[_current_video_index])
      previousVideo = videos[_current_video_index].videoID;

    _current_video_index = index;
    eleSelect.childNodes[_current_video_index].className = "active";
    videos && videos[_current_video_index] 
    && logAction('mouseClick', 'video_select', 
                  videos[_current_video_index].videoID, previousVideo, 'null', 0, 'null');
    fireVideoSelectChange();
}

function fireVideoSelectChange() {
  player && player.destroy();
  createPlayer();

  initialStart = false;
}