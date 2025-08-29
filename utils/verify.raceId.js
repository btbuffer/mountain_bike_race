const { mongoose } = require("mongoose");
const { Race } = require("../models/index.model");

const validateRaceId = async (request, response, next) => {
  const {
    params: { raceId },
  } = request;

  const isValid =
    mongoose.Types.ObjectId.isValid(raceId) &&
    String(new mongoose.Types.ObjectId(raceId)) === raceId;

  if (!isValid) return response.status(400).send({ msg: "Invalid race ID" });

  const foundRace = await Race.findById(raceId);
  if (!foundRace) return response.status(404).send({ msg: "Race not found" });

  const raceDetails = { raceId, race: foundRace };
  request.raceDetails = raceDetails;

  next();
};

module.exports = validateRaceId;
