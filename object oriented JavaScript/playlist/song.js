function Song(title, artist, duration) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.isPlaying = false;
}

Song.prototype.play = function() {
  this.isPlaying = true; // set isPlaying to true when .play is called]
};

Song.prototype.stop = function() {
  this.isPlaying = false; // set isPlaying to true when .stop is called]
};

Song.prototype.toHTML = function() { // function to build HTML output to build playlist
  var htmlString = "<li";
  if(this.isPlaying) {
    htmlString += " class='current'";
  }
  htmlString += ">"
  htmlString += this.title;
  htmlString += " - "
  htmlString += this.artist;
  htmlString += "<span class='duration'>"
  htmlString += this.duration;
  htmlString += "</span></li>"

  return htmlString;
};
