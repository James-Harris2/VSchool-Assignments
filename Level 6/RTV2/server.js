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

//mongoose.connect(
    //process.env.MONGO_URL,
    //() => console.log('Connected to the DB')
  //)




app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms:['HS256'] }))
app.use('/api/rtv',require('./routes/rtv2Router.js'))
app.use('/api/comments',require('./routes/commentRouter.js'))


app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "Unauthorized Error"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

mongoose.connect(
    process.env.MONGO_URL,
    () => app.listen(PORT, () => {
        console.log('listening on port',PORT)
    })
  )
//app.listen(PORT, () => {
    //console.log('listening on port',PORT)
//})

