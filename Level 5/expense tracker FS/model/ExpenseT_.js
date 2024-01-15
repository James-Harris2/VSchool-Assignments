const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = new Schema({
    name:{
        type: String,
        price: Number,
        description: String,
    },
    DateCreated: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("expenseT_", expenseSchema)