document.addEventListener("DOMContentLoaded", function() {
    var audioPlayer = document.getElementById("audioPlayer");
    var playButton = document.getElementById("playButton");
    var pauseButton = document.getElementById("pauseButton");
    var stopButton = document.getElementById("stopButton");
  
    playButton.addEventListener("click", function() {
      audioPlayer.play();
    });
  
    pauseButton.addEventListener("click", function() {
      audioPlayer.pause();
    });
  
    stopButton.addEventListener("click", function() {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
    });
  });