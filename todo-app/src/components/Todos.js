import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Todo from "./Todo";
import NewTodo from "./NewTodo";
import style from "./todos.module.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (todo) => {
    setTodos((previousTodo) => {
      return [...previousTodo, { id: uuidv4(), todo }];
    });
  };

  const handleRemove = (id) => {
    setTodos((prevTodo) => {
      const filteredTodos = prevTodo.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };

  return (
    <section className={style.todos}>
      <NewTodo onAddTodo={handleAddTodo} />
      {todos.map((todo) => (
        <Todo todo={todo.todo} id={todo.id} removeTodo={handleRemove} />
      ))}
    </section>
  );
};

export default Todos;
