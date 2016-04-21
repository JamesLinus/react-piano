var React = require('react');
var TrackStore = require('../stores/TrackStore');

var TrackPlayer = React.createClass({

  render: function(){
    var track = this.props.track;
    return (
      <div>
        <button onClick={track.play()}>Play</button>
        <button onClick={TrackStore.delete(track)}>Delete</button>
      </div>
    );
  }
});

module.exports = TrackPlayer;
