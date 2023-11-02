export default function TodoListItem(props) {
  const { task, dueDate, isComplete, color, deleteTodo, markAsComplete } = props;
  return (
    <li className="TodoListItem">
      <p style={{ borderColor: color }}>{task}</p>
      <p style={{ borderColor: color }}>{dueDate}</p>
      {!isComplete && <button onClick={markAsComplete}>Mark as complete</button>}
      {isComplete && <button onClick={deleteTodo}>Delete todo</button>}
    </li>
  );
}
