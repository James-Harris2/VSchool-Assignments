//  FAKE DATA
const { v4: uuidv4 } = require('uuid')


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

module.exports = bountyHunters