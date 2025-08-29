const { Router } = require("express");

const { createResult } = require("../controller/result.controller");

const router = Router();
router.post("/api/result", createResult);

module.exports = router;
