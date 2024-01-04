const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Movie Blueprint

const movieSchema = new Schema({
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
    }
})

module.exports = mongoose.model('Movie', movieSchema)