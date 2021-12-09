const { Router } = require("express");

const { createUser } = require("../../controllers/api/users");

const router = Router();

router.post("/", createUser);

module.exports = router;
