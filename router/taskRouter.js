const express = require("express");
const taskController = require("./../controller/taskController.js");
const router = express.Router();

router.route("/").get(taskController.readTask);

router.route("/").post(taskController.createTask);

router
  .route("/edit/:id")
  .get(taskController.confirmId)
  .post(taskController.updateTask);

router.route("/remove/:id").get(taskController.deleteTask);

module.exports = router;
