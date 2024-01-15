// server file & dependecies

const express = require('express')
const mongoose = require('mongoose')
const app = express();
const morgan = require('morgan')
const port = 4000;
const expenseTracker = require('./routes/ExpenseT_Router')


// MiddleWare 


app.use(express.json());
app.use(morgan('dev'))


const schema = new mongoose.Schema({})


// CONNECTION POINTS
// qx98ygvs7V6xic0E
// jTues



mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://jTues:qx98ygvs7V6xic0E@cluster0.ejovk8j.mongodb.net/",(err) =>{
    console.log('connected to DB', err)

}
)



app.use('/post', require('./routes/ExpenseT_Router'))


app.use((err, req, res, next) => {
    console.log(err);
    return res.send({errMessage: 'My_Guy_You_Messed_up'})
})




app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})

