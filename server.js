var express = require('express'),
    path = require('path'),
    app = express(),
    currentVid,
    vidQueue = [];

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/queue', function(req, res) {
  currentVid = vidQueue[0];
  if(vidQueue.length > 0) {
    vidQueue.shift();
  }
  res.send(currentVid);
});

app.get('/', function(req, res) {
  res.redirect('index.html');
});

app.get('/chingy', function (req, res) {
  var data = {
    "title": "Chingy",
    "source": "videos/chingy.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/john', function (req, res) {
  var data = {
    "title": "John",
    "source": "videos/john.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/bernice', function (req, res) {
  var data = {
    "title": "Bernice",
    "source": "videos/bernice.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/chris', function (req, res) {
  var data = {
    "title": "Chris",
    "source": "videos/chris.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/lara', function (req, res) {
  var data = {
    "title": "Lara",
    "source": "videos/lara.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/skylaranne', function (req, res) {
  var data = {
    "title": "Skylaranne",
    "source": "videos/skylaranne.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/victor', function (req, res) {
  var data = {
    "title": "Victor",
    "source": "videos/victor.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/nicole', function (req, res) {
  var data = {
    "title": "Nicole",
    "source": "videos/nicole.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/kevin', function (req, res) {
  var data = {
    "title": "Kevin",
    "source": "videos/kevin.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/sam', function (req, res) {
  var data = {
    "title": "Sam",
    "source": "videos/sam.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/guy', function (req, res) {
  var data = {
    "title": "Guy",
    "source": "videos/guy.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/amandah', function (req, res) {
  var data = {
    "title": "Amandah",
    "source": "videos/amandah.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/jrae', function (req, res) {
  var data = {
    "title": "Jrae",
    "source": "videos/jrae.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/oleg', function (req, res) {
  var data = {
    "title": "Oleg",
    "source": "videos/oleg.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/james', function (req, res) {
  var data = {
    "title": "James",
    "source": "videos/james.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/jana', function (req, res) {
  var data = {
    "title": "Jana",
    "source": "videos/jana.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/hassan', function (req, res) {
  var data = {
    "title": "Hassan",
    "source": "videos/hassan.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/ernest', function (req, res) {
  var data = {
    "title": "Ernest",
    "source": "videos/ernest.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/turtle', function (req, res) {
  var data = {
    "title": "Turtle",
    "source": "videos/turtle.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/joanne', function (req, res) {
  var data = {
    "title": "Joanne",
    "source": "videos/joanne.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/teresa', function (req, res) {
  var data = {
    "title": "Teresa",
    "source": "videos/teresa.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/val', function (req, res) {
  var data = {
    "title": "Val",
    "source": "videos/val.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/debra', function (req, res) {
  var data = {
    "title": "Debra",
    "source": "videos/debra.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/bob', function (req, res) {
  var data = {
    "title": "Bob",
    "source": "videos/bob.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/rene', function (req, res) {
  var data = {
    "title": "Rene",
    "source": "videos/rene.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/paula', function (req, res) {
  var data = {
    "title": "Paula",
    "source": "videos/paula.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/gage', function (req, res) {
  var data = {
    "title": "Gage",
    "source": "videos/gage.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/narayan', function (req, res) {
  var data = {
    "title": "Narayan",
    "source": "videos/narayan.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/carlos', function (req, res) {
  var data = {
    "title": "Carlos",
    "source": "videos/carlos.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/melissa', function (req, res) {
  var data = {
    "title": "Melissa",
    "source": "videos/melissa.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/michael', function (req, res) {
  var data = {
    "title": "Michael",
    "source": "videos/michael.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/amy', function (req, res) {
  var data = {
    "title": "Amy",
    "source": "videos/amy.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/jay', function (req, res) {
  var data = {
    "title": "Jay",
    "source": "videos/jay.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/richard', function (req, res) {
  var data = {
    "title": "Richard",
    "source": "videos/richard.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/jose', function (req, res) {
  var data = {
    "title": "Jose",
    "source": "videos/jose.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/jim', function (req, res) {
  var data = {
    "title": "Jim",
    "source": "videos/jim.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/danny', function (req, res) {
  var data = {
    "title": "Danny",
    "source": "videos/danny.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/victoria', function (req, res) {
  var data = {
    "title": "Victoria",
    "source": "videos/victoria.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/kaweeta', function (req, res) {
  var data = {
    "title": "Kaweeta",
    "source": "videos/kaweeta.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/michael_2', function (req, res) {
  var data = {
    "title": "Michael",
    "source": "videos/michael_2.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/raphael', function (req, res) {
  var data = {
    "title": "Raphael",
    "source": "videos/raphael.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/indie', function (req, res) {
  var data = {
    "title": "Indie",
    "source": "videos/indie.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/denise', function (req, res) {
  var data = {
    "title": "Denise",
    "source": "videos/denise.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/scott', function (req, res) {
  var data = {
    "title": "Scott",
    "source": "videos/scott.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/paula_2', function (req, res) {
  var data = {
    "title": "Paula",
    "source": "videos/paula_2.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/ramy', function (req, res) {
  var data = {
    "title": "Ramy",
    "source": "videos/ramy.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/shawn', function (req, res) {
  var data = {
    "title": "Shawn",
    "source": "videos/shawn.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/rico', function (req, res) {
  var data = {
    "title": "Rico",
    "source": "videos/rico.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/charise', function (req, res) {
  var data = {
    "title": "Charise",
    "source": "videos/charise.mp4"
  }

  addVideoToQueue(data, res);
})

app.get('/milo', function (req, res) {
  var data = {
    "title": "Milo",
    "source": "videos/milo.mp4"
  }

  addVideoToQueue(data, res);
})

function addVideoToQueue(video_data, res) {
  var vidInQueue = checkQueue(video_data);

  if (currentVid && currentVid.source == video_data.source) {

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
  for(i = 0; i < vidQueue.length; i ++) {
    if (vidQueue[i].source == video.source) {
      return i + 1
    }
  }
  return false
}

function renderVerificationMessage(message, res) {
  res.render('template.ejs', {verification: message});
}

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
