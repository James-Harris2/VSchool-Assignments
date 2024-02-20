const express = require("express")
const userRouter = express.Router()
const User = require("../Users") 
// 1. make a BE
//      1a) server file
// route handling
// connection to a DB
// if it's mongoDB need models



userRouter.get('/', async (req, res, next) => {
    try{
        console.log(User)
        const users = await User.find();
        return res.status(200).send(users);
    } catch (err){
        res.status(500)
        return next(err);
    }
})

userRouter.post('/createUser', async (req, res, next) => {
try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    return res.status(201).send(savedUser);
} catch (err){
    res.status(500);
    return next(err)
} 
})

// UPDATE
userRouter.get('api/user/createUser:id', async (req, res, next) => {
 try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        next: true,
    });
    return res.status(201).send(user);
 } catch (err) {
    res.status(500);
    return next (err)
 }
});

userRouter.put('/updateUser/:id', async (req, res, next) => {
try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    return res.status(201).send(user);
} catch (err) {
    res.status(500);
    return next(err)
}
})


userRouter.delete('/deleteUser/:id', async (req, res,) => {
    try {
        const userId = await User.findByIdAndDelete(req.params.id);
        return res.status(201).send(userId) 
    }catch (err){
        res.status(500).send(err)
    }
})

module.exports = userRouter;
