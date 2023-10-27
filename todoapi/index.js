const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const Todo = require("./model");

const app = express();
const PORT = 3000;

let todos = [];

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://namithav:uWmpiZBu6iEDMzHC@mumbaiaws.j2u0hj3.mongodb.net/"
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
start();

app.use(bodyParser.json());

app.get("/todos", async (req, res) => {
  const todo = await Todo.find().exec();
  res.json(todo);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
});

app.get("/todosbyid", async (req, res) => {
  const { id } = req.body;
  const todo = await Todo.findOne({ id: id }).exec();
  res.json(todo);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
});

// POST a new todo
app.post("/todos", async (req, res) => {
  const { id, title, status } = req.body;
  const newTodo = new Todo({ status: status, task: title, id: id });
  const result = await newTodo.save();
  res.json(result);
});

// PUT update a todo
app.put("/todos", async (req, res) => {
  const { id, status } = req.body;
  const updatedTodo = await Todo.findOneAndUpdate(
    { id: id },
    { status: status }
  );
  res.json({ message: "Todo updated" });
  if (!updatedTodo) {
    return res.status(404).json({ message: "Todo not found" });
  }
});

// DELETE a todo
app.delete("/todos", async (req, res) => {
  const { id } = req.body;
  const deleteTodo = await Todo.deleteOne({ id: id });
  res.json({ message: "Todo deleted" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
