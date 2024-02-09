const express = require('express')
const incomeRouter = express.Router();
const Income = require("../model/Income")

incomeRouter.get("/", async (req, res, next) => {
    try {
        const incomes = await Income.find()
        return res.status(200).send(incomes);

    } catch (err) {
        res.status(500);
        return next(err);
    }
})

incomeRouter.post("/", async (req, res, next) => {
    try {
        const newIncome = new Income(req.body);
        const savedIncome = await newIncome.save();
        return res.status(201).send(savedIncome);
    } catch (err) {
        res.status(500);
        return next(err)
    }
})

// Read All Incomes

// incomeRouter.get("/incomes", async (req, res) => {
//     try {
//         const incomes = await Income.find();
//         res.send(incomes)
//     } catch (err) {
//         console.error(err)
//         res.status(500)
//         return 
//     }
// })

//  Update Incomes

incomeRouter.put("/put/:id", async (req, res, next) => {
    try {
        const income = await Income.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.status(201).send(income)

    } catch (err){
        res.status(500);
        return next(err)
    }
})

module.exports = incomeRouter