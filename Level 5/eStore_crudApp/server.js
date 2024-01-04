// dependencies

const express = require('express'); // Import Express
const mongoose = require('mongoose') // Import Mongoose
const app = express();
const port = 6000; // Port Number
const morgan = require('morgan'); 
const productRouter = require('./routes/productRouter')
// middleware
app.use(express.json());
app.use(morgan('dev'))

const schema = new mongoose.Schema({})




// ******** THIS WILL BE CONTINUED ****** have to get password and userName from MongoDB
mongoose.set('strictQuery',true)
mongoose.connect('mongodb+srv://JH_uName1:AQ1frqHZ5xm2OqSg@cluster0.ejovk8j.mongodb.net/',(err) => {
    console.log('connected to db', err)
})



app.use('/post', require('./routes/productRouter.js'))


// Error Handling

app.use((err, req, res, next) => {
    console.log(err);
    return res.send({errMsg: err.message})
})



app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`)
})



// mongodb://atlas-sql-6570bd13b0d6c0146978d0a4-wtl02.a.query.mongodb.net/test?ssl=true&authSource=admin