export const createTodo = (todos, task, dueDate, color) => {
  const id = Math.floor(Math.random() * 10000);

  const newTodo = {
    id,
    task,
    dueDate,
    color,
    isComplete: false,
  };

  // const updatedTodos = {...todos}
  // updatedTodos[id] = newTodo

  return { ...todos, [id]: newTodo };
};

export const toggleTodoCompletion = (todos, todoId) => {
  const updatedTodo = { ...todos[todoId] };
  updatedTodo.isComplete = !updatedTodo.isComplete;

  return { ...todos, [todoId]: updatedTodo };
};

export const removeTodo = (todos, todoId) => {
  const updatedTodos = { ...todos };

  delete updatedTodos[todoId];

  return updatedTodos;
};

export const editTodo = (todos, todoId, task, dueDate, color) => {
  const updatedTodo = { ...todos[todoId], task, dueDate, color };

  // const updatedTodos = {...todos}
  // updatedTodos[id] = newTodo

  return { ...todos, [todoId]: updatedTodo };
};
