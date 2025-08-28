const crypto = require("node:crypto");
const mongoose = require("mongoose");

const generateAthleteId = async ({ firstname, lastname }) => {
  const fullname = `${firstname} ${lastname}`;

  const firstnameCode = firstname.slice(0, 4).toUpperCase();
  const lastnameCode = lastname.slice(0, 4).toUpperCase();

  const hashCode = crypto
    .createHash("md5")
    .update(fullname + Date.now())
    .digest("hex")
    .slice(0, 4)
    .toUpperCase();

  return `${firstnameCode}-${lastnameCode}-${hashCode}`;
};

const isAthleteExist = async (athleteId, modelName) => {
  const model = mongoose.model(modelName);
  const athlete = await model.findOne({ athleteId });

  return !!athlete;
};

module.exports = { generateAthleteId, isAthleteExist };
