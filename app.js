const express = require("express");

const taskRouter = require("./router/taskRouter");

const app = express();

app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(taskRouter);

module.exports = app;
