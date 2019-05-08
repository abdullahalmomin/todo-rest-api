const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URI, { useNewUrlParser: true })
  .then(res => {
    console.log("mongoDB connected to database");
  })
  .catch(e => {
    console.log("database disconnected");
  });
