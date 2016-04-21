var KeyAction = require('../actions/KeyAction');

var Track = function(attr){
  this.name = attr['name'];
  this.roll = attr['roll'];
};

Track.prototype.startRecording = function(){
  this.roll = [];
  this.date = new Date();
};

Track.prototype.addNotes = function(notes){
  var currentDate = new Date();
  var timeDifference = currentDate.getTime() - this.date.getTime();
  var trackObject = {
    timeSlice: timeDifference,
    notes: notes
  };
  this.roll.push(trackObject);

};

Track.prototype.stopRecording = function() {
  this.addNotes([]);
};

Track.prototype.play = function() {
  if (this.interval){
    return;
  }
  var playbackStartTime = new Date().getTime();
  var nextNoteIndex = 0;
  this.interval = setInterval(function(){
    if (nextNoteIndex >= this.roll.length) {
      clearInterval(this.interval);
    } else {
      var playbackElapsed = new Date().getTime() - playbackStartTime;
      var nextNote = this.roll[nextNoteIndex];


      if (playbackElapsed > nextNote.timeSlice){
        KeyAction.removeNotes();
        nextNoteIndex += 1;
          KeyAction.addNotes(nextNote.notes);
      }
    }
  }.bind(this), 10);

};

module.exports = Track;
