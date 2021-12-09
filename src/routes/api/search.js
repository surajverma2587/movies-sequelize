const { Router } = require("express");

const {
  getMovieById,
  searchMovieByTitle,
} = require("../../controllers/api/search");

const router = Router();

router.get("/:id", getMovieById);
router.post("/", searchMovieByTitle);

module.exports = router;
