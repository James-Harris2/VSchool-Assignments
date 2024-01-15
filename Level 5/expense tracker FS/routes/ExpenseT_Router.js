const express = require ('express')
const expenseT_Router = express.Router()
const mongoose = require('mongoose')
const expenseT_ = require('../model/ExpenseT_')
const ExpenseT_Router = require('../routes/ExpenseT_Router')

// get all
expenseT_Router.get('/', async (req, res) => {
    try {
        const expense = await expenseT_.find()
        res.json(expense);
    } catch (err){
        console.error(err)
        res.status(500).json({ message: 'Error retrieving products'})
    }
})

//edit
expenseT_Router.put("/put/:id", async (req, res, next) => {
    try {                                                 //1. which one?  2. with what?  3. newest version back
        const expense = await expenseT_.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.status(201).send(expense)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

//get one
expenseT_Router.get('/:id', async(req, res) => {
    try {
        const expense = await expenseT_.findById(req.params.id)
        if(!expense) {
            res.status(404).json({ message: 'transacation not found '})
        } else {
            res.json(expense)
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error retrieving'})
    }
})

// POST NEW EXPENSE

expenseT_Router.post('/', (req, res, next) => {
    const newExpense = new expenseT_(req.body);
    newExpense.save((err, savedExpense) => {
        if(err) {
            res.status(500);
            return next(err);
        }
    return res.status(201).send(savedExpense)
    })
})

// delete
expenseT_Router.delete('/:id', async (req, res) => {
    try {
        const deletedExpense = await expenseT_.findByIdAndDelete(req.params.id)
        if(!deletedExpense) {
            res.status(404).json({ message: 'No Expense Found'})
        } else {
            res.json({ message: 'Expense deleted successfully'})
        }
    } catch (err){
        console.error(err)
        res.status(500).json({ message: 'Error deleting Expense'})
    }
})

// 



module.exports = expenseT_Router