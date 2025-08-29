const mongoose = require("mongoose");

const ResultSchema = mongoose.Schema(
  {
    rider: {
      type: mongoose.Types.ObjectId,
      ref: "Rider",
      required: true,
    },
    race: {
      type: mongoose.Types.ObjectId,
      ref: "Race",
      required: true,
    },
    finishTime: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);

ResultSchema.index({ rider: 1, race: 1 }, { unique: true });

const Result = mongoose.model("Result", ResultSchema);
module.exports = Result;
