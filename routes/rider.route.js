const { Router } = require("express");

const validateRaceId = require("../utils/verify.raceId");
const {
  createRider,
  getFastestRiders,
  getNonFinishers,
  getNotParticipants,
} = require("../controller/rider.controller");

const router = Router();

router.post("/api/rider/register", createRider);
router.get("/api/rider/:raceId/top3riders", validateRaceId, getFastestRiders);
router.get("/api/rider/:raceId/nonfinishers", validateRaceId, getNonFinishers);
router.get(
  "/api/rider/:raceId/notparticipants",
  validateRaceId,
  getNotParticipants
);

module.exports = router;
