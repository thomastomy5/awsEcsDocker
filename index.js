const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my app!!!!!!");
});

app.get("/info", (req, res) => {
  res.send("hey this is /info api");
});

function calculateSum(a, b) {
  debugger;
  return a + b;
}

const sum = calculateSum(5,4)
console.log(sum)


app.listen(3020, () => {
  console.log("listening on 3000");
});
