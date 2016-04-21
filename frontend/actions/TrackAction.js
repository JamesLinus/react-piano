var dispatcher = require('../dispatcher/Dispatcher');

var TrackAction = {
  addTrack: function(track) {
    dispatcher.dispatch({
      actionType: "ADD_TRACK",
      track: track
    });
  }
};

module.exports = TrackAction;
