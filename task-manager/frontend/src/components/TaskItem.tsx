import { Task } from "../types";

export default function TaskItem({
  task,
  onDelete,
  onComplete,
}: {
  task: Task;
  onDelete: () => void;
  onComplete: () => void;
}) {
  return (
    <li>
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </span>
      <button onClick={onComplete}>✓</button>
      <button onClick={onDelete}>🗑</button>
    </li>
  );
}

