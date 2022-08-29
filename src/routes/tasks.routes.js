const express = require("express");
const router = express.Router();
const {
  getTasks,
  setTasks,
  updateTasks,
  deleteTasks,
} = require("../controllers/task.controller");

router.route("/").get(getTasks).post(setTasks);
router.route("/:id").delete(deleteTasks).put(updateTasks);

module.exports = router;
