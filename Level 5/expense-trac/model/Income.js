const mongoose = require('mongoose')
const Schema = mongoose.Schema

const incomeSchema = new Schema({
    amount: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Income', incomeSchema)