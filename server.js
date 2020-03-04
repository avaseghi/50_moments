var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    app = express(),
    currentVid,
    vidQueue = [],
    videos = ["AMANDAH", "AMY", "BERNICE", "BOB", "CARLOS", "CHARISE", "CHINGY", "CHRIS", "DANNY", "DEBRA", "DENISE", "ERNEST", "GAGE", "GUY", "HASSAN", "INDIE", "JAMES", "JANA", "JAY", "JIM", "JOANNE", "JOHN", "JOSE", "JRAE", "KAWEETA", "KEVIN", "LARA", "MELISSA", "MICHAEL", "MICHAEL", "MILO", "NARAYAN", "NICOLE", "OLEG", "PAULA", "PAULA", "RAMY", "RAPHAEL", "RENE", "RICHARD", "RICO", "SAM", "SCOTT", "SHAWN", "SKYLARANNE","TERESA", "TURTLE", "VAL", "VICTOR", "VICTORIA"],
    dIndex = 0;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/queue', function(req, res) {
  if(vidQueue.length > 0) {
    currentVid = vidQueue[0];
    vidQueue.shift();
  } else {
    currentVid = dIndex;
    if (dIndex < videos.length - 1) {
      dIndex += 1;
    } else {
      dIndex = 0;
    }
  }
  res.send(200, currentVid);
});

app.get('/add', function(req, res) {
  if (req.query.video_number) {
    var vidIndex = req.query.video_number;
    addVideoToQueue(vidIndex, res);
  }
});

function addVideoToQueue(video_data, res) {
  var vidInQueue = checkQueue(video_data);

  if (currentVid && currentVid == video_data) {

      var message = videos[video_data] + " is currently playing."

  } else if (vidInQueue) {

    if (vidInQueue > 1) {

      var message = videos[video_data] + " is number " + (vidInQueue + 1) + " in the queue."

    } else {

      var message = videos[video_data] + " is next in the queue."
    }

  } else {

    vidQueue.push(video_data);

    var message = "You have added " + videos[video_data] + " to the queue."
    console.log(message);
  }

  renderVerificationMessage(message, res);
}

function checkQueue(videoIndex) {
  for(i = 0; i < vidQueue.length; i ++) {
    if (vidQueue[i] == videoIndex) {
      return i + 1
    }
  }
  return false
}

function renderVerificationMessage(message, res) {
  res.render('template.ejs', {verification: message});
}

app.listen(8000, function () {
  console.log('Server running!')
})
