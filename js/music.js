const musicPlayer = document.querySelector('#music-player');

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '0',
      width: '0',
      videoId: 'W41eBhJD32c',
      playerVars: {
        'playsinline': 1,
        'autoplay':0,
        'controls':1
      },
      events: {
        'onReady': onPlayerReady,
      }
    });
  }

function onPlayerReady() {

}


function playHandler(){
    if (player.getPlayerState() === 1){
        player.pauseVideo();
        playpauseBtn.innerText = 'Paused';
    }
    else {
        player.playVideo();
        playpauseBtn.innerText = 'Playing';
    }
}

function volumeHandler(event){
    player.setVolume(event.target.value);
}

function paintMusicWidget(){
  musicPlayer.setAttribute("style", "opacity:1");
}

paintMusicWidget();

playpauseBtn = document.querySelector('#play-pause');
playpauseBtn.addEventListener("click", playHandler);

volume = document.querySelector('#volume');
volume.addEventListener("input", volumeHandler);
