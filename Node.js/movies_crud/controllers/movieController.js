const asyncHandler = require("express-async-handler");
const Movie = require("../models/movieModel");
//@desc Get all movies
//@route GET /api/movies
//@access public
const getMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find();
  res.status(200).json(movies);
});

//@desc Create New movie
//@route POST /api/movies
//@access public
const createMovie = asyncHandler(async (req, res) => {
  console.log("The request body is: ", req.body);
  const { title, year } = req.body;
  if (!title || !year) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const movie = await Movie.create({
    title,
    year,
  });
  res.status(201).json(movie);
});

//@desc Get movie
//@route GET /api/movies/:id
//@access public
const getMovie = asyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) {
    res.status(404);
    throw new Error("Movie not found");
  }
  res.status(200).json(movie);
});

//@desc Update movie
//@route PUT /api/movies/:id
//@access public
const updateMovie = asyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) {
    res.status(404);
    throw new Error("Movie not found");
  }
  const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedMovie);
});

//@desc Delete movie
//@route DELETE /api/movies/:id
//@access public
const deleteMovie = asyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) {
    res.status(404);
    throw new Error("Movie not found");
  }
  await Movie.deleteOne();
  res.status(200).json(movie);
});

module.exports = { getMovies, createMovie, getMovie, updateMovie, deleteMovie };
