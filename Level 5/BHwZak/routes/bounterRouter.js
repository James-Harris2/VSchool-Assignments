const express = require('express');
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid')
const data = require("../bountyHunters")

// GET ALL 

bountyRouter.get("/", async (req, res) => {
    try {
        res.status(201).send(data)
    } catch (error){
        res.status(500).send(error)
    }
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
    console.log(bountyIndex)
    const updatedBounty = Object.assign(bountyHunters[bountyIndex], req.body)
    res.send(updatedBounty)

})
module.exports = bountyRouter