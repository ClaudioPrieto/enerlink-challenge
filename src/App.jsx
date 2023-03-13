import React from "react";
import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import TodoForm from "./components/TodoForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  return (
    <div className="root">
      <TodoList />
      <TodoResults />
      <TodoForm />
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default App;
