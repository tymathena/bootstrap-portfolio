const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/portfolio", { useNewUrlParser: true });

app.get("/", (req, res) => {
    res.sendFile("./public/index.html")
})

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });