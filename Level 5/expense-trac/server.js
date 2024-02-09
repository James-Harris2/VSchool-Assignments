const express = require('express')
const mongoose = require('mongoose')
const app = express()
const morgan = require('morgan')
const port = 4000;
const expenseTrac = require('./routes/Expenses.js')


// MiddleWare 

app.use(express.json());
app.use(morgan('dev'))

mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://james_harris:IV0TwzcYLZnDgty6@cluster0.ejovk8j.mongodb.net/', (err) =>{
    console.log("Connected to DB", err)
})

app.use('/expense', require('./routes/Expenses.js'))
app.use('/balance', require('./routes/Balances.js'))
app.use('/income', require('./routes/Income.js'))

app.use((err, req, res, next) => {
    console.log(err);
    return res.send({errMsg: err.message})
})

app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})
