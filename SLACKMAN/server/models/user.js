var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')



var UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true, minlength: 2 },
  lastName: { type: String, required: true, minlength: 2 },
  email: { type: String, required: true, minlength: 2, unique: true },
  password: { type: String, required: true, minlength: 8 },
});

UserSchema.pre('save', function (next) {
  bcrypt.hash(this.password, 10).then(hashed_password => {
      this.password = hashed_password;
      next()
  }).catch(error => { 
      next()
  }); 
})

mongoose.model('User', UserSchema);
var User = mongoose.model('User', UserSchema);
