const mongoose = require('mongoose')
const Schema = mongoose.Schema

const balanceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Balance', balanceSchema)