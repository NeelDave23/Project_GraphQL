const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(8000, () => {
  console.log("erver is on Port 8000");
});
