// Posting Issues ROCK the VOTE

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    likedUsers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    dislikedUser:[{
        type: Schema.Types.ObjectId,
        ref:"User"
    }]
})

module.exports = mongoose.model("Issue", postSchema)