const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      trim: true,
      required: [true, "todo task is required"]
    },
    done: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);