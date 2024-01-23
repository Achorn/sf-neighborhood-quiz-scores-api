const mongoose = require("mongoose");

const scoreSchema = mongoose.Schema({
  username: { type: String, required: true, maxLength: 10 },
  score: { type: Number, required: true, min: 0, max: 1 },
  time: { type: Number, required: true, min: 0 },
  date: { type: Date, default: Date.now },
  map: String,
});
module.exports = mongoose.model("Score", scoreSchema);
