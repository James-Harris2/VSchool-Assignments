const express = require('express')
const Post = require('../models/post');
const postRouter = express.Router()

// Add One / post route
postRouter.post('/',(req, res, next) => {
    const newPost = new Post(req.body)
    newPost.save((err, savedPost) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedPost)
    })
})

// get all
postRouter.get('/', (req, res, next) =>{
    Post.find((err, posts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})


module.exports = postRouter