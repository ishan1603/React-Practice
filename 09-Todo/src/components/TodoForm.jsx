import React from "react";
import { useState } from "react";
import { useTodo } from "../context/TodoContext";
function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
  };
  return <div>TodoForm</div>;
}

export default TodoForm;
