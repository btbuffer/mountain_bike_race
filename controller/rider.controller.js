const { Rider } = require("../models/index.model");
const Result = require("../models/result.model");

const createRider = async (request, response) => {
  const { body } = request;

  const rider = new Rider({ ...body });
  await rider.save();

  return response.status(201).send(rider);
};

const getFastestRiders = async (request, response) => {
  const { raceId } = request;
  const raceResults = await Result.find({
    race: raceId,
    finishTime: { $ne: null },
  })
    .sort({ finishTime: "asc" })
    .limit(3)
    .populate("rider", "firstname lastname -_id");

  const riders = raceResults.map((entry) => ({
    name: `${entry.rider.firstname} ${entry.rider.lastname}`,
    timeTaken: entry.finishTime,
  }));

  return response.status(200).send(riders);
};

const getNonFinishers = async (request, response) => {
  const { raceId } = request;

  const incompleteRaceRiders = await Result.find({
    race: raceId,
    finishTime: null,
  }).populate("rider", "firstname lastname -_id");

  const nonFinishers = incompleteRaceRiders.map((entry) => ({
    name: `${entry.rider.firstname} ${entry.rider.lastname}`,
  }));

  return response.status(200).send(nonFinishers);
};

const getNotParticipants = async (request, response) => {
  const { raceId } = request;

  const participants = await Result.find({ race: raceId }).distinct("rider");
  const nonparticipants = await Rider.find(
    {
      _id: { $nin: participants },
    },
    "firstname lastname -_id"
  );

  return response.send(
    nonparticipants.map((nonparticipant) => ({
      name: `${nonparticipant.firstname} ${nonparticipant.lastname}`,
    }))
  );
};

module.exports = {
  createRider,
  getFastestRiders,
  getNonFinishers,
  getNotParticipants,
};
