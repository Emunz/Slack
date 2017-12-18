var mongoose = require('mongoose')
var Schema = mongoose.Schema


var MessageSchema = new mongoose.Schema({
    content: { type: String, required: true, maxlength: "300" },
    _poster: String,
    _chat: String
}, {timestamps: true})



mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');