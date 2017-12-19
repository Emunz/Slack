var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const session = require('express-session');
const bcrypt = require('bcrypt');

var Product = mongoose.model('Product');
var User = mongoose.model('User');

mongoose.Promise = global.Promise;

module.exports = {

  // show: function(req, res,next) {
  //   User.find({}, function(err, users) {
  //     console.log(req.session.currUser)
  //     res.render('users', {users: users, logged_user:req.session.currUser});
  //   })
  // },

  

  register: function(req, res, err,next) {
    console.log("INSIDE THE REGISTER CONTROLLER")

    if(req.body.password != req.body.confirmPassword){
      console.log("register controller: passwords did not match")
      var passwordMatchError = {'message': "Password confirmation must match password", "backToLogin": true}
      return res.json(passwordMatchError)
    }

    User.findOne({email: req.body.email}, function(error, user){
        if(user != null){
            console.log("This email is already registered")
            var alreadyRegistered = {'message': "This email is already registered", "backToLogin": true}
            return res.json(alreadyRegistered)
        }
    })

    let newUser= new User(req.body);
      newUser.save()
      .then((user) => { 
          req.session.name = user.firstName;
          req.session.user = user._id;
          console.log(user)
          req.session.email = user.email;
          res.json({'LoggedUserId': req.session.user,'LoggedUserName': req.session.name, 'LoggedUserEmail': req.session.email}); 
        })
  },

  find: function(req, res,next){
    User.find({}, function (err, users){
            res.json({'userResults': users})
    });
},

login: (req, res, err, next) => {
  User.findOne({email: req.body.emailForLogin}, function(error, user){
    console.log("REQ BODY", req.body)
    console.log(error)
    console.log(user)
    if(error || user == null){
        console.log("ERROR IN LOGGING IN USER", error, "User", user)
        var findingUserError = {'message': "This email is not registered", 'backToLogin': true}
        return res.json(findingUserError)
    } else {
        console.log("COMPARING PASSWORDS")
        if (bcrypt.compareSync(req.body.passwordForLogin, user.password)) {
            console.log('LOG IN SUCCESS')
            req.session.name = user.firstName
            req.session.user = user._id;
            req.session.email = user.email;
            console.log(req.session.name);
            console.log(req.session.user);
            console.log(req.session.email);
            res.json({ 'LoggedUserId': req.session.user,'LoggedUserName': req.session.name, 'LoggedUserEmail': req.session.email})  
          } else {
            console.log("password did not match email");
            var passwordMatchError = {'message': "The password for this email was incorrect", 'backToLogin': true}
            return res.json(passwordMatchError);
        }
    }
  })
    
},


logout: (req, res, coolmessage, next) => {
  req.session.destroy();
 (coolmessage => ({'coolMeSsAgE' : 'you did cool kid'}))
  res.json(true);
},



delete: function(req,res) {
  User.remove({_id:req.params.id}, function(err){
    console.log("You successfully deleted")
    res.json({'err' : 'You successfully deleted'});
     });

  }
}
  
        
      