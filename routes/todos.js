const Router = require("express").Router();
// const todoController = require("../controllers/todoController");
// or
const { createTodo } = require("../controllers/todoController");

// List=>get
Router.get("/", (req, res) => {
  res.send("list of all todos");
});

// Create->post
Router.post("/", createTodo);

// Single->get
Router.get("/:_id", (req, res) => {
  res.send("A todo has been found" + req.params._id);
});

// Update->put
Router.put("/:_id", (req, res) => {
  res.send("a record updated" + req.params._id);
});

// Delete->delete
Router.delete("/:_id", (req, res) => {
  res.send("A record deleted" + req.params._id);
});
module.exports = Router;
