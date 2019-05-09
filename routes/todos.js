const Router = require("express").Router();
// const todoController = require("../controllers/todoController");
// or
const {
  createTodo,
  todoList,
  deleteTodo,
  updateTodo,
  toggleTodo,
  doneTrue,
  doneFalse,
  today,
  modified
} = require("../controllers/todoController");
const Todo = require("../models/Todo");

// List=>get
Router.get("/", todoList);
// Done=>true
Router.get("/gettrue", doneTrue);
// Done=>False
Router.get("/getfalse", doneFalse);
// Created at today
Router.get("/today", today);
// modified
Router.get("/modified", modified);

// Create->post
Router.post("/", createTodo);

// Single->get
Router.get("/:_id", async (req, res) => {
  const todo = await Todo.findById(req.params._id);
  if (todo) return res.json(todo);
  res.status(404).json({
    message: "no todo found"
  });
});

// Update->put
Router.put("/:_id", updateTodo);

// Delete->delete
Router.delete("/:_id", deleteTodo);
// toggle
Router.post("/toggle/:_id", toggleTodo);

module.exports = Router;
