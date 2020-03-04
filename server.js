var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    app = express(),
    currentVid,
    vidQueue = [],
    default_playlist = require('./default_playlist'),
    default_index = 0;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/queue', function(req, res) {
  if(vidQueue.length > 0) {
    currentVid = vidQueue[0];
    vidQueue.shift();
  } else {
    currentVid = default_playlist[default_index];
    if (default_index < default_playlist.length - 1) {
      default_index ++;
    } else {
      default_index = 0;
    }
  }
  res.send(currentVid);
});

app.get('/add', function(req, res) {
  if (req.query.video_number) {
    var data = {
      "title": default_playlist[req.query.video_number],
      "index": req.query.video_number
    }
    console.log(vidQueue);
    addVideoToQueue(data, res);
  }
});

function addVideoToQueue(video_data, res) {
  var vidInQueue = checkQueue(video_data);

  if (currentVid && currentVid.index == video_data.index) {

      var message = video_data.title + " is currently playing."

  } else if (vidInQueue) {

    if (vidInQueue > 1) {

      var message = video_data.title + " is number " + (vidInQueue + 1) + " in the queue."

    } else {

      var message = video_data.title + " is next in the queue."
    }

  } else {

    vidQueue.push(video_data);

    var message = "You have added " + video_data.title + " to the queue."
    console.log(message);
  }

  renderVerificationMessage(message, res);
}

function checkQueue(video) {
  console.log("vide index " + video.index);
  for(i = 0; i < vidQueue.length; i ++) {
    if (vidQueue[i].index == video.index) {
      return i + 1
    }
  }
  return false
}

function renderVerificationMessage(message, res) {
  res.render('template.ejs', {verification: message});
}

app.listen(80, function () {
  console.log('Server running!')
})
