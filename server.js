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

app.get('/video', function(req, res) {
  const path_1 = 'public/sintel.mp4'
  const path_2 = 'public/oceans.mp4'
  // const stat = fs.statSync(path)
  // const fileSize = stat.size
  // const range = req.headers.range
  // if (range) {
  //   const parts = range.replace(/bytes=/, "").split("-")
  //   const start = parseInt(parts[0], 10)
  //   const end = parts[1]
  //     ? parseInt(parts[1], 10)
  //     : fileSize-1
  //   const chunksize = (end - start) + 1
  //   const file = fs.createReadStream(path, {start, end})
  //   const head = {
  //     'Content-Range': `bytes ${start}-${end}/${fileSize}`,
  //     'Accept-Ranges': 'bytes',
  //     'Content-Length': chunksize,
  //     'Content-Type': 'video/mp4',
  //   }
  //   res.writeHead(206, head);
  //   file.pipe(res);
  // } else {
    const head = {
      // 'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(200, head)
    var stream = fs.createReadStream(path_1)
    stream.pipe(res)
    stream.on('close', function(){
      fs.createReadStream(path_2).pipe(res)
    });
  // }
});

app.get('/', function(req, res) {
  res.redirect('index.html');
});

app.get('/amandah', function (req, res) {
  var data = {
    "title": "Amandah",
    "index": 0
  }

  addVideoToQueue(data, res);
});

app.get('/amy', function (req, res) {
  var data = {
    "title": "Amy",
    "index": 1
  }

  addVideoToQueue(data, res);
});

app.get('/bernice', function (req, res) {
  var data = {
    "title": "Bernice",
    "index": 2
  }

  addVideoToQueue(data, res);
});

app.get('/bob', function (req, res) {
  var data = {
    "title": "Bob",
    "index": 3
  }

  addVideoToQueue(data, res);
});

app.get('/carlos', function (req, res) {
  var data = {
    "title": "Carlos",
    "index": 4
  }

  addVideoToQueue(data, res);
});

app.get('/charise', function (req, res) {
  var data = {
    "title": "Charise",
    "index": 5
  }

  addVideoToQueue(data, res);
});

app.get('/chingy', function (req, res) {
  var data = {
    "title": "Chingy",
    "index": 6
  }

  addVideoToQueue(data, res);
});

app.get('/chris', function (req, res) {
  var data = {
    "title": "Chris",
    "index": 7
  }

  addVideoToQueue(data, res);
});

app.get('/danny', function (req, res) {
  var data = {
    "title": "Danny",
    "index": 8
  }

  addVideoToQueue(data, res);
});

app.get('/debra', function (req, res) {
  var data = {
    "title": "Debra",
    "index": 9
  }

  addVideoToQueue(data, res);
});

app.get('/denise', function (req, res) {
  var data = {
    "title": "Denise",
    "index": 10
  }

  addVideoToQueue(data, res);
});

app.get('/ernest', function (req, res) {
  var data = {
    "title": "Ernest",
    "index": 11
  }

  addVideoToQueue(data, res);
});

app.get('/gage', function (req, res) {
  var data = {
    "title": "Gage",
    "index": 12
  }

  addVideoToQueue(data, res);
});

app.get('/guy', function (req, res) {
  var data = {
    "title": "Guy",
    "index": 13
  }

  addVideoToQueue(data, res);
});

app.get('/hassan', function (req, res) {
  var data = {
    "title": "Hassan",
    "index": 14
  }

  addVideoToQueue(data, res);
});

app.get('/indie', function (req, res) {
  var data = {
    "title": "Indie",
    "index": 15
  }

  addVideoToQueue(data, res);
});

app.get('/james', function (req, res) {
  var data = {
    "title": "James",
    "index": 16
  }

  addVideoToQueue(data, res);
});

app.get('/jana', function (req, res) {
  var data = {
    "title": "Jana",
    "index": 17
  }

  addVideoToQueue(data, res);
});

app.get('/jay', function (req, res) {
  var data = {
    "title": "Jay",
    "index": 18
  }

  addVideoToQueue(data, res);
});

app.get('/jim', function (req, res) {
  var data = {
    "title": "Jim",
    "index": 19
  }

  addVideoToQueue(data, res);
})

app.get('/joanne', function (req, res) {
  var data = {
    "title": "Joanne",
    "index": 20
  }

  addVideoToQueue(data, res);
});

app.get('/john', function (req, res) {
  var data = {
    "title": "John",
    "index": 21
  }

  addVideoToQueue(data, res);
});

app.get('/jose', function (req, res) {
  var data = {
    "title": "Jose",
    "index": 22
  }

  addVideoToQueue(data, res);
})

app.get('/jrae', function (req, res) {
  var data = {
    "title": "Jrae",
    "index": 23
  }

  addVideoToQueue(data, res);
});

app.get('/kaweeta', function (req, res) {
  var data = {
    "title": "Kaweeta",
    "index": 24
  }

  addVideoToQueue(data, res);
});

app.get('/kevin', function (req, res) {
  var data = {
    "title": "Kevin",
    "index": 25
  }

  addVideoToQueue(data, res);
});

app.get('/lara', function (req, res) {
  var data = {
    "title": "Lara",
    "index": 26
  }

  addVideoToQueue(data, res);
});

app.get('/melissa', function (req, res) {
  var data = {
    "title": "Melissa",
    "index": 27
  }

  addVideoToQueue(data, res);
});

app.get('/michael', function (req, res) {
  var data = {
    "title": "Michael",
    "index": 28
  }

  addVideoToQueue(data, res);
});

app.get('/michael_2', function (req, res) {
  var data = {
    "title": "Michael",
    "index": 29
  }

  addVideoToQueue(data, res);
});

app.get('/milo', function (req, res) {
  var data = {
    "title": "Milo",
    "index": 30
  }

  addVideoToQueue(data, res);
});

app.get('/narayan', function (req, res) {
  var data = {
    "title": "Narayan",
    "index": 31
  }

  addVideoToQueue(data, res);
})

app.get('/nicole', function (req, res) {
  var data = {
    "title": "Nicole",
    "index": 32
  }

  addVideoToQueue(data, res);
});

app.get('/oleg', function (req, res) {
  var data = {
    "title": "Oleg",
    "index": 33
  }

  addVideoToQueue(data, res);
});

app.get('/paula', function (req, res) {
  var data = {
    "title": "Paula",
    "index": 34
  }

  addVideoToQueue(data, res);
});

app.get('/paula_2', function (req, res) {
  var data = {
    "title": "Paula",
    "index": 35
  }

  addVideoToQueue(data, res);
});

app.get('/ramy', function (req, res) {
  var data = {
    "title": "Ramy",
    "index": 36
  }

  addVideoToQueue(data, res);
});

app.get('/raphael', function (req, res) {
  var data = {
    "title": "Raphael",
    "index": 37
  }

  addVideoToQueue(data, res);
});

app.get('/rene', function (req, res) {
  var data = {
    "title": "Rene",
    "index": 38
  }

  addVideoToQueue(data, res);
});

app.get('/richard', function (req, res) {
  var data = {
    "title": "Richard",
    "index": 39
  }

  addVideoToQueue(data, res);
});

app.get('/rico', function (req, res) {
  var data = {
    "title": "Rico",
    "index": 40
  }

  addVideoToQueue(data, res);
});

app.get('/sam', function (req, res) {
  var data = {
    "title": "Sam",
    "index": 41
  }

  addVideoToQueue(data, res);
});

app.get('/scott', function (req, res) {
  var data = {
    "title": "Scott",
    "index": 42
  }

  addVideoToQueue(data, res);
});

app.get('/shawn', function (req, res) {
  var data = {
    "title": "Shawn",
    "index": 43
  }

  addVideoToQueue(data, res);
});

app.get('/skylaranne', function (req, res) {
  var data = {
    "title": "Skylaranne",
    "index": 44
  }

  addVideoToQueue(data, res);
});

app.get('/teresa', function (req, res) {
  var data = {
    "title": "Teresa",
    "index": 45
  }

  addVideoToQueue(data, res);
});

app.get('/turtle', function (req, res) {
  var data = {
    "title": "Turtle",
    "index": 46
  }

  addVideoToQueue(data, res);
});

app.get('/val', function (req, res) {
  var data = {
    "title": "Val",
    "index": 47
  }

  addVideoToQueue(data, res);
});

app.get('/victor', function (req, res) {
  var data = {
    "title": "Victor",
    "index": 48
  }

  addVideoToQueue(data, res);
});

app.get('/victoria', function (req, res) {
  var data = {
    "title": "Victoria",
    "index": 49
  }

  addVideoToQueue(data, res);
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

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})
