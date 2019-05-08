const express = require("express");
const app = express();
require("dotenv").config();
require("./dbconnection");
const Router = express.Router();
// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const todoRoutes = require("./routes/todos");
// todos route
app.use("/todos", todoRoutes);

app.listen(process.env.PORT, () => {
  console.log("server is running at port 30000");
});
