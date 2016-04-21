var dispatcher = require('../dispatcher/Dispatcher');

var KeyAction = {
  addKey: function(keyName){
    dispatcher.dispatch({
      actionType: "ADD_KEY",
      keyName: keyName
    });
  },

  removeKey: function(keyName){
    dispatcher.dispatch({
      actionType: "REMOVE_KEY",
      keyName: keyName
    });
  },

  addNotes: function(notes){
    dispatcher.dispatch({
      actionType: "ADD_NOTES",
      notes: notes
    });
  },

  removeNotes: function(){
    dispatcher.dispatch({
      actionType: "REMOVE_NOTES",
    });
  }
};

module.exports = KeyAction;
