let userPlaylist = [];

function init(){
  if (!!window.EventSource) {
      var source = new EventSource('/stream')

      source.addEventListener('message', function(e) {
        vid = JSON.parse(e.data)
        userPlaylist.push(vid)
        console.log(vid.title + " has been added to the queue.")
        console.log(userPlaylist);

      }, false)

      source.addEventListener('open', function(e) {
        console.log("Connected to stream.")
      }, false)

      source.addEventListener('error', function(e) {
        if (e.target.readyState == EventSource.CLOSED) {
          console.log("Disconnected from stream.")
        }
        else if (e.target.readyState == EventSource.CONNECTING) {
          console.log("Connecting to stream...")
        }
      }, false)
    } else {
      console.log("Your browser doesn't support SSE")
    }

  startPlaylist();
}

// default playlist - array of objects
let defaultPlaylist = [
  {
    src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
    type: 'video/mp4'
  },
  {
    src: 'https://vjs.zencdn.net/v/oceans.mp4',
    type: 'video/mp4'
  }
];

// start the playlist
function startPlaylist() {
  // if user list is empty
  if (userPlaylist.length == 0) {
    console.log('The user playlist is empty! Playing the default playlist!');
    // play default playlist
    playDefaultPlaylist();
  } else {
    console.log('Playing user playlist');
    // play the user playlist
    playUserPlaylist();
  }
}

// play the user playlist
function playUserPlaylist() {
  // grab the video element id
  let vid = document.getElementById("vid");
  vid.src = userPlaylist[0].source;

  vid.onended = function() {
      // delete the first video in the playlist/queue
      userPlaylist.shift();
      startPlaylist();
  };
}

index = 0
// play default playlist
function playDefaultPlaylist() {
  // grab the video element id
  let vid = document.getElementById("vid");
  vid.src = defaultPlaylist[index].src;

  vid.onended = () => {
    if (index < defaultPlaylist.length - 1) {
      index ++;
    } else {
      index = 0;
    }
    // start playlist function again (to check if there's anything in the user playlist)
    startPlaylist();
  };
}

init();
