const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comments')
const comments = require('../models/comments')


// Get All

commentRouter.get("/", (req, res, next) => {
    Comment.find((err, comments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

// commentRouter.post('/',(req, res, next) => {
//     req.body.user = req.auth._id
//     const newComment = new Comment(req.body)
//     newComment.save((err, savedComment) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(201).send(savedComment)
//     })
// })

// Get One
// not finished
// commentRouter.get('/:issueId', (req, res, next) => {
//     const commentId = req.params.issueId
//     const foundComment = comments.find(comment => comment._id === issueId)
//     if(!foundComment){
//         const error = new Error(`The item with id${issueId} was not found`)
//         res.status(500)
//     }
// })

commentRouter.post('/:issueId', (req, res, next) => {
    // Attach the user who posted the comment
  req.body.issue = req.params.issueId; // Link the comment to the issue
  const newComment = new Comment(req.body);

  newComment.save((err, savedComment) => {
      if (err) {
          res.status(500);
          return next(err);
      }
      return res.status(201).send(savedComment);
  });
});

module.exports = commentRouter