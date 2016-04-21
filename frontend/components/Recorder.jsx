var React = require('react');
var Track = require('../util/Track');
var KeyStore = require('../stores/KeyStore');
var TrackStore = require('../stores/TrackStore');
var TrackAction = require('../actions/TrackAction');

var Recorder = React.createClass({
  getInitialState: function() {
    return { isRecording: false, track: new Track({name: ""}) };
  },

  componentDidMount: function() {
    KeyStore.addListener(this.recordNotes);
  },

  recordNotes: function(){
    if (this.state.isRecording){
      var notes = KeyStore.all();
      this.state.track.addNotes(notes);
    }
  },

  toggleRecording: function() {
    if (this.state.isRecording){
      this.setState({isRecording: false});
      this.state.track.stopRecording();
    } else {
      this.setState({isRecording: true});
      this.state.track.startRecording();
    }
  },

  play: function() {
    this.state.track.play();
  },

  save: function() {
    TrackAction.addTrack(this.state.track);
  },

  render: function() {
    var startStop = this.state.isRecording ? "Stop" : "Start";

    return (
      <div>
        <button onClick={this.toggleRecording}>{startStop}</button>
        <button onClick={this.play}>Play</button>
        <button onClick={this.save}>Save</button>
      </div>
    );
  }
});

module.exports = Recorder;
