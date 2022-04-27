const express = require("express");
const api = require("./api");

const app = express();

app.use(express.json());

app.use("/", express.static(__dirname + "/public/build"));
app.use(api);
module.exports = app;
