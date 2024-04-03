const express = require("express");
const balRouter = express.Router();
const trans = require("..models/transaction")


// GET ALL POST
balRouter.get("/", (req, res, next) => {
    post.find((err, posts) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(posts);
    });
  });

//  get POST by single UserID

balRouter.get("/user", (req, res, next) => {
    post.find({ user: req.auth._id }, (err, posts) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(posts);
    });
  });


//   ADD NEW POST 
balRouter.post("/", (req, res, next) => {
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

//   DELETE ONE
balRouter.delete("/:postId", (req, res, next) => {
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

//   UPDATE POST

balRouter.put("/:postId", (req, res, next) => {
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
  

module.exports = balRouter;