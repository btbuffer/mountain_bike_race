const axios = require("axios");

const { Race } = require("../models/index.model");

const createRace = async (request, response) => {
  const { body } = request;

  const race = new Race({ ...body });
  await race.save();

  return response.status(201).send(race);
};

const getRaceWeatherInfo = async (request, response) => {
  const {
    raceDetails: { race },
  } = request;
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${race.location}&APPID=${apiKey}&units=metric`;
  const res = await axios.get(url);
  const weather = res.data;
  return response.send({
    location: race.location,
    temperature: weather.main.temp,
    conditions: weather.weather[0].description,
    humidity: weather.main.humidity,
  });
};

module.exports = { createRace, getRaceWeatherInfo };
