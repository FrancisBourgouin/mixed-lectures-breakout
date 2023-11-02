import { useState } from "react";

import { todoObj } from "./data/todoData";
import { createTodo, removeTodo, toggleTodoCompletion } from "./helpers/todoHelpers";

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import "./App.scss";

function App() {
  const [todos, setTodos] = useState(todoObj);
  const todoList = Object.values(todos);

  const markAsComplete = (todoId) => {
    const updatedTodos = toggleTodoCompletion(todos, todoId);

    setTodos(updatedTodos);
  };

  const deleteTodo = (todoId) => {
    const updatedTodos = removeTodo(todos, todoId);

    setTodos(updatedTodos);
  };

  const addTodo = (formData) => {
    const { task, dueDate, color } = formData;

    const updatedTodos = createTodo(todos, task, dueDate, color);
    setTodos(updatedTodos);
  };

  return (
    <>
      <Header />
      <TodoList
        todoList={todoList}
        markAsComplete={markAsComplete}
        deleteTodo={deleteTodo}
      />
      <TodoForm onSubmit={addTodo} />
    </>
  );

  // return <TodoForm onSubmit={(formData) => console.log("Form submitted!", formData)} />;

  // const todoList = Object.values(todoObj);
  // return (
  //   <TodoList
  //     todoList={todoList}
  //     markAsComplete={(todoId) => console.log("complete!", todoId)}
  //     deleteTodo={(todoId) => console.log("deleted!", todoId)}
  //   />
  // );

  // return (
  //   <TodoListItem
  //     {...todo1}
  // markAsComplete={() => console.log("complete!")}
  // deleteTodo={() => console.log("deleted!")}
  //   />
  // );
}

export default App;
