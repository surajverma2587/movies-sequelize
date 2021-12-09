const { Router } = require("express");

const search = require("./search");
const favourites = require("./favourites");
const users = require("./users");

const router = Router();

router.use("/search", search);
router.use("/favourites", favourites);
router.use("/users", users);

module.exports = router;
