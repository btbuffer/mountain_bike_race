const { Race } = require("../models/index.model");

const createRace = async (request, response) => {
  const { body } = request;

  const race = new Race({ ...body });
  await race.save();

  return response.status(201).send(race);
};

module.exports = { createRace };
