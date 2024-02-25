const express = require('express')
const post = require('../models/issue')
const rtvRouter = express.Router()

// Get All POST
rtvRouter.get('/', (req, res, next) =>{
    post.find((err, posts) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})

// Get POST by single User
rtvRouter.get('/user', (req, res, next) =>{
    post.find({ user: req.auth._id}, (err, posts) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})



// Add NEW POST
rtvRouter.post('/', (req, res, next) =>{
    req.body.user = req.auth._id
    const newPost = new post(req.body)
    newPost.save((err, savedPost) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedPost)
    })
})

// Delete POST
rtvRouter.delete('/:postId', (req, res, next) =>{
    post.findOneAndDelete(
        {_id: req.params.postId, user: req.auth._id},
        (err, deletedPost) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Deleted ${deletedPost.title}`)
        }
    )
})
// UpDate POST
rtvRouter.put('/:postId', (req, res, next) =>{
    post.findOneAndUpdate(
        {_id: req.params.postId, user: req.auth._id},
        req.body,
        {new: true},
        (err, updatedPost) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedPost)
        }
    )
})
// UPVOTE a POST
rtvRouter.put('/:postId',(req, res, next) =>{
    post.findOneAndUpdate(
        {_id: req.params.postId, user: req.auth._id},
        req.body,
        {new: true},
        (err, updatedPost) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedPost)
        }

    )
})

// DOWNVOTE to POST
rtvRouter.put('/downVote/:postId', (req, res, next) =>{
    post.findOneAndUpdate(
        {_id: req.params.postId},
        {$addToSet: { dislikeUsers: req.auth._id},
    $pull: {likedUsers: req.auth._id}},
    {new: true},
    (err, updatedPost) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedPost)
    }
    )
  
})

module.exports = rtvRouter