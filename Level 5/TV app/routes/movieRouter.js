const express = require("express");
const movieRouter = express.Router();
const Movie = require("../models/movie.js");

movieRouter.delete("/:movieId", (req, res, next) => {
  Movie.findOneAndDelete({ _id: req.params.movieId }, (err, deletedItem) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res
      .status(200)
      .send(`Successfully deleted item ${deletedItem.title} from Data_Baby`);
  });
});

// Routes GET ALL
movieRouter.get("/", (req, res, next) => {
  Movie.find((err, movies) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(movies);
  });
});

movieRouter.post("/", (req, res, next) => {
  const newMovie = new Movie(req.body);
  newMovie.save((err, savedMovie) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedMovie)
  });
});


// Update One

movieRouter.put("/:movieId", (req, res, next) => {
  Movie.findOneAndUpdate(
    { _id: req.params.movieId }, // find this one to update
    req.body, // update the object with this data
    { new: true }, // send back the updated version please
    (err, updatedMovie) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedMovie)
    }
  )
})

module.exports = movieRouter;
