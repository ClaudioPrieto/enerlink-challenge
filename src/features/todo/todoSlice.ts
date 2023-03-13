import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid';
import { TodoItem } from 'components/TodoListItem';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    getTodos: (state, action: PayloadAction<[TodoItem]>) => {
      return action.payload;
    },
    addTodo: (state, action: PayloadAction<string>) => {
      const todo = {
        id: uuid(),
        label: action.payload,
        checked: false,
      };
      return [...state, todo];
    },
    updateTodo: (state, action: PayloadAction<TodoItem>) => {
      const { id, checked } = action.payload;

      const todo = state.find((todo) => todo.id === id);
      todo.checked = !checked;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, getTodos, updateTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;