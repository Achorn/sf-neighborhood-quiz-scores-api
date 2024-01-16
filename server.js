const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

const scoreSchema = mongoose.Schema({
  username: { type: String, required: true, maxLength: 10 },
  score: { type: Number, required: true, min: 0, max: 1 },
  time: { type: Number, required: true, min: 0 },
  date: { type: Date, default: Date.now },
});
const Score = mongoose.model("Score", scoreSchema);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ greeting: "hello from root" });
});

app.get("/api", (req, res) => {
  res.json({ greeting: "Hello, world!" });
});

//get scores limit
app.get("/api/scores", (req, res) => {
  //get scores from mongo db
  // send json of top 10 scores
  res.json({ scores: "scores go here" });
});

app.post("/api/score", (req, res) => {
  console.log(req.body);
  res.json({});
  let score = new Score({
    username: req.body.username,
    score: req.body.score,
    time: req.body.time,
    date: new Date(),
  });

  score
    .save()
    .then((data) => res.json({ data: data }))
    .catch((err) => res.json({ err: err }));
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
