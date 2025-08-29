const { Router } = require("express");

const {
  createRace,
  getRaceWeatherInfo,
} = require("../controller/race.controller");
const validateRaceId = require("../utils/verify.raceId");

const router = Router();
router.post("/api/race", createRace);
router.get("/api/race/:raceId/weather", validateRaceId, getRaceWeatherInfo);

module.exports = router;
