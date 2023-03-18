const asyncHandler = require("express-async-handler");
//@desc Get all movies
//@route GET /api/movies
//@access public
const getMovies = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all movies" });
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
  res.status(201).json({ message: "Create movie" });
});

//@desc Get movie
//@route GET /api/movies/:id
//@access public
const getMovie = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get movie for ${req.params.id}` });
});

//@desc Update movie
//@route PUT /api/movies/:id
//@access public
const updateMovie = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update movie for ${req.params.id}` });
});

//@desc Delete movie
//@route DELETE /api/movies/:id
//@access public
const deleteMovie = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete movie for ${req.params.id}` });
});

module.exports = { getMovies, createMovie, getMovie, updateMovie, deleteMovie };
