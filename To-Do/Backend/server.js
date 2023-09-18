const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/TodoRoutes");
require("dotenv").config();
const app = express();
const PORT = process.env.port || 27017;
app.use(express);
app.use(cors());
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected To Mongo"))
  .catch((err) => console.log(err));
app.use(routes);

app.listen(PORT, () => console.log(`listening on:${PORT}`));
