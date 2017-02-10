function Playlist() {
  this.songs = []; // create array to hold songs
  this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function(song) {
  this.songs.push(song); // add song to songs array
};

Playlist.prototype.play = function() {
  var currentSong = this.songs[this.nowPlayingIndex] // set playing song to index of this song
  currentSong.play();
};

Playlist.prototype.stop = function(){
  var currentSong = this.songs[this.nowPlayingIndex] // set playing song to index of this song
  currentSong.stop();
};

Playlist.prototype.next = function() {
  this.stop(); // stop current song
  this.nowPlayingIndex ++; // increment nowPlaying index
  if(this.nowPlayingIndex === this.songs.length) { // if the isplaying index is the same as the length of the index, set it back to 0 to start again
    this.nowPlayingIndex = 0;
  }
  this.play(); // play new song
};

Playlist.prototype.renderInElement = function(list) {
  list.innerHTML = "";
  for (var i = 0; i < this.songs.length; i++) {
    list.innerHTML += this.songs[i].toHTML();
  }
};
