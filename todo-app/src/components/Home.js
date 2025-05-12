import React from "react";

import Todos from "./Todos";

import style from "./home.module.css";

const Home = () => {
  const handleReomove = (id) => {
    alert(id);
  };
  return (
    <div className={style.container}>
      <h1 className={style.todoHeader}>Todo App</h1>
      <Todos removeTodo={handleReomove} />
    </div>
  );
};

export default Home;
