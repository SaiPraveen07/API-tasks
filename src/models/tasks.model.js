const { time } = require("console");
const { TIMEOUT } = require("dns");
const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    tName: {
      type: String,
      required: [true, "please add a task name"],
    },
    taskID: {
      type: Number,
      required: [true, "please add a task_ID"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    startDate: {
      type: Date,
      required: [true, "please enter the start date"],
    },
    endDate: {
      type: Date,
      required: [true, "please enter a end date"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("tasks", taskSchema);
