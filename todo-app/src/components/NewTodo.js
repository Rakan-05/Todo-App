import React, { useState } from "react";
import style from "./newTodo.module.css";

const NewTodo = (props) => {
  const [isFormTitleLabelActive, setFormTitleLabelActive] = useState(false);
  const [isTitleActive, setTitleActive] = useState(false);
  const handleTitleClick = () => {
    setTitleActive(true);
    setFormTitleLabelActive(true);
  };

  const [isDescriptionActive, setDescriptionActive] = useState(false);
  const [isDescriptionLabelActive, setDescriptionLabelActive] = useState(false);
  const handleDescriptionClick = () => {
    setDescriptionActive(true);
    setDescriptionLabelActive(true);
  };

  const [todo, setTodo] = useState({ title: "", description: "" });
  const { title, description } = todo;
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo({ title: "", description: "" });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return {
        ...oldTodo,
        [name]: event.target.value,
      };
    });
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <div className={style.inputDiv}>
        <label
          htmlFor="title"
          className={`${style.formLabel} ${
            isFormTitleLabelActive ? style.active : ""
          }`}
          onClick={handleTitleClick}
        >
          Add Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="add title"
          value={title}
          onChange={handleChange}
          className={`${style.formInput} ${isTitleActive ? style.active : ""}`}
        ></input>
      </div>
      <div className={style.inputDiv}>
        <label
          htmlFor="description"
          className={`${style.formLabelDescription} ${
            isDescriptionLabelActive ? style.active : ""
          }`}
          onClick={handleDescriptionClick}
        >
          Add Description
        </label>
        <textarea
          type="text"
          id="description"
          name="description"
          placeholder="add description"
          cols="14"
          rows="1"
          value={description}
          onChange={handleChange}
          className={`${style.formInputTextArea} ${
            isDescriptionActive ? style.active : ""
          }`}
        ></textarea>
      </div>

      <div className={style.btnWrapper}>
        <button type="submit" className={style.submitBtn}>
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default NewTodo;
