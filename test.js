//   schema
const TodoSchema = new mongoose.Schema(
  {
    task: String,
    done: Boolean,
    time: Date,
    age: {
      type: Number,
      min: [9, "Age must be atlest 9"],
      max: [18, "Age can not be higher than 18"]
    }
  },
  { timestamps: true }
);

// model
const Todo = mongoose.model("Todo", TodoSchema);

//Create
const todo = new Todo({
  task: "task1",
  done: "false",
  age: 15,
  time: Date.now()
});

todo
  .save()
  .then(doc => {
    console.log(doc);
  })
  .catch(e => {
    console.log(e);
  });
