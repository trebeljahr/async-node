const express = require("express");
const app = express();

const { computeSync } = require("./helpers");
app.get("/", (req, res) => {
  res.send(`Hello World ${Math.floor(Math.random() * 100)}`);

  for (let i = 0; i < 50; i++) {
    computeSync();
  }
  console.log("Done computing expensive thing");
});

app.listen(3000, () => {
  console.log("Hello I am listening");
});
