Template.mainLayout.events({
	'click #signOut' : function(e, t){

  	Meteor.logout(function() {
  		console.log('Come again!');
	});
  		// Session.set("collapse" , "collapse");
	}
});	

/*Template.mainLayout.helpers({
	userOnline: function (){
 	var help = Meteor.users.find({ "status.online": true });
 	confirm(help.username);
 }
});*/
