// MiddleWare 
const express = require('express');
const index = express();
// Middleware (For every request)
index.use(express.json())


const port = 3000
//Define GET endpoint at the root path '/'
    // 1. EndPoint (path) '/';
    // 2. CallBack function ();


    
    // Routes
    index.use('/movies',require('./routes/movieRouter.js'))
    index.use("/tvShows", require("./routes/tvRouter.js"))
    
    
// Start the server on port 3000
    //1: PORT 2: CB

index.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})