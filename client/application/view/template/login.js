if(Meteor.isClient){
	// Session.setDefault('collapse', null);

  	Template.register.events({
  'submit #registerForm': function(e, t) {
    e.preventDefault();

    var signUpForm = $(e.currentTarget),
        username = signUpForm.find('#username').val(),
        email = trimInput(signUpForm.find('#email').val().toLowerCase()),
        password = signUpForm.find('#password').val(),
        passwordConfirm = signUpForm.find('#password_confirm').val();

    if (isNotEmpty(username) && isNotEmpty(email) && isNotEmpty(password) && isEmail(email) && areValidPasswords(password, passwordConfirm)) {

      Accounts.createUser({username:username, email: email, password: password}, function(err) {
        if (err) {
          if (err.message === 'Username already exists.') {
            Alerts.add('We are sorry but this username is already used.', 'warning', {autoHide: 2000});
          } else {
            Alerts.add('Please try different Username', 'warning', {autoHide: 2000});
          }
        } else {
          console.log('Congrats new User, you\'re in!'); 
          Router.go('/texts');
        }
      });

    }
  },
});

Template.login.events({
  'submit #loginForm': function(e, t) {
    e.preventDefault();

    var signInForm = $(e.currentTarget),
          username = trimInput(signInForm.find('#username').val().toLowerCase()),
          password = signInForm.find('#password').val();

    if (isNotEmpty(username) && isNotEmpty(password) && isValidPassword(password)) {

      Meteor.loginWithPassword(username, password, function(err) {
        if (err) {
          Alerts.add('Invalid Username or Password! please Try again...', 'warning', {autoHide: 2000});
        } else {
          console.log('Welcome back User!');
          Router.go('/texts');
        }
      });

    }
  },
});

}