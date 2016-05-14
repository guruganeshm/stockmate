var subs = new SubsManager();

Router.configure({
layoutTemplate: 'mainLayout',
loadingTemplate: 'loading',
 waitOn: function() { return subs.subscribe('texts'); }
});

Router.map(function() {
	

	this.route('home', {
		path:'/',
		fastRender: true
	});
	
	this.route('test',{
		path:'/test',
		fastRender:true
	});

	this.route('login', {
		
		onBeforeAction: function() {
        var routeName = this.route.name;

        if (_.include(['/login'], routeName))
        return;

        if (! Meteor.userId()) {

            this.render('/login');
        }   
        else {
        		Router.go('/texts');
             }
        }
	});

	this.route('register', {

		onBeforeAction: function() {
        var routeName = this.route.name;

        if (_.include(['/register'], routeName))
        return;

        if (! Meteor.userId()) {

            this.render('/register');
        }   
        else {
        		Router.go('/texts');
             }
        }
	});

	this.route('Welcome', {

		onBeforeAction: function() {

			if (Meteor.userId()) {
				this.render('/welcome');
			} else {
				this.render('/home');
			} 
		}			
	});

	this.route('texts',{
		path:'/texts',

		fastRender:true,

		onBeforeAction: function() {

			if ( Meteor.userId()) {
				this.render('/texts');
				// subs.subscribe('texts');
			} else {
				this.render('/login');
			}
		},
		// onAfterAction : function(){
		// 	var notify = new buzz.sound('/sound/ting.ogg');
		// 	return Texts.find().observeChanges({
		// 	added: function () {
		// 		notify.play();
		// 	},
		// 	removed: function () {
		// 		notify.play();
		// 	}
		// });
		// }

	})

});

 // Router.route('/', function(){
	// 	this.render('home');	
	// });
 //  Router.route('/login', function(){
	// 	this.render('login');	
	// });