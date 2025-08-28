const mongoose = require("mongoose");

const RiderSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 15,
    },
    lastname: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 15,
    },
    bio: {
      type: String,
      maxlength: 50,
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
    // userType
  },
  {
    timestamps: true,
  }
);

module.exports = RiderSchema;
