import React from "react";
import style from "./todo.module.css";

const Todo = (props) => {
  const { title, description } = props.todo;
  const { id } = props;
  const handleDelete = () => {
    props.removeTodo(id);
  };
  return (
    <article className={style.todo}>
      <div>
        <h3 className={style.todoTitle}>{title}</h3>
        <p className={style.todoDescription}>{description}</p>
      </div>
      <div>
        <button
          className={style.btn}
          onClick={() => {
            handleDelete(id);
          }}
        >
          <i className="fa fa-trash fa-2x"></i>
        </button>
      </div>
    </article>
  );
};

export default Todo;
