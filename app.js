const express = require("express");
const api = require("./api");
const path = require('path');

const app = express();

app.use(express.json());

app.use("/chat", express.static(__dirname + "/public/build"));
app.use("/", express.static(__dirname + "/public"));
app.use(api);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, '/public/', 'index.html'));
});

app.get("/chat/*", function (req, res) {
  console.log(path.join(__dirname, '/public/build', 'index.html'));
  res.sendFile(path.join(__dirname, '/public/build', 'index.html'));
});

module.exports = app;
