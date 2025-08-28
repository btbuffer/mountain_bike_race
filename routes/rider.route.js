const { Router } = require("express");

const { createRider } = require("../controller/rider.controller");

const router = Router();

router.post("/api/register", createRider);

module.exports = router;
