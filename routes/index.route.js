const mongoose = require("mongoose");
const { Router } = require("express");

const riderRouter = require("./rider.route");

const router = Router();
router.use(riderRouter);

router.get("/api/status", async (request, response) => {
  const mountainRacerModels = mongoose.modelNames();

  const tables = {};
  for (const modelName of mountainRacerModels) {
    const model = mongoose.model(modelName);
    tables[modelName] = await model.countDocuments();
  }
  return response.status(200).send({ name: "mountainRacer", tables });
});

module.exports = router;
