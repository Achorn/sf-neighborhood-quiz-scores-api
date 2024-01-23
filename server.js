const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const scoreRoutes = require("./routes/scores");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use("/api/scores", scoreRoutes);

app.get("/", (req, res) => {
  res.json({ greeting: "hello from Scores API" });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    const listener = app.listen(process.env.PORT || 3000, () => {
      console.log(
        "Your app connected to db & is listening on port " +
          listener.address().port
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
