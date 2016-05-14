 Meteor.publish('texts', function () {
	return Texts.find({}, {sort: {time: -1}, reactive:true});

});


 Meteor.methods({
  newText: function (txtMsg) {
    Texts.insert(txtMsg);
  },
  deleteText: function(delMsg){
  	Texts.remove(delMsg);
  	s.notify();
  },
  editText: function(editTxtMsg,currentPostId){
  	Texts.update( currentPostId , {$set : editTxtMsg });
  }
})
