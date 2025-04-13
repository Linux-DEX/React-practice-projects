import { useEffect, useState } from "react";
import { getTasks, addTask, deleteTask, completeTask } from "../services/api";
import TaskItem from "../components/TaskItem";
import { Task } from "../types";

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAdd = async () => {
    await addTask(newTask);
    setNewTask("");
    fetchTasks();
  };

   return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Task Manager</h2>

        <div className="flex gap-2 mb-6">
          <input
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="New task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>

        <ul className="space-y-4">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={async () => {
                await deleteTask(task.id);
                fetchTasks();
              }}
              onComplete={async () => {
                await completeTask(task.id);
                fetchTasks();
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

