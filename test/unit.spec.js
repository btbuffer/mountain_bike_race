// const jest = require("jest");
const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../index");
const { Race, Rider } = require("../models/index.model");
const Result = require("../models/result.model");

beforeAll(async () => {
  await mongoose.connect(process.env.DBURI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Mountain Bike Race API", () => {
  let riderOne, riderTwo, riderThree, riderFour, race;

  beforeEach(async () => {
    await mongoose.connect(process.env.DBURI);
    await Rider.deleteMany({});
    await Race.deleteMany({});
    await Result.deleteMany({});

    riderOne = await new Rider({
      firstname: "Rider One",
      lastname: "Mountaineer",
      sex: "F",
    }).save();

    riderTwo = await new Rider({
      firstname: "Rider Two",
      lastname: "Mountaineer",
      sex: "M",
    }).save();

    riderThree = await new Rider({
      firstname: "Rider Three",
      lastname: "Mountaineer",
      sex: "F",
    }).save();

    riderFour = await new Rider({
      firstname: "Rider Four",
      lastname: "Mountaineer",
      sex: "M",
    }).save();

    race = await new Race({
      name: "Test Race",
      startTime: new Date(),
      location: "Cairo",
      distance: 15.5,
    }).save();

    await new Result({
      rider: riderOne._id,
      race: race._id,
      finishTime: 100,
    }).save();

    await new Result({
      rider: riderTwo._id,
      race: race._id,
      finishTime: 83,
    }).save();

    await new Result({
      rider: riderThree._id,
      race: race._id,
      finishTime: null,
    }).save();
  });

  test("GET /api/rider/:raceId/top3riders should return top 3 fastest riders", async () => {
    const response = await request(app).get(
      `/api/rider/${race._id}/top3riders`
    );
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(2);
    expect(response.body[0].name).toBe("Rider Two Mountaineer");
    expect(response.body[0].timeTaken).toBe(83);
  });
});
