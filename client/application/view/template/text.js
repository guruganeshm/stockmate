Template.texts.helpers({
 texts: function(){
	return Texts.find({},{sort: {time: -1}, reactive:true});
},
 editText : function(){
 	var currentPostId = Session.get('currentPostId');
 	return Texts.find(currentPostId);
 },
 authorTools : function(){
 	return this.author == Meteor.user().username;
 }
 
 
});

Template.texts.events({
	'submit #saveText': function (e, t) {
		e.preventDefault();
		var saveText = $(e.currentTarget),
			title = saveText.find('#inputTitle').val(),
			desc = saveText.find('#inputDesc').val(),
			authorName = Meteor.user().username;
			time = new Date()
		
		if ( isNotEmpty(title) && isNotEmpty(desc)) {

		var txtMsg =  { title: title, desc: desc, author: authorName, time: time };
		 Meteor.call('newText', txtMsg);
		 // notify.play();
         $('#saveText')[0].reset();
		}

		 else { 
				console.log("Saving Text Failed...");
		}
	},

	'click #delete' : function  () {
		if ( Meteor.user().username == this.author ){
		var delMsg = this._id
		Meteor.call('deleteText', delMsg);
		// notify.play();
	} /*else {
		alert('You cannot delete other users post');
	}*/
	},

	'click #edit' : function(){
		 var selectedPost = this._id;
	     Session.set('currentPostId', selectedPost);
	},

	'submit #editText' : function(e, t) {
		e.preventDefault();  
		var currentPostId = Session.get('currentPostId');
		var editText = $(e.currentTarget),
		title = editText.find('#inputTitle').val(),
		desc = editText.find('#inputDesc').val(),
		updatedAt = new Date()

		if ( isNotEmpty(title) && isNotEmpty(desc)) {

			var editTxtMsg = { title: title, desc: desc, LastUpdateAt: updatedAt};

			Meteor.call('editText', editTxtMsg, currentPostId);
			$('#editModal').modal('hide');
			
		}  else { 
				alert("OOPS!!","SavingTextFailed");
				$('#editModal').modal('hide');
		}

	}
});

