const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/TodoRoutes");
require("dotenv").config();
const app = express();
const PORT = process.env.port || 27017;
console.log(process.env.MONGODB_URL);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected To Mongo"))
  .catch((err) => console.log(err));
app.use(routes);

app.listen(PORT, () => console.log(`listening on:${PORT}`));
