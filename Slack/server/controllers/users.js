var mongoose = require('mongoose');
var User = mongoose.model('User')
var bcrypt = require('bcrypt')

module.exports = {
    register: function(req, res){
        console.log("INSIDE THE REGISTER CONTROLLER")
        if(req.body.password != req.body.confirmPassword){
            console.log("register controller: passwords did not match")
            var passwordMatchError = {'errors': "Password confirmation must match password", 'backToLogin': true}
            return res.json(passwordMatchError)
        }

        User.findOne({email: req.body.email}, function(error, user){
            if(user != null){
                console.log("This email is already registered")
                var alreadyRegistered = {'errors': "This email is already registered", 'backToLogin': true}
                return res.json(alreadyRegistered)
            }
        })

        var newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            birthday: req.body.birthday,
            password: req.body.password
        })

        newUser.save(function(error){
            if(error){
                console.log("--------ERROR IN SAVING USER----------")
            } else {
                console.log("----------SUCCESSFULLY SAVED------------")
                req.session.currentUser = newUser
                return res.json({'id': newUser._id, 'firstName': newUser.firstName, 'email': newUser.email})
            }
        })
    },
    login: function(req, res){
        console.log("INSIDE THE LOGIN CONTROLLER")
        User.findOne({email: req.body.emailForLogin}, function(error, loggingUser){
            console.log(error)
            console.log(loggingUser)
            if(error || loggingUser == null){
                console.log("ERROR IN LOGGING IN USER")
                var findingUserError = {'errors': "This email is not registered", 'backToLogin': true}
                return res.json(findingUserError)
            } else {
                console.log("COMPARING PASSWORDS")
                if (bcrypt.compareSync(req.body.passwordForLogin, loggingUser.password)) {
                    console.log('LOG IN SUCCESS')
                    req.session.currentUser = loggingUser
                    res.json({'id': loggingUser._id, 'firstName': loggingUser.firstName, 'email': loggingUser.email})  
                  } else {
                    console.log("password did not match email");
                    var passwordMatchError = {'errors': "The password for this email was incorrect", 'backToLogin': true}
                    return res.json(passwordMatchError);
                }
            }
        })
    },
    logout: function(req, res){
        req.session.destroy();
        console.log("DESTROYED SESSION")
        return res.json({'loggedOut': true})
    }
}