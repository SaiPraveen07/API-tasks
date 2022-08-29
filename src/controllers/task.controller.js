const asyncHandler = require("express-async-handler");

const Tasks = require("../models/tasks.model");

// @desc   Get task
// @route  GET/api/task
// @access private
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Tasks.find();

  res.status(200).json(tasks);
});

// @desc   Set Tasks
// @route  POST/api/tasks
// @access private
const setTasks = asyncHandler(async (req, res) => {
  if (!req.body.tName) {
    res.status(400);
    throw new Error("please add a task Name");
  }
  if (!req.body.taskID) {
    res.status(400);
    throw new Error("please add a task_ID");
  }
  if (!req.body.description) {
    res.status(400);
    throw new Error("please add a description");
  }
  if (!req.body.startDate) {
    res.status(400);
    throw new Error("please enter the start date");
  }
  if (!req.body.endDate) {
    res.status(400);
    throw new Error("please enter the enddate");
  }

  const task = await Tasks.create({
    tName: req.body.tName,
    description: req.body.description,
    taskID: req.body.taskID,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  });
  res.status(200).json(task);
});

// @desc   Update tasks
// @route  PUT/api/tasks/:id
// @access private
const updateTasks = asyncHandler(async (req, res) => {
  const task = await Tasks.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error("task not found");
  }

  const updatedTask = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedTask);
});

// @desc   Delete Tasks
// @route  DELETE/api/tasks/:id
// @access private
const deleteTasks = asyncHandler(async (req, res) => {
  const tasks = await Tasks.findById(re.params.id);
  res.status(200).json({ message: "Delete Tasks" });

  if (tasks) {
    res.status(400);
    throw new Error("tasks not found");
  }
  await tasks.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getTasks,
  setTasks,
  updateTasks,
  deleteTasks,
};
