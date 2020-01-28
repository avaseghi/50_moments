let userPlaylist;

function init(){
  // user playlist - array of objects
  let user_playlistURL = 'user_playlist.json';

  // request
  let request = new XMLHttpRequest();
  request.open('GET', user_playlistURL);
  request.responseType = 'json';
  request.send();

  // request loaded
  request.onload = function() {
    let userPlaylistData = request.response;
    gotUserData(userPlaylistData);
  }

  function gotUserData(data){
    userPlaylist = data;
    startPlaylist();
  }
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

// grab the video element id
let vid = document.getElementById("vid");

// start the playlist
function startPlaylist() {
  // if user list is empty
  if (userPlaylist.length === 0) {
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
  for (let i=0; i<userPlaylist.length; i++){
    // continuously play the first video in the playlist/ queue
    vid.src = userPlaylist[0].source;
    console.log(vid.src);
  }
  // when a video in the userPlaylist has ended
  vid.onended = function() {
      console.log("The video has ended");
      // delete the first video in the playlist/ queue
      userPlaylist.shift();
      console.log(userPlaylist.length);
      startPlaylist();
  };
}

let index = 0;
// play default playlist
function playDefaultPlaylist() {
  for (let i = 0; i < defaultPlaylist.length; i++){
    vid.src = defaultPlaylist[index].src;
    console.log(defaultPlaylist[0]);
    // console.log(vid.src);
  }
  // when a video in the default playlist ends
  vid.onended = () => {
    console.log('video ended');
    // add to the index, but make sure the index doesn't go over the playlist length (20)
    if (index <= 20){
      index++;
    } else {
      index = 0;
    }
    // start playlist function again (to check if there's anything in the user playlist)
    startPlaylist();
  };
}

init();
