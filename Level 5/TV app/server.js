const express = require('express'); // Import Express
const mongoose = require('mongoose'); // Import Mongoose
const app = express();
const port = 7500; // Port Number
const morgan = require('morgan');

// AQ1frqHZ5xm2OqSg **{password} mongodb+srv://<username>:<password>@cluster0.ejovk8j.mongodb.net/ **{ connection string }

app.use(express.json());
app.use(morgan('dev'))


mongoose.set('strictQuery',true)
mongoose.connect('mongodb+srv://JH_uName1:AQ1frqHZ5xm2OqSg@cluster0.ejovk8j.mongodb.net/', (err) =>{
    console.log('connected to the Data_Baby', err)
})

app.use('/post', require('./routes/postRouter.js'))
app.use('/movie', require('./routes/movieRouter.js'))
app.use('/tv', require('./routes/tvRouter.js'))



// Error Handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMSG: err.message})
})
 


// app.use('/movies',require("./routes/movieRouter.js"))
// app.use('/tvShows', require("./routes/tvRouter.js"))

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);

});
