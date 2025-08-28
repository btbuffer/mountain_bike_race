const mongoose = require("mongoose");

const RiderSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      min: 6,
      max: 15,
    },
    lastname: {
      type: String,
      required: true,
      min: 6,
      max: 15,
    },
    sex: {
      type: String,
      enum: ["M", "F"],
    },
    country: {
      type: String,
      flag: String,
    },
    athleteId: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = RiderSchema;
