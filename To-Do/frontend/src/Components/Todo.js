// import { AiFillCloseCircle } from "react-icons/ai";
import React from "react";

const Todo = (text, updateMode, deleteMode) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
    </div>
  );
};

export default Todo;
