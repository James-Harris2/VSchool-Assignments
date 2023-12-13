const express = require('express');
const mongoose = require ('mongoose')
const app = express();
const morgan = require('morgan')
// MiddleWare 


const movieRouter = require('./routes/movieRouter.js');


// Middleware (For every request)
app.use(express.json())
mongoose.get('strictQuery', true)
app.use(morgan("dev"))

const port = 3100
//Define GET endpoint at the root path '/'
    // 1. EndPoint (path) '/';
    // 2. CallBack function ();

    mongoose.connect("mongodb+srv://J_userName4:RZWrfTMFSg1wcHdo@cluster0.ejovk8j.mongodb.net/movieDB?retryWrites=true&w=majority",(err) =>{
    console.log('connected to DB',err)
})
    // Routes
    app.use('/movies',require('./routes/movieRouter.js'))
    app.use("/tvShows", require("./routes/tvRouter.js"))
    
    // Error Handling
    app.use((err, req, res, next) => {
        console.log(err)
        return res.send({errMsg: err.message})
    })

    
    
// Start the server on port 3100
    //1: PORT 2: CB

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})