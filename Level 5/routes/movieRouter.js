const express = require('express')
const movieRouter = express.Router()
const {v4: uuidv4} = require('uuid')
const { post } = require('./movieRouter')

// Fake User Data

const movies = [
    {title: 'die hard', genre: 'action', _id: uuidv4() },
    {title: 'star wars IV', genre: 'fantansy', _id: uuidv4() } ,
    {title: 'lion king', genre: 'fantansy', _id: uuidv4() },
    {title: 'friday the 13th', genre: 'horror', _id: uuidv4() },
    ]



        // Routes
movieRouter.route("/")
    .get((req, res) => {
        res.send(movies)
})


    .post((req, res) => {
        const newMovie = req.body
        newMovie._id = uuidv4()
        movies.push(newMovie)
        res.send(`Successfully Added ${newMovie.title} to the database!`)
})


module.exports = movieRouter