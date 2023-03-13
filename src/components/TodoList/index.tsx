import React, { useEffect } from "react";
import { RootState } from "../../app/store";
import TodoListItem from "components/TodoListItem";
import { useSelector, useDispatch } from 'react-redux';
import { getTodosApi, updateTodoApi, deleteTodoApi } from "api/todo";
import "./styles.css";

const TodoList = () => {
  const todoListItems = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    getTodosApi(dispatch);
  }, [dispatch])

  const handleDelete = (todoId: string) => {
    deleteTodoApi(todoId, dispatch);
  };

  const toggleCheck = (id: string, checked: boolean) => {
    updateTodoApi(id, checked, dispatch);
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todoListItems.length ?
        <div className="todo-list-content">
          {todoListItems.map((todoItem) => (
            <TodoListItem
              key={todoItem.id}
              data={todoItem}
              onDelete={handleDelete} 
              onCheck={toggleCheck} 
            />
          ))}
        </div>
      :
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      }
    </div>
  );
};

export default TodoList;
