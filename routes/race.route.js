const { Router } = require("express");

const { createRace } = require("../controller/race.controller");

const router = Router();
router.post("/api/race", createRace);

module.exports = router;
