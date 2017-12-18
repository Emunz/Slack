var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ChatSchema = new mongoose.Schema({
    chatType: { type: String, required: true},
    chatName: { type: String, required: true },
    _users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    _messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
}, {timestamps: true})



mongoose.model('Chat', ChatSchema);
var Chat = mongoose.model('Chat');