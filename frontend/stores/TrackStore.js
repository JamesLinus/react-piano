var Store = require('flux/utils').Store;
var dispatcher = require('../dispatcher/Dispatcher');
var TrackAction = require('../actions/TrackAction');

var _tracks = [];

var TrackStore = new Store(dispatcher);

var addTrack = function(track) {
  _tracks.push(track);
  TrackStore.__emitChange();
};

TrackStore.all = function() {
  return _tracks.slice();
};

TrackStore.delete = function(track){
  for (var i = 0; i < _tracks.length; i++) {
    if (_tracks[i] === track) {
      _tracks.splice(i, 1);
    }
  }
};

TrackStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case "ADD_TRACK":
      addTrack(payload.track);
      break;
  }
};

module.exports = TrackStore;
