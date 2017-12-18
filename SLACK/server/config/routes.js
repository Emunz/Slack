var UserController = require('../controllers/users.js');
var ChatController = require('../controllers/chats')
var MessageController = require('../controllers/messages')
// ^Thing


module.exports = function(app){
    app.post('/api/register', function(req, res){
        UserController.register(req, res);
    });
    app.post('/api/login', function(req, res){
        UserController.login(req, res);
    });
    app.get('/api/logout', function(req, res){
        console.log("GOT TO THE LOGOUT ROUTE")
        UserController.logout(req,res);
    })


}