//@desc Get all movies
//@route GET /api/movies
//@access public
const getMovie = (req, res) => {
  res.status(200).json({ message: "Get all movies" });
};

//@desc Create New movie
//@route POST /api/movies
//@access public
const createMovie = (req, res) => {
  res.status(200).json({ message: "Create movie" });
};

module.exports = { getMovie };
