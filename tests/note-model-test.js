(function(exports) {


  function testNoteIsObject() {
    var note = new Note();
    if(note.getText() !== 'favorite language is Javascript') {
      throw new Error('is not correct')}
  };
  testNoteIsObject();
})(this);