var React = require('react');
var TONES = require('../constants/Tones');
var KeyStore = require('../stores/KeyStore');
var Note = require('../util/note');

var OrganKey = React.createClass({
  componentDidMount: function() {
    this.note = new Note(TONES[this.props.keyName]);
    this.noteListener = KeyStore.addListener(this._notesChanged);
  },

  _notesChanged: function() {
    var _keys = KeyStore.all();
    if (_keys.indexOf(this.props.keyName) > -1) {
      this.note.start();
    } else {
      this.note.stop();
    }
  },

  componentWillUnmount: function() {
    this.noteListener.remove();
  },

  render: function(){
    return (
      <div className={this.props.className + " key"}></div>
    );
  }
});

module.exports = OrganKey;
