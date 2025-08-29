const mongoose = require("mongoose");

const RaceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      // unique: true,
      minlength: 4,
      maxlength: 30,
    },
    location: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 50,
      default: "London, England",
    },
    tournament: {
      type: String,
      required: true,
      // unique: true,
    },
    // date: {
    //   type: Date,
    //   required: true,
    //   min: Date.now(),
    //   default: Date.now(),
    // },
    distance: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// const Race = mongoose.model("Race", RaceSchema);
module.exports = RaceSchema;
