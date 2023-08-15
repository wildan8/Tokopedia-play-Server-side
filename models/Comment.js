const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    username: String,
    replyComment: String,
    time: { type : Date, default: Date.now },
    thumbsID: { type: mongoose.Schema.Types.ObjectId, ref: 'Thumbs' }
}) 
module.exports= mongoose.model('Comment', commentSchema);