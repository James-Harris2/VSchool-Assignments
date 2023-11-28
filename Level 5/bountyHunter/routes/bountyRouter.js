const express = require('express');
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid')
uuidv4();

//  FAKE DATA

const bountyHunters = [
    {   firstname: "Rick ", 
        lastname: "Flare", 
        living: true,
        bountyAmount: 660, 
        Type: "Sith_Defender",
        weapon:"I'm Ric Flair! The Stylin, profilin, limo ridin, son of gun!",
        _id: uuidv4() 
          
    },

    {   firstname: "Foghorn",
        lastname: "Leghorn", 
         living: false, 
         bountyAmount: 200,
         type: "Rebel_Scum", 
         weapon: "Id say that boy, is about as stupid as a box of rocks!" ,
         _id: uuidv4() 
    }
];

// GET ALL 

bountyRouter.get("/", (req, res) => {
    res.send(bountyHunters)
})

// GET ONE 
bountyRouter.get("/:bounty", (req, res) => {
    const bountyHuntersId = req.params.bountyHuntersId
    const foundBounty = bountyHunters.find(el => el._id === bountyHuntersId)
    res.send(foundBounty)
})

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bountyHunters.push(newBounty)
    res.send(`Success is staggering`)
})
 
// DELETE 
bountyRouter.delete('/:bounty', (req, res) => {
    const bountyId = req.params.bounty
    const bountyIndex = bountyHunters.findIndex(el => el._id === bountyId)
    bountyHunters.splice(bountyIndex, 1)
    res.send('successfully delete bounty!')
})

// UPDATED ONE
bountyRouter.put('/:bounty', (req, res) => {
    const bountyId = req.params.bounty
    const bountyIndex = bountyHunters.findIndex(el => el._id === bountyId)
    const updatedBounty = Object.assign(bountyHunters[bountyIndex], req.body)
    res.send(updatedBounty)

})
module.exports = bountyRouter