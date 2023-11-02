import TodoListItem from "./TodoListItem";

export default function TodoList(props) {
  const { todoList, markAsComplete, deleteTodo } = props;

  const parsedTodoListItems =
    Array.isArray(todoList) &&
    todoList.map((todo) => (
      <TodoListItem
        key={todo.id}
        {...todo}
        markAsComplete={() => markAsComplete(todo.id)}
        deleteTodo={() => deleteTodo(todo.id)}
      />
    ));

  return <ul className="TodoList">{parsedTodoListItems}</ul>;
}
