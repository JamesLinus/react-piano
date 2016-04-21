var React = require('react');
var ReactDOM = require('react-dom');
var Organ = require('./components/Organ');
var Recorder = require('./components/Recorder');
var Jukebox = require('./components/Jukebox');


var keyListener = require('./util/KeyListener');

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
  <div>
    <Organ/>
    <Recorder/>
    <Jukebox />
  </div>, document.getElementById('content'));
});
