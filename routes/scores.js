const express = require("express");
const Score = require("../models/scoreModel");
const router = express.Router();

//get scores limit
router.get("/", (req, res) => {
  var filters = { map: req.query.map || "all" };
  limit = req.query.limit;
  Score.find({ ...filters })
    .sort({ score: -1, time: 1 })
    .limit(limit)
    .then((data) => res.json(data))
    .catch((err) => res.json({ err: err }));
});

router.post("/", (req, res) => {
  let score = new Score({
    username: req.body.username,
    score: req.body.score,
    time: req.body.time,
    date: new Date(),
    map: req.body.map,
  });

  score
    .save()
    .then((data) => res.json({ data: data }))
    .catch((err) => res.json({ err: err }));
});

module.exports = router;
