// Posting Comments to ISSUEs 

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CommentSchema =  new Schema({
    text: {
        type: String,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'// Reference to the user who posted the comment
    },
    issue: {
        type: Schema.Types.ObjectId,
        ref: 'Issue'
    }
})
module.exports = mongoose.model('Comment', CommentSchema)