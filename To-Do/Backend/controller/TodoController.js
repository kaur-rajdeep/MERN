//const { model } = require('mongoose')
const TodoModel = require("../model/TodoModel");

module.exports.getTodo = async (req, res) => {
  const Todo = await TodoModel.find();
  res.send(Todo);
};



// saveTodo console/then
//updateTodo
//delete Todo
