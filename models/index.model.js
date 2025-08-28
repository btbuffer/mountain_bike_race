const mongoose = require("mongoose");

const RiderSchema = require("./rider.model");
const { isAthleteExist, generateAthleteId } = require("../utils/rider.util");

RiderSchema.pre("validate", async function () {
  let athleteId = this.athleteId;
  const modelName = this.constructor.modelName;

  if (!athleteId) athleteId = await generateAthleteId(this);
  let athleteExist = false;

  do {
    athleteExist = await isAthleteExist(athleteId, modelName);
    if (athleteExist) athleteId = await generateAthleteId(this);
  } while (athleteExist);

  this.athleteId = athleteId;
});

const Rider = mongoose.model("Rider", RiderSchema);

module.exports = Rider;
