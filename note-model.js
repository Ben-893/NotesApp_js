(function(exports) {
  function Note() {
    this.text = 'favorite language is Javascript'
  };
  exports.Note = Note;
})(this);
Note.prototype.getText = function() {
  return this.text
}