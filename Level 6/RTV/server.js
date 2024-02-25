// Create Rock the Vote SERVER

const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require ('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require('express-jwt')
const PORT = process.env.PORT

// const SECRET = process.env.SECRET

// MiddleWare

app.use(express.json())
app.use(morgan('dev'))

// MongoDB Connect  


mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://jameseharrisii:woyYkhPunlMT6CAx@cluster0.jy0ph3v.mongodb.net/LEVEL6?retryWrites=true&w=majority', (err) =>{
    console.log("Connected to DB", err)
})

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms:['HS256'] }))
app.use('/api/rtv',require('./routes/rtvRouter.js'))



app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(PORT, () => {
    console.log('listening on port',PORT)
})

