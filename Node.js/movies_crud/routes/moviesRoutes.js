const express = require("express");
const router = express.Router();
const {
  getMovies,
  createMovie,
  getMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController");

router.route("/").get(getMovies).post(createMovie);

router.route("/:id").get(getMovie).put(updateMovie).delete(deleteMovie);

module.exports = router;
