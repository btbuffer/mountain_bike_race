const Rider = require("../models/index.model");

const createRider = async (request, response) => {
  const { body } = request;

  const rider = new Rider({ ...body });
  await rider.save();

  return response.status(201).send(rider);
};

module.exports = { createRider };
