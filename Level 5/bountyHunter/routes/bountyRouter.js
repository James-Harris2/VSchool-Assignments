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

bountyRouter.get("/", (req, res) => {
    res.send()
})

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bountyHunters.push(newBounty)
    res.send(`Success is staggering`)
})
 
.post((req, res) => {
    res.send()
})

.get((req, res) => {
    res.send(`${req.params}`)


})


module.exports = bountyRouter