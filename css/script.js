document.addEventListener("DOMContentLoaded", function() {
  var audioPlayer = document.getElementById("audioPlayer");
  var playButton = document.getElementById("playButton");
  var pauseButton = document.getElementById("pauseButton");
  var stopButton = document.getElementById("stopButton");

  function playPauseWithSpacebar(event) {
    if (event.code === "Space") {
      if (audioPlayer.paused) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
    }
  }

  function stopWithSKey(event) {
    if (event.key === "s") {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
    }
  }

  function increaseVolume(event) {
    if (event.key === "ArrowUp") {
      var currentVolume = audioPlayer.volume;
      var newVolume = currentVolume + 0.1;
      if (newVolume > 1) {
        newVolume = 1;
      }
      audioPlayer.volume = newVolume;
    }
  }

  function decreaseVolume(event) {
    if (event.key === "ArrowDown") {
      var currentVolume = audioPlayer.volume;
      var newVolume = currentVolume - 0.1;
      if (newVolume < 0) {
        newVolume = 0;
      }
      audioPlayer.volume = newVolume;
    }
  }

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

  document.addEventListener("keydown", playPauseWithSpacebar);
  document.addEventListener("keydown", stopWithSKey);
  document.addEventListener("keydown", increaseVolume);
  document.addEventListener("keydown", decreaseVolume);
});
document.addEventListener("DOMContentLoaded", function() {
  var audioPlayer = document.getElementById("audioPlayer");
  var playButton = document.getElementById("playButton");
  var pauseButton = document.getElementById("pauseButton");
  var stopButton = document.getElementById("stopButton");

  function increaseVolume() {
    var currentVolume = audioPlayer.volume;
    var newVolume = currentVolume + 0.1;
    if (newVolume > 1) {
      newVolume = 1;
    }
    audioPlayer.volume = newVolume;
    updateVolumeIndicator();
  }

  function decreaseVolume() {
    var currentVolume = audioPlayer.volume;
    var newVolume = currentVolume - 0.1;
    if (newVolume < 0) {
      newVolume = 0;
    }
    audioPlayer.volume = newVolume;
    updateVolumeIndicator();
  }

  document.getElementById("increaseVolumeButton").addEventListener("click", increaseVolume);
  document.getElementById("decreaseVolumeButton").addEventListener("click", decreaseVolume);

  function updateVolumeIndicator() {
    var volumeIndicator = document.getElementById("volumeIndicator");
    var volumePercent = Math.floor(audioPlayer.volume * 100);
    volumeIndicator.textContent = volumePercent + "%";
  }
  updateVolumeIndicator();
});