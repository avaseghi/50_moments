
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
]

function getNextVid() {
  $.ajax({
    url: "/queue",
    success: function(response) {
      console.log(response);
      if (response) {
        playUserSelectedVid(response);
      } else {
        playDefaultVid();
      }
    }
  });
}

// play the user playlist
function playUserSelectedVid(video) {
  // grab the video element id
  let vid = document.getElementById("vid");
  vid.src = video.source;

  vid.onended = function() {
    getNextVid();
  };
}

index = 0
// play default playlist
function playDefaultVid() {
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
    getNextVid();
  };
}

getNextVid();
