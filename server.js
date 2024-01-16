const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

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
  //create new score from model
  //  save score
  // send error if fail
  // send response if sucess
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
