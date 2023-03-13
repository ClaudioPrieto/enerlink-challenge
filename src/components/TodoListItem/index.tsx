import React from "react";
import "./styles.css";

export interface TodoItem {
  id: string
  checked: boolean
  label?: string
}

export interface TodoListItemProps { 
  data: TodoItem
  onDelete: (id: string) => void
  onCheck: (id: string, checked: boolean) => void
}

const TodoListItem = ({ data, onCheck, onDelete }: TodoListItemProps) => (
  <div className="todo-list-item">
    <div
      tabIndex={0}
      role="checkbox"
      aria-checked
      className="todo-list-item-content"
    >
      <input
        tabIndex={-1}
        type="checkbox"
        checked={data.checked}
        onChange={() => onCheck(data.id, data.checked)}
      />
      <span className={data.checked ? "todo-list-item-checked" : ""}>{data.label}</span>
    </div>
    <button type="button" className="todo-list-item-delete" onClick={() => onDelete(data.id)}>
      x
    </button>
  </div>
);

export default TodoListItem;
