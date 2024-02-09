const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const Port = 3001
const app = express()


// Middleware
app.use(express.json())
app.use(morgan('dev'))

// TestingDB ||  yoQwgvVYoaRgTjTf

mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://TestingDB:yoQwgvVYoaRgTjTf@cluster0.ejovk8j.mongodb.net/', (err) =>{
    console.log("Connected to DB", err)
})

app.use('/api/user', require('./routes/UserRoute.js'))
app.use('/api/createUser', require('./routes/UserRoute.js'))
app.use('/api/updateUser', require('./routes/UserRoute.js'))
app.use('/api/deleteUser', require ('./routes/UserRoute.js'))
app.use('/api/user/createUser', require ('./routes/UserRoute.js'))



app.use((err, req, res, next) => {
    console.log(err);
    return res.send({errMsg: err.message})
})




app.listen(Port, ()=>{
    console.log('listening on port', Port)
})