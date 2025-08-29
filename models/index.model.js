const mongoose = require("mongoose");

const RiderSchema = require("./rider.model");
const RaceSchema = require("./race.model");

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

RaceSchema.pre("validate", async function () {
  // let eventDate = new Date(this.date);
  // const dateComponents = eventDate
  //   .toLocaleString("en-US", { timeZone: "Africa/Lagos" })
  //   .split(",");
  // console.log("Date Component: ", dateComponents);
  // const [date, time] = dateComponents;
  // const [hr] = time.trim().split(" ");
  // let isoDate = `${date.trim().replace(/\//g, "-")}`;
  // isoDate = isoDate.split("-").reverse().join("-") + "T" + hr.trim();
  // console.log("Date: ", isoDate);
  // console.log("Date: ", new Date(isoDate));
});

const Rider = mongoose.model("Rider", RiderSchema);
const Race = mongoose.model("Race", RaceSchema);

module.exports = { Rider, Race };
