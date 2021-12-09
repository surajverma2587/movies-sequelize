const { Router } = require("express");

const {
  getFavourites,
  createFavourite,
  updateFavourite,
  deleteFavouriteById,
  deleteAllFavourites,
} = require("../../controllers/api/favourites");

const router = Router();

router.get("/", getFavourites);
router.post("/", createFavourite);
router.put("/:id", updateFavourite);
router.delete("/:id", deleteFavouriteById);
router.delete("/", deleteAllFavourites);

module.exports = router;
