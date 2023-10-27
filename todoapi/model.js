const mongoose = require("mongoose");

const Todo = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Todo", Todo);
