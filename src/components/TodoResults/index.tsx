import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from "../../app/store";
import "./styles.css";

const TodoResults = () => {
  const todoListItems = useSelector((state: RootState) => state.todos);

  return (
    <div className="todo-results">
      Done: {todoListItems.filter((item) => item.checked === true).length}
    </div>
  );
};

export default TodoResults;
