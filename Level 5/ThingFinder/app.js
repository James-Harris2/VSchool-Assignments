// First Express Server & Port
const { v4: uuidv4 } = require('uuid')

const express = require('express');
const app = express();
const port = 4100;

app.use(express.json())

// Array of Bug's Bunny {FAKE DATA}


const cartoons = [
    { 
        name: "Bugs Bunny",
        type: "Rabbit ",
        catchphrase: "What's up Doc",
        _id: uuidv4()
    },

    {
        name: "Elmer Fudd",
        type: "Fat Man",
        catchphrase: "I'm a hunter",
        _id: uuidv4()
    },

    {
        name: "Daffy Duck",
        type: "Duck",
        catchphrase: "Foolish character",
        _id: uuidv4()
    },

    {
        name: "Yosemite Sam",
        type: "Cowboy",
        catchphrase: "short-tempered southern cowboy",
        _id: uuidv4()
    },
]

// GET --EndPoint 1. {mount path}
// 2. CallBack function
app.get('/', (req, res) => {
    res.send(cartoons)

})

// GET ONE
app.get('/:cartoon',(req, res) => {
    const cartoonId = req.params.cartoonId
    const foundCartoon = cartoons.find(cartoon => cartoon._id === cartoonId)
    res.send(foundCartoon)
})


// POST ONE
app.post('/', (req, res) => {
    const newCartoon = req.body
    newCartoon._id = uuidv4()
    cartoons.push(newCartoon)
    res.send('Whats up DOC')

})

// DELETE

app.delete('/:cartoon', (req,res) => {
    const cartoonId = req.params.cartoon
    const cartoonIndex = cartoons.findIndex(cartoon => cartoon._id === cartoonId)
    cartoons.splice(cartoonIndex, 1)
    res.send("successfully delete movie!")
})


// Updated One

app.put('/:cartoon', (req, res) =>{
    const cartoonId = req.params.cartoon
    const cartoonIndex = cartoons.findIndex(cartoon => cartoon._id === cartoonId)
    const updatedCartoon = Object.assign(cartoons[cartoonIndex], req.body)
    res.send(updatedCartoon)
})





// Server

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});

module.exports = app;