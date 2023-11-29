const express = require('express');
const app = express();
const morgan = require('morgan')

const port = 3000; // I can use any port between 3000 thru 9000
// const myRouter = express.Router();

app.use(express.json()) // Looks for a request.body and turns it into `req.body`
app.use(morgan('dev')) // Logs request to the console

app.use("/",require('./routes/bountyRouter.js'))
// // GET bounty 

// myRouter.route("bountyHunters")
// .get((req, res) => {
//     res.send()
// })
// .post((req, res) => {
//         res.send()
//     })
// myRouter.route("/bountyHunters/:bountyId")
// .get((req, res) => {
//     res.send(`${req.params.bountyId}`)
// })
// .put((req, res) => {
//     res.send(`${req.params.bountyId}`)
// })

// myRouter.post('/bounthunter', (req, res) => {
//     const bounties = req.body
//     bounties._id = uuidv4()
//     bountyHunters.push(bounties)
//     res.send(`Success looks like this Struggle ${bounties.firstname}`)
// })



// myRouter.get('/bountyhunter/:bountyhunterId', (req, res) => {
//     res.send(`GET on /bountyhunter/${req.params.bountyhunterId}`)
// })

// myRouter.put('/bountyhunter/:bountyhunterId', (req, res) => {
//     res.send(`PUT on bounty hunter${req.params.bountyhunterId}`)
// })


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})