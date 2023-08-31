//nodeMON
const { Router } = require("express");
const router = Router();
// router.get("/", getToDo);
router.get("/", (req, res) => {
  res.json({ message: "Hi there!" });
});

module.exports = router;
