var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// **CHANGE THE FOLLOWING LINE BASED ON PROJECT
var QuestionSchema = new mongoose.Schema({
    postedBy: { type: String },
    questionname: { type: String,required: true, minlength: "4"},
    choice1: { type: String, required: true, minlength: "8"},
    choice1: { type: String, required: true, minlength: "8"},
    choice3: { type: String, required: true, minlength: "8"},
    Answer: { type: String, required: true, minlength: "8"},
    QuestionState: { type: Boolean, required: true},
    user_: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {timestamps: true});

mongoose.model('Question', QuestionSchema);