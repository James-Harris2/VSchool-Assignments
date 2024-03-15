const express = require("express");
const rtvRouter = express.Router();
const post = require("../models/issue");
const comment = require("../models/comments");
const commentRouter = express.Router()
const postRouter = express.Router()


// Get All POST
rtvRouter.get("/", (req, res, next) => {
  post.find((err, posts) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(posts);
  });
});

// Get POST by single UserID
rtvRouter.get("/user", (req, res, next) => {
  post.find({ user: req.auth._id }, (err, posts) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(posts);
  });
});

// Add NEW POST
rtvRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id;
  const newPost = new post(req.body);
  newPost.save((err, savedPost) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedPost);
  });
});

// Comments Routes
commentRouter.post('/:issueId', (req, res, next) =>{
  req.body.issue = req.params.issueId;
   const newComment = new Comment(req.body);
    
     save((err, savedComment) => {
      if(err) {
       res.status(500)
       return next(err)
      }
      return res.status(201).send(savedComment)
    })
})



// Delete POST
rtvRouter.delete("/:postId", (req, res, next) => {
  post.findOneAndDelete(
    { _id: req.params.postId, user: req.auth._id },
    (err, deletedPost) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(`Deleted ${deletedPost.title}`);
    }
  );
});
// UpDate POST
rtvRouter.put("/:postId", (req, res, next) => {
  post.findOneAndUpdate(
    { _id: req.params.postId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedPost) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedPost);
    }
  );
});
// UPVOTE a POST
rtvRouter.put("/upVote/:postId", (req, res, next) => {
  post.findOneAndUpdate(
    { _id: req.params.postId }, 
    { 
        $addToSet: { 
            likedUsers: req.auth._id},
        $pull:    { 
            dislikedUser: req.auth._id}
},

    { new: true },
    (err, updatedIssue) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedIssue);
    }
  );
});

// DOWNVOTE to POST
rtvRouter.put("/downVote/:postId", (req, res, next) => {
  post.findOneAndUpdate(
    { _id: req.params.postId },
    {
      $addToSet: { dislikedUser: req.auth._id },
      $pull: { likedUsers: req.auth._id },
    },
    { new: true },
    (err, updatedIssue) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedIssue);
    }
  );
});

module.exports = rtvRouter;
