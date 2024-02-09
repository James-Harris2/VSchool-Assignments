const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = new Schema({
    description: { 
        type:String
    },
    amount: {
        type:Number, 
    },
    dueDate: {
        type: Date, 
        required: true
    },
    balanceId: {
        type: Schema.Types.ObjectId,
        ref: "Balances"
    }
})

module.exports = mongoose.model('Expense', expenseSchema)

// type: Schema.Types.ObjectId
// ref: "Expense"