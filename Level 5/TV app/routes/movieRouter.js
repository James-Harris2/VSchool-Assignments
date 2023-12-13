const express = require('express')
const movieRouter = express.Router()
const Movie = require('../models/movie.js')




        // Routes GET ALL 
movieRouter.get("/", (req, res, next) => {
        Movie.find((err, movies) => {
         if(err) {
                res.status(500)
                return next(err)
                }
                return res.status(200).send(movies)
        })
})


//     .post((req, res) => {
//         const newMovie = req.body
//         newMovie._id = uuidv4()
//         movies.push(newMovie)
//         res.send(`Successfully Added ${newMovie.title} to the database!`)
// })


module.exports = movieRouter