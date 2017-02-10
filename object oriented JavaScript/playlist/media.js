function Media(title, duration) {
  this.title = title;
  this.duration = duration;
  this.isPlaying = false;
}

Media.prototype.play = function() {
  this.isPlaying = true; // set isPlaying to true when .play is called]
};

Media.prototype.stop = function() {
  this.isPlaying = false; // set isPlaying to true when .stop is called]
};
