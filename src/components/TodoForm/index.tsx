import React, { useState } from "react";
import { addTodoApi } from "api/todo";
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import "./styles.css";

const WARN_MESSAGE = "To do can't be empty";

const TodoForm = () => {
  const [label, setLabel] = useState<string>('');
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    if (label === '') {
      toast.warn(WARN_MESSAGE);
    } else {
      addTodoApi(label, dispatch);
      setLabel('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input 
        className="todo-form-input" 
        placeholder="Enter new to do"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      >
      </input>
      <button className="todo-form-button">
        ADD TO DO
      </button>
    </form>
)};

export default TodoForm;
