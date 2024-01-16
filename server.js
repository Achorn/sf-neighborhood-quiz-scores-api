const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  res.json({ greeting: "Hello, world!" });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
