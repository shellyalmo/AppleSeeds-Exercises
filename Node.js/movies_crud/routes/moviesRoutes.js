const express = require("express");
const router = express.Router();
const { getMovie } = require("../controllers/movieController");

router.route("/").get(getMovie);

router.route("/").post();

router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `Get movie for ${req.params.id}` });
});

router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `Update movie for ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `Delete movie for ${req.params.id}` });
});

module.exports = router;
