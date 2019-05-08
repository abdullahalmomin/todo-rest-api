const Todo = require("../models/Todo");

module.exports.createTodo = (req, res) => {
  const todo = new Todo({
    task: req.body.task
  });
  todo.save().then(doc => {
    res.json(doc);
  });
};
