//  BAL get and post
const express = require("express");
const balanceRouter = express.Router();
const Balance = require("../model/Balance");

// GET
balanceRouter.get("/", async (req, res, next) => {
  try {
    const balances = await Balance.find();
    return res.status(200).send(balances);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

balanceRouter.post("/", async (req, res, next) => {
  try {
    const newBalance = new Balance(req.body);
    const savedBalance = await newBalance.save();
    return res.status(201).send(savedBalance);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

//  BALANCES

balanceRouter.get("/balances", async (req, res) => {
  try {
    const balances = await Balance.find();
    res.send(balances);
  } catch (err) {
    console.error(err);
    res.status(500);
    return next(err);
  }
});

// UPDATE

balanceRouter.put("/put/:id", async (req, res, next) => {
  try {
    const balance = await Balance.findByIdAndUpdate(req.params.id, req.body, {
      next: true,
    });
    return res.status(201).send(balance);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

balanceRouter.put("/income/:id", async (req, res, next) => {
  try {
    const balance = await Balance.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { amount: req.body.income } },
      { new: true }
    );
    return res.status(201).send(balance);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

balanceRouter.put('/billpay/:balanceId', async (req, res, next) => {
    try {
        const {balanceId} = req.params
        const updatedBalance = await Balance.findOneAndUpdate(
            { _id: balanceId },
            { $inc: { amount: -req.body.amount } },
            { new: true }
          );
        return res.status(200).send(updatedBalance)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

module.exports = balanceRouter;
