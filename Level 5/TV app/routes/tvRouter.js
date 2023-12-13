const express = require ('express');
const tvRouter = express.Router();
const {v4: uuidv4} = require('uuid')




//  FAKE DATA
const tvShows = [
    { title: "Rick and Morty", _id: uuidv4() },
    { title: "Watchmen", _id: uuidv4() },
    { title: "Batman", _id: uuidv4() },
    { title: "Say what", _id: uuidv4() }
    ]

    // Routes

    tvRouter.get('/',(req, res) => {
        res.send(tvShows)
    })
    tvRouter.post("/",(req, res) => {
        const newShow = req.body
        newShow._id = uuidv4()
        tvShows.push(newShow)
        res.send(`Successfully Added ${newShow.title} to the database!`)
    })

   







module.exports = tvRouter