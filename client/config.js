trimInput = function(value) {
    return value.replace(/^\s*|\s*$/g, '');
};

isNotEmpty = function(value) {
    if (value && value !== ''){
        return true;
    }
    Alerts.add('Please fill in all required fields.','warning', {autoHide: 2000});
    return false;
};

isEmail = function(value) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(value)) {
        return true;
    }
    Alerts.add('Please enter a valid email address.','warning', {autoHide: 2000});
    return false;
};

isValidPassword = function(password) {
    if (password.length < 6) {
        Alerts.add('Your password should be 6 characters or longer.','warning', {autoHide: 2000});
        return false;
    }
    return true;
};

areValidPasswords = function(password, confirm) {
    if (!isValidPassword(password)) {
        return false;
    }
    if (password !== confirm) {
        Alerts.add('Your two passwords are not equivalent.','warning', {autoHide: 2000});
        return false;
    }
    return true;
};

var notify = new buzz.sound('/sound/ting.ogg');


// Template.registerHelper("fromNow", function(date) {

//     if(date){
//         return moment(date).fromNow();
//     }
    

// }); 