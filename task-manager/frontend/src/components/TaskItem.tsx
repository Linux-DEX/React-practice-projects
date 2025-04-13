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
    <li className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition">
      <span
        className={`flex-1 text-lg ${
          task.completed ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {task.title}
      </span>

      <div className="flex gap-2">
        {!task.completed && (
          <button
            onClick={onComplete}
            title="Complete"
            className="text-green-600 hover:text-green-800 text-xl"
          >
            ✓
          </button>
        )}
        <button
          onClick={onDelete}
          title="Delete"
          className="text-red-600 hover:text-red-800 text-xl"
        >
          🗑
        </button>
      </div>
    </li>
  );
}

