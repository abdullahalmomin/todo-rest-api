const Todo = require("../models/Todo");

// create
module.exports.createTodo = async (req, res) => {
  const todo = new Todo({
    task: req.body.task
  });
  const newtodo = await todo.save();
  res.json(newtodo);
};

// list

module.exports.todoList = async (req, res) => {
  const todos = await Todo.find();
  if (todos.length === 0)
    return res.status(404).json({
      message: "no todo found"
    });
  res.send(todos);
};
// Delete
module.exports.deleteTodo = async (req, res) => {
  const { _id } = req.params;
  const deleted = await Todo.findByIdAndDelete(_id);
  if (deleted)
    return res.json({
      message: "todo deleted",
      todo: deleted
    });
  res.status(404).json({
    message: "not found or already deleted"
  });
};

// update
module.exports.updateTodo = async (req, res) => {
  //   const todo = await Todo.findById(req.params._id);
  //   todo.task = req.body.task;
  //   todo.done = req.body.done;
  //   await todo.save();

  Todo.findByIdAndUpdate(
    req.params._id,
    {
      $set: {
        task: req.body.task,
        done: req.body.done
      }
    },
    { new: true }
  ).then(doc => {
    res.json(doc);
  });
};

// doneTrue
module.exports.doneTrue = async (req, res) => {
  const todo = await Todo.find({ done: true });
  console.log(todo);

  return res.json(todo);
};

// doneFalse

module.exports.doneFalse = async (req, res) => {
  const todo = await Todo.find({ done: false });
  console.log(todo);

  return res.json(todo);
};

// today
module.exports.today = async (req, res) => {
  const today = new Date();
  // today.setHours(0, 0, 0);
  today.setHours(6, 0, 0);

  const todayEnd = new Date();
  // todayEnd.setHours(23, 59, 59);
  todayEnd.setHours(17, 59, 59);

  const todo = await Todo.find({
    done: false,
    createdAt: { $gte: today, $lt: todayEnd }
  });
  console.log(today.toUTCString(), todayEnd.toUTCString());
  return res.json(todo);
};

// modified
module.exports.modified = async (req, res) => {
  const todo = await Todo.find({ done: false });
  const result = todo.filter(
    item => item.createdAt.toUTCString() !== item.updatedAt.toUTCString()
  );
  console.log(todo);
  return res.json(result);
};
// toggle

module.exports.toggleTodo = (req, res) => {};
