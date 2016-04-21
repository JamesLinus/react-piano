var KeyAction = require('../actions/KeyAction');

var Mapping = {
  65: 'C1',
  87: 'C_sharp',
  83: 'D',
  69: 'D_sharp',
  68: 'E',
  70: 'F',
  84: 'F_sharp',
  71: 'G',
  89: 'G_sharp',
  72: 'A',
  85: 'A_sharp',
  74: 'B',
  75: 'C2'
};


$(document).keydown(function(e){
  KeyAction.addKey(Mapping[e.keyCode]);
});

$(document).keyup(function(e){
  KeyAction.removeKey(Mapping[e.keyCode]);
});
