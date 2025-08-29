const Result = require("../models/result.model");

const createResult = async (request, response) => {
  const { body } = request;

  const result = new Result({ ...body });
  await result.save();

  return response.status(201).send(result);
};

module.exports = { createResult };
