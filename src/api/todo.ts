import axios from 'axios'
import { toast } from "react-toastify";
import { addTodo, getTodos, updateTodo, deleteTodo } from 'features/todo/todoSlice';
import { Dispatch } from 'redux';

const API_URL = "https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos";
const ERROR_MESAGE = "Can't connect to API";

export const getTodosApi = async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    const response = await axios.get(`${API_URL}`);
    dispatch(getTodos(response.data));
  } catch (err) {
    toast.error(ERROR_MESAGE);
  }
};

export const addTodoApi = async (
  label: string,
  dispatch: Dispatch
): Promise<void> => {
  try {
    await axios.post(`${API_URL}`, { label });
    dispatch(addTodo(label));
  } catch (err) {
    toast.error(ERROR_MESAGE);
  }
};

export const updateTodoApi = async (
  id: string,
  checked: boolean,
  dispatch: Dispatch
): Promise<void> => {
  try {
    await axios.patch(`${API_URL}/${id}`, { checked });
    dispatch(updateTodo({ id, checked }));
  } catch (err) {
    toast.error(ERROR_MESAGE);
  }
};

export const deleteTodoApi = async (id: string,
  dispatch: Dispatch
): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch(deleteTodo(id));
  } catch (err) {
    toast.error(ERROR_MESAGE);
  }
};
