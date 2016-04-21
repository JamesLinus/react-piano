var React = require('react');
var TrackStore = require('../stores/TrackStore');
var TrackPlayer = require('./TrackPlayer');

var Jukebox = React.createClass({
  getInitialState: function() {
    return { tracks: TrackStore.all() };
  },

  componentDidMount: function() {
    TrackStore.addListener(this.handleChange);
  },

  handleChange: function() {
    this.setState( { tracks: TrackStore.all() });
  },

  render: function(){
    var tracks = TrackStore.all();
    var result = tracks.map(function(track){
      return <TrackPlayer track={track} />;
    });
    return (
      <div>
        {result}
      </div>
    );
  }
});

module.exports = Jukebox;
