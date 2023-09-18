//nodeMON

const { Router } = require("express");
const { getToDo } = require("../controller/TodoController");
const router = Router();

// const {model} = require("mongoose")

router.get("/", getToDo);

// router.get("/", (req, res) => {
//   res.json({ message: "Hi there!" });
// });

module.exports = router;
