// const Expense = require("../model/Expense");
// const mongoose = require('mongoose')
// const Expenses = require()
// const app = express ();
// app.use(express.json());
const express = require("express");
const expenseRouter = express.Router();
const Expense = require("../model/Expense");

expenseRouter.get("/", async (req, res, next) => {
  try {
    const expenses = await Expense.find();
    return res.status(200).send(expenses);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

expenseRouter.post("/", async (req, res, next) => {
  try {
    const newExpense = new Expense(req.body);
    const savedExpense = await newExpense.save();
    return res.status(201).send(savedExpense);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Read all
expenseRouter.get("/expenses", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch expense" });
  }
});

// Read one
expenseRouter.get("/expenses/:id", async (req, res, next) => {
  try {
    const expense = await Expense.findById(req.params.id);

    return res.status(200).send(expense);
  } catch (err) {
    console.error(err);
    res.status(500);
    return next(err);
  }
});
// Update
expenseRouter.put("/put/:id", async (req, res, next) => {
  try {
    const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(201).send(expense);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Delete
expenseRouter.delete("/delete/:id", async (req, res, next) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);

    return res.status(201).send(expense);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

expenseRouter.put("/changeDueDate/:id", async (req, res, next) => {
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).send(updatedExpense)
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

module.exports = expenseRouter;
