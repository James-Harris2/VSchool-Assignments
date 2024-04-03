const mongoose = require('mongoose')
const Schema = mongoose.Schema

const incomeSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },

    currentBalance: {
        type: Number,
        required: true,
        default: 0 
    },

})

module.exports = mongoose.model('Income', incomeSchema)