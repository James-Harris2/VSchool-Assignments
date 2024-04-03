const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require('express-jwt')
const PORT = process.env.PORT


// MiddleWare 

app.use(express.json());
app.use(morgan('dev'))

// mongoose.set('strictQuery', true)
mongoose.connect(
    process.env.MONGO_URL, 
    () =>{
    console.log("Connected to DB")
})

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: [ 'HS256'] }))
// app.use('/income', require('./routes/Income.js'))

app.use((err, req, res, next) => {
    console.log(err);
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})
