var Store = require('flux/utils').Store;
var dispatcher = require('../dispatcher/Dispatcher');

var _keys = [];

var KeyStore = new Store(dispatcher);

var addKey = function(keyName) {
  if (_keys.indexOf(keyName) === -1){
    _keys.push(keyName);
  }
  KeyStore.__emitChange();
};

var removeKey = function(keyName) {
  _keys.forEach(function(key, idx){
    if(key === keyName){
      _keys.splice(idx, 1);
    }
  });
  KeyStore.__emitChange();
};

var addNotes = function(notes){
  _keys = notes.slice();
  KeyStore.__emitChange();
};

var removeNotes = function(){
  _keys = [];
  KeyStore.__emitChange();
};

KeyStore.all = function(){
  return _keys.slice();
};

KeyStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case "ADD_KEY":
      addKey(payload.keyName);
      break;
    case "REMOVE_KEY":
      removeKey(payload.keyName);
      break;
    case "ADD_NOTES":
      addNotes(payload.notes);
      break;
    case "REMOVE_NOTES":
      removeNotes();
      break;
  }
};

module.exports = KeyStore;
